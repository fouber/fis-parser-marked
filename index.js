/*
 * fis
 * http://fis.baidu.com/
 */

'use strict';

var marked = require('marked');
var hljs = require('highlight.js');

marked.defaults.renderer.heading = function(text, level, raw){
    if(typeof this.options.heading === 'function'){
        return this.options.heading.call(this, text, level, raw);
    } else {
        return '<h'
            + level
            + ' id="'
            + this.options.headerPrefix
            + encodeURIComponent(text.toLowerCase())
            + '">'
            + text
            + '</h'
            + level
            + '>\n';
    }
};

module.exports = function(content, file, conf){
    hljs.configure(conf.hljs || {
        tabReplace: '    '
    });
    marked.setOptions(conf);
    return marked(content);
};
module.exports.defaultOptions = {
    gfm: true,
    breaks: true,
    langPrefix: 'hljs ',
    highlight : function(code, lang){
        if(lang && hljs.getLanguage(lang)){
            return hljs.highlight(lang, code).value;
        } else {
            return hljs.highlightAuto(code).value;
        }
    }
};
/*
 * fis
 * http://fis.baidu.com/
 */

'use strict';

var marked = require('marked');

marked.renderer.heading = function(text, level){
    return '<h'
        + level
        + ' id="'
        + this.options.headerPrefix
        + encodeURIComponent(raw.toLowerCase())
        + '">'
        + text
        + '</h'
        + level
        + '>\n';
};

module.exports = function(content, file, conf){
    marked.setOptions(conf);
    return marked(content);
};

var hljs = require('highlight.js');
module.exports.defaultOptions = {
    gfm: true,
    breaks: true,
    langPrefix: 'hljs ',
    highlight : function(code, lang){
        if(lang){
            return hljs.highlight(lang, code).value;
        } else {
            return hljs.highlightAuto(code).value;
        }
    }
};
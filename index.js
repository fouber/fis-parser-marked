/*
 * fis
 * http://fis.baidu.com/
 */

'use strict';

var marked = require('marked');

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
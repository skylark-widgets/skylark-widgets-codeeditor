/**
 * skylark-widgets-codeeditor - The skylark codeeditor widget
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-widgets/skylark-widgets-codeeditor/
 * @license MIT
 */
define(["skylark-langx/langx","../Editor"],function(e,n){n.addon("markdown",{init:function(n){var o=n.options.mdparser||window.marked||null;function t(){n.editor.setOption("mode","gfm"),n.htmleditor.find(".uk-htmleditor-button-code a").html(n.options.lblMarkedview)}function i(e,o,t){n.on("action."+e,function(){"markdown"==n.getCursorMode()&&n["replaceLine"==t?"replaceLine":"replaceSelection"](o)})}o&&(n.options.markdown&&t(),i("bold","**$1**"),i("italic","*$1*"),i("strike","~~$1~~"),i("blockquote","> $1","replaceLine"),i("link","[$1](http://)"),i("image","![$1](http://)"),n.on("action.listUl",function(){if("markdown"==n.getCursorMode()){for(var e=n.editor,o=e.getDoc().getCursor(!0),t=e.getDoc().getCursor(!1),i=o.line;i<t.line+1;i++)e.replaceRange("* "+e.getLine(i),{line:i,ch:0},{line:i,ch:e.getLine(i).length});e.setCursor({line:t.line,ch:e.getLine(t.line).length}),e.focus()}}),n.on("action.listOl",function(){if("markdown"==n.getCursorMode()){var e,o=n.editor,t=o.getDoc().getCursor(!0),i=o.getDoc().getCursor(!1),r=1;if(t.line>0)(e=o.getLine(t.line-1).match(/^(\d+)\./))&&(r=Number(e[1])+1);for(var l=t.line;l<i.line+1;l++)o.replaceRange(r+". "+o.getLine(l),{line:l,ch:0},{line:l,ch:o.getLine(l).length}),r++;o.setCursor({line:i.line,ch:o.getLine(i.line).length}),o.focus()}}),n.on("renderLate",function(){"gfm"==n.editor.options.mode&&(n.currentvalue=o(n.currentvalue))}),n.on("cursorMode",function(e,o){if("gfm"==n.editor.options.mode){n.editor.getDoc().getCursor();o.mode="markdown"}}),e.extend(n,{enableMarkdown:function(){t(),this.render()},disableMarkdown:function(){this.editor.setOption("mode","htmlmixed"),this.htmleditor.find(".uk-htmleditor-button-code a").html(this.options.lblCodeview),this.render()}}),n.on({enableMarkdown:function(){n.enableMarkdown()},disableMarkdown:function(){n.disableMarkdown()}}))}})});
//# sourceMappingURL=../sourcemaps/addons/markdown.js.map

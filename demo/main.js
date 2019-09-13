require.config({
  baseUrl: "./"
  , shim: {
  }
  ,packages : [
     { name: "skylark-langx", location: "../node_modules/skylark-langx/dist/uncompressed/skylark-langx" },
     { name: "skylark-utils-collection", location: "../node_modules/skylark-utils-collection/dist/uncompressed/skylark-utils-collection"},
     { name: "skylark-utils-dom", location: "../node_modules/skylark-utils-dom/dist/uncompressed/skylark-utils-dom"},
     { name: "skylark-ui-contents", location: "../node_modules/skylark-ui-contents/dist/uncompressed/skylark-ui-contents"},
     { name: "skylark-ui-swt", location: "../node_modules/skylark-ui-swt/dist/uncompressed/skylark-ui-swt"},
     { name: "skylark-codemirror", location: "../../../intg/editor/skylark-codemirror/src"},
     { name: "skylark-easyeditor", location: "../../../intg/editor/skylark-easyeditor/src"},
     { name: "skylark-codeeditor", location: "../src" }
  ],
});
 
require([
  "skylark-utils-dom/query",
  "skylark-codeeditor/helper",
  "skylark-codeeditor/Editor",
  "skylark-codeeditor/addons/html",
  "skylark-codeeditor/addons/markdown",
  "skylark-codemirror/mode/htmlmixed/htmlmixed",
  "skylark-codemirror/mode/markdown/markdown"

],function($,helper,CodeEditor){

    $('textarea[data-uk-htmleditor]', document).each(function() {

        var editor = $(this);

        if (!editor.data('htmleditor')) {
            CodeEditor(this, helper.options(editor.attr('data-uk-htmleditor')));
        }
    });

});

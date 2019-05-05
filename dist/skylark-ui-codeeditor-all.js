/**
 * skylark-ui-codeeditor - The skylark codeeditor widget
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylarkui/skylark-ui-codeeditor/
 * @license MIT
 */
!function(r,e){var o=e.define,n=e.require,t="function"==typeof o&&o.amd,i=!t&&"undefined"!=typeof exports;if(!t&&!o){var u={};o=e.define=function(r,e,o){"function"==typeof o?(u[r]={factory:o,deps:e.map(function(e){return function(r,e){if("."!==r[0])return r;var o=e.split("/"),n=r.split("/");o.pop();for(var t=0;t<n.length;t++)"."!=n[t]&&(".."==n[t]?o.pop():o.push(n[t]));return o.join("/")}(e,r)}),resolved:!1,exports:null},n(r)):u[r]={factory:null,resolved:!0,exports:o}},n=e.require=function(r){if(!u.hasOwnProperty(r))throw new Error("Module "+r+" has not been defined");var o=u[r];if(!o.resolved){var t=[];o.deps.forEach(function(r){t.push(n(r))}),o.exports=o.factory.apply(e,t)||null,o.resolved=!0}return o.exports}}if(!o)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(r,e){r("skylark-langx/skylark",[],function(){return{}}),r("skylark-ui-codeeditor/coder",["skylark-langx/skylark"],function(r){return r.attach("ui.coder",{})}),r("skylark-ui-codeeditor/main",["./coder"],function(r){return r}),r("skylark-ui-codeeditor",["skylark-ui-codeeditor/main"],function(r){return r})}(o),!t){var a=n("skylark-langx/skylark");i?module.exports=a:e.skylarkjs=a}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-ui-codeeditor-all.js.map

(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{146:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(155)),c={title:"Node",sidebar_position:4},i={unversionedId:"advanced/godot/Node",id:"advanced/godot/Node",isDocsHomePage:!1,title:"Node",description:"Tween",source:"@site/docs/advanced/godot/Node.md",sourceDirName:"advanced/godot",slug:"/advanced/godot/Node",permalink:"/credot-docs/docs/advanced/godot/Node",editUrl:"https://github.com/skynocover/credot-docs/tree/documentation/docs/advanced/godot/Node.md",version:"current",sidebarPosition:4,frontMatter:{title:"Node",sidebar_position:4},sidebar:"docsSidebar",previous:{title:"UI",permalink:"/credot-docs/docs/advanced/godot/UI"},next:{title:"\u4f7f\u7528 Neo4j",permalink:"/credot-docs/docs/advanced/neo4j"}},l=[{value:"Tween",id:"tween",children:[{value:"interpolate_property",id:"interpolate_property",children:[]},{value:"active",id:"active",children:[]}]},{value:"AnimationPlayer",id:"animationplayer",children:[]}],d={toc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"tween"},"Tween"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u5c07\u4efb\u4f55\u5c6c\u6027\u52d5\u756b\u5316")),Object(a.b)("h3",{id:"interpolate_property"},"interpolate_property"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u4e03\u500b\u5f15\u6578")),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"\u7bc0\u9ede\u53c3\u7167\uff0c\u8981\u52d5\u756b\u5316\u7684\u5c6c\u6027\u7684\u7bc0\u9ede"),Object(a.b)("li",{parentName:"ol"},"\u5c6c\u6027\u7684\u8b58\u5225\u5b50\uff0c\u4ee5\u5b57\u4e32\u50b3\u5165"),Object(a.b)("li",{parentName:"ol"},"\u8d77\u59cb\u503c"),Object(a.b)("li",{parentName:"ol"},"\u7d42\u6b62\u503c"),Object(a.b)("li",{parentName:"ol"},"\u52d5\u756b\u6642\u9593\uff0c\u4ee5\u79d2\u70ba\u55ae\u4f4d"),Object(a.b)("li",{parentName:"ol"},"\u8f49\u5834\u985e\u578b"),Object(a.b)("li",{parentName:"ol"},"\u8207\u65b9\u7a0b\u7d50\u5408\u4f7f\u7528\u7684\u7de9\u52d5 (Easing) \u65b9\u5f0f\u3002")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'tween.interpolate_property(self, "animated_health", animated_health, new_value, 0.6)\n')),Object(a.b)("h3",{id:"active"},"active"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u9700\u8981\u81f3\u5c11\u4e00\u6b21\u555f\u52d5\u52d5\u756b")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"if not tween.is_active():\n    tween.start()\n")),Object(a.b)("h2",{id:"animationplayer"},"AnimationPlayer"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u65b0\u589e\u52d5\u756b\u5f8c,\u6240\u6709\u5c6c\u6027\u90fd\u6703\u6709\u9470\u5319\u5716\u793a,\u8868\u793a\u6240\u6709\u5c6c\u6027\u90fd\u53ef\u4ee5\u88ab\u52d5\u756b\u5316")),Object(a.b)("p",null,"\u9ede\u64ca\u9470\u5319\u53ef\u4ee5\u65b0\u589e\u95dc\u9375\u5f71\u683c,shift+D\u53ef\u4ee5\u64ad\u653e"))}p.isMDXComponent=!0},155:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=o.a.createContext({}),p=function(e){var t=o.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=p(e.components);return o.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),b=p(n),s=r,m=b["".concat(c,".").concat(s)]||b[s]||u[s]||a;return n?o.a.createElement(m,i(i({ref:t},d),{},{components:n})):o.a.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var d=2;d<a;d++)c[d]=n[d];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);
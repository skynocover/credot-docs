(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{159:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return j}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),u=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),p=u(n),O=r,j=p["".concat(c,".").concat(O)]||p[O]||d[O]||l;return n?a.a.createElement(j,o(o({ref:t},i),{},{components:n})):a.a.createElement(j,o({ref:t},i))}));function j(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,c=new Array(l);c[0]=O;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var i=2;i<l;i++)c[i]=n[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},90:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),l=(n(0),n(159)),c={title:"UI",sidebar_position:3},o={unversionedId:"advanced/godot/UI",id:"advanced/godot/UI",isDocsHomePage:!1,title:"UI",description:"UI\u6253\u9020\u539f\u5247",source:"@site/docs/advanced/godot/UI.md",sourceDirName:"advanced/godot",slug:"/advanced/godot/UI",permalink:"/credot-docs/docs/advanced/godot/UI",editUrl:"https://github.com/skynocover/credot-docs/tree/documentation/docs/advanced/godot/UI.md",version:"current",sidebarPosition:3,frontMatter:{title:"UI",sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Script",permalink:"/credot-docs/docs/advanced/godot/Script"},next:{title:"Node",permalink:"/credot-docs/docs/advanced/godot/Node"}},b=[{value:"UI\u6253\u9020\u539f\u5247",id:"ui\u6253\u9020\u539f\u5247",children:[]},{value:"Container",id:"container",children:[{value:"\u5c6c\u6027",id:"\u5c6c\u6027",children:[]},{value:"GridContainer",id:"gridcontainer",children:[]},{value:"CenterContainer",id:"centercontainer",children:[]},{value:"VBoxContainer",id:"vboxcontainer",children:[]}]},{value:"Control\u7bc0\u9ede \u4e3b\u5c6c\u6027",id:"control\u7bc0\u9ede-\u4e3b\u5c6c\u6027",children:[]},{value:"\u5e38\u898bUI\u5143\u7d20",id:"\u5e38\u898bui\u5143\u7d20",children:[{value:"Label",id:"label",children:[]},{value:"TextureRect",id:"texturerect",children:[]},{value:"TextureButton",id:"texturebutton",children:[]},{value:"TextureProgress",id:"textureprogress",children:[]},{value:"NinePatchRect",id:"ninepatchrect",children:[]}]},{value:"Anchor",id:"anchor",children:[]},{value:"Size Flag",id:"size-flag",children:[]}],i={toc:b};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"ui\u6253\u9020\u539f\u5247"},"UI\u6253\u9020\u539f\u5247"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"\u5c07 UI \u62c6\u89e3\u6210\u4e92\u76f8\u5d4c\u5957\u7684\u6846\u6846\u3002\u6700\u5927\u7684\u6846\u6846\u5305\u542b\u6240\u6709\u6771\u897f\uff0c\u800c\u6700\u5c0f\u6846\u6846\u7684\u5247\u653e\u7f6e\u4e00\u4e9b\u5982\u5e36\u6709\u6a19\u7c64\u7684\u9032\u5ea6\u689d\u6216\u6709\u6309\u9215\u7684\u9762\u677f\u4e4b\u985e\u7684\u55ae\u4e00\u754c\u9762\u5143\u7d20\u3002"),Object(l.b)("li",{parentName:"ol"},"\u5982\u679c\u6846\u6846\u7684\u5468\u570d\u6709\u5167\u908a\u8ddd\uff0c\u5247\u4f7f\u7528 MarginContainer \u3002"),Object(l.b)("li",{parentName:"ol"},"\u5982\u679c\u5143\u7d20\u662f\u4f7f\u7528\u884c\u6216\u5217\u4f86\u6392\u5217\u7684\uff0c\u5247\u4f7f\u7528 HBoxContainer \u6216 VBoxContainer \u3002")),Object(l.b)("h2",{id:"container"},"Container"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"}," Container \u662f \u56de\u61c9\u5f0f")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"MarginContainer, to add margins around parts of the UI")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("a",{parentName:"p",href:"#CenterContainer"},"CenterContainer"),": \u7f6e\u4e2d\u5bb9\u5668\uff0c\u7528\u4f86\u5c07\u5b50\u5143\u7d20\u653e\u5728\u5b9a\u754c\u6846\u4e2d\u9593")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"VboxContainer \u8207 HboxContainer\uff0c\u5782\u76f4\u6846\u5bb9\u5668\u8207\u6c34\u5e73\u6846\u5bb9\u5668\uff0c\u7528\u4f86\u4ee5\u884c\u6216\u5217\u6392\u5217 UI \u5143\u7d20")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"GridContainer\uff0c\u67f5\u6b04\u5bb9\u5668\uff0c\u7528\u4f86\u4ee5\u985e\u4f3c\u67f5\u6b04\u7cfb\u7d71\u7684\u65b9\u5f0f\u6392\u5217 Control \u7bc0\u9ede")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"BoxContainer: \u5c6c\u65bc Helper \u985e\u5225, \u6240\u4ee5 BoxContainer \u7121\u6cd5\u76f4\u63a5\u4f7f\u7528, \u8acb\u4f7f\u7528Vbox\u4ee5\u53caHbox")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"HSplitContainer: \u5c07\u5340\u584a\u5206\u6210\u5de6\u53f3\u6216\u4e0a\u4e0b")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"HBoxContainer: \u6709\u5e7e\u500b\u7bc0\u9ede\u5c31\u5207\u6210\u5e7e\u5217"))),Object(l.b)("h3",{id:"\u5c6c\u6027"},"\u5c6c\u6027"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u4f7f\u7528layout\u53ef\u4ee5\u586b\u6eff\u6574\u500b\u756b\u9762"),Object(l.b)("li",{parentName:"ul"},"Layout/TopWide: \u5de6\u53f3\u5ef6\u4f38\u4e26\u4e14\u7f6e\u9802"),Object(l.b)("li",{parentName:"ul"},"Size Flags/Horizontal Expand\u8868\u793a\u6c34\u5e73\u5ef6\u5c55")),Object(l.b)("h3",{id:"gridcontainer"},"GridContainer"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u4ee5\u7528\u985e\u4f3c\u67f5\u6b04\u7cfb\u7d71\u7684\u65b9\u5f0f\u4f86\u6392\u5217 UI \u5143\u7d20\u3002\u5176\u4e2d\u53ea\u6709\u5217\u6578\u80fd\u63a7\u5236\uff0c\u884c\u6578\u6703\u81ea\u52d5\u4f9d\u64da\u5b50\u7bc0\u9ede\u7684\u6578\u91cf\u4f86\u8abf\u6574\u3002\u82e5\u6709\u4e5d\u500b\u5b50\u7bc0\u9ede\uff0c\u5217\u6578\u8a2d\u70ba\u4e09\uff0c\u5247\u6700\u5f8c\u6703\u6709 9\xf73 = 3 \u884c\u3002")),Object(l.b)("h3",{id:"centercontainer"},"CenterContainer"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"sizeflags",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Fill \u586b\u6eff"),Object(l.b)("li",{parentName:"ul"},"Expand \u5ef6\u5c55")))),Object(l.b)("h3",{id:"vboxcontainer"},"VBoxContainer"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Custom Constants/Separation: \u8868\u5167\u90e8\u5143\u7d20\u4e4b\u9593\u7684\u5206\u9694")),Object(l.b)("h2",{id:"control\u7bc0\u9ede-\u4e3b\u5c6c\u6027"},"Control\u7bc0\u9ede \u4e3b\u5c6c\u6027"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"#Anchor"},"Anchor"),"\uff1a\u9328\u9ede"),Object(l.b)("li",{parentName:"ol"},"Bouding Rectangle\uff1a\u908a\u754c\u77e9\u5f62"),Object(l.b)("li",{parentName:"ol"},"Focus \u8207 Focus Neighbor\uff1a\u7126\u9ede\u8207\u76f8\u9130\u7126\u9ede"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"#size-flag"},"Size Flags"),"\uff1a\u5927\u5c0f\u6a19\u8a8c"),Object(l.b)("li",{parentName:"ol"},"Margin\uff1a\u5916\u908a\u8ddd"),Object(l.b)("li",{parentName:"ol"},"\u53ef\u9078\u7684 UI \u4e3b\u984c")),Object(l.b)("h2",{id:"\u5e38\u898bui\u5143\u7d20"},"\u5e38\u898bUI\u5143\u7d20"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"#Label"},"Label"),"\uff1a\u6a19\u7c64\uff0c\u7528\u4f86\u986f\u793a\u6587\u5b57"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"#TextureRect"},"TextureRect"),"\uff1a\u7d0b\u7406\u8cbc\u5716\u77e9\u5f62\uff0c\u901a\u5e38\u7528\u4f86\u4f5c\u80cc\u666f\uff0c\u6216\u662f\u5176\u4ed6\u986f\u793a\u975c\u614b\u5716\u7247\u7684\u5730\u65b9"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"#TextureProgress"},"TextureProgress"),"\uff1a\u7d0b\u7406\u8cbc\u5716\u9032\u5ea6\u689d\uff0c\u7528\u65bc\u8840\u69fd\u3001\u8f09\u5165\u9032\u5ea6\u689d\uff0c\u53ef\u4ee5\u662f\u4efb\u4f55\u6c34\u5e73\u3001\u5782\u76f4\u3001\u6216\u653e\u5c04\u6027\u7684"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"#NinePatchRect"},"NinePatchRect"),"\uff1a9-Patch \u77e9\u5f62\uff0c\u7528\u65bc\u53ef\u7e2e\u653e\u7684\u9762\u677f"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"#TextureButton"},"TextureButton"),"\uff1a\u7d0b\u7406\u8cbc\u5716\u6309\u9215\uff0c\u7528\u65bc\u88fd\u4f5c\u6309\u9215")),Object(l.b)("h3",{id:"label"},"Label"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Autowrap: \u81ea\u52d5\u65b7\u884c"),Object(l.b)("li",{parentName:"ul"},"Align: \u5c0d\u9f4a"),Object(l.b)("li",{parentName:"ul"},"Valign: \u5782\u76f4\u5c0d\u9f4a")),Object(l.b)("h3",{id:"texturerect"},"TextureRect"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"}," TextureRect \u53ef\u4ee5\u5728 UI \u4e2d\u986f\u793a\u7d0b\u7406\u8cbc\u5716\u6216\u5716\u7247\u3002\u770b\u8d77\u4f86\u5f88\u50cf Sprite \u7bc0\u9ede,\u4f46\u63d0\u4f9b\u591a\u7a2eStretch Mode(\u62c9\u4f38\u6a21\u5f0f)")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Modulate \u4f5c\u70ba\u5c6c\u6027\u7684\u8272\u5f69\u9078\u64c7\u5668")),Object(l.b)("h4",{id:"stretch-mode"},"Stretch Mode"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Scale On Expand (compat): \u50c5\u7576 expand \u5c6c\u6027\u8a2d\u70ba true \u6642\u5c07\u7d0b\u7406\u8cbc\u5716\u7e2e\u653e\u81f3\u7b26\u5408\u7bc0\u9ede\u7684\u908a\u754c\u77e9\u5f62\u3002\u5176\u9918\u60c5\u6cc1\u5247\u8207 Keep \u6a21\u5f0f\u884c\u70ba\u76f8\u540c"),Object(l.b)("li",{parentName:"ul"},"Scale: \u7e2e\u653e\uff0c\u5c07\u7d0b\u7406\u8cbc\u5716\u7e2e\u653e\u81f3\u7bc0\u9ede\u7684\u908a\u754c\u77e9\u5f62"),Object(l.b)("li",{parentName:"ul"},"Tile: \u5e73\u92ea\uff0c\u91cd\u8907\u7d0b\u7406\u8cbc\u5716\uff0c\u4f46\u4e0d\u9032\u884c\u7e2e\u653e"),Object(l.b)("li",{parentName:"ul"},"Keep/Keep Centered: \u4fdd\u6301\u8207\u4fdd\u6301\u5c45\u4e2d\uff0c\u5f37\u5236\u7d0b\u7406\u8cbc\u5716\u4fdd\u6301\u539f\u59cb\u5927\u5c0f\uff0c\u5206\u5225\u7f6e\u65bc\u6846\u67b6\u7684\u5de6\u4e0a\u89d2\u6216\u4e2d\u9593\u3002"),Object(l.b)("li",{parentName:"ul"},"Keep Aspect/Keep Aspect Centered: \u4fdd\u6301\u9577\u5bec\u6bd4\u8207\u5c45\u4e2d\u4fdd\u6301\u9577\u5bec\u6bd4\uff0c\u5c07\u7d0b\u7406\u8cbc\u5716\u7e2e\u653e\u4f46\u5f37\u5236\u5176\u7dad\u6301\u539f\u59cb\u7684\u9577\u5bec\u6bd4\uff0c\u5206\u5225\u7f6e\u65bc\u6846\u67b6\u7684\u5de6\u4e0a\u89d2\u6216\u4e2d\u9593\u3002"),Object(l.b)("li",{parentName:"ul"},"Keep Aspect Covered: \u4fdd\u6301\u9577\u5bec\u6bd4\u8986\u84cb\uff0c\u884c\u70ba\u8207 Keep Aspect Centered \u76f8\u540c\uff0c\u4f46\u77ed\u908a\u6703\u914d\u5408\u908a\u754c\u77e9\u5f62\uff0c\u53e6\u4e00\u908a\u5247\u6703\u8d85\u51fa\u7bc0\u9ede\u908a\u754c\u4e26\u526a\u88c1\u6389\u3002")),Object(l.b)("h3",{id:"texturebutton"},"TextureButton"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"TextureButton \u985e\u4f3c TextureRect\uff0c\u4e0d\u540c\u7684\u5730\u65b9\u662f TextureButton \u6709\u516d\u500b\u7d0b\u7406\u8cbc\u5716\u6b04\u4f4d\uff0c\u6bcf\u500b\u6309\u9215\u7684\u72c0\u614b\u90fd\u6709\u4e00\u500b\u8cbc\u5716\u3002")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u5927\u591a\u6578\u6703\u4f7f\u7528\u5230 Normal,Pressed\u8207Hover\u7684\u8cbc\u5716\u3002")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Toggle Mode:\u9ede\u64ca\u6309\u9215\u6703\u5728Active\u53canormal\u72c0\u614b\u9593\u5207\u63db"),Object(l.b)("li",{parentName:"ul"},"Disable: \u555f\u52d5\u6642\u6703\u9810\u8a2d\u7981\u7528,\u6709\u81ea\u5df1\u7684\u8cbc\u5716"),Object(l.b)("li",{parentName:"ul"},"Modulate: \u8abf\u6574\u8272\u5f69")),Object(l.b)("h3",{id:"textureprogress"},"TextureProgress"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"TextureProgress \u53ef\u4f7f\u7528\u6700\u591a\u4e09\u500b\u5716\u5c64\u7684 Sprite \u4f86\u5efa\u7acb\u9032\u5ea6\u689d\u3002 Under \u8207 Over \u7d0b\u7406\u8cbc\u5716\u4e2d\u9593\u593e\u8457\u986f\u793a\u9032\u5ea6\u689d\u6578\u503c\u7684 Progress \u8cbc\u5716\u3002")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Mode: \u63a7\u5236\u9032\u5ea6\u689d\u7684\u65b9\u5411: \u6c34\u5e73,\u5782\u76f4,\u6216\u653e\u5c04\u72c0"),Object(l.b)("li",{parentName:"ul"},"Under: \u80cc\u666f,\u9078\u64c7\u8cbc\u5716"),Object(l.b)("li",{parentName:"ul"},"Progress: \u9032\u5ea6\u689d,\u9078\u64c7\u8cbc\u5716"),Object(l.b)("li",{parentName:"ul"},"Value: \u5c6c\u6027\u503c")),Object(l.b)("h3",{id:"ninepatchrect"},"NinePatchRect"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u5c07\u7d0b\u7406\u8cbc\u5716\u5206\u9694\u6210\u4e09\u884c\u4e09\u5217\u3002\u4e2d\u9593\u8207\u5074\u9762\u7684\u8cbc\u5716\u6703\u5728\u7e2e\u653e\u8cbc\u5716\u6642\u5e73\u92ea\uff0c\u800c\u89d2\u843d\u7684\u8cbc\u5716\u5247\u4e0d\u6703\u88ab\u7e2e\u653e\u3002\u9069\u5408\u7528\u4f86\u88fd\u4f5c UI \u4e2d\u7684\u9762\u677f\u3001\u5c0d\u8a71\u6846\u3001\u8207\u53ef\u4f38\u7e2e\u7684\u80cc\u666f\u3002")),Object(l.b)("h2",{id:"anchor"},"Anchor"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u9328\u9ede")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u901a\u5e38\u65bc\u9762\u677f\u4e2d\u4f7f\u7528Layout\u8a2d\u5b9a"),Object(l.b)("li",{parentName:"ul"},"\u6bcf\u500b\u9328\u9ede\u7684\u503c\u90fd\u4ecb\u65bc 0 \u8207 1, \u8868\u793a\u76f8\u5c0d\u65bc\u6bcd\u5bb9\u5668\u7684\u5927\u5c0f, \u56e0\u6b64\u5de6\u908a\u8207\u4e0a\u9762\u8d8a\u5c0f\u8868\u793a\u908a\u8ddd\u8d8a\u5c0f, \u53f3\u908a\u8207\u4e0b\u9762\u5247\u76f8\u53cd"),Object(l.b)("li",{parentName:"ul"},"\u5de6\u908a\u8207\u4e0a\u9762\u7684\u9328\u9ede\u4e2d\uff0c\u503c\u70ba 0 \u5247\u4ee3\u8868\u6c92\u6709\u4efb\u4f55\u5916\u908a\u8ddd\u3002\u7bc0\u9ede\u7684\u908a\u8ddd\u6703\u4fdd\u6301\u8207\u6bcd\u7bc0\u9ede\u4e2d\u7684\u5de6\u5074\u8207\u4e0a\u9762\u7684\u908a\u7de3\u5c0d\u9f4a\u3002"),Object(l.b)("li",{parentName:"ul"},"\u800c\u53f3\u908a\u8207\u4e0b\u9762\u7684\u9328\u9ede\uff0c\u503c\u70ba 1 \u5247\u4ee3\u8868\u6703\u8207\u6bcd\u5bb9\u5668\u7684\u53f3\u908a\u8207\u4e0b\u9762\u7684\u908a\u7de3\u5c0d\u9f4a\u3002")),Object(l.b)("h2",{id:"size-flag"},"Size Flag"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u65d7\u6a19\u7528\u4f86\u63a7\u5236 Container \u5982\u4f55\u7e2e\u653e\u5176\u4e2d\u7684 UI \u5143\u7d20")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Fill: \u82e5\u5728Horizontal\u6216Vertical\u5c6c\u6027\u4e0a\u65b0\u589e\uff0c\u5247\u7bc0\u9ede\u7684\u5b9a\u754c\u6846\u6703\u4f54\u7528\u6240\u6709\u53ef\u7528\u7684\u7a7a\u9593"),Object(l.b)("li",{parentName:"ul"},"Expand: \u6703\u8b93 UI \u5143\u7d20\u4f54\u6eff\u6240\u6709\u53ef\u7528\u7684\u7a7a\u9593\uff0c\u4e26\u64e0\u58d3\u540c\u7d1a\u5143\u7d20\u3002")))}u.isMDXComponent=!0}}]);
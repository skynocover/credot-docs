(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{112:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return b})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),a=(r(0),r(161)),c={title:"deploy",sidebar_position:2},l={unversionedId:"advanced/Dokku/deploy",id:"advanced/Dokku/deploy",isDocsHomePage:!1,title:"deploy",description:"project",source:"@site/docs/advanced/Dokku/deploy.md",sourceDirName:"advanced/Dokku",slug:"/advanced/Dokku/deploy",permalink:"/credot-docs/docs/advanced/Dokku/deploy",editUrl:"https://github.com/skynocover/credot-docs/tree/documentation/docs/advanced/Dokku/deploy.md",version:"current",sidebarPosition:2,frontMatter:{title:"deploy",sidebar_position:2},sidebar:"docsSidebar",previous:{title:"setting",permalink:"/credot-docs/docs/advanced/Dokku/setting"},next:{title:"docker",permalink:"/credot-docs/docs/advanced/dbdump/docker"}},b=[{value:"project",id:"project",children:[{value:"git",id:"git",children:[]},{value:"proxy",id:"proxy",children:[]},{value:"domain",id:"domain",children:[]},{value:"service",id:"service",children:[]},{value:"images",id:"images",children:[]},{value:"config",id:"config",children:[]}]},{value:"database",id:"database",children:[]}],p={toc:b};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"project"},"project"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"create")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"dokku apps:create dokkusample\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"list")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"dokku apps:list\n")),Object(a.b)("h3",{id:"git"},"git"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"create")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"dokku git:initialize dokkusample\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"add at local")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"git remote add dokku dokku@dokku:dokkusample\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u67e5\u770bapp\u72c0\u614b")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"dokku apps:report dokkusample\n")),Object(a.b)("h3",{id:"proxy"},"proxy"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"proxy:ports-set ","[app][scheme]",":","[host-port]",":","[container-port]")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"dokku proxy:ports-set dokkusample http:80:5000\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u67e5\u8a62")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"dokku proxy:report dokkusample\n")),Object(a.b)("h3",{id:"domain"},"domain"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"domains:add ","[app][domain]")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"dokku domains:add dokkusample dokku.credot.ml\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u67e5\u8a62")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"dokku domains:report dokkusample\n")),Object(a.b)("h3",{id:"service"},"service"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u67e5\u770blog")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"dokku logs dokkusample\n")),Object(a.b)("h3",{id:"images"},"images"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u67e5\u770bimages tags")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"dokku tags dokkusample\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"deploy")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"dokku tags:deploy dokkusample v1\n")),Object(a.b)("h3",{id:"config"},"config"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u67e5\u8a62\u7576\u524dconfig")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"dokku config:show dokkusample\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"=====> dokkusample env vars\nDOKKU_APP_RESTORE:     1\nDOKKU_APP_TYPE:        herokuish\nDOKKU_PROXY_PORT:      80\nDOKKU_PROXY_PORT_MAP:  http:80:5000\nGIT_REV:               44ead77b49848d4c52d26faeaaf9c62ae23f4882\nNO_VHOST:              0\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u8a2d\u5b9aconfig")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"dokku config:set dokkusample VERSION=1.0.1\n")),Object(a.b)("h2",{id:"database"},"database"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u5f15\u5165postgres")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"sudo dokku plugin:install https://github.com/dokku/dokku-postgres.git\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"REPOSITORY          TAG       IMAGE ID       CREATED        SIZE\ndokku/dokkusample   latest    10e5c73e8778   41 years ago   1.45GB\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u5efa\u7acbpostgres")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"dokku postgres:create rails-database\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u9023\u7d50")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"dokku postgres:link rails-database ruby-rails-sample\n")))}u.isMDXComponent=!0},161:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return O}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),d=u(r),s=n,O=d["".concat(c,".").concat(s)]||d[s]||i[s]||a;return r?o.a.createElement(O,l(l({ref:t},p),{},{components:r})):o.a.createElement(O,l({ref:t},p))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=s;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var p=2;p<a;p++)c[p]=r[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{136:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return g}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),p=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=p(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(t),f=r,g=u["".concat(c,".").concat(f)]||u[f]||d[f]||i;return t?o.a.createElement(g,a(a({ref:n},l),{},{components:t})):o.a.createElement(g,a({ref:n},l))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=f;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var l=2;l<i;l++)c[l]=t[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},89:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return a})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return p}));var r=t(3),o=t(7),i=(t(0),t(136)),c={title:"confit",sidebar_position:2},a={unversionedId:"utils/nginx/config",id:"utils/nginx/config",isDocsHomePage:!1,title:"confit",description:"\u8a2d\u5b9a\u6a94",source:"@site/docs/utils/nginx/config.md",sourceDirName:"utils/nginx",slug:"/utils/nginx/config",permalink:"/credot-docs/docs/utils/nginx/config",editUrl:"https://github.com/skynocover/credot-docs/tree/documentation/docs/utils/nginx/config.md",version:"current",sidebarPosition:2,frontMatter:{title:"confit",sidebar_position:2},sidebar:"docsSidebar",previous:{title:"install",permalink:"/credot-docs/docs/utils/nginx/install"},next:{title:"Docker\u5b89\u88dd",permalink:"/credot-docs/docs/utils/graylog/docker"}},s=[{value:"\u8a2d\u5b9a\u6a94",id:"\u8a2d\u5b9a\u6a94",children:[{value:"proxy",id:"proxy",children:[]},{value:"static file",id:"static-file",children:[]}]}],l={toc:s};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"\u8a2d\u5b9a\u6a94"},"\u8a2d\u5b9a\u6a94"),Object(i.b)("h3",{id:"proxy"},"proxy"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-nginx"},"server {\n    listen 8443;\n    listen [::]:8443;\n    # server_name .example.com;\n\n    access_log /var/log/nginx/reverse-access.log;\n    error_log /var/log/nginx/reverse-error.log;\n\n    location / {\n        proxy_pass https://localhost:10443;\n        proxy_set_header Host $host;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header Upgrade $http_upgrade;\n        proxy_set_header Connection upgrade;\n        proxy_set_header Accept-Encoding gzip;\n    }\n}\n")),Object(i.b)("h3",{id:"static-file"},"static file"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-nginx"},"server {\n    listen      80;\n    listen      [::]:80;\n    # server_name .example.com;\n    index index.html;\n\n    location / {\n        root /home/fredisgod088/solid_state;\n    }\n}\n")))}p.isMDXComponent=!0}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{159:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),u=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),d=u(n),s=r,O=d["".concat(c,".").concat(s)]||d[s]||p[s]||l;return n?a.a.createElement(O,o(o({ref:t},b),{},{components:n})):a.a.createElement(O,o({ref:t},b))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,c=new Array(l);c[0]=s;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var b=2;b<l;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),l=(n(0),n(159)),c={title:"deploy",sidebar_position:1},o={unversionedId:"advanced/CloudRun/deploy",id:"advanced/CloudRun/deploy",isDocsHomePage:!1,title:"deploy",description:"- \u5f9eGCP\u8a2d\u5b9a(\u5efa\u8b70\u65b9\u5f0f)",source:"@site/docs/advanced/CloudRun/deploy.md",sourceDirName:"advanced/CloudRun",slug:"/advanced/CloudRun/deploy",permalink:"/credot-docs/docs/advanced/CloudRun/deploy",editUrl:"https://github.com/skynocover/credot-docs/tree/documentation/docs/advanced/CloudRun/deploy.md",version:"current",sidebarPosition:1,frontMatter:{title:"deploy",sidebar_position:1},sidebar:"docsSidebar",previous:{title:"example",permalink:"/credot-docs/docs/advanced/CICD/example"},next:{title:"setting",permalink:"/credot-docs/docs/advanced/CloudRun/setting"}},i=[{value:"\u5f9eGCP\u8a2d\u5b9a(\u5efa\u8b70\u65b9\u5f0f)",id:"\u5f9egcp\u8a2d\u5b9a\u5efa\u8b70\u65b9\u5f0f",children:[]},{value:"\u4f7f\u7528SDK\u8a2d\u5b9a",id:"\u4f7f\u7528sdk\u8a2d\u5b9a",children:[{value:"install SDK",id:"install-sdk",children:[]},{value:"initial",id:"initial",children:[]}]},{value:"deploy",id:"deploy",children:[]},{value:"GCSR",id:"gcsr",children:[{value:"\u5efa\u7acb",id:"\u5efa\u7acb",children:[]},{value:"clone",id:"clone",children:[]}]},{value:"\u5099\u8a3b",id:"\u5099\u8a3b",children:[]}],b={toc:i};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#%E5%BE%9Egcp%E8%A8%AD%E5%AE%9A%E5%BB%BA%E8%AD%B0%E6%96%B9%E5%BC%8F"},"\u5f9eGCP\u8a2d\u5b9a(\u5efa\u8b70\u65b9\u5f0f)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#%E4%BD%BF%E7%94%A8sdk%E8%A8%AD%E5%AE%9A"},"\u4f7f\u7528SDK\u8a2d\u5b9a"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#install-sdk"},"install SDK")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#initial"},"initial")))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#deploy"},"deploy")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#gcsr"},"GCSR"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#%E5%BB%BA%E7%AB%8B"},"\u5efa\u7acb")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#clone"},"clone")))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#%E5%82%99%E8%A8%BB"},"\u5099\u8a3b"))),Object(l.b)("h2",{id:"\u5f9egcp\u8a2d\u5b9a\u5efa\u8b70\u65b9\u5f0f"},"\u5f9eGCP\u8a2d\u5b9a(\u5efa\u8b70\u65b9\u5f0f)"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u8a2d\u5b9a\u5c08\u6848\u4f86\u6e90")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u6293\u53d6GCSR\u7684docker image"),Object(l.b)("li",{parentName:"ul"},"\u9023\u7d50github\u4f7f\u7528github\u7684\u5c08\u6848(\u5177\u6709CICD\u529f\u80fd)")),Object(l.b)("h2",{id:"\u4f7f\u7528sdk\u8a2d\u5b9a"},"\u4f7f\u7528SDK\u8a2d\u5b9a"),Object(l.b)("h3",{id:"install-sdk"},"install SDK"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u9700\u8981\u6709 python2.7.9 \u6216 python3.5 \u4ee5\u4e0a")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("a",{parentName:"p",href:"https://cloud.google.com/sdk/docs/install"},"https://cloud.google.com/sdk/docs/install"))),Object(l.b)("h3",{id:"initial"},"initial"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"gcloud init\n")),Object(l.b)("h2",{id:"deploy"},"deploy"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u6703\u81ea\u52d5\u6293\u53d6\u7576\u524d\u8cc7\u6599\u593e\u4e0b\u7684Dockerfile"),Object(l.b)("li",{parentName:"ul"},"\u6703\u5728GCSR\u958b\u4e00\u500bdocker images")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"deploy.sh")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"GOOGLE_PROJECT_ID=crested-athlete-314512 #\u9700\u8981\u5f9eGCP\u67e5\u8a62\nPROJECT_NAME=cloudrun #\u81ea\u5b9a\u7fa9\u540d\u7a31,\u4e0d\u53ef\u8207\u5176\u4ed6\u91cd\u8907\n\ngcloud builds submit --tag asia.gcr.io/$GOOGLE_PROJECT_ID/$PROJECT_NAME --project=$GOOGLE_PROJECT_ID\n\ngcloud run deploy $PROJECT_NAME \\\n --image asia.gcr.io/$GOOGLE_PROJECT_ID/$PROJECT_NAME \\\n --platform managed \\\n --region asia-east2 \\\n --allow-unauthenticated \\\n --project=$GOOGLE_PROJECT_ID\n")),Object(l.b)("h2",{id:"gcsr"},"GCSR"),Object(l.b)("h3",{id:"\u5efa\u7acb"},"\u5efa\u7acb"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"gcloud source repos create hello-world\n")),Object(l.b)("h3",{id:"clone"},"clone"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"gcloud source repos clone hello-world\n")),Object(l.b)("h2",{id:"\u5099\u8a3b"},"\u5099\u8a3b"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://cloud.google.com/run/pricing"},"\u5b9a\u50f9"))))}u.isMDXComponent=!0}}]);
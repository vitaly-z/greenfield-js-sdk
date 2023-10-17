"use strict";(self.webpackChunkgreenfield_js_sdk_docs=self.webpackChunkgreenfield_js_sdk_docs||[]).push([[981],{4852:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>d});var r=i(9231);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)i=s[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)i=s[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var o=r.createContext({}),p=function(e){var t=r.useContext(o),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),y=p(i),b=n,d=y["".concat(o,".").concat(b)]||y[b]||u[b]||s;return i?r.createElement(d,a(a({ref:t},c),{},{components:i})):r.createElement(d,a({ref:t},c))}));function d(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=i.length,a=new Array(s);a[0]=b;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[y]="string"==typeof e?e:n,a[1]=l;for(var p=2;p<s;p++)a[p]=i[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,i)}b.displayName="MDXCreateElement"},8248:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var r=i(6e3),n=(i(9231),i(4852));const s={id:"visibility",title:"VisibilityType"},a=void 0,l={unversionedId:"types/visibility",id:"types/visibility",title:"VisibilityType",description:"visibility means the bucket is private or public. if private, only bucket owner or grantee can read",source:"@site/docs/types/visibility.mdx",sourceDirName:"types",slug:"/types/visibility",permalink:"/greenfield-js-sdk/types/visibility",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-js-sdk/tree/main/doc-site/docs/types/visibility.mdx",tags:[],version:"current",frontMatter:{id:"visibility",title:"VisibilityType"},sidebar:"GettingStartSidebar",previous:{title:"Timestamp",permalink:"/greenfield-js-sdk/types/timestamp"},next:{title:"Message Type URL",permalink:"/greenfield-js-sdk/constants/msg-type-url"}},o={},p=[{value:"VisibilityType",id:"visibilitytype",level:2}],c={toc:p},y="wrapper";function u(e){let{components:t,...i}=e;return(0,n.kt)(y,(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"visibility means the bucket is private or public. if private, only bucket owner or grantee can read\nit,otherwise every greenfield user can read it."),(0,n.kt)("h2",{id:"visibilitytype"},"VisibilityType"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"VisibilityType")," is enum:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx"},"/** VisibilityType is the resources public status. */\nexport declare enum VisibilityType {\n    VISIBILITY_TYPE_UNSPECIFIED = 0,\n    VISIBILITY_TYPE_PUBLIC_READ = 1,\n    VISIBILITY_TYPE_PRIVATE = 2,\n    /** VISIBILITY_TYPE_INHERIT - If the bucket Visibility is inherit, it's finally set to private. If the object Visibility is inherit, it's the same as bucket. */\n    VISIBILITY_TYPE_INHERIT = 3,\n    UNRECOGNIZED = -1\n}\n")))}u.isMDXComponent=!0}}]);
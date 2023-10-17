"use strict";(self.webpackChunkgreenfield_js_sdk_docs=self.webpackChunkgreenfield_js_sdk_docs||[]).push([[135],{4852:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>c});var r=a(9231);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,l=function(t,e){if(null==t)return{};var a,r,l={},n=Object.keys(t);for(r=0;r<n.length;r++)a=n[r],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(r=0;r<n.length;r++)a=n[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var o=r.createContext({}),u=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=u(t.components);return r.createElement(o.Provider,{value:e},t.children)},s="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var a=t.components,l=t.mdxType,n=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),s=u(a),d=l,c=s["".concat(o,".").concat(d)]||s[d]||g[d]||n;return a?r.createElement(c,i(i({ref:e},m),{},{components:a})):r.createElement(c,i({ref:e},m))}));function c(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var n=a.length,i=new Array(n);i[0]=d;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p[s]="string"==typeof t?t:l,i[1]=p;for(var u=2;u<n;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2780:(t,e,a)=>{a.d(e,{ZP:()=>p});var r=a(6e3),l=(a(9231),a(4852));const n={toc:[]},i="wrapper";function p(t){let{components:e,...a}=t;return(0,l.kt)(i,(0,r.Z)({},n,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"This is only ",(0,l.kt)("a",{parentName:"p",href:"/client/tx-client"},"construct")," tx, next need ",(0,l.kt)("a",{parentName:"p",href:"/client/tx-client#simulate"},"simulate")," and\n",(0,l.kt)("a",{parentName:"p",href:"/client/tx-client#broadcast"},"broadcast"))))}p.isMDXComponent=!0},829:(t,e,a)=>{a.d(e,{Z:()=>l});var r=a(9231);const l=t=>{const{type:e}=t;return r.createElement("span",{style:{backgroundColor:"#25c2a0",borderRadius:"5px",color:"#FFF",fontSize:14,padding:2}},e)}},2635:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var r=a(6e3),l=(a(9231),a(4852)),n=a(829);a(2780);const i={id:"virtual-group",title:"VirtualGroup"},p=void 0,o={unversionedId:"api/virtual-group",id:"api/virtual-group",title:"VirtualGroup",description:"getGlobalVirtualGroup",source:"@site/docs/api/virtualGroup.mdx",sourceDirName:"api",slug:"/api/virtual-group",permalink:"/greenfield-js-sdk/api/virtual-group",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-js-sdk/tree/main/doc-site/docs/api/virtualGroup.mdx",tags:[],version:"current",frontMatter:{id:"virtual-group",title:"VirtualGroup"},sidebar:"GettingStartSidebar",previous:{title:"Sp",permalink:"/greenfield-js-sdk/api/sp"},next:{title:"Types",permalink:"/greenfield-js-sdk/category/types"}},u={},m=[{value:'getGlobalVirtualGroup <ApiTypes type="Query" />',id:"getglobalvirtualgroup-",level:2},{value:'getGlobalVirtualGroupByFamilyID <ApiTypes type="Query" />',id:"getglobalvirtualgroupbyfamilyid-",level:2},{value:'getGlobalVirtualGroupFamily <ApiTypes type="Query" />',id:"getglobalvirtualgroupfamily-",level:2},{value:'getGlobalVirtualGroupFamilies <ApiTypes type="Query" />',id:"getglobalvirtualgroupfamilies-",level:2}],s={toc:m},g="wrapper";function d(t){let{components:e,...a}=t;return(0,l.kt)(g,(0,r.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"getglobalvirtualgroup-"},"getGlobalVirtualGroup ",(0,l.kt)(n.Z,{type:"Query",mdxType:"ApiTypes"})),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"params"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"globalVirtualGroupId"),(0,l.kt)("td",{parentName:"tr",align:null},"virtual group id")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="example"',title:'"example"'},"await client.virtualGroup.getGlobalVirtualGroup({\n  globalVirtualGroupId: 11,\n});\n")),(0,l.kt)("h2",{id:"getglobalvirtualgroupbyfamilyid-"},"getGlobalVirtualGroupByFamilyID ",(0,l.kt)(n.Z,{type:"Query",mdxType:"ApiTypes"})),(0,l.kt)("p",null,"Query the virtual group family by ID."),(0,l.kt)("p",null,"Virtual group family(VGF) serve as a means of grouping global virtual groups. Each bucket must be\nassociated with a unique global virtual group family and cannot cross families."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"params"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"globalVirtualGroupFamilyId"),(0,l.kt)("td",{parentName:"tr",align:null},"VGF id")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="example"',title:'"example"'},"await client.virtualGroup.getGlobalVirtualGroupByFamilyID({\n  globalVirtualGroupFamilyId: 11,\n});\n")),(0,l.kt)("h2",{id:"getglobalvirtualgroupfamily-"},"getGlobalVirtualGroupFamily ",(0,l.kt)(n.Z,{type:"Query",mdxType:"ApiTypes"})),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"params"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"familyId"),(0,l.kt)("td",{parentName:"tr",align:null},"family id")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="example"',title:'"example"'},"await client.virtualGroup.getGlobalVirtualGroupFamily({\n  familyId: 11,\n});\n")),(0,l.kt)("h2",{id:"getglobalvirtualgroupfamilies-"},"getGlobalVirtualGroupFamilies ",(0,l.kt)(n.Z,{type:"Query",mdxType:"ApiTypes"})),(0,l.kt)("p",null,"Get All global virtual group families."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"params"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pagination"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/types/pagination"},"Pagination"))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="example"',title:'"example"'},"await client.virtualGroup.getGlobalVirtualGroupFamilies({\n  pagination: {\n    countTotal: true,\n    key: Uint8Array.from([]),\n    limit: Long.fromInt(10),\n    offset: Long.fromInt(0),\n    reverse: false,\n  },\n});\n")))}d.isMDXComponent=!0}}]);
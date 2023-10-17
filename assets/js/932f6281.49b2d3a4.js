"use strict";(self.webpackChunkgreenfield_js_sdk_docs=self.webpackChunkgreenfield_js_sdk_docs||[]).push([[483],{4852:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>y});var n=a(9231);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),i=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=i(a),m=r,y=d["".concat(p,".").concat(m)]||d[m]||s[m]||l;return a?n.createElement(y,o(o({ref:t},u),{},{components:a})):n.createElement(y,o({ref:t},u))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[d]="string"==typeof e?e:r,o[1]=c;for(var i=2;i<l;i++)o[i]=a[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2780:(e,t,a)=>{a.d(t,{ZP:()=>c});var n=a(6e3),r=(a(9231),a(4852));const l={toc:[]},o="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(o,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"This is only ",(0,r.kt)("a",{parentName:"p",href:"/client/tx-client"},"construct")," tx, next need ",(0,r.kt)("a",{parentName:"p",href:"/client/tx-client#simulate"},"simulate")," and\n",(0,r.kt)("a",{parentName:"p",href:"/client/tx-client#broadcast"},"broadcast"))))}c.isMDXComponent=!0},829:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(9231);const r=e=>{const{type:t}=e;return n.createElement("span",{style:{backgroundColor:"#25c2a0",borderRadius:"5px",color:"#FFF",fontSize:14,padding:2}},t)}},2947:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>y,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var n=a(6e3),r=(a(9231),a(4852)),l=a(2780),o=a(829);const c={id:"account",title:"Account"},p=void 0,i={unversionedId:"api/account",id:"api/account",title:"Account",description:"getAccount",source:"@site/docs/api/account.mdx",sourceDirName:"api",slug:"/api/account",permalink:"/greenfield-js-sdk/api/account",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-js-sdk/tree/main/doc-site/docs/api/account.mdx",tags:[],version:"current",frontMatter:{id:"account",title:"Account"},sidebar:"GettingStartSidebar",previous:{title:"Overview",permalink:"/greenfield-js-sdk/api/api-overview"},next:{title:"Bucket",permalink:"/greenfield-js-sdk/api/bucket"}},u={},d=[{value:'getAccount <ApiTypes type="Query" />',id:"getaccount-",level:2},{value:'getAccountBalance <ApiTypes type="Query" />',id:"getaccountbalance-",level:2},{value:'getModuleAccounts <ApiTypes type="Query" />',id:"getmoduleaccounts-",level:2},{value:'getModuleAccountByName <ApiTypes type="Query" />',id:"getmoduleaccountbyname-",level:2},{value:'getPaymentAccountsByOwner <ApiTypes type="Query" />',id:"getpaymentaccountsbyowner-",level:2},{value:'createPaymentAccount <ApiTypes type="Tx" />',id:"createpaymentaccount-",level:2},{value:'transfer <ApiTypes type="Tx" />',id:"transfer-",level:2}],s={toc:d},m="wrapper";function y(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"getaccount-"},"getAccount ",(0,r.kt)(o.Z,{type:"Query",mdxType:"ApiTypes"})),(0,r.kt)("p",null,"Retrieve on-chain account information for a given address."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"params"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"address"),(0,r.kt)("td",{parentName:"tr",align:null},"The given address for retrieving")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="example"',title:'"example"'},"await client.getAccount('0x0000000000000000000000000000000000000001');\n")),(0,r.kt)("h2",{id:"getaccountbalance-"},"getAccountBalance ",(0,r.kt)(o.Z,{type:"Query",mdxType:"ApiTypes"})),(0,r.kt)("p",null,"Get the bank balance for the given address."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"params"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"address"),(0,r.kt)("td",{parentName:"tr",align:null},"the address to query balances for")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"denom"),(0,r.kt)("td",{parentName:"tr",align:null},"the coin denom to query balances for")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="example"',title:'"example"'},"await client.getAccountBalance({\n  address: '0x0000000000000000000000000000000000000001',\n  denom: 'BNB',\n});\n")),(0,r.kt)("h2",{id:"getmoduleaccounts-"},"getModuleAccounts ",(0,r.kt)(o.Z,{type:"Query",mdxType:"ApiTypes"})),(0,r.kt)("p",null,"Get all module accounts."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="example"',title:'"example"'},"await client.getModuleAccounts();\n")),(0,r.kt)("h2",{id:"getmoduleaccountbyname-"},"getModuleAccountByName ",(0,r.kt)(o.Z,{type:"Query",mdxType:"ApiTypes"})),(0,r.kt)("p",null,"Get module account by module name."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"params"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"the address to query balances for")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="example"',title:'"example"'},"await client.getModuleAccountByName('module_name');\n")),(0,r.kt)("h2",{id:"getpaymentaccountsbyowner-"},"getPaymentAccountsByOwner ",(0,r.kt)(o.Z,{type:"Query",mdxType:"ApiTypes"})),(0,r.kt)("p",null,"Get all payment accounts owned by the given owner address."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"params"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"address"),(0,r.kt)("td",{parentName:"tr",align:null},"The given owner account address for retrieving")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="example"',title:'"example"'},"await client.getPaymentAccountsByOwner('0x0000000000000000000000000000000000000001');\n")),(0,r.kt)("h2",{id:"createpaymentaccount-"},"createPaymentAccount ",(0,r.kt)(o.Z,{type:"Tx",mdxType:"ApiTypes"})),(0,r.kt)(l.ZP,{mdxType:"Tx"}),(0,r.kt)("p",null,"Create a new payment account for the given address."),(0,r.kt)("p",null,"The payment account is used to pay for the storage and read quota fee of objects. When you need to\npay for different buckets separately, you can create different payment accounts to do so. Note that\nthe payment account does not have a private key, and only the owner of the payment account can\nwithdraw funds from it. Once the owner revokes permission for withdrawal, the funds in the payment\naccount can only be utilized to cover storage and read quota fees."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"params"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"creator"),(0,r.kt)("td",{parentName:"tr",align:null},"The owner address of the new payment account")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="example"',title:'"example"'},"const tx = await client.account.createPaymentAccount({\n  creator: address,\n});\n")),(0,r.kt)("h2",{id:"transfer-"},"transfer ",(0,r.kt)(o.Z,{type:"Tx",mdxType:"ApiTypes"})),(0,r.kt)(l.ZP,{mdxType:"Tx"}),(0,r.kt)("p",null,"Transfer BNB from sender to receiver."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"params"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fromAddress"),(0,r.kt)("td",{parentName:"tr",align:null},"The address who will send the BNB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"toAddress"),(0,r.kt)("td",{parentName:"tr",align:null},"The address who will receive the BNB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"amount"),(0,r.kt)("td",{parentName:"tr",align:null},"transfer coin")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="example"',title:'"example"'},"const tx = await client.account.transfer({\n  fromAddress: '0x0000000000000000000000000000000000000000',\n  toAddress: '0x0000000000000000000000000000000000000001',\n  amount: [\n    {\n      denom: 'BNB',\n      amount: '1000000000',\n    },\n  ],\n});\n")))}y.isMDXComponent=!0}}]);
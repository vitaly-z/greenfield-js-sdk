"use strict";(self.webpackChunkgreenfield_js_sdk_docs=self.webpackChunkgreenfield_js_sdk_docs||[]).push([[285],{5072:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>x,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=n(5250),r=n(1118),s=n(2),i=n(186);const l={id:"tx-client",sidebar_position:1,title:"Tx Client"},c=void 0,o={id:"client/tx-client",title:"Tx Client",description:"About Tx",source:"@site/docs/client/tx-client.mdx",sourceDirName:"client",slug:"/client/tx-client",permalink:"/greenfield-js-sdk/client/tx-client",draft:!1,unlisted:!1,editUrl:"https://github.com/bnb-chain/greenfield-js-sdk/tree/main/doc-site/docs/client/tx-client.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"tx-client",sidebar_position:1,title:"Tx Client"},sidebar:"GettingStartSidebar",previous:{title:"Greenfield Client",permalink:"/greenfield-js-sdk/client/greenfield-client"},next:{title:"Query Client",permalink:"/greenfield-js-sdk/client/query-client"}},d={},u=[{value:"About Tx",id:"about-tx",level:2},{value:"simulate",id:"simulate",level:2},{value:"broadcast",id:"broadcast",level:2},{value:"Example",id:"example",level:2},{value:"1. construct a transaction",id:"1-construct-a-transaction",level:3},{value:"2. simulate",id:"2-simulate",level:3},{value:"3. broadcast",id:"3-broadcast",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"about-tx",children:"About Tx"}),"\n",(0,a.jsx)(t.p,{children:"A transaction contains at least:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"construct a transaction: The sdk already provides each transaction type"}),"\n",(0,a.jsxs)(t.li,{children:["simulate: ",(0,a.jsx)(t.a,{href:"#simulate",children:"txClient.simulate"})]}),"\n",(0,a.jsxs)(t.li,{children:["broadcast ",(0,a.jsx)(t.a,{href:"#broadcast",children:"txClient.broadcast"})]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"simulate",children:"simulate"}),"\n",(0,a.jsx)(t.p,{children:"Just Simulate a transaction and valid transaction."}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"params"}),(0,a.jsx)(t.th,{children:"description"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"denom"}),(0,a.jsx)(t.td,{children:"the coin denom to query balances for"})]})})]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-jsx",metastring:'title="simulate tx"',children:"// `tx` is a transaction constructed by the sdk\nconst simulateInfo = await tx.simulate({\n  denom: 'BNB',\n});\n"})}),"\n",(0,a.jsx)(t.h2,{id:"broadcast",children:"broadcast"}),"\n",(0,a.jsx)(t.p,{children:"Broadcast the transaction to the chain."}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"params"}),(0,a.jsx)(t.th,{children:"description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"denom"}),(0,a.jsx)(t.td,{children:"the coin denom to query balances for"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"gasLimit"}),(0,a.jsxs)(t.td,{children:["can be set to any number, but not too small or the transaction may fail (recommended use ",(0,a.jsx)(t.code,{children:"simulateInfo.gasLimit"}),")"]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"gasPrice"}),(0,a.jsx)(t.td,{children:"1 unit of Gas that the transaction sender is willing to pay."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"payer"}),(0,a.jsx)(t.td,{children:"transaction sender"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"granter"}),(0,a.jsxs)(t.td,{children:["transaction ganter (Generally empty ",(0,a.jsx)(t.code,{children:"''"}),")"]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"signTypedDataCallback"}),(0,a.jsxs)(t.td,{children:["broadcast use ",(0,a.jsx)(t.code,{children:"window.ethereum"})," as signature provider by default."]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"privateKey"}),(0,a.jsx)(t.td,{children:"If you broadcast in Nodejs, you can broadcast a tx by privateKey"})]})]})]}),"\n",(0,a.jsxs)(s.Z,{children:[(0,a.jsxs)(i.Z,{value:"Browser",label:"Browser",children:[(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",metastring:'title="broadcast tx"',children:"const broadcastRes = await transferTx.broadcast({\n  denom: 'BNB',\n  gasLimit: Number(simulateInfo.gasLimit),\n  gasPrice: simulateInfo.gasPrice,\n  payer: '0x0000000000000000000000000000000000000001',\n  granter: '',\n});\n"})}),(0,a.jsxs)(t.admonition,{type:"tip",children:[(0,a.jsxs)(t.p,{children:["If you want to use others wallet, you can set ",(0,a.jsx)(t.code,{children:"signTypedDataCallback"}),":"]}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"// trustwallet:\nconst broadcastRes = await transferTx.broadcast({\n  // ...\n  signTypedDataCallback: async (addr: string, message: string) => {\n    return await window.trustwallet.request({\n      method: 'eth_signTypedData_v4',\n      params: [addr, message],\n    });\n  },\n});\n"})})]})]}),(0,a.jsxs)(i.Z,{value:"Nodejs",label:"Nodejs",children:[(0,a.jsxs)(t.p,{children:["If you broadcast in Nodejs, you can broadcast a tx by ",(0,a.jsx)(t.code,{children:"privateKey"}),":"]}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",metastring:'title="broadcast tx"',children:"const broadcastRes = await transferTx.broadcast({\n  denom: 'BNB',\n  gasLimit: Number(simulateInfo.gasLimit),\n  gasPrice: simulateInfo.gasPrice,\n  payer: '0x0000000000000000000000000000000000000001',\n  granter: '',\n  // highlight-start\n  privateKey: '0x.......',\n  // highlight-end\n});\n"})})]})]}),"\n",(0,a.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,a.jsxs)(t.p,{children:["Take ",(0,a.jsx)(t.code,{children:"transfer"})," tx as a complete example:"]}),"\n",(0,a.jsx)(t.h3,{id:"1-construct-a-transaction",children:"1. construct a transaction"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-jsx",metastring:'title="construct tx"',children:"const transferTx = await client.account.transfer({\n  fromAddress: address,\n  toAddress: transferInfo.to,\n  amount: [\n    {\n      denom: 'BNB',\n      amount: '1000000000',\n    },\n  ],\n});\n"})}),"\n",(0,a.jsx)(t.h3,{id:"2-simulate",children:"2. simulate"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-jsx",metastring:'title="simulate tx"',children:"const simulateInfo = await transferTx.simulate({\n  denom: 'BNB',\n});\n"})}),"\n",(0,a.jsx)(t.h3,{id:"3-broadcast",children:"3. broadcast"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-jsx",metastring:'title="broadcast tx"',children:"const broadcastRes = await transferTx.broadcast({\n  denom: 'BNB',\n  gasLimit: Number(simulateInfo.gasLimit),\n  gasPrice: simulateInfo.gasPrice,\n  payer: address,\n  granter: '',\n});\n"})})]})}function x(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},186:(e,t,n)=>{n.d(t,{Z:()=>i});n(79);var a=n(3230);const r={tabItem:"tabItem_QnA5"};var s=n(5250);function i(e){let{children:t,hidden:n,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,i),hidden:n,children:t})}},2:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(79),r=n(3230),s=n(8153),i=n(7911),l=n(7962),c=n(1529),o=n(6922),d=n(5778);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function x(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._X)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,s=h(e),[i,c]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[o,u]=m({queryString:n,groupId:r}),[b,p]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,d.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:r}),f=(()=>{const e=o??b;return x({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{f&&c(f)}),[f]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!x({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),p(e)}),[u,p,s]),tabValues:s}}var p=n(908);const f={tabList:"tabList_rv84",tabItem:"tabItem_thon"};var j=n(5250);function g(e){let{className:t,block:n,selectedValue:a,selectValue:i,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),r=l[n].value;r!==a&&(o(t),i(r))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>c.push(e),onKeyDown:u,onClick:d,...s,className:(0,r.Z)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:r}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function y(e){const t=b(e);return(0,j.jsxs)("div",{className:(0,r.Z)("tabs-container",f.tabList),children:[(0,j.jsx)(g,{...e,...t}),(0,j.jsx)(v,{...e,...t})]})}function w(e){const t=(0,p.Z)();return(0,j.jsx)(y,{...e,children:u(e.children)},String(t))}},1118:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>i});var a=n(79);const r={},s=a.createContext(r);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);
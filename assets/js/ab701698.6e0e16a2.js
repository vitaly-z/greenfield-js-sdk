"use strict";(self.webpackChunkgreenfield_js_sdk_docs=self.webpackChunkgreenfield_js_sdk_docs||[]).push([[922],{8141:(e,t,n)=>{n.d(t,{ZP:()=>i});var s=n(5250),r=n(7766);function a(e){const t={a:"a",admonition:"admonition",p:"p",...(0,r.a)(),...e.components};return(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["This is only ",(0,s.jsx)(t.a,{href:"/client/tx-client",children:"construct"})," tx, next need ",(0,s.jsx)(t.a,{href:"/client/tx-client#simulate",children:"simulate"})," and\n",(0,s.jsx)(t.a,{href:"/client/tx-client#broadcast",children:"broadcast"})]})})}function i(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},2913:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>x,frontMatter:()=>d,metadata:()=>l,toc:()=>h});var s=n(5250),r=n(7766),a=n(5920),i=n(8141);const d={id:"payment",title:"Payment"},c=void 0,l={id:"api/payment",title:"Payment",description:"getStreamRecord",source:"@site/docs/api/payment.mdx",sourceDirName:"api",slug:"/api/payment",permalink:"/greenfield-js-sdk/api/payment",draft:!1,unlisted:!1,editUrl:"https://github.com/bnb-chain/greenfield-js-sdk/tree/main/doc-site/docs/api/payment.mdx",tags:[],version:"current",frontMatter:{id:"payment",title:"Payment"},sidebar:"GettingStartSidebar",previous:{title:"Object",permalink:"/greenfield-js-sdk/api/object"},next:{title:"Sp",permalink:"/greenfield-js-sdk/api/sp"}},o={},h=[{value:"getStreamRecord <ApiTypes></ApiTypes>",id:"getstreamrecord-",level:2},{value:"deposit <ApiTypes></ApiTypes>",id:"deposit-",level:2},{value:"withdraw <ApiTypes></ApiTypes>",id:"withdraw-",level:2},{value:"disableRefund <ApiTypes></ApiTypes>",id:"disablerefund-",level:2},{value:"listUserPaymentAccounts <ApiTypes></ApiTypes>",id:"listuserpaymentaccounts-",level:2}];function p(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.h2,{id:"getstreamrecord-",children:["getStreamRecord ",(0,s.jsx)(a.Z,{type:"Query"})]}),"\n",(0,s.jsx)(t.p,{children:"Retrieve stream record information for a given stream address."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"params"}),(0,s.jsx)(t.th,{children:"description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"account"}),(0,s.jsx)(t.td,{children:"The address of the stream record to be queried."})]})})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",metastring:'title="example"',children:"await client.payment.getStreamRecord('0x...');\n"})}),"\n",(0,s.jsxs)(t.h2,{id:"deposit-",children:["deposit ",(0,s.jsx)(a.Z,{type:"Tx"})]}),"\n",(0,s.jsx)(t.p,{children:"Deposit BNB to a payment account."}),"\n",(0,s.jsx)(t.p,{children:"| params  | description                                                 |\n| ------- | ----------------------------------------------------------- | ------------------ |\n| to      | payment address of the stream record to receive the deposit |\n| creator |                                                             | operator's account |\n| amount  | the amount to deposit                                       |"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",metastring:'title="example"',children:"const tx = await client.payment.deposit({\n  amount: '1000000000',\n  creator: '0x...',\n  to: '0x...',\n});\n"})}),"\n",(0,s.jsx)(i.ZP,{}),"\n",(0,s.jsxs)(t.h2,{id:"withdraw-",children:["withdraw ",(0,s.jsx)(a.Z,{type:"Tx"})]}),"\n",(0,s.jsx)(t.p,{children:"Withdraws BNB from a payment account."}),"\n",(0,s.jsxs)(t.p,{children:["Withdrawal will trigger settlement, i.e., updating static balance and buffer balance. If the\nwithdrawal amount is greater than the static balance after settlement it will fail. If the\nwithdrawal amount is equal to or greater than 100BNB, it will be timelock-ed for 1 day duration. And\nafter the duration, a message without ",(0,s.jsx)(t.code,{children:"from"})," field should be sent to get the funds."]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"params"}),(0,s.jsx)(t.th,{children:"description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"creator"}),(0,s.jsx)(t.td,{children:"operator's account"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"amount"}),(0,s.jsx)(t.td,{children:"the amount to withdraw"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"from"}),(0,s.jsx)(t.td,{children:"payment address"})]})]})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",metastring:'title="example"',children:"const tx = await client.payment.withdraw({\n  amount: '100000000',\n  creator: '0x...',\n  from: '0x..',\n});\n"})}),"\n",(0,s.jsx)(i.ZP,{}),"\n",(0,s.jsxs)(t.h2,{id:"disablerefund-",children:["disableRefund ",(0,s.jsx)(a.Z,{type:"Tx"})]}),"\n",(0,s.jsx)(t.p,{children:"Disable refund/withdrawal for a payment account. After disabling withdrawal of a payment account, no\nmore withdrawal can be executed. The action cannot be reverted."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"params"}),(0,s.jsx)(t.th,{children:"description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"owner"}),(0,s.jsx)(t.td,{children:"operator address"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"addr"}),(0,s.jsx)(t.td,{children:"payment address"})]})]})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",metastring:'title="example"',children:"const tx = await client.payment.disableRefund({\n  owner: address,\n  addr: paymentAccount,\n});\n"})}),"\n",(0,s.jsx)(i.ZP,{}),"\n",(0,s.jsxs)(t.h2,{id:"listuserpaymentaccounts-",children:["listUserPaymentAccounts ",(0,s.jsx)(a.Z,{type:"Storage Provider"})]}),"\n",(0,s.jsx)(t.p,{children:"list user payment info."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"params"}),(0,s.jsx)(t.th,{children:"description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"account"}),(0,s.jsx)(t.td,{children:"the address of user"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"authType"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/client/sp-client#authtype",children:"AuthType"})})]})]})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",metastring:'title="example"',children:"const res = await client.payment.listUserPaymentAccounts(\n  {\n    account: address,\n  },\n  {\n    type: 'EDDSA',\n    domain: window.location.origin,\n    seed: offChainData.seedString,\n    address,\n  },\n);\n"})}),"\n",(0,s.jsx)(t.p,{children:"List payment info by a user address."})]})}function x(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},5920:(e,t,n)=>{n.d(t,{Z:()=>r});n(79);var s=n(5250);const r=e=>{const{type:t}=e;return(0,s.jsx)("span",{style:{backgroundColor:"#25c2a0",borderRadius:"5px",color:"#FFF",fontSize:14,padding:2},children:t})}},7766:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>i});var s=n(79);const r={},a=s.createContext(r);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);
"use strict";(self.webpackChunkgreenfield_js_sdk_docs=self.webpackChunkgreenfield_js_sdk_docs||[]).push([[888],{1735:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var i=t(5250),r=t(7766);const s={id:"greenfield-client",title:"Greenfield Client",sidebar_position:1},d="Create Greenfield Client",l={id:"client/greenfield-client",title:"Greenfield Client",description:"| params         | description         |",source:"@site/docs/client/greenfield.mdx",sourceDirName:"client",slug:"/client/greenfield-client",permalink:"/greenfield-js-sdk/client/greenfield-client",draft:!1,unlisted:!1,editUrl:"https://github.com/bnb-chain/greenfield-js-sdk/tree/main/doc-site/docs/client/greenfield.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"greenfield-client",title:"Greenfield Client",sidebar_position:1},sidebar:"GettingStartSidebar",previous:{title:"Client",permalink:"/greenfield-js-sdk/category/client"},next:{title:"Tx Client",permalink:"/greenfield-js-sdk/client/tx-client"}},c={},o=[{value:"Usage",id:"usage",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"create-greenfield-client",children:"Create Greenfield Client"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"params"}),(0,i.jsx)(n.th,{children:"description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"GRPC_URL"}),(0,i.jsx)(n.td,{children:"Greenfield grpc url"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"GREEN_CHAIN_ID"}),(0,i.jsx)(n.td,{children:"Greenfield chain id"})]})]})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import { Client } from '@bnb-chain/greenfield-js-sdk';\n\n// Node.js\nconst client = Client.create(GRPC_URL, GREEN_CHAIN_ID);\n\n// Browser\nconst client = Client.create(GRPC_URL, String(GREEN_CHAIN_ID), {\n  zkCryptoUrl:\n    'https://unpkg.com/@bnb-chain/greenfield-zk-crypto@0.0.2-alpha.4/dist/node/zk-crypto.wasm',\n});\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"Browser need load wasm manually."})}),"\n",(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(n.p,{children:"The JS SDK consists of two parts:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Chain: ",(0,i.jsx)(n.a,{href:"https://docs.bnbchain.org/greenfield-docs/docs/api/blockchain-rest",children:"https://docs.bnbchain.org/greenfield-docs/docs/api/blockchain-rest"})]}),"\n",(0,i.jsxs)(n.li,{children:["Storage Provider: ",(0,i.jsx)(n.a,{href:"https://docs.bnbchain.org/greenfield-docs/docs/api/storage-provider-rest",children:"https://docs.bnbchain.org/greenfield-docs/docs/api/storage-provider-rest"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},7766:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>d});var i=t(79);const r={},s=i.createContext(r);function d(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunkgreenfield_js_sdk_docs=self.webpackChunkgreenfield_js_sdk_docs||[]).push([[907],{7471:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var s=t(5250),i=t(7766);const o={id:"pagination",title:"Pagination"},a=void 0,r={id:"types/pagination",title:"Pagination",description:"PageRequest is to be embedded in gRPC request messages for efficient.",source:"@site/docs/types/pagination.mdx",sourceDirName:"types",slug:"/types/pagination",permalink:"/greenfield-js-sdk/types/pagination",draft:!1,unlisted:!1,editUrl:"https://github.com/bnb-chain/greenfield-js-sdk/tree/main/doc-site/docs/types/pagination.mdx",tags:[],version:"current",frontMatter:{id:"pagination",title:"Pagination"},sidebar:"GettingStartSidebar",previous:{title:"Coin",permalink:"/greenfield-js-sdk/types/coin"},next:{title:"PrincipalType",permalink:"/greenfield-js-sdk/types/principal"}},c={},d=[];function l(e){const n={code:"code",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"PageRequest is to be embedded in gRPC request messages for efficient."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"export interface PageRequest {\n  /**\n   * key is a value returned in PageResponse.next_key to begin\n   * querying the next page most efficiently. Only one of offset or key\n   * should be set.\n   */\n  key: Uint8Array;\n  /**\n   * offset is a numeric offset that can be used when key is unavailable.\n   * It is less efficient than using key. Only one of offset or key should\n   * be set.\n   */\n  offset: Long;\n  /**\n   * limit is the total number of results to be returned in the result page.\n   * If left empty it will default to a value to be set by each app.\n   */\n  limit: Long;\n  /**\n   * count_total is set to true  to indicate that the result set should include\n   * a count of the total number of items available for pagination in UIs.\n   * count_total is only respected when offset is used. It is ignored when key\n   * is set.\n   */\n  countTotal: boolean;\n  /**\n   * reverse is set to true if results are to be returned in the descending order.\n   *\n   * Since: cosmos-sdk 0.43\n   */\n  reverse: boolean;\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},7766:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>a});var s=t(79);const i={},o=s.createContext(i);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);
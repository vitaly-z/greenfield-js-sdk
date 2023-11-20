"use strict";(self.webpackChunkgreenfield_js_sdk_docs=self.webpackChunkgreenfield_js_sdk_docs||[]).push([[426],{8141:(e,t,n)=>{n.d(t,{ZP:()=>d});var s=n(5250),i=n(7766);function c(e){const t={a:"a",admonition:"admonition",p:"p",...(0,i.a)(),...e.components};return(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["This is only ",(0,s.jsx)(t.a,{href:"/client/tx-client",children:"construct"})," tx, next need ",(0,s.jsx)(t.a,{href:"/client/tx-client#simulate",children:"simulate"})," and\n",(0,s.jsx)(t.a,{href:"/client/tx-client#broadcast",children:"broadcast"})]})})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},4322:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>j,contentTitle:()=>l,default:()=>x,frontMatter:()=>r,metadata:()=>a,toc:()=>h});var s=n(5250),i=n(7766),c=n(5920),d=n(8141);const r={id:"object",title:"Object"},l=void 0,a={id:"api/object",title:"Object",description:"cancelCreateObject",source:"@site/docs/api/object.mdx",sourceDirName:"api",slug:"/api/object",permalink:"/greenfield-js-sdk/api/object",draft:!1,unlisted:!1,editUrl:"https://github.com/bnb-chain/greenfield-js-sdk/tree/main/doc-site/docs/api/object.mdx",tags:[],version:"current",frontMatter:{id:"object",title:"Object"},sidebar:"GettingStartSidebar",previous:{title:"Group",permalink:"/greenfield-js-sdk/api/group"},next:{title:"Payment",permalink:"/greenfield-js-sdk/api/payment"}},j={},h=[{value:"cancelCreateObject <ApiTypes></ApiTypes>",id:"cancelcreateobject-",level:2},{value:"createFolder <ApiTypes></ApiTypes> <ApiTypes></ApiTypes>",id:"createfolder--",level:2},{value:"createObject <ApiTypes></ApiTypes> <ApiTypes></ApiTypes>",id:"createobject--",level:2},{value:"deleteObject <ApiTypes></ApiTypes>",id:"deleteobject-",level:2},{value:"deleteObjectPolicy <ApiTypes></ApiTypes>",id:"deleteobjectpolicy-",level:2},{value:"downloadFile <ApiTypes></ApiTypes>",id:"downloadfile-",level:2},{value:"getObjectPolicy <ApiTypes></ApiTypes>",id:"getobjectpolicy-",level:2},{value:"getObjectPreviewUrl <ApiTypes></ApiTypes>",id:"getobjectpreviewurl-",level:2},{value:"headObject <ApiTypes></ApiTypes>",id:"headobject-",level:2},{value:"headObjectById <ApiTypes></ApiTypes>",id:"headobjectbyid-",level:2},{value:"listObjects <ApiTypes></ApiTypes>",id:"listobjects-",level:2},{value:"listObjectsByIds <ApiTypes></ApiTypes>",id:"listobjectsbyids-",level:2},{value:"listObjectPolicies <ApiTypes></ApiTypes>",id:"listobjectpolicies-",level:2},{value:"putObjectPolicy <ApiTypes></ApiTypes>",id:"putobjectpolicy-",level:2},{value:"updateObjectInfo <ApiTypes></ApiTypes>",id:"updateobjectinfo-",level:2},{value:"uploadObject <ApiTypes></ApiTypes>",id:"uploadobject-",level:2}];function o(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.h2,{id:"cancelcreateobject-",children:["cancelCreateObject ",(0,s.jsx)(c.Z,{type:"Tx"})]}),"\n",(0,s.jsxs)(t.p,{children:["Send ",(0,s.jsx)(t.code,{children:"CancelCreateObject"})," txn to greenfield chain."]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"params"}),(0,s.jsx)(t.th,{children:"description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"operator"}),(0,s.jsx)(t.td,{children:"the account address of the operator"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"bucketName"}),(0,s.jsx)(t.td,{children:"the name of the bucket"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"objectName"}),(0,s.jsx)(t.td,{children:"the name of the object"})]})]})]}),"\n",(0,s.jsxs)(t.h2,{id:"createfolder--",children:["createFolder ",(0,s.jsx)(c.Z,{type:"Storage Provider"})," ",(0,s.jsx)(c.Z,{type:"Tx"})]}),"\n",(0,s.jsx)(t.p,{children:"Send create empty object txn to greenfield chain."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"params"}),(0,s.jsx)(t.th,{children:"description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"bucketName"}),(0,s.jsx)(t.td,{children:"bucket name"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"objectName"}),(0,s.jsx)(t.td,{children:"object name"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"creator"}),(0,s.jsx)(t.td,{children:"the creator of object"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"authType"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/client/sp-client#authtype",children:"AuthType"})})]})]})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",metastring:'title="example"',children:"const tx = await client.object.createFolder(\n  {\n    bucketName: createObjectInfo.bucketName,\n    objectName: createObjectInfo.objectName + '/',\n    creator: address,\n  },\n  {\n    type: 'EDDSA',\n    domain: window.location.origin,\n    seed: offChainData.seedString,\n    address,\n  },\n);\n"})}),"\n",(0,s.jsxs)(t.h2,{id:"createobject--",children:["createObject ",(0,s.jsx)(c.Z,{type:"Storage Provider"})," ",(0,s.jsx)(c.Z,{type:"Tx"})]}),"\n",(0,s.jsx)(t.p,{children:"Get approval of creating object and send createObject txn to greenfield chain."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"params"}),(0,s.jsx)(t.th,{children:"description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"bucketName"}),(0,s.jsx)(t.td,{children:"bucket name"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"objectName"}),(0,s.jsx)(t.td,{children:"object name"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"creator"}),(0,s.jsx)(t.td,{children:"the creator of object"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"visibility"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/types/visibility",children:"VisibilityType"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"fileType"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/File/type",children:"file type"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"redundancyType"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/types/redundancy",children:"RedundancyType"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"authType"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/client/sp-client#authtype",children:"AuthType"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"contentLength"}),(0,s.jsx)(t.td,{children:"file content length"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"expectCheckSums"}),(0,s.jsx)(t.td,{children:"file's expectCheckSums"})]})]})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",metastring:'title="example"',children:"const tx = await client.object.createObject(\n  {\n    bucketName: 'bucket_name',\n    objectName: 'object_name',\n    creator: '0x...',\n    visibility: 'VISIBILITY_TYPE_PRIVATE',\n    fileType: 'json',\n    redundancyType: 'REDUNDANCY_EC_TYPE',\n    contentLength: 13311,\n    expectCheckSums: JSON.parse(expectCheckSums),\n  },\n  {\n    type: 'EDDSA',\n    domain: window.location.origin,\n    seed: offChainData.seedString,\n    address,\n  },\n);\n"})}),"\n",(0,s.jsx)(d.ZP,{}),"\n",(0,s.jsxs)(t.h2,{id:"deleteobject-",children:["deleteObject ",(0,s.jsx)(c.Z,{type:"Tx"})]}),"\n",(0,s.jsx)(t.p,{children:"Send DeleteObject msg to greenfield chain and return txn hash."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"params"}),(0,s.jsx)(t.th,{children:"description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"operator"}),(0,s.jsx)(t.td,{children:"the account address of the operator who has the DeleteObject permission of the object to be deleted"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"bucketName"}),(0,s.jsx)(t.td,{children:"the name of the bucket where the object which to be deleted is stored"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"objectName"}),(0,s.jsx)(t.td,{children:"the name of the object which to be deleted"})]})]})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",metastring:'title="example"',children:"const tx = await client.object.deleteObject({\n  bucketName: 'bucket_name',\n  objectName: 'object_name',\n  operator: '0x000..',\n});\n"})}),"\n",(0,s.jsx)(d.ZP,{}),"\n",(0,s.jsxs)(t.h2,{id:"deleteobjectpolicy-",children:["deleteObjectPolicy ",(0,s.jsx)(c.Z,{type:"Tx"})]}),"\n",(0,s.jsx)(t.p,{children:"Delete the object policy of the principal."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"params"}),(0,s.jsx)(t.th,{children:"description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"operator"}),(0,s.jsx)(t.td,{children:"the granter who grant the permission to another principal"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"bucketName"}),(0,s.jsx)(t.td,{children:"the name of the bucket"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"objectName"}),(0,s.jsx)(t.td,{children:"the name of the object"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"principalAddr"}),(0,s.jsx)(t.td,{children:"principal address"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"principal"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/types/principal",children:"PrincipalType"})})]})]})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",metastring:'title="example"',children:"const tx = await client.object.deleteObjectPolicy(\n  '0x000..', // operator\n  'bucket_name', // bucket name\n  'object_name', // object name\n  '0x000..', // principalAddr\n  'PRINCIPAL_TYPE_GNFD_GROUP', // PrincipalType\n);\n"})}),"\n",(0,s.jsx)(d.ZP,{}),"\n",(0,s.jsxs)(t.h2,{id:"downloadfile-",children:["downloadFile ",(0,s.jsx)(c.Z,{type:"Storage Provider"})]}),"\n",(0,s.jsx)(t.p,{children:"Download s3 object payload and return the related object info."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"params"}),(0,s.jsx)(t.th,{children:"description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"bucketName"}),(0,s.jsx)(t.td,{children:"bucket name"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"objectName"}),(0,s.jsx)(t.td,{children:"object name"})]})]})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",metastring:'title="example"',children:"await client.object.downloadFile(\n  {\n    bucketName,\n    objectName,\n  },\n  {\n    type: 'EDDSA',\n    address,\n    domain: window.location.origin,\n    seed: offChainData.seedString,\n  },\n);\n"})}),"\n",(0,s.jsxs)(t.h2,{id:"getobjectpolicy-",children:["getObjectPolicy ",(0,s.jsx)(c.Z,{type:"Query"})]}),"\n",(0,s.jsx)(t.p,{children:"Get the object policy info of the user specified by principalAddr."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"params"}),(0,s.jsx)(t.th,{children:"description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"bucketName"}),(0,s.jsx)(t.td,{children:"bucket name"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"objectName"}),(0,s.jsx)(t.td,{children:"object name"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"principalAddr"}),(0,s.jsx)(t.td,{children:"principal address"})]})]})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",metastring:'title="example"',children:"const tx = await client.object.getObjectPolicy('bucket_name', 'object_name', '0x...');\n"})}),"\n",(0,s.jsxs)(t.h2,{id:"getobjectpreviewurl-",children:["getObjectPreviewUrl ",(0,s.jsx)(c.Z,{type:"Storage Provider"})]}),"\n",(0,s.jsx)(t.p,{children:"Get the object preview url."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",metastring:'title="example"',children:"const res = await client.object.getObjectPreviewUrl(\n  {\n    bucketName: 'bucket_name',\n    objectName: 'object_name',\n    queryMap: {\n      view: '1',\n      'X-Gnfd-User-Address': address,\n      'X-Gnfd-App-Domain': window.location.origin,\n      'X-Gnfd-Expiry-Timestamp': '2023-09-03T09%3A23%3A39Z',\n    },\n  },\n  {\n    type: 'EDDSA',\n    address,\n    domain: window.location.origin,\n    seed: offChainData.seedString,\n  },\n);\n"})}),"\n",(0,s.jsxs)(t.h2,{id:"headobject-",children:["headObject ",(0,s.jsx)(c.Z,{type:"Query"})]}),"\n",(0,s.jsx)(t.p,{children:"Query the objectInfo on chain to check the object id, return the object info if exists."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"params"}),(0,s.jsx)(t.th,{children:"description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"bucketName"}),(0,s.jsx)(t.td,{children:"bucket name"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"objectName"}),(0,s.jsx)(t.td,{children:"object name"})]})]})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",metastring:'title="example"',children:"await client.object.headObject(bucketName, objectName);\n"})}),"\n",(0,s.jsxs)(t.h2,{id:"headobjectbyid-",children:["headObjectById ",(0,s.jsx)(c.Z,{type:"Query"})]}),"\n",(0,s.jsx)(t.p,{children:"Query the objectInfo on chain by object id, return the object info if exists."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",metastring:'title="example"',children:"await client.object.headObjectById('12');\n"})}),"\n",(0,s.jsxs)(t.h2,{id:"listobjects-",children:["listObjects ",(0,s.jsx)(c.Z,{type:"Storage Provider"})]}),"\n",(0,s.jsx)(t.p,{children:"Lists the object info of the bucket."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"params"}),(0,s.jsx)(t.th,{children:"description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"bucketName"}),(0,s.jsx)(t.td,{children:"bucket name"})]})})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",metastring:'title="example"',children:"const res = await client.object.listObjects({\n  bucketName,\n});\n"})}),"\n",(0,s.jsxs)(t.h2,{id:"listobjectsbyids-",children:["listObjectsByIds ",(0,s.jsx)(c.Z,{type:"Storage Provider"})]}),"\n",(0,s.jsx)(t.p,{children:"List objects by object ids."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"params"}),(0,s.jsx)(t.th,{children:"description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ids"}),(0,s.jsx)(t.td,{children:"object ids array"})]})})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",metastring:'title="example"',children:"await client.object.listObjectsByIds({\n  ids: ['1', '2'],\n});\n"})}),"\n",(0,s.jsxs)(t.h2,{id:"listobjectpolicies-",children:["listObjectPolicies ",(0,s.jsx)(c.Z,{type:"Storage Provider"})]}),"\n",(0,s.jsx)(t.p,{children:"List object policies by object info and action type."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"params"}),(0,s.jsx)(t.th,{children:"description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"bucketName"}),(0,s.jsx)(t.td,{children:"bucket name"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"objectName"}),(0,s.jsx)(t.td,{children:"object name"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"actionType"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/types/action",children:"ActionType"})})]})]})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",metastring:'title="example"',children:"const res = await client.object.listObjectPolicies({\n  bucketName: 'bucket_name',\n  objectName: 'object_name',\n  actionType: 'ACTION_GET_OBJECT',\n});\n"})}),"\n",(0,s.jsxs)(t.h2,{id:"putobjectpolicy-",children:["putObjectPolicy ",(0,s.jsx)(c.Z,{type:"Tx"})]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"params"}),(0,s.jsx)(t.th,{children:"description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"operator"}),(0,s.jsx)(t.td,{children:"operator address"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"principal"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/types/principal",children:"Principal"})})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"Apply object policy to the principal, return the txn hash."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",metastring:'title="example"',children:"import { PermissionTypes } from '@bnb-chain/greenfield-js-sdk';\nconst statement: PermissionTypes.Statement = {\n  effect: PermissionTypes.Effect.EFFECT_ALLOW,\n  actions: [PermissionTypes.ActionType.ACTION_GET_OBJECT],\n  resources: [],\n};\nawait client.object.putObjectPolicy('bucket_name', 'object_name', {\n  operator: '0x...',\n  statements: [statement],\n  principal: {\n    type: PermissionTypes.PrincipalType.PRINCIPAL_TYPE_GNFD_ACCOUNT,\n    value: '0x0000000000000000000000000000000000000001',\n  },\n});\n"})}),"\n",(0,s.jsx)(d.ZP,{}),"\n",(0,s.jsxs)(t.h2,{id:"updateobjectinfo-",children:["updateObjectInfo ",(0,s.jsx)(c.Z,{type:"Tx"})]}),"\n",(0,s.jsx)(t.p,{children:"Update object info by sending message to greenfield."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"params"}),(0,s.jsx)(t.th,{children:"description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"bucketName"}),(0,s.jsx)(t.td,{children:"bucket name"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"objectName"}),(0,s.jsx)(t.td,{children:"object name"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"operator"}),(0,s.jsx)(t.td,{children:"operator address"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"visibility"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/types/visibility",children:"VisibilityType"})})]})]})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",metastring:'title="example"',children:"const tx = await client.object.updateObjectInfo({\n  bucketName: 'bucket_name',\n  objectName: 'object_name',\n  operator: '0x...',\n  visibility: 'VISIBILITY_TYPE_PUBLIC_READ',\n});\n"})}),"\n",(0,s.jsx)(d.ZP,{}),"\n",(0,s.jsxs)(t.h2,{id:"uploadobject-",children:["uploadObject ",(0,s.jsx)(c.Z,{type:"Storage Provider"})]}),"\n",(0,s.jsx)(t.p,{children:"Uploading the object to bucket."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"params"}),(0,s.jsx)(t.th,{children:"description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"bucketName"}),(0,s.jsx)(t.td,{children:"bucket name"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"objectName"}),(0,s.jsx)(t.td,{children:"object name"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"body"}),(0,s.jsx)(t.td,{children:"file"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"txnHash"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.a,{href:"#createobject",children:"createObject"})," 's hash"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"authType"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/client/sp-client#authtype",children:"AuthType"})})]})]})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",metastring:'title="example"',children:"const uploadRes = await client.object.uploadObject(\n  {\n    bucketName: createObjectInfo.bucketName,\n    objectName: createObjectInfo.objectName,\n    body: file,\n    txnHash: txHash,\n  },\n  {\n    type: 'EDDSA',\n    domain: window.location.origin,\n    seed: offChainData.seedString,\n    address,\n  },\n);\n"})})]})}function x(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},5920:(e,t,n)=>{n.d(t,{Z:()=>i});n(79);var s=n(5250);const i=e=>{const{type:t}=e;return(0,s.jsx)("span",{style:{backgroundColor:"#25c2a0",borderRadius:"5px",color:"#FFF",fontSize:14,padding:2},children:t})}},7766:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>d});var s=n(79);const i={},c=s.createContext(i);function d(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);
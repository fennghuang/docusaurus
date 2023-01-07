"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[351],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,p=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(a),m=r,h=c["".concat(i,".").concat(m)]||c[m]||d[m]||p;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=a.length,o=new Array(p);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<p;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010);const p="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(p,o),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(87462),r=a(67294),p=a(86010),o=a(72389),l=a(67392),i=a(7094),s=a(12466);const u="tabList__CuJ",c="tabItem_LNqP";function d(e){const{lazy:t,block:a,defaultValue:o,values:d,groupId:m,className:h}=e,y=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=d??y.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),k=(0,l.l)(f,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===o?o:o??y.find((e=>e.props.default))?.props.value??y[0].props.value;if(null!==v&&!f.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:b}=(0,i.U)(),[w,N]=(0,r.useState)(v),P=[],{blockElementScrollPositionUntilNextRender:j}=(0,s.o5)();if(null!=m){const e=g[m];null!=e&&e!==w&&f.some((t=>t.value===e))&&N(e)}const O=e=>{const t=e.currentTarget,a=P.indexOf(t),n=f[a].value;n!==w&&(j(t),N(n),null!=m&&b(m,String(n)))},T=e=>{let t=null;switch(e.key){case"Enter":O(e);break;case"ArrowRight":{const a=P.indexOf(e.currentTarget)+1;t=P[a]??P[0];break}case"ArrowLeft":{const a=P.indexOf(e.currentTarget)-1;t=P[a]??P[P.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,p.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":a},h)},f.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>P.push(e),onKeyDown:T,onClick:O},o,{className:(0,p.Z)("tabs__item",c,o?.className,{"tabs__item--active":w===t})}),a??t)}))),t?(0,r.cloneElement)(y.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,o.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},43905:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>p,metadata:()=>l,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));a(65488),a(85162);const p={title:"Puppet Provider: DIY"},o=void 0,l={unversionedId:"puppet-providers/diy",id:"puppet-providers/diy",title:"Puppet Provider: DIY",description:"Wechaty Puppet DIY",source:"@site/docs/puppet-providers/diy.md",sourceDirName:"puppet-providers",slug:"/puppet-providers/diy",permalink:"/docs/puppet-providers/diy",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/puppet-providers/diy.md",tags:[],version:"current",lastUpdatedBy:"Huan LI (\u674e\u5353\u6853)",lastUpdatedAt:1616052198,formattedLastUpdatedAt:"Mar 18, 2021",frontMatter:{title:"Puppet Provider: DIY"},sidebar:"docs",previous:{title:"Mock",permalink:"/docs/puppet-providers/mock"},next:{title:"Overview",permalink:"/docs/puppet-services/"}},i={},s=[{value:"Development",id:"development",level:2},{value:"How to implement a wechaty puppet",id:"how-to-implement-a-wechaty-puppet",level:3},{value:"Structure",id:"structure",level:3},{value:"<code>package.json</code>",id:"packagejson",level:4},{value:"mod.ts",id:"modts",level:4},{value:"Publish Your Puppet",id:"publish-your-puppet",level:4},{value:"Blogs",id:"blogs",level:2},{value:"History",id:"history",level:2},{value:"Issues",id:"issues",level:2},{value:"Support",id:"support",level:2}],u={toc:s};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"diy"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Provider-DIY-blueviolet",alt:"Wechaty Puppet DIY"}))),(0,r.kt)("admonition",{title:"Do It Yourself",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You can make a Wechaty Puppet Provider easily.")),(0,r.kt)("p",null,"You can build a Wechaty Puppet Service by yourself with any Wechaty Puppet Providers."),(0,r.kt)("h2",{id:"development"},"Development"),(0,r.kt)("p",null,"A Wechaty Puppet is a node package published on NPM that follow a defined convention."),(0,r.kt)("h3",{id:"how-to-implement-a-wechaty-puppet"},"How to implement a wechaty puppet"),(0,r.kt)("p",null,"related tutorial: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lijiarui/wechaty-puppet-padchat/issues/33"},"How to implement a wechaty-puppet")),(0,r.kt)("h3",{id:"structure"},"Structure"),(0,r.kt)("h4",{id:"packagejson"},(0,r.kt)("inlineCode",{parentName:"h4"},"package.json")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," is a manifest format for describing ",(0,r.kt)("strong",{parentName:"p"},"Node.js modules"),". Wechaty Puppets are built on top of Node modules. It declares dependencies, version, ownership, and other information required to run a plugin in Wechaty. This document describes the schema in detail."),(0,r.kt)("p",null,"A plugin manifest ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," can also contain details about the required configuration. The configuration schema is defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"wechaty")," field of the ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," (This field follow the ",(0,r.kt)("a",{parentName:"p",href:"http://json-schema.org/"},"JSON-Schema")," guidelines):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "wechaty-puppet-mytest",\n    "version": "0.0.1",\n    "description": "This is my first Wechaty Puppet",\n    "engines": {\n        "wechaty": ">=0.16.x"\n    },\n    "wechaty": {\n        "properties": {\n            "myConfigKey": {\n                "type": "string",\n                "default": "it\'s the default value",\n                "description": "It defines my awesome config!"\n            }\n        }\n    }\n}\n')),(0,r.kt)("p",null,"You can learn more about ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," from the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/files/package.json"},"NPM documentation"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"package name")," must begin with ",(0,r.kt)("inlineCode",{parentName:"p"},"wechaty-puppet-")," and the ",(0,r.kt)("strong",{parentName:"p"},"package engines")," should contain ",(0,r.kt)("inlineCode",{parentName:"p"},"wechaty"),"."),(0,r.kt)("h4",{id:"modts"},"mod.ts"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"mod.ts")," is the main entry point of your puppet implementation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { Puppet } from 'wechaty'\n\nexport class PuppetMyTest extends Puppet {\n  // ... implenmentation here ...\n}\n\nexport default PuppetMyTest\n")),(0,r.kt)("h4",{id:"publish-your-puppet"},"Publish Your Puppet"),(0,r.kt)("p",null,"Wechaty Puppet can be published on ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"NPM"),"."),(0,r.kt)("p",null,"To publish a new Puppet, you need to create an account on ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npmjs.com")," then publish it from the command line:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm publish\n")),(0,r.kt)("h2",{id:"blogs"},"Blogs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2020/08/05/wechaty-puppet-maker/"},"Wechaty Workshop for Puppet Makers: How to make a Puppet for Wechaty, Hao, Aug 5, 2020")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2021/02/15/publishment-of-wechaty-whatapp-puppet/"},"Wechaty Puppet Whatsapp Has been Published, Shan, Feb 15, 2021")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2020/09/30/wechaty-puppet-lark-final-blog/"},"\u57fa\u4e8e\u5f00\u653e API \u5c01\u88c5 Wechaty \u63a5\u53e3\u4e0b\u7684\u98de\u4e66\u804a\u5929\u673a\u5668\u4eba, \u8303\u854a, Sep 30, 2020")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2020/08/23/wechaty-puppet-gitter/"},"Gitter.im is supported by Wechaty now, Huan, Aug 23, 2020")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2020/10/12/puppet-padlocal-intro/"},"New Wechaty Puppet Service: PadLocal, Padlocal, Oct 12, 2020")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2020/07/05/multilanguage-meeting-notes/"},"Multi-language Wechaty Meeting: Mocking & Code Quality, wj-Mcat, Jun 5, 2020"))),(0,r.kt)("h2",{id:"history"},"History"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2018/07/12/wechaty-new-release-version-0.18/"},"Wechaty New Release Version v0.18: SLOC from 27,630 to 7,817, Huan, Jul 12, 2018")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2018/06/21/wechaty-new-release-version-0.16/"},"Wechaty New Version 0.16(BETA, with super power) Released, Huan, Jun 21, 2018"))),(0,r.kt)("h2",{id:"issues"},"Issues"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create New Puppets for Wechaty ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty/issues/1167"},"wechaty/wechaty#1167"))),(0,r.kt)("h2",{id:"support"},"Support"),(0,r.kt)("p",null,"You can ",(0,r.kt)("a",{parentName:"p",href:"https://gitter.im/wechaty/wechaty"},"join our Gitter")," network if you aren\u2019t already a member."))}c.isMDXComponent=!0}}]);
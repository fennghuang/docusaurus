"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[1817],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},68808:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>l});var a=n(87462),o=(n(67294),n(3905));const r={title:"Puppet Service: Paimon",sidebar_label:"Paimon"},i=void 0,p={unversionedId:"puppet-services/paimon",id:"puppet-services/paimon",title:"Puppet Service: Paimon",description:"Wechaty Puppet Service Paimon",source:"@site/docs/puppet-services/paimon.md",sourceDirName:"puppet-services",slug:"/puppet-services/paimon",permalink:"/docs/puppet-services/paimon",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/puppet-services/paimon.md",tags:[],version:"current",lastUpdatedBy:"zpaimon",lastUpdatedAt:1644473170,formattedLastUpdatedAt:"Feb 10, 2022",frontMatter:{title:"Puppet Service: Paimon",sidebar_label:"Paimon"},sidebar:"docs",previous:{title:"PadLocal",permalink:"/docs/puppet-services/padlocal"},next:{title:"Donut",permalink:"/docs/puppet-services/donut"}},s={},l=[{value:"Simple and Effective",id:"simple-and-effective",level:2},{value:"Paimon supports multi languages",id:"paimon-supports-multi-languages",level:2},{value:"How to buy",id:"how-to-buy",level:2},{value:"Contact",id:"contact",level:2},{value:"Blogs",id:"blogs",level:2}],c={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/puppet-services/paimon"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Service-Paimon-blue",alt:"Wechaty Puppet Service Paimon"}))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Provider: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/zpaimon"},"zpaimon")),(0,o.kt)("li",{parentName:"ul"},"Support & Feedback: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/wechaty/puppet-services/issues"},"https://github.com/wechaty/puppet-services/issues")),(0,o.kt)("li",{parentName:"ul"},"Term of Service (ToS): To-be-added"),(0,o.kt)("li",{parentName:"ul"},"Privacy Policy: To-be-added"),(0,o.kt)("li",{parentName:"ul"},"Service Level Agreement (SLA): To-be-added")),(0,o.kt)("h2",{id:"simple-and-effective"},"Simple and Effective"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Paimon service is so simple.It don't need Token Gateway(Docker) and don't need the 3rd party library."),(0,o.kt)("li",{parentName:"ul"},"Paimon\u7684\u670d\u52a1\u5f88\u7b80\u5355\uff0c\u4e0d\u9700\u8981token\u7f51\u5173\u4e5f\u4e0d\u9700\u8981\u7b2c\u4e09\u65b9\u7684\u5e93\uff0c\u539f\u751f\u652f\u6301Wechaty\u3002")),(0,o.kt)("p",null,"package.json"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "wechaty-puppet-paimon",\n  "version": "0.0.1",\n  "description": "Demo for paimon",\n  "author": "you",\n  "license": "Apache-2.0",\n  "dependencies": {\n    "qrcode-terminal": "^0.12.0",\n    "wechaty": "^0.68"\n  }\n}\n\n')),(0,o.kt)("p",null,"bot.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const {\n  log,\n  ScanStatus,\n  Wechaty\n} = require('wechaty')\n\nconst bot = new Wechaty({\n  name: 'ding-dong-bot',\n  puppet: 'wechaty-puppet-service',\n  puppetOptions: {\n    tls: {\n      disable: true\n    },\n    token: \"puppet_paimon_YOUR_TOKEN\" // !!!!! Please change it !!!!!\n  }\n})\n\nfunction onScan(qrcode, status) {\n  if (status === ScanStatus.Waiting && qrcode) {\n    const qrcodeImageUrl = [\n      'https://wechaty.js.org/qrcode/',\n      encodeURIComponent(qrcode),\n    ].join('')\n\n    log.info('StarterBot', 'onScan: %s(%s) - %s', ScanStatus[status], status, qrcodeImageUrl)\n  } else {\n    log.info('StarterBot', 'onScan: %s(%s)', ScanStatus[status], status)\n  }\n}\n\nfunction onLogin(user) {\n  log.info('StarterBot', '%s login', user);\n}\n\nfunction onLogout(user) {\n  log.info('StarterBot', '%s logout', user);\n}\n\nfunction onMessage(msg) {\n  console.log(msg)\n  if (msg.self()) return;\n}\n\nbot.on('scan', onScan)\nbot.on('login', onLogin)\nbot.on('logout', onLogout)\nbot.on('message', onMessage)\n\nbot.start()\n  .then(() => {\n    log.info('StarterBot', 'Starter Bot Started.');\n  })\n  .catch(e => {\n    log.error('StarterBot', e);\n  })\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},">> npm i\n>> node bot.js\n")),(0,o.kt)("h2",{id:"paimon-supports-multi-languages"},"Paimon supports multi languages"),(0,o.kt)("p",null,"NO token gateway required.\uff08\u4e0d\u9700\u8981Token\u7f51\u5173\u76f4\u63a5\u4f7f\u7528\uff09"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wechaty.readthedocs.io/zh_CN/latest/introduction/use-paimon-protocol/"},"Python")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/wechaty/go-wechaty-getting-started"},"GO"))),(0,o.kt)("h2",{id:"how-to-buy"},"How to buy"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://120.55.60.194/"},"Get a FREE trail token for 7 days.")),(0,o.kt)("h2",{id:"contact"},"Contact"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Wechat: hutusheng-bot")),(0,o.kt)("h2",{id:"blogs"},"Blogs"),(0,o.kt)("p",null,"Read blogs with the ",(0,o.kt)("inlineCode",{parentName:"p"},"paimon")," tag at ",(0,o.kt)("a",{parentName:"p",href:"https://wechaty.js.org/tags.html#paimon"},"https://wechaty.js.org/tags.html#paimon")))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[8367],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var o=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(a),h=r,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||i;return a?o.createElement(m,n(n({ref:t},c),{},{components:a})):o.createElement(m,n({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,n=new Array(i);n[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,n[1]=l;for(var u=2;u<i;u++)n[u]=a[u];return o.createElement.apply(null,n)}return o.createElement.apply(null,a)}h.displayName="MDXCreateElement"},38536:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var o=a(87462),r=(a(67294),a(3905));const i={slug:"/tutorials/",title:"Wechaty tutorials overview",sidebar_label:"Overview"},n=void 0,l={unversionedId:"tutorials/overview",id:"tutorials/overview",title:"Wechaty tutorials overview",description:"These tutorials take you by the hand through a series of steps to create a chatbot application.",source:"@site/docs/tutorials/overview.md",sourceDirName:"tutorials",slug:"/tutorials/",permalink:"/docs/tutorials/",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/tutorials/overview.md",tags:[],version:"current",lastUpdatedBy:"Huan (\u674e\u5353\u6853)",lastUpdatedAt:1634964975,formattedLastUpdatedAt:"Oct 23, 2021",frontMatter:{slug:"/tutorials/",title:"Wechaty tutorials overview",sidebar_label:"Overview"},sidebar:"docs",previous:{title:"Changelog",permalink:"/docs/changelog"},next:{title:"Installation",permalink:"/docs/tutorials/installation"}},s={},u=[{value:"Build your first chatbot with wechaty",id:"build-your-first-chatbot-with-wechaty",level:2},{value:"Advanced Tutorials (Using plugins with wechaty)",id:"advanced-tutorials-using-plugins-with-wechaty",level:2},{value:"Explore more bots (Adding more features to your bot)",id:"explore-more-bots-adding-more-features-to-your-bot",level:2},{value:"Basic",id:"basic",level:3},{value:"Advanced",id:"advanced",level:3},{value:"Professional",id:"professional",level:3}],c={toc:u};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"These tutorials take you by the hand through a series of steps to create a chatbot application."),(0,r.kt)("h2",{id:"build-your-first-chatbot-with-wechaty"},"Build your first chatbot with wechaty"),(0,r.kt)("p",null,"If you are a total beginner to Wechaty or chatbot application development in general, we recommend you to start from the ",(0,r.kt)("a",{parentName:"p",href:"/docs/getting-started/"},"Getting started")," tutorials. In these tutorials you'll be building a ",(0,r.kt)("strong",{parentName:"p"},"ding-dong bot")," which replies with a ",(0,r.kt)("inlineCode",{parentName:"p"},"dong")," message when it recieves a ",(0,r.kt)("inlineCode",{parentName:"p"},"ding")," message."),(0,r.kt)("p",null,"The fastest way to get started with Wechaty is to use a Cloud based IDE for ",(0,r.kt)("strong",{parentName:"p"},"running the bot"),". To understand how it works, You can either use:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/quick-start/running-on-gitpod"},"Gitpod")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/quick-start/running-on-google-cloud-shell"},"Google Cloud Shell"))),(0,r.kt)("p",null,"If you are a total begginer then we recommend using ",(0,r.kt)("a",{parentName:"p",href:"https://gitpod.io/#https://github.com/wechaty/wechaty-getting-started"},"Gitpod"),"."),(0,r.kt)("p",null,"Once you get basic idea of ding-dong bot, you can try out building it from scratch by following our ",(0,r.kt)("a",{parentName:"p",href:"/docs/getting-started/running-locally"},"Running Locally")," tutorial."),(0,r.kt)("div",{style:{position:"relative",paddingBottom:"56.25%",paddingTop:"30px",height:0,overflow:"hidden"}},(0,r.kt)("iframe",{src:"https://www.youtube.com/embed/LHT49Q_x5D8",allowFullScreen:!0,webkitallowfullscreen:"true",frameBorder:"0",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}})),(0,r.kt)("h2",{id:"advanced-tutorials-using-plugins-with-wechaty"},"Advanced Tutorials (Using plugins with wechaty)"),(0,r.kt)("p",null,"If you have some experience with Wechaty or Chatbot application development, we have intermediate to advanced tutorials on the following topics as well."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/using-plugin-with-wechaty/overview"},"Using plugin with Wechaty")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/tutorials/using-vorpal-with-wechaty"},"Using Vorpal with Wechaty")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/using-redux-with-wechaty/overview"},"Using Redux with Wechaty"))),(0,r.kt)("p",null,"You can skip to any of them."),(0,r.kt)("h2",{id:"explore-more-bots-adding-more-features-to-your-bot"},"Explore more bots (Adding more features to your bot)"),(0,r.kt)("p",null,"If you have already run your ding-dong bot successfully, you can now explore some more bots with wechaty."),(0,r.kt)("p",null,"For better understanding we have classified the bots under three categories taking you from building basic to professional bots."),(0,r.kt)("h3",{id:"basic"},"Basic"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/examples/basic/the-worlds-shortest-chatbot-code-in-6-lines"},"World's Shortest Chatbot"),": The very first wechaty example showcasing how easy it is to get started"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/examples/basic/starter-bot"},"Starter Bot"),": Most basic bot built using wechaty which can be used as a template for creating advanced bots."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/examples/basic/ding-dong-bot"},"Ding Dong bot"),": Practical example demonstrating how to do message handling"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/examples/basic/contact-bot"},"Contact bot"),": List all contacts by Wechat ID & Name")),(0,r.kt)("h3",{id:"advanced"},"Advanced"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-getting-started/blob/main/examples/advanced/demo-in-tutorial.js"},"Demo in tutorial"),": The demo bot from tutorial"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/examples/advanced/busy-bot"},"Busy bot"),": Auto response ",(0,r.kt)("inlineCode",{parentName:"li"},"busy")," message for you when you are busy"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/examples/advanced/media-file-bot"},"Media file bot"),": Save media attachment in message to local files"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/examples/advanced/room-bot"},"Room bot"),": Practical examples illustrating how to do room handling"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/examples/advanced/friend-bot"},"Friend bot"),": Practical example illustrating how to do friend handling"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-getting-started/tree/main/examples/advanced/gist-bot"},"Gist bot"),": Best template for bigger modules, with each handler in separated files")),(0,r.kt)("h3",{id:"professional"},"Professional"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-getting-started/tree/main/examples/professional/hot-import-bot"},"Hot import bot"),": Using Hot Module Reload(HMR) for Wechaty Listeners"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/examples/professional/ctrl-c-signal-bot"},"Ctrl C Signal bot"),": Ctrl-C signal handling demo"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-getting-started/tree/main/examples/professional/monster-bot"},"Monster bot"),": Demo that tried to include everything -- message, room, HMR & signal handling, with each handler in separated files"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-getting-started/blob/main/examples/professional/api-ai-bot.ts"},"Api ai bot"),": Wechaty bot that uses ApiAi.com brain"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-getting-started/blob/main/examples/professional/speech-to-text-bot.ts"},"Speech to text bot"),": Bot that uses baidu speech"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/examples/professional/tuling123-bot"},"Tuling 123 bot"),": Connect to ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("a",{parentName:"em",href:"http://www.turingapi.com/"},"tuling123"))," chatbot"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-getting-started/blob/main/examples/professional/telegram-roger-bot.js"},"Telegram roger bot"),": Single bot that runs under/for both Telegram and WeChat"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-getting-started/tree/main/examples/professional/blessed-twins-bot"},"Blessed twins bot"),": Wechaty multi-instance support (v0.16+) demo")))}p.isMDXComponent=!0}}]);
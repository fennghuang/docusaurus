"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[4931],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),m=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=m(a),g=o,k=d["".concat(i,".").concat(g)]||d[g]||c[g]||l;return a?n.createElement(k,r(r({ref:t},p),{},{components:a})):n.createElement(k,r({ref:t},p))}));function k(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,r=new Array(l);r[0]=g;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:o,r[1]=s;for(var m=2;m<l;m++)r[m]=a[m];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},48388:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var n=a(87462),o=(a(67294),a(3905));const l={title:"Message"},r=void 0,s={unversionedId:"api/message",id:"api/message",title:"Message",description:"This section gives the clear description of the Message Class ,its methods and their uses.",source:"@site/docs/api/message.md",sourceDirName:"api",slug:"/api/message",permalink:"/docs/api/message",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/api/message.md",tags:[],version:"current",lastUpdatedBy:"stefan-ysh",lastUpdatedAt:1635264793,formattedLastUpdatedAt:"Oct 26, 2021",frontMatter:{title:"Message"},sidebar:"docs",previous:{title:"Wechaty",permalink:"/docs/api/wechaty"},next:{title:"Contact Class",permalink:"/docs/api/contact"}},i={},m=[{value:"Global Class <code>Message</code>",id:"global-class-message",level:2},{value:"Instance Methods",id:"instance-methods",level:3},{value:"Static Method",id:"static-method",level:3},{value:"Instance Methods",id:"instance-methods-1",level:2},{value:"message.from() \u21d2 <code>Contact | null</code>",id:"messagefrom--contact--null",level:3},{value:"Example",id:"example",level:3},{value:"message.to() \u21d2 <code>Contact</code> | <code>null</code>",id:"messageto--contact--null",level:3},{value:"Example",id:"example-1",level:3},{value:"message.room() \u21d2 <code>Room</code> | <code>null</code>",id:"messageroom--room--null",level:3},{value:"Example",id:"example-2",level:3},{value:"message.text() \u21d2 <code>string</code>",id:"messagetext--string",level:3},{value:"Example",id:"example-3",level:3},{value:"message.toRecalled() \u21d2 <code>Promise &lt;Message | null&gt;</code>",id:"messagetorecalled--promise-message--null",level:3},{value:"Example",id:"example-4",level:3},{value:"message.say(textOrContactOrFileOrUrlLinkOrMiniProgram) \u21d2 <code>Promise &lt;void&gt;</code>",id:"messagesaytextorcontactorfileorurllinkorminiprogram--promise-void",level:3},{value:"Example",id:"example-5",level:3},{value:"message.type() \u21d2 <code>MessageType</code>",id:"messagetype--messagetype",level:3},{value:"Example",id:"example-6",level:3},{value:"message.self() \u21d2 <code>boolean</code>",id:"messageself--boolean",level:3},{value:"Example",id:"example-7",level:3},{value:"message.mention() \u21d2 <code>Promise &lt;Contact []&gt;</code>",id:"messagemention--promise-contact-",level:3},{value:"Example",id:"example-8",level:3},{value:"message.mentionSelf() \u21d2 <code>Promise &lt;boolean&gt;</code>",id:"messagementionself--promise-boolean",level:3},{value:"Example",id:"example-9",level:3},{value:"message.forward(to) \u21d2 <code>Promise &lt;void&gt;</code>",id:"messageforwardto--promise-void",level:3},{value:"Example",id:"example-10",level:3},{value:"message.date() \u21d2 <code>Date</code>",id:"messagedate--date",level:3},{value:"message.age() \u21d2 <code>number</code>",id:"messageage--number",level:3},{value:"message.toFileBox() \u21d2 <code>Promise &lt;FileBox&gt;</code>",id:"messagetofilebox--promise-filebox",level:3},{value:"message.toContact() \u21d2 <code>Promise &lt;Contact&gt;</code>",id:"messagetocontact--promise-contact",level:3},{value:"message.toUrlLink() \u21d2 <code>Promise &lt;UrlLink&gt;</code>",id:"messagetourllink--promise-urllink",level:3},{value:"Static Methods",id:"static-methods",level:2},{value:"Message.find() \u21d2 <code>Promise &lt;Message | null&gt;</code>",id:"messagefind--promise-message--null",level:3},{value:"Message.findAll() \u21d2 <code>Promise &lt;Message []&gt;</code>",id:"messagefindall--promise-message-",level:3}],p={toc:m};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This section gives the clear description of the Message Class ,its methods and their uses.\nAll wechat messages will be encapsulated as a ",(0,o.kt)("inlineCode",{parentName:"p"},"Message"),"."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty/blob/1523c5e02be46ebe2cc172a744b2fbe53351540e/examples/ding-dong-bot.ts"},"Examples/Ding-Dong-Bot")),(0,o.kt)("h2",{id:"global-class-message"},"Global Class ",(0,o.kt)("inlineCode",{parentName:"h2"},"Message")),(0,o.kt)("h3",{id:"instance-methods"},"Instance Methods"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Instance methods"),(0,o.kt)("th",{parentName:"tr",align:null},"Return type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"from","(",")"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Contact")," or ",(0,o.kt)("inlineCode",{parentName:"td"},"null"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"to","(",")"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Contact")," or ",(0,o.kt)("inlineCode",{parentName:"td"},"null"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"room","(",")"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Room")," or ",(0,o.kt)("inlineCode",{parentName:"td"},"null"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"text","(",")"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"say","(","text Or Contact Or File",")"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Promise"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"type","(",")"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"MessageType"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"self","(",")"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"mention","(",")"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Promise"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"mentionSelf","(",")"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Promise"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"forward","(","to",")"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Promise"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"date","(",")"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Date"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"age","(",")"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Number"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"toFileBox","(",")"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Promise"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"toContact","(",")"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Promise"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"toUrlLink","(",")"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Promise"))))),(0,o.kt)("h3",{id:"static-method"},"Static Method"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Static Methods"),(0,o.kt)("th",{parentName:"tr",align:null},"Return type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"find","(",")"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Promise"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"findAll","(",")"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Promise"))))),(0,o.kt)("h2",{id:"instance-methods-1"},"Instance Methods"),(0,o.kt)("h3",{id:"messagefrom--contact--null"},"message.from","(",")"," \u21d2 ",(0,o.kt)("inlineCode",{parentName:"h3"},"Contact | null")),(0,o.kt)("p",null,"By using message.from, you will receive the sender name from the message. If the method could not find the sender, it will return ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),". See the following example of instance method of class ",(0,o.kt)("inlineCode",{parentName:"p"},"Message"),":"),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const bot = new Wechaty()\nbot\n.on('message', async message => {\n  const contact = message.from()\n  const text = message.text()\n  const room = message.room()\n  if (room) {\n    const topic = await room.topic()\n    console.log(`Room: ${topic} Contact: ${contact.name()} Text: ${text}`)\n  } else {\n    console.log(`Contact: ${contact.name()} Text: ${text}`)\n  }\n})\n.start()\n")),(0,o.kt)("h3",{id:"messageto--contact--null"},"message.to","(",")"," \u21d2 ",(0,o.kt)("inlineCode",{parentName:"h3"},"Contact")," ","|"," ",(0,o.kt)("inlineCode",{parentName:"h3"},"null")),(0,o.kt)("p",null,"The method gets the destination of the message Message.to","(",")"," will return ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," if a message is in a room, use Message.room","(",")"," to get the room.The method is also  an instance method of class ",(0,o.kt)("inlineCode",{parentName:"p"},"Message"),".Here is an example below:"),(0,o.kt)("h3",{id:"example-1"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const bot = new Wechaty()\nbot\n.on('message', async message => {\n  const contact = message.from()\n  const text = message.text()\n  const toContact = message.to()\n  if (toContact) {\n    const name = toContact.name()\n    console.log(`toContact: ${name} Contact: ${contact.name()} Text: ${text}`)\n  } else {\n    console.log(`Contact: ${contact.name()} Text: ${text}`)\n  }\n})\n.start()\n")),(0,o.kt)("h3",{id:"messageroom--room--null"},"message.room","(",")"," \u21d2 ",(0,o.kt)("inlineCode",{parentName:"h3"},"Room")," ","|"," ",(0,o.kt)("inlineCode",{parentName:"h3"},"null")),(0,o.kt)("p",null,"By using the ",(0,o.kt)("inlineCode",{parentName:"p"},"message.room")," you get the room from the message.If that particular message is not in a room, then will return ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,o.kt)("h3",{id:"example-2"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const bot = new Wechaty()\nbot\n.on('message', async message => {\n  const contact = message.from()\n  const text = message.text()\n  const room = message.room()\n  if (room) {\n    const topic = await room.topic()\n    console.log(`Room: ${topic} Contact: ${contact.name()} Text: ${text}`)\n  } else {\n    console.log(`Contact: ${contact.name()} Text: ${text}`)\n  }\n})\n.start()\n")),(0,o.kt)("h3",{id:"messagetext--string"},"message.text","(",")"," \u21d2 ",(0,o.kt)("inlineCode",{parentName:"h3"},"string")),(0,o.kt)("p",null,"This method returns the text context for the message."),(0,o.kt)("h3",{id:"example-3"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const bot = new Wechaty()\nbot\n.on('message', async message => {\n  const contact = message.from()\n  const text = message.text()\n  const room = message.room()\n  if (room) {\n    const topic = await room.topic()\n    console.log(`Room: ${topic} Contact: ${contact.name()} Text: ${text}`)\n  } else {\n    console.log(`Contact: ${contact.name()} Text: ${text}`)\n  }\n})\n.start()\n")),(0,o.kt)("h3",{id:"messagetorecalled--promise-message--null"},"message.toRecalled","(",")"," \u21d2 ",(0,o.kt)("inlineCode",{parentName:"h3"},"Promise <Message | null>")),(0,o.kt)("p",null,"By using ",(0,o.kt)("inlineCode",{parentName:"p"},"message.toRecalled"),", you will get the text content of the recalled message.\nHere is an example:"),(0,o.kt)("h3",{id:"example-4"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const bot = new Wechaty()\nbot\n.on('message', async message => {\n  if (message.type() === bot.Message.Type.Recalled) {\n    const recalledMessage = await message.toRecalled()\n    console.log(`Message: ${recalledMessage} has been recalled.`)\n  }\n})\n.start()\n")),(0,o.kt)("h3",{id:"messagesaytextorcontactorfileorurllinkorminiprogram--promise-void"},"message.say","(","textOrContactOrFileOrUrlLinkOrMiniProgram",")"," \u21d2 ",(0,o.kt)("inlineCode",{parentName:"h3"},"Promise <void>")),(0,o.kt)("p",null,"By using ",(0,o.kt)("inlineCode",{parentName:"p"},"message.say")," you can reply a Text, Contact Card, Media File or Link message to the sender.The method takes in 5 types of parameters,more details is given below :"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Param"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"text Or Contact Or File Or UrlLink Or MiniProgram"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,o.kt)("inlineCode",{parentName:"td"},"Contact")," ","|"," ",(0,o.kt)("inlineCode",{parentName:"td"},"FileBox")," ","|"," ",(0,o.kt)("inlineCode",{parentName:"td"},"UrlLink")," ","|"," ",(0,o.kt)("inlineCode",{parentName:"td"},"MiniProgram")),(0,o.kt)("td",{parentName:"tr",align:"left"},"send text, Contact, UrlLink, MiniProgram or file to bot.   You can use ",(0,o.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/file-box"},"FileBox")," to send file")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Tips: This function depends on the Puppet Implementation.\n",(0,o.kt)("strong",{parentName:"p"},"See \ud83c\udffb")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty/wiki/Puppet#3-puppet-compatible-table"},"puppet-compatible-table"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"See\ud83c\udffb"),": ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty/blob/1523c5e02be46ebe2cc172a744b2fbe53351540e/examples/ding-dong-bot.ts"},"Examples/ding-dong-bot")),(0,o.kt)("h3",{id:"example-5"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { FileBox }  from 'file-box'\nimport {\n  Wechaty,\n  UrlLink,\n  MiniProgram,\n}  from 'wechaty'\n\nconst bot = new Wechaty()\nbot\n.on('message', async message => {\n\n// 1. send Image\n\n  if (/^ding$/i.test(message.text())) {\n    const fileBox = FileBox.fromUrl('https://wechaty.github.io/wechaty/images/bot-qr-code.png')\n    await message.say(fileBox)\n  }\n\n// 2. send Text\n\n  if (/^dong$/i.test(message.text())) {\n    await message.say('dingdingding')\n  }\n\n// 3. send Contact\n\n  if (/^lijiarui$/i.test(message.text())) {\n    const contactCard = await bot.Contact.find({name: 'lijiarui'})\n    if (!contactCard) {\n      console.log('not found')\n      return\n    }\n    await message.say(contactCard)\n  }\n\n// 4. send UrlLink\n\n  if (/^link$/i.test(message.text())) {\n    const urlLink = new UrlLink({\n      description: 'Wechaty is a Bot SDK for Wechat Individual Account which can help you create a bot in 6 lines of javascript, with cross-platform support including Linux, Windows, Darwin(OSX/Mac) and Docker.',\n      thumbnailUrl: 'https://camo.githubusercontent.com/f310a2097d4aa79d6db2962fa42bb3bb2f6d43df/68747470733a2f2f6368617469652e696f2f776563686174792f696d616765732f776563686174792d6c6f676f2d656e2e706e67',\n      title: 'Wechaty',\n      url: 'https://github.com/wechaty/wechaty',\n    });\n\n    await message.say(urlLink);\n  }\n\n// 5. send MiniProgram (only supported by `wechaty-puppet-macpro`)\n\n  if (/^mini-program$/i.test(message.text())) {\n    const miniProgram = new MiniProgram ({\n      appid              : 'gh_0aa444a25adc',\n      title              : '\u6211\u6b63\u5728\u4f7f\u7528Authing\u8ba4\u8bc1\u8eab\u4efd\uff0c\u4f60\u4e5f\u6765\u8bd5\u8bd5\u5427',\n      pagePath           : 'routes/explore.html',\n      thumbUrl           : '30590201000452305002010002041092541302033d0af802040b30feb602045df0c2c5042b777875706c6f61645f31373533353339353230344063686174726f6f6d3131355f313537363035393538390204010400030201000400',\n      thumbKey           : '42f8609e62817ae45cf7d8fefb532e83',\n    });\n\n    await message.say(miniProgram);\n  }\n})\n.start()\n")),(0,o.kt)("h3",{id:"messagetype--messagetype"},"message.type","(",")"," \u21d2 ",(0,o.kt)("inlineCode",{parentName:"h3"},"MessageType")),(0,o.kt)("p",null,"This method gets the type of the wechat message. The different method types supported are listed below:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Message Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"MessageType.Unknown")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"MessageType.Attachment")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"MessageType.Audio")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"MessageType.Contact")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"MessageType.Emoticon")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"MessageType.Image")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"MessageType.Text")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"MessageType.Video")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"MessageType.Url")))),(0,o.kt)("h3",{id:"example-6"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const bot = new Wechaty()\nif (message.type() === bot.Message.Type.Text) {\n  console.log('This is a text message')\n}\n")),(0,o.kt)("h3",{id:"messageself--boolean"},"message.self","(",")"," \u21d2 ",(0,o.kt)("inlineCode",{parentName:"h3"},"boolean")),(0,o.kt)("p",null,"This method returns ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," if message is sent from self or else it returns ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,o.kt)("h3",{id:"example-7"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"if (message.self()) {\n console.log('this message is sent by myself!')\n}\n")),(0,o.kt)("h3",{id:"messagemention--promise-contact-"},"message.mention","(",")"," \u21d2 ",(0,o.kt)("inlineCode",{parentName:"h3"},"Promise <Contact []>")),(0,o.kt)("p",null,"The method gets you the message mentioned contactList and returns ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise <Contact []>")," - > message mentioned contactList."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"}),(0,o.kt)("th",{parentName:"tr",align:"center"},"Web"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Mac PC Client"),(0,o.kt)("th",{parentName:"tr",align:"center"},"iOS Mobile"),(0,o.kt)("th",{parentName:"tr",align:"center"},"android Mobile"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"[","You were mentioned","]"," tip ","(","[","\u6709\u4eba@\u6211","]","\u7684\u63d0\u793a",")"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2718"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u221a"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u221a"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u221a")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Identify magic code ","(","8197",")"," by copy & paste in mobile"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2718"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u221a"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u221a"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2718")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Identify magic code ","(","8197",")"," by programming"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2718"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2718"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2718"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2718")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Identify two contacts with the same roomAlias by ","[","You were  mentioned","]"," tip"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2718"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2718"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u221a"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u221a")))),(0,o.kt)("h3",{id:"example-8"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const contactList = await message.mention()\nconsole.log(contactList)\n")),(0,o.kt)("h3",{id:"messagementionself--promise-boolean"},"message.mentionSelf","(",")"," \u21d2 ",(0,o.kt)("inlineCode",{parentName:"h3"},"Promise <boolean>")),(0,o.kt)("p",null,"The method checks if a message is a self mention.It returns ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," for self mention messages.Here is an example:"),(0,o.kt)("h3",{id:"example-9"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"if (await message.mentionSelf()) {\n console.log('this message were mentioned me! [You were mentioned] tip ([\u6709\u4eba@\u6211]\u7684\u63d0\u793a)')\n}\n")),(0,o.kt)("h3",{id:"messageforwardto--promise-void"},"message.forward","(","to",")"," \u21d2 ",(0,o.kt)("inlineCode",{parentName:"h3"},"Promise <void>")),(0,o.kt)("p",null,"By using this method you can forward the received message. This action doesn't trigger the on-message events."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Param"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"to (Recipient)"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"Sayable")," ","|"," ",(0,o.kt)("inlineCode",{parentName:"td"},"Array")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Room or Contact The recipient of the message, the room, or the contact")))),(0,o.kt)("h3",{id:"example-10"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const bot = new Wechaty()\nbot\n.on('message', async message => {\n  const room = await bot.Room.find({topic: 'wechaty'})\n  if (room) {\n    await message.forward(room)\n    console.log('forward this message to wechaty room!')\n  }\n})\n.start()\n")),(0,o.kt)("h3",{id:"messagedate--date"},"message.date","(",")"," \u21d2 ",(0,o.kt)("inlineCode",{parentName:"h3"},"Date")),(0,o.kt)("p",null,"The method returns the message sent date."),(0,o.kt)("h3",{id:"messageage--number"},"message.age","(",")"," \u21d2 ",(0,o.kt)("inlineCode",{parentName:"h3"},"number")),(0,o.kt)("p",null,"The method returns the age of the  message  in seconds.For example, the message is sent at time ",(0,o.kt)("inlineCode",{parentName:"p"},"8:43:01"),", and when we received it in Wechaty, the time is ",(0,o.kt)("inlineCode",{parentName:"p"},"8:43:15"),", then the age","(",")"," will return ",(0,o.kt)("inlineCode",{parentName:"p"},"8:43:15 - 8:43:01 = 14 (seconds)"),"."),(0,o.kt)("h3",{id:"messagetofilebox--promise-filebox"},"message.toFileBox","(",")"," \u21d2 ",(0,o.kt)("inlineCode",{parentName:"h3"},"Promise <FileBox>")),(0,o.kt)("p",null,"This method extracts the Media file from the Message, and puts it into the FileBox."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Tips: This function is depending on the Puppet Implementation, ",(0,o.kt)("strong",{parentName:"p"},"see\ud83c\udffb")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty/wiki/Puppet#3-puppet-compatible-table"},"puppet-compatible-table"))),(0,o.kt)("h3",{id:"messagetocontact--promise-contact"},"message.toContact","(",")"," \u21d2 ",(0,o.kt)("inlineCode",{parentName:"h3"},"Promise <Contact>")),(0,o.kt)("p",null,"The method gets share card of the Message Extract  and the contact card from the Message, and encapsulates it into Contact class."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Tips: This function is depending on the Puppet Implementation, ",(0,o.kt)("strong",{parentName:"p"},"see \ud83c\udffb")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty/wiki/Puppet#3-puppet-compatible-table"},"puppet-compatible-table"))),(0,o.kt)("h3",{id:"messagetourllink--promise-urllink"},"message.toUrlLink","(",")"," \u21d2 ",(0,o.kt)("inlineCode",{parentName:"h3"},"Promise <UrlLink>")),(0,o.kt)("p",null,"The method extracts the Url Link from the Message, and encapsulate it into UrlLink class.\nTips: This function is depending on the Puppet Implementation, ",(0,o.kt)("strong",{parentName:"p"},"see \ud83c\udffb")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty/wiki/Puppet#3-puppet-compatible-table"},"puppet-compatible-table")),(0,o.kt)("h2",{id:"static-methods"},"Static Methods"),(0,o.kt)("h3",{id:"messagefind--promise-message--null"},"Message.find","(",")"," \u21d2 ",(0,o.kt)("inlineCode",{parentName:"h3"},"Promise <Message | null>")),(0,o.kt)("p",null,"By using ",(0,o.kt)("inlineCode",{parentName:"p"},"message.find")," you can find the messages in cache."),(0,o.kt)("h3",{id:"messagefindall--promise-message-"},"Message.findAll","(",")"," \u21d2 ",(0,o.kt)("inlineCode",{parentName:"h3"},"Promise <Message []>")),(0,o.kt)("p",null,"By using ",(0,o.kt)("inlineCode",{parentName:"p"},"message.findAll"),"  you can find the messages in cache."))}d.isMDXComponent=!0}}]);
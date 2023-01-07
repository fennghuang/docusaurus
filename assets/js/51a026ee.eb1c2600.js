"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[9725,5863,2775,2076,4562,9842,7574,313,196,9685,2826],{3905:(t,e,o)=>{o.d(e,{Zo:()=>i,kt:()=>m});var s=o(67294);function a(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function n(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,s)}return o}function r(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?n(Object(o),!0).forEach((function(e){a(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function l(t,e){if(null==t)return{};var o,s,a=function(t,e){if(null==t)return{};var o,s,a={},n=Object.keys(t);for(s=0;s<n.length;s++)o=n[s],e.indexOf(o)>=0||(a[o]=t[o]);return a}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(s=0;s<n.length;s++)o=n[s],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(a[o]=t[o])}return a}var c=s.createContext({}),u=function(t){var e=s.useContext(c),o=e;return t&&(o="function"==typeof t?t(e):r(r({},e),t)),o},i=function(t){var e=u(t.components);return s.createElement(c.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return s.createElement(s.Fragment,{},e)}},h=s.forwardRef((function(t,e){var o=t.components,a=t.mdxType,n=t.originalType,c=t.parentName,i=l(t,["components","mdxType","originalType","parentName"]),p=u(o),h=a,m=p["".concat(c,".").concat(h)]||p[h]||d[h]||n;return o?s.createElement(m,r(r({ref:e},i),{},{components:o})):s.createElement(m,r({ref:e},i))}));function m(t,e){var o=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var n=o.length,r=new Array(n);r[0]=h;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l[p]="string"==typeof t?t:a,r[1]=l;for(var u=2;u<n;u++)r[u]=o[u];return s.createElement.apply(null,r)}return s.createElement.apply(null,o)}h.displayName="MDXCreateElement"},85162:(t,e,o)=>{o.d(e,{Z:()=>r});var s=o(67294),a=o(86010);const n="tabItem_Ymn6";function r(t){let{children:e,hidden:o,className:r}=t;return s.createElement("div",{role:"tabpanel",className:(0,a.Z)(n,r),hidden:o},e)}},65488:(t,e,o)=>{o.d(e,{Z:()=>h});var s=o(87462),a=o(67294),n=o(86010),r=o(72389),l=o(67392),c=o(7094),u=o(12466);const i="tabList__CuJ",p="tabItem_LNqP";function d(t){const{lazy:e,block:o,defaultValue:r,values:d,groupId:h,className:m}=t,g=a.Children.map(t.children,(t=>{if((0,a.isValidElement)(t)&&"value"in t.props)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=d??g.map((t=>{let{props:{value:e,label:o,attributes:s}}=t;return{value:e,label:o,attributes:s}})),b=(0,l.l)(y,((t,e)=>t.value===e.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===r?r:r??g.find((t=>t.props.default))?.props.value??g[0].props.value;if(null!==f&&!y.some((t=>t.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${y.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:k}=(0,c.U)(),[w,T]=(0,a.useState)(f),x=[],{blockElementScrollPositionUntilNextRender:M}=(0,u.o5)();if(null!=h){const t=v[h];null!=t&&t!==w&&y.some((e=>e.value===t))&&T(t)}const U=t=>{const e=t.currentTarget,o=x.indexOf(e),s=y[o].value;s!==w&&(M(e),T(s),null!=h&&k(h,String(s)))},S=t=>{let e=null;switch(t.key){case"Enter":U(t);break;case"ArrowRight":{const o=x.indexOf(t.currentTarget)+1;e=x[o]??x[0];break}case"ArrowLeft":{const o=x.indexOf(t.currentTarget)-1;e=x[o]??x[x.length-1];break}}e?.focus()};return a.createElement("div",{className:(0,n.Z)("tabs-container",i)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":o},m)},y.map((t=>{let{value:e,label:o,attributes:r}=t;return a.createElement("li",(0,s.Z)({role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,key:e,ref:t=>x.push(t),onKeyDown:S,onClick:U},r,{className:(0,n.Z)("tabs__item",p,r?.className,{"tabs__item--active":w===e})}),o??e)}))),e?(0,a.cloneElement)(g.filter((t=>t.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((t,e)=>(0,a.cloneElement)(t,{key:e,hidden:t.props.value!==w})))))}function h(t){const e=(0,r.Z)();return a.createElement(d,(0,s.Z)({key:String(e)},t))}},88332:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var s=o(87462),a=(o(67294),o(3905));const n={},r=void 0,l={unversionedId:"polyglot/dotnet/transclusions/shortest-chatbot",id:"polyglot/dotnet/transclusions/shortest-chatbot",title:"shortest-chatbot",description:"",source:"@site/docs/polyglot/dotnet/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/dotnet/transclusions",slug:"/polyglot/dotnet/transclusions/shortest-chatbot",permalink:"/docs/polyglot/dotnet/transclusions/shortest-chatbot",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/polyglot/dotnet/transclusions/shortest-chatbot.mdx",tags:[],version:"current",lastUpdatedBy:"Huan LI (\u674e\u5353\u6853)",lastUpdatedAt:1616051830,formattedLastUpdatedAt:"Mar 18, 2021",frontMatter:{}},c={},u=[],i={toc:u};function p(t){let{components:e,...o}=t;return(0,a.kt)("wrapper",(0,s.Z)({},i,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'var wechaty = new Wechaty(options, logger).onScan((qrcode, status) => {\n  Console.WriteLine($"Scan QR Code to login: {status} https://wechaty.js.org/qrcode/{(qrcode)}`");\n}).OnLogin( user => {\n  Console.WriteLine("User {user} logined");\n}).OnMessage( message => {\n  Console.WriteLine($"Message: {message}");\n}).Start();\n')))}p.isMDXComponent=!0},7230:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var s=o(87462),a=(o(67294),o(3905));const n={},r=void 0,l={unversionedId:"polyglot/go/transclusions/shortest-chatbot",id:"polyglot/go/transclusions/shortest-chatbot",title:"shortest-chatbot",description:"",source:"@site/docs/polyglot/go/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/go/transclusions",slug:"/polyglot/go/transclusions/shortest-chatbot",permalink:"/docs/polyglot/go/transclusions/shortest-chatbot",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/polyglot/go/transclusions/shortest-chatbot.mdx",tags:[],version:"current",lastUpdatedBy:"Huan LI (\u674e\u5353\u6853)",lastUpdatedAt:1616051830,formattedLastUpdatedAt:"Mar 18, 2021",frontMatter:{}},c={},u=[],i={toc:u};function p(t){let{components:e,...o}=t;return(0,a.kt)("wrapper",(0,s.Z)({},i,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n "fmt"\n\n  "github.com/wechaty/go-wechaty/wechaty"\n)\n\nfunc main() {\n  _ = wechaty.NewWechaty().\n    OnScan(func(qrCode, status string) {\n      fmt.Printf("Scan QR Code to login: %s\\nhttps://wechaty.js.org/qrcode/%s\\n", status, qrCode)\n    }).\n    OnLogin(func(user string) { fmt.Printf("User %s logged in\\n", user) }).\n    OnMessage(func(message string) { fmt.Printf("Message: %s\\n", message) }).\n    Start()\n}\n')))}p.isMDXComponent=!0},91791:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var s=o(87462),a=(o(67294),o(3905));const n={},r=void 0,l={unversionedId:"polyglot/java/transclusions/shortest-chatbot",id:"polyglot/java/transclusions/shortest-chatbot",title:"shortest-chatbot",description:"",source:"@site/docs/polyglot/java/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/java/transclusions",slug:"/polyglot/java/transclusions/shortest-chatbot",permalink:"/docs/polyglot/java/transclusions/shortest-chatbot",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/polyglot/java/transclusions/shortest-chatbot.mdx",tags:[],version:"current",lastUpdatedBy:"Huan LI (\u674e\u5353\u6853)",lastUpdatedAt:1616051830,formattedLastUpdatedAt:"Mar 18, 2021",frontMatter:{}},c={},u=[],i={toc:u};function p(t){let{components:e,...o}=t;return(0,a.kt)("wrapper",(0,s.Z)({},i,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'package io.github.wechaty;\n\nclass Bot{\n  public static void main(String args[]){\n    Wechaty bot = Wechaty.instance()\n      .onScan((qrcode, statusScanStatus, data) -> System.out.println(QrcodeUtils.getQr(qrcode)))\n      .onLogin(user -> System.out.println("User logged in :" + user))\n      .onMessage(message -> System.out.println("Message:" + message))\n      .start(true);\n  }\n}\n')))}p.isMDXComponent=!0},55318:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var s=o(87462),a=(o(67294),o(3905));const n={},r=void 0,l={unversionedId:"polyglot/openapi/transclusions/shortest-chatbot",id:"polyglot/openapi/transclusions/shortest-chatbot",title:"shortest-chatbot",description:"",source:"@site/docs/polyglot/openapi/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/openapi/transclusions",slug:"/polyglot/openapi/transclusions/shortest-chatbot",permalink:"/docs/polyglot/openapi/transclusions/shortest-chatbot",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/polyglot/openapi/transclusions/shortest-chatbot.mdx",tags:[],version:"current",lastUpdatedBy:"Huan LI (\u674e\u5353\u6853)",lastUpdatedAt:1616054254,formattedLastUpdatedAt:"Mar 18, 2021",frontMatter:{}},c={},u=[],i={toc:u};function p(t){let{components:e,...o}=t;return(0,a.kt)("wrapper",(0,s.Z)({},i,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# To be add: curl ...\n")))}p.isMDXComponent=!0},29577:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var s=o(87462),a=(o(67294),o(3905));const n={},r=void 0,l={unversionedId:"polyglot/php/transclusions/shortest-chatbot",id:"polyglot/php/transclusions/shortest-chatbot",title:"shortest-chatbot",description:"",source:"@site/docs/polyglot/php/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/php/transclusions",slug:"/polyglot/php/transclusions/shortest-chatbot",permalink:"/docs/polyglot/php/transclusions/shortest-chatbot",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/polyglot/php/transclusions/shortest-chatbot.mdx",tags:[],version:"current",lastUpdatedBy:"Huan LI (\u674e\u5353\u6853)",lastUpdatedAt:1616051830,formattedLastUpdatedAt:"Mar 18, 2021",frontMatter:{}},c={},u=[],i={toc:u};function p(t){let{components:e,...o}=t;return(0,a.kt)("wrapper",(0,s.Z)({},i,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},'$wechaty = \\IO\\Github\\Wechaty\\Wechaty::getInstance($token, $endPoint);\n$wechaty->onScan(function($qrcode, $status, $data) {\n    $qr = \\IO\\Github\\Wechaty\\Util\\QrcodeUtils::getQr($qrcode);\n    echo "$qr\\n\\nOnline Image: https://wechaty.js.org/qrcode/$qrcode\\n";\n})->onLogin(function(\\IO\\Github\\Wechaty\\User\\ContactSelf $user) {\n})->onMessage(function(\\IO\\Github\\Wechaty\\User\\Message $message) {\n    $message->say("hello from PHP7.4");\n})->start();\n')))}p.isMDXComponent=!0},34608:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var s=o(87462),a=(o(67294),o(3905));const n={},r=void 0,l={unversionedId:"polyglot/python/transclusions/shortest-chatbot",id:"polyglot/python/transclusions/shortest-chatbot",title:"shortest-chatbot",description:"",source:"@site/docs/polyglot/python/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/python/transclusions",slug:"/polyglot/python/transclusions/shortest-chatbot",permalink:"/docs/polyglot/python/transclusions/shortest-chatbot",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/polyglot/python/transclusions/shortest-chatbot.mdx",tags:[],version:"current",lastUpdatedBy:"Huan LI (\u674e\u5353\u6853)",lastUpdatedAt:1616051830,formattedLastUpdatedAt:"Mar 18, 2021",frontMatter:{}},c={},u=[],i={toc:u};function p(t){let{components:e,...o}=t;return(0,a.kt)("wrapper",(0,s.Z)({},i,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"from wechaty import Wechaty\nimport asyncio\n\nasync def main():\n    bot = Wechaty()\n    bot.on('scan', lambda status, qrcode, data: print('Scan QR Code to login: {}\\nhttps://wechaty.js.org/qrcode/{}'.format(status, qrcode)))\n    bot.on('login', lambda user: print('User {} logged in'.format(user)))\n    bot.on('message', lambda message: print('Message: {}'.format(message)))\n    await bot.start()\n\nasyncio.run(main())\n")))}p.isMDXComponent=!0},19001:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var s=o(87462),a=(o(67294),o(3905));const n={},r=void 0,l={unversionedId:"polyglot/rust/transclusions/shortest-chatbot",id:"polyglot/rust/transclusions/shortest-chatbot",title:"shortest-chatbot",description:"",source:"@site/docs/polyglot/rust/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/rust/transclusions",slug:"/polyglot/rust/transclusions/shortest-chatbot",permalink:"/docs/polyglot/rust/transclusions/shortest-chatbot",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/polyglot/rust/transclusions/shortest-chatbot.mdx",tags:[],version:"current",lastUpdatedBy:"Huan LI (\u674e\u5353\u6853)",lastUpdatedAt:1616051830,formattedLastUpdatedAt:"Mar 18, 2021",frontMatter:{}},c={},u=[],i={toc:u};function p(t){let{components:e,...o}=t;return(0,a.kt)("wrapper",(0,s.Z)({},i,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"let bot = Wechaty::new(PuppetService::new(options).await.unwrap());\n\nbot.on_scan(handle_scan)\n    .on_login(handle_login)\n    .on_logout(handle_logout)\n    .on_message(handle_message)\n    .start()\n    .await;\n")))}p.isMDXComponent=!0},23705:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var s=o(87462),a=(o(67294),o(3905));const n={},r=void 0,l={unversionedId:"polyglot/scala/transclusions/shortest-chatbot",id:"polyglot/scala/transclusions/shortest-chatbot",title:"shortest-chatbot",description:"",source:"@site/docs/polyglot/scala/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/scala/transclusions",slug:"/polyglot/scala/transclusions/shortest-chatbot",permalink:"/docs/polyglot/scala/transclusions/shortest-chatbot",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/polyglot/scala/transclusions/shortest-chatbot.mdx",tags:[],version:"current",lastUpdatedBy:"Huan LI (\u674e\u5353\u6853)",lastUpdatedAt:1616051830,formattedLastUpdatedAt:"Mar 18, 2021",frontMatter:{}},c={},u=[],i={toc:u};function p(t){let{components:e,...o}=t;return(0,a.kt)("wrapper",(0,s.Z)({},i,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'package wechaty\n\nobject DingDongBot {\n  def main(args: Array[String]): Unit = {\n    Wechaty.instance()\n      .onScan(payload     => { println("Scan QR Code to login: %s\\nhttps://wechaty.js.org/qrcode/%s\\n".format(payload.status, payload.qrcode)) })\n      .onLogin(payload    => { println("User %s logged in\\n".format(payload.id)) })\n      .onMessage(message  => { println(message) })\n      .start()\n    Thread.currentThread().join()\n  }\n}\n')))}p.isMDXComponent=!0},3569:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>k,contentTitle:()=>f,default:()=>x,frontMatter:()=>b,metadata:()=>v,toc:()=>w});var s=o(87462),a=(o(67294),o(3905)),n=o(65488),r=o(85162),l=o(47650),c=o(55318),u=o(62570),i=o(34608),p=o(7230),d=o(91791),h=o(29577),m=o(23705),g=o(88332),y=o(19001);const b={},f=void 0,v={unversionedId:"polyglot/transclusions/shortest-chatbots",id:"polyglot/transclusions/shortest-chatbots",title:"shortest-chatbots",description:"<Tabs",source:"@site/docs/polyglot/transclusions/shortest-chatbots.mdx",sourceDirName:"polyglot/transclusions",slug:"/polyglot/transclusions/shortest-chatbots",permalink:"/docs/polyglot/transclusions/shortest-chatbots",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/polyglot/transclusions/shortest-chatbots.mdx",tags:[],version:"current",lastUpdatedBy:"shwetal",lastUpdatedAt:1630752945,formattedLastUpdatedAt:"Sep 4, 2021",frontMatter:{}},k={},w=[],T={toc:w};function x(t){let{components:e,...o}=t;return(0,a.kt)("wrapper",(0,s.Z)({},T,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)(n.Z,{groupId:"programming-languages",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Go",value:"go"},{label:"Java",value:"java"},{label:"PHP",value:"php"},{label:"Scala",value:"scala"},{label:"C#",value:"csharp"},{label:"Rust",value:"rust"},{label:"OpenAPI",value:"openapi"}],mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,a.kt)(l.default,{mdxType:"ShortestChatbotTypeScript"})),(0,a.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,a.kt)(u.default,{mdxType:"ShortestChatbotJavaScript"})),(0,a.kt)(r.Z,{value:"py",mdxType:"TabItem"},(0,a.kt)(i.default,{mdxType:"ShortestChatbotPython"})),(0,a.kt)(r.Z,{value:"go",mdxType:"TabItem"},(0,a.kt)(p.default,{mdxType:"ShortestChatbotGo"})),(0,a.kt)(r.Z,{value:"java",mdxType:"TabItem"},(0,a.kt)(d.default,{mdxType:"ShortestChatbotJava"})),(0,a.kt)(r.Z,{value:"php",mdxType:"TabItem"},(0,a.kt)(h.default,{mdxType:"ShortestChatbotPhp"})),(0,a.kt)(r.Z,{value:"scala",mdxType:"TabItem"},(0,a.kt)(m.default,{mdxType:"ShortestChatbotScala"})),(0,a.kt)(r.Z,{value:"csharp",mdxType:"TabItem"},(0,a.kt)(g.default,{mdxType:"ShortestChatbotDotnet"})),(0,a.kt)(r.Z,{value:"rust",mdxType:"TabItem"},(0,a.kt)(y.default,{mdxType:"ShortestChatbotRust"})),(0,a.kt)(r.Z,{value:"openapi",mdxType:"TabItem"},(0,a.kt)(c.default,{mdxType:"ShortestChatbotOpenApi"}))))}x.isMDXComponent=!0},62570:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var s=o(87462),a=(o(67294),o(3905));const n={},r=void 0,l={unversionedId:"polyglot/typescript/transclusions/shortest-chatbot-js",id:"polyglot/typescript/transclusions/shortest-chatbot-js",title:"shortest-chatbot-js",description:"",source:"@site/docs/polyglot/typescript/transclusions/shortest-chatbot-js.mdx",sourceDirName:"polyglot/typescript/transclusions",slug:"/polyglot/typescript/transclusions/shortest-chatbot-js",permalink:"/docs/polyglot/typescript/transclusions/shortest-chatbot-js",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/polyglot/typescript/transclusions/shortest-chatbot-js.mdx",tags:[],version:"current",lastUpdatedBy:"Huan (\u674e\u5353\u6853)",lastUpdatedAt:1631790719,formattedLastUpdatedAt:"Sep 16, 2021",frontMatter:{}},c={},u=[],i={toc:u};function p(t){let{components:e,...o}=t;return(0,a.kt)("wrapper",(0,s.Z)({},i,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { Wechaty }  from 'wechaty'\n\nasync function main () {\n  const bot = new Wechaty()\n  bot\n    .on('scan', (qrcode, status) => console.log(`Scan QR Code to login: ${status}\\nhttps://wechaty.js.org/qrcode/${encodeURIComponent(qrcode)}`))\n    .on('login',            user => console.log(`User ${user} logged in`))\n    .on('message',       message => console.log(`Message: ${message}`))\n  await bot.start()\n}\n\nmain()\n  .catch(console.error)\n")))}p.isMDXComponent=!0},47650:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var s=o(87462),a=(o(67294),o(3905));const n={},r=void 0,l={unversionedId:"polyglot/typescript/transclusions/shortest-chatbot",id:"polyglot/typescript/transclusions/shortest-chatbot",title:"shortest-chatbot",description:"",source:"@site/docs/polyglot/typescript/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/typescript/transclusions",slug:"/polyglot/typescript/transclusions/shortest-chatbot",permalink:"/docs/polyglot/typescript/transclusions/shortest-chatbot",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/polyglot/typescript/transclusions/shortest-chatbot.mdx",tags:[],version:"current",lastUpdatedBy:"Xiaohan Li",lastUpdatedAt:1619007923,formattedLastUpdatedAt:"Apr 21, 2021",frontMatter:{}},c={},u=[],i={toc:u};function p(t){let{components:e,...o}=t;return(0,a.kt)("wrapper",(0,s.Z)({},i,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { Wechaty } from 'wechaty'\n\nasync function main () {\n  const bot = new Wechaty()\n  bot\n    .on('scan', (qrcode, status) => console.log(`Scan QR Code to login: ${status}\\nhttps://wechaty.js.org/qrcode/${encodeURIComponent(qrcode)}`))\n    .on('login',            user => console.log(`User ${user} logged in`))\n    .on('message',       message => console.log(`Message: ${message}`))\n  await bot.start()\n}\n\nmain()\n  .catch(console.error)\n")))}p.isMDXComponent=!0}}]);
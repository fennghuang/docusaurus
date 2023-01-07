"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[6470,4984,9591],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(a),m=o,h=c["".concat(p,".").concat(m)]||c[m]||d[m]||r;return a?n.createElement(h,l(l({ref:t},u),{},{components:a})):n.createElement(h,l({ref:t},u))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<r;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),o=a(86010);const r="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,l),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(87462),o=a(67294),r=a(86010),l=a(72389),i=a(67392),p=a(7094),s=a(12466);const u="tabList__CuJ",c="tabItem_LNqP";function d(e){const{lazy:t,block:a,defaultValue:l,values:d,groupId:m,className:h}=e,y=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=d??y.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),v=(0,i.l)(k,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const T=null===l?l:l??y.find((e=>e.props.default))?.props.value??y[0].props.value;if(null!==T&&!k.some((e=>e.value===T)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${T}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:g}=(0,p.U)(),[E,f]=(0,o.useState)(T),N=[],{blockElementScrollPositionUntilNextRender:b}=(0,s.o5)();if(null!=m){const e=w[m];null!=e&&e!==E&&k.some((t=>t.value===e))&&f(e)}const P=e=>{const t=e.currentTarget,a=N.indexOf(t),n=k[a].value;n!==E&&(b(t),f(n),null!=m&&g(m,String(n)))},_=e=>{let t=null;switch(e.key){case"Enter":P(e);break;case"ArrowRight":{const a=N.indexOf(e.currentTarget)+1;t=N[a]??N[0];break}case"ArrowLeft":{const a=N.indexOf(e.currentTarget)-1;t=N[a]??N[N.length-1];break}}t?.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},h)},k.map((e=>{let{value:t,label:a,attributes:l}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:e=>N.push(e),onKeyDown:_,onClick:P},l,{className:(0,r.Z)("tabs__item",c,l?.className,{"tabs__item--active":E===t})}),a??t)}))),t?(0,o.cloneElement)(y.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function m(e){const t=(0,l.Z)();return o.createElement(d,(0,n.Z)({key:String(t)},e))}},75403:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>y,frontMatter:()=>s,metadata:()=>c,toc:()=>m});var n=a(87462),o=(a(67294),a(3905)),r=a(65488),l=a(85162),i=a(13322),p=a(89226);const s={title:"Puppet Service: DIY"},u=void 0,c={unversionedId:"puppet-services/diy",id:"puppet-services/diy",title:"Puppet Service: DIY",description:"Wechaty Puppet Service DIY",source:"@site/docs/puppet-services/diy.md",sourceDirName:"puppet-services",slug:"/puppet-services/diy",permalink:"/docs/puppet-services/diy",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/puppet-services/diy.md",tags:[],version:"current",lastUpdatedBy:"Huan LI (\u674e\u5353\u6853)",lastUpdatedAt:1631075354,formattedLastUpdatedAt:"Sep 8, 2021",frontMatter:{title:"Puppet Service: DIY"},sidebar:"docs",previous:{title:"Compatibility",permalink:"/docs/puppet-services/compatibility"},next:{title:"Puppet Services: FAQ",permalink:"/docs/puppet-services/faq"}},d={},m=[{value:"Steps",id:"steps",level:2},{value:"1. Pull the latest Wechaty Docker Image",id:"1-pull-the-latest-wechaty-docker-image",level:3},{value:"2. Config Wechaty Puppet Provider",id:"2-config-wechaty-puppet-provider",level:3},{value:"3. Create your own Wechaty Puppet Service TOKEN",id:"3-create-your-own-wechaty-puppet-service-token",level:3},{value:"4. Set Wechaty Puppet Service port",id:"4-set-wechaty-puppet-service-port",level:3},{value:"5. Set Wechaty Log Level",id:"5-set-wechaty-log-level",level:3},{value:"6. Config TLS(SSL) for Wechaty Puppet Service (optional)",id:"6-config-tlsssl-for-wechaty-puppet-service-optional",level:3},{value:"7. Start your Wechaty Token Gate Server",id:"7-start-your-wechaty-token-gate-server",level:3},{value:"8. Check your TOKEN service",id:"8-check-your-token-service",level:3},{value:"Using <code>wechaty-token</code> CLI",id:"using-wechaty-token-cli",level:4},{value:"\ud83c\udf89 Congratulations! You are all set",id:"-congratulations-you-are-all-set",level:3},{value:"All in One Command",id:"all-in-one-command",level:2},{value:"Blogs",id:"blogs",level:2},{value:"History",id:"history",level:2},{value:"Support",id:"support",level:2}],h={toc:m};function y(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/puppet-services/diy"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Service-DIY-blue",alt:"Wechaty Puppet Service DIY"}))),(0,o.kt)("admonition",{title:"Do It Yourself",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"You can make a Wechaty Puppet Service easily from any Wechaty Puppet Providers.")),(0,o.kt)("p",null,"You can build a Wechaty Puppet Service by yourself with any Wechaty Puppet Providers."),(0,o.kt)("h2",{id:"steps"},"Steps"),(0,o.kt)("p",null,"We have a easy to use docker image which works out-of-the-box."),(0,o.kt)("h3",{id:"1-pull-the-latest-wechaty-docker-image"},"1. Pull the latest Wechaty Docker Image"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker pull wechaty/wechaty\n")),(0,o.kt)("h3",{id:"2-config-wechaty-puppet-provider"},"2. Config Wechaty Puppet Provider"),(0,o.kt)("p",null,"We need to choice which ",(0,o.kt)("a",{parentName:"p",href:"/docs/puppet-providers/"},"Wechaty Puppet Provider")," we want to use by setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"WECHATY_PUPPET")," environment variable."),(0,o.kt)("p",null,"For example, you can choose ",(0,o.kt)("a",{parentName:"p",href:"/docs/puppet-providers/wechat"},"wechaty-puppet-wechat")," by setting ",(0,o.kt)("inlineCode",{parentName:"p"},"WECHATY_PUPPET=wechaty-puppet-wechat"),"."),(0,o.kt)("admonition",{title:"Wechaty Puppet Providers",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Learn all ",(0,o.kt)("a",{parentName:"p",href:"/docs/puppet-providers/"},"Wechaty Puppet Providers")),(0,o.kt)("p",{parentName:"admonition"},"You need to set all environment variables which requires from a specific provider."),(0,o.kt)("p",{parentName:"admonition"},"For example, an additional token will be required by ",(0,o.kt)("inlineCode",{parentName:"p"},"PadLocal"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"WECHATY_PUPPET_PADLOCAL_TOKEN=puppet_padlocal${TOKEN}"))),(0,o.kt)(r.Z,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"linux",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'export WECHATY_PUPPET="wechaty-puppet-wechat"\n'))),(0,o.kt)(l.Z,{value:"mac",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'export WECHATY_PUPPET="wechaty-puppet-wechat"\n'))),(0,o.kt)(l.Z,{value:"windows",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'set WECHATY_PUPPET="wechaty-puppet-wechat"\n')))),(0,o.kt)("h3",{id:"3-create-your-own-wechaty-puppet-service-token"},"3. Create your own Wechaty Puppet Service TOKEN"),(0,o.kt)("p",null,"In order to provide ",(0,o.kt)("a",{parentName:"p",href:"/docs/specs/service"},"Wechaty Puppet Service"),", you need to specify a ",(0,o.kt)("a",{parentName:"p",href:"/docs/specs/token"},"TOKEN")," for authorization."),(0,o.kt)("p",null,"You can ",(0,o.kt)("a",{parentName:"p",href:"https://www.uuidgenerator.net/version4"},"Generate a new UUIDv4")," online, use this new UUIDv4 as your token."),(0,o.kt)("admonition",{title:"TOKEN uniqueness",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Your new token ",(0,o.kt)("strong",{parentName:"p"},"MUST")," different to any existing tokens in our system. (or they will conflict!)")),(0,o.kt)(r.Z,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"linux",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'export WECHATY_TOKEN=$(curl -s https://www.uuidgenerator.net/api/version4)\necho "WECHATY_TOKEN=$WECHATY_TOKEN"\n'))),(0,o.kt)(l.Z,{value:"mac",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'export WECHATY_TOKEN=$(curl -s https://www.uuidgenerator.net/api/version4)\necho "WECHATY_TOKEN=$WECHATY_TOKEN"\n'))),(0,o.kt)(l.Z,{value:"windows",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'# TODO: use script to get UUIDv4 automatically like Linux/Mac\nset WECHATY_TOKEN="__UUIDv4__"\n')))),(0,o.kt)("h3",{id:"4-set-wechaty-puppet-service-port"},"4. Set Wechaty Puppet Service port"),(0,o.kt)("p",null,"The port for your ",(0,o.kt)("a",{parentName:"p",href:"/docs/specs/service"},"Wechaty Puppet Service")," need to be specified. Make sure it's free on your server."),(0,o.kt)("admonition",{title:"port availablility",type:"note"},(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},"The server IP must be public on the internet"),(0,o.kt)("li",{parentName:"ol"},"the port must be public accessible on the internet"))),(0,o.kt)(r.Z,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"linux",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'export WECHATY_PUPPET_SERVER_PORT="8788"\n'))),(0,o.kt)(l.Z,{value:"mac",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'export WECHATY_PUPPET_SERVER_PORT="8788"\n'))),(0,o.kt)(l.Z,{value:"windows",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'set WECHATY_PUPPET_SERVER_PORT="8788"\n')))),(0,o.kt)("h3",{id:"5-set-wechaty-log-level"},"5. Set Wechaty Log Level"),(0,o.kt)("p",null,"Enable ",(0,o.kt)("inlineCode",{parentName:"p"},"verbose")," log message output for easy debugging."),(0,o.kt)("p",null,"More options are:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"silly"),": all debug messages will be outputed"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"verbose"),": recommended debug level"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"info"),": disable debug messages"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"warning"),": only warning message"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"silence"),": no log message")),(0,o.kt)(r.Z,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"linux",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'export WECHATY_LOG="verbose"\n'))),(0,o.kt)(l.Z,{value:"mac",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'export WECHATY_LOG="verbose"\n'))),(0,o.kt)(l.Z,{value:"windows",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'set WECHATY_LOG="verbose"\n')))),(0,o.kt)("h3",{id:"6-config-tlsssl-for-wechaty-puppet-service-optional"},"6. Config TLS(SSL) for Wechaty Puppet Service (optional)"),(0,o.kt)("p",null,"From ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty/issues/2231"},"Wechaty version 0.67"),", the Puppet Service will enable TLS(SSL) by default. (See ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-puppet-service/issues/160"},"wechaty/wechaty-puppet-service#160"),")"),(0,o.kt)("p",null,"You can enable/disable the TLS by setting environment variables to fullfil your needs."),(0,o.kt)("p",null,"For example, if you need to provide a Wechaty Puppet Service token without TLS, then you can set ",(0,o.kt)("inlineCode",{parentName:"p"},"WECHATY_PUPPET_SERVICE_NO_TLS_INSECURE_SERVER=true")," to disable TLS."),(0,o.kt)(r.Z,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"linux",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'# set to "true" to disable TLS (not recommanded)\nexport WECHATY_PUPPET_SERVICE_NO_TLS_INSECURE_SERVER="false"\n'))),(0,o.kt)(l.Z,{value:"mac",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'# set to "true" to disable TLS (not recommanded)\nexport WECHATY_PUPPET_SERVICE_NO_TLS_INSECURE_SERVER="false"\n'))),(0,o.kt)(l.Z,{value:"windows",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'# set to "true" to disable TLS (not recommanded)\nset WECHATY_PUPPET_SERVICE_NO_TLS_INSECURE_SERVER="false"\n')))),(0,o.kt)("h3",{id:"7-start-your-wechaty-token-gate-server"},"7. Start your Wechaty Token Gate Server"),(0,o.kt)("p",null,"After finish config all the above settings, start the token gate server with the following docker command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker run -ti \\\n  --name wechaty_puppet_service_token_gateway \\\n  --rm \\\n  --privileged \\\n  --network=host \\\n  -e WECHATY_LOG \\\n  -e WECHATY_PUPPET \\\n  -e WECHATY_PUPPET_SERVER_PORT \\\n  -e WECHATY_PUPPET_SERVICE_NO_TLS_INSECURE_SERVER \\\n  -e WECHATY_TOKEN \\\n  wechaty/wechaty\n")),(0,o.kt)("admonition",{title:"privileged mode",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Privileged mode is for using host networking to simplify the docker arguments."),(0,o.kt)("p",{parentName:"admonition"},"If you want to remove the ",(0,o.kt)("inlineCode",{parentName:"p"},"--privileged"),", you need to add:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-p $WECHATY_PUPPET_SERVER_PORT:$WECHATY_PUPPET_SERVER_PORT")," for Linux & Mac"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-p %WECHATY_PUPPET_SERVER_PORT%:%WECHATY_PUPPET_SERVER_PORT%")," for Windows"))),(0,o.kt)("h3",{id:"8-check-your-token-service"},"8. Check your TOKEN service"),(0,o.kt)("admonition",{title:"wait for token gateway getting full started",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The docker command in the previous step might need some time to getting fully started."),(0,o.kt)("p",{parentName:"admonition"},"Wait and read the docker container log messages carefully to make sure the server has been started before continue this step.")),(0,o.kt)("p",null,"Check your TOKEN availability by visiting ",(0,o.kt)("inlineCode",{parentName:"p"},"https://api.chatie.io/v0/hosties/${WECHATY_TOKEN}")),(0,o.kt)(r.Z,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"linux",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"echo HTTP/$(curl -s -o /dev/null -w '%{http_code}' https://api.chatie.io/v0/hosties/${WECHATY_TOKEN})\n"))),(0,o.kt)(l.Z,{value:"mac",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"echo HTTP/$(curl -s -o /dev/null -w '%{http_code}' https://api.chatie.io/v0/hosties/${WECHATY_TOKEN})\n"))),(0,o.kt)(l.Z,{value:"windows",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# echo HTTP/$(curl -s -o /dev/null -w '%{http_code}' https://api.chatie.io/v0/hosties/${WECHATY_TOKEN})\n# TODO: add windows version. (Pull Request is welcome!)\n")))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Succ: ",(0,o.kt)("inlineCode",{parentName:"li"},"HTTP/200")," means you are good, the TOKEN is ready to use."),(0,o.kt)("li",{parentName:"ol"},"Fail: ",(0,o.kt)("inlineCode",{parentName:"li"},"HTTP/404")," means the TOKEN is not registered successfully.")),(0,o.kt)("p",null,"If you get ",(0,o.kt)("inlineCode",{parentName:"p"},"HTTP/404"),", then you need to check the previous steps and troubleshoot which part has problems. If you find anything need to be reported, please feel free to submit an issue at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/puppet-services/issues"},"here")),(0,o.kt)("h4",{id:"using-wechaty-token-cli"},"Using ",(0,o.kt)("inlineCode",{parentName:"h4"},"wechaty-token")," CLI"),(0,o.kt)("p",null,"You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"wechaty-token")," CLI command to check the TOKEN status."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ npm install --global wechaty-token\n+ wechaty-token@0.4.3\nupdated 1 package in 2.654s\n\n$ wechaty-token --help\nwechaty-token <subcommand>\n> Wechaty utility for discovering and generating tokens\n\nwhere <subcommand> can be one of:\n\n- generate - Generate a new Wechaty Token\n- discover - Wechaty TOKEN Service Discovery\n\nFor more help, try running `wechaty-token <subcommand> --help`\n\n$ wechaty-token discover puppet_not_exist_token\nNotFound\n\n$ wechaty-token discover ${WECHATY_TOKEN}\n{ host: '1.2.3.4', port: 5678 }\n")),(0,o.kt)("p",null,"Learn more about the TOKEN from ",(0,o.kt)("a",{parentName:"p",href:"/docs/specs/token"},"Wechaty Puppet Service TOKEN Specification"),"."),(0,o.kt)("h3",{id:"-congratulations-you-are-all-set"},"\ud83c\udf89 Congratulations! You are all set"),(0,o.kt)("p",null,"Your Wechaty Puppet Service will be ready to service for ",(0,o.kt)("a",{parentName:"p",href:"/docs/polyglot/"},"Polyglot Wechaty"),"!"),(0,o.kt)("h2",{id:"all-in-one-command"},"All in One Command"),(0,o.kt)("p",null,"For use Wechaty Token Gateway with ease, you can copy/paste the following code (with modifications for your need) in your bash shell:"),(0,o.kt)(r.Z,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"linux",mdxType:"TabItem"},(0,o.kt)(i.default,{mdxType:"TokenGatewayUnix"})),(0,o.kt)(l.Z,{value:"mac",mdxType:"TabItem"},(0,o.kt)(i.default,{mdxType:"TokenGatewayUnix"})),(0,o.kt)(l.Z,{value:"windows",mdxType:"TabItem"},(0,o.kt)(p.default,{mdxType:"TokenGatewayWin32"}))),(0,o.kt)("p",null,"I hope you enjoy it!"),(0,o.kt)("h2",{id:"blogs"},"Blogs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2021/02/03/python-wechaty-for-padlocal-puppet-service/"},"Python Wechaty\u5982\u4f55\u4f7f\u7528PadLocal Puppet Service, Biofer, Feb, 3, 2021")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2021/01/28/csharp-wechaty-for-padlocal-puppet-service/"},".NET Wechaty\u5982\u4f55\u4f7f\u7528PadLocal Puppet Service, Darren, Jan 28, 2021"))),(0,o.kt)("h2",{id:"history"},"History"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Using your Puppet PadLocal token with Python, Java, and Go Wechaty ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty/discussions/1985"},"wechaty/wechaty#1985")),(0,o.kt)("li",{parentName:"ol"},"How to create your own Wechaty Puppet Service Token with the Web Protocol ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty/discussions/1986"},"wechaty/wechaty#1986")),(0,o.kt)("li",{parentName:"ol"},"Using PadLocal Token with Polyglot Wechaty via Token Gateway ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/wechaty/puppet-services/issues/84"},"wechaty/puppet-services#84")),(0,o.kt)("li",{parentName:"ol"},"Wechaty is All You Need: Python, Go, and Java Translation Project ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty/discussions/1927"},"wechaty/wechaty#1927"))),(0,o.kt)("h2",{id:"support"},"Support"),(0,o.kt)("p",null,"You can ",(0,o.kt)("a",{parentName:"p",href:"https://gitter.im/wechaty/wechaty"},"join our Gitter")," network if you aren\u2019t already a member."))}y.isMDXComponent=!0},13322:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var n=a(87462),o=(a(67294),a(3905));const r={},l=void 0,i={unversionedId:"puppet-services/transclusions/token-gateway-unix",id:"puppet-services/transclusions/token-gateway-unix",title:"token-gateway-unix",description:"",source:"@site/docs/puppet-services/transclusions/token-gateway-unix.mdx",sourceDirName:"puppet-services/transclusions",slug:"/puppet-services/transclusions/token-gateway-unix",permalink:"/docs/puppet-services/transclusions/token-gateway-unix",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/puppet-services/transclusions/token-gateway-unix.mdx",tags:[],version:"current",lastUpdatedBy:"Huan",lastUpdatedAt:1624043380,formattedLastUpdatedAt:"Jun 18, 2021",frontMatter:{}},p={},s=[],u={toc:s};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'# Step 1\ndocker pull wechaty/wechaty\n\n# Step 2\n#   here we are using wechaty-puppet-wechat for example\n#   replace it to fit your needs\nexport WECHATY_PUPPET=wechaty-puppet-wechat\n\n# Step 3\nexport WECHATY_TOKEN=$(curl -s https://www.uuidgenerator.net/api/version4)\necho "WECHATY_TOKEN=$WECHATY_TOKEN"\n\n# Step 4\nexport WECHATY_PUPPET_SERVER_PORT=8788\n\n# Step 5\nexport WECHATY_LOG="verbose"\n\n# Step 6\ndocker run \\\n  -d \\\n  -ti \\\n  --name wechaty_puppet_service_token_gateway \\\n  --rm \\\n  --privileged \\\n  --network=host \\\n  -e WECHATY_LOG \\\n  -e WECHATY_PUPPET \\\n  -e WECHATY_PUPPET_SERVER_PORT \\\n  -e WECHATY_TOKEN \\\n  wechaty/wechaty\n\n# Step 7\nexport HTTP_CODE=$(curl -s -o /dev/null -w \'%{http_code}\' https://api.chatie.io/v0/hosties/${WECHATY_TOKEN})\nif [ "$HTTP_CODE" == 200 ]; then\n  echo "Wechaty Puppet Service TOKEN ${WECHATY_TOKEN} online status:"\n  curl https://api.chatie.io/v0/hosties/${WECHATY_TOKEN}\n  echo\nelse\n  >&2 echo "ERROR: Wechaty Puppet Service TOKEN ${WECHATY_TOKEN} out of service"\nfi\n\n# Step 8 \ud83c\udf89\n')))}c.isMDXComponent=!0},89226:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var n=a(87462),o=(a(67294),a(3905));const r={},l=void 0,i={unversionedId:"puppet-services/transclusions/token-gateway-win32",id:"puppet-services/transclusions/token-gateway-win32",title:"token-gateway-win32",description:"",source:"@site/docs/puppet-services/transclusions/token-gateway-win32.mdx",sourceDirName:"puppet-services/transclusions",slug:"/puppet-services/transclusions/token-gateway-win32",permalink:"/docs/puppet-services/transclusions/token-gateway-win32",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/puppet-services/transclusions/token-gateway-win32.mdx",tags:[],version:"current",lastUpdatedBy:"Huan",lastUpdatedAt:1624043380,formattedLastUpdatedAt:"Jun 18, 2021",frontMatter:{}},p={},s=[],u={toc:s};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'#\n# Huan(202006): To be fixed for Win32\n#\n\n# Step 1\ndocker pull wechaty/wechaty\n\n# Step 2\n#   here we are using wechaty-puppet-wechat for example\n#   replace it to fit your needs\nset WECHATY_PUPPET=wechaty-puppet-wechat\n\n# Step 3\nset WECHATY_TOKEN=$(curl -s https://www.uuidgenerator.net/api/version4)\necho "WECHATY_TOKEN=%WECHATY_TOKEN%"\n\n# Step 4\nset WECHATY_PUPPET_SERVER_PORT=8788\n\n# Step 5\nset WECHATY_LOG="verbose"\n\n# Step 6\ndocker run \\\n  -d \\\n  -ti \\\n  --name wechaty_puppet_service_token_gateway \\\n  --rm \\\n  --privileged \\\n  --network=host \\\n  -e WECHATY_LOG \\\n  -e WECHATY_PUPPET \\\n  -e WECHATY_PUPPET_SERVER_PORT \\\n  -e WECHATY_TOKEN \\\n  wechaty/wechaty\n\n# Step 7\nset HTTP_CODE=$(curl -s -o /dev/null -w \'%{http_code}\' https://api.chatie.io/v0/hosties/${WECHATY_TOKEN})\nif [ "$HTTP_CODE" == 200 ]; then\n  echo "Wechaty Puppet Service TOKEN ${WECHATY_TOKEN} online status:"\n  curl https://api.chatie.io/v0/hosties/${WECHATY_TOKEN}\n  echo\nelse\n  >&2 echo "ERROR: Wechaty Puppet Service TOKEN ${WECHATY_TOKEN} out of service"\nfi\n\n# Step 8 \ud83c\udf89\n')))}c.isMDXComponent=!0}}]);
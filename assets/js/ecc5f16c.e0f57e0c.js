"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[898],{4137:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(h,o(o({ref:t},p),{},{components:r})):n.createElement(h,o({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9729:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(4137));const i={},o="Recap: What we've learned",s={unversionedId:"Learnings-and-Resources",id:"Learnings-and-Resources",title:"Recap: What we've learned",description:"We hope that in the last hour, you've learned what natural language generative AI models are and how they work, how to access them in Azure OpenAI Service, and started on the path to building applications with them. Here are some key points to remember:",source:"@site/docs/80-Learnings-and-Resources.md",sourceDirName:".",slug:"/Learnings-and-Resources",permalink:"/AzureOpenAIService-Workshop/Learnings-and-Resources",draft:!1,editUrl:"https://hnky.github.io/AzureOpenAIService-Workshop/tree/main/docs/80-Learnings-and-Resources.md",tags:[],version:"current",sidebarPosition:80,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Prompt Engineering",permalink:"/AzureOpenAIService-Workshop/Prompt-Engineering"},next:{title:"Other things to try",permalink:"/AzureOpenAIService-Workshop/Extra-Credit"}},l={},c=[{value:"Additional Resources",id:"additional-resources",level:2},{value:"Further reading",id:"further-reading",level:2},{value:"Next Steps",id:"next-steps",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"recap-what-weve-learned"},"Recap: What we've learned"),(0,a.kt)("p",null,"We hope that in the last hour, you've learned what natural language generative AI models are and how they work, how to access them in Azure OpenAI Service, and started on the path to building applications with them. Here are some key points to remember:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Generative AI models can generate humanlike text, images, and code"),(0,a.kt)("li",{parentName:"ul"},"Generative AI models are stateless: they do not learn, and are constrained by their training data which is frozen at a fixed point in time"),(0,a.kt)("li",{parentName:"ul"},"Azure OpenAI Service is a managed service that provides access to state-of-the-art natural language generative AI models, including ChatGPT and GPT-4 from OpenAI with the security and enterprise promise of Azure."),(0,a.kt)("li",{parentName:"ul"},"Azure OpenAI Service provides a simple REST API for accessing these models"),(0,a.kt)("li",{parentName:"ul"},'Prompt engineering is a technique for "grounding" generative AI models, and can be used to influence the style of their output, provide factual information, and constrain their behavior.')),(0,a.kt)("h2",{id:"additional-resources"},"Additional Resources"),(0,a.kt)("p",null,"Here are a few resources to help you learn more about Azure OpenAI Service:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Microsoft Learn module: ",(0,a.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/training/modules/explore-azure-openai/"},"Intro to Azure OpenAI Service")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/azure/cognitive-services/openai/"},"Azure OpenAI Service documentation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/en-us/products/cognitive-services/openai-service/#pricing"},"Azure OpenAI Service pricing")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Azure-Samples/azure-ai"},"Azure AI Hub"),", a curated collection with examples and applications of Azure OpenAI Serviice"),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/legal/cognitive-services/openai/transparency-note"},"Transparency Note for Azure OpenAI Service")," provides details on the capabilities, use cases and limitations of Azure OpenAI models. ")),(0,a.kt)("h2",{id:"further-reading"},"Further reading"),(0,a.kt)("p",null,"We didn't cover these topics in this short session, but here are some related topics of interest:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/azure/cognitive-services/openai/how-to/work-with-code"},"Codex models and Azure OpenAI Service"),'. Generative AI can understand and generate computer code, too. This article covers the "Codex" models available in Azure OpenAI Service.'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://techcommunity.microsoft.com/t5/ai-applied-ai-blog/revolutionize-your-enterprise-data-with-chatgpt-next-gen-apps-w/ba-p/3762087"},"Revolutionize your Enterprise Data with ChatGPT"),', an architecture for "chatting with your own data".'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/azure/cognitive-services/openai/tutorials/embeddings?tabs=command-line"},"Tutorial: Explore Azure OpenAI Service embeddings and document search"))),(0,a.kt)("h2",{id:"next-steps"},"Next Steps"),(0,a.kt)("p",null,"That's it for this module! But if you still have some time to spare, and have access to Bing Chat, we've provided some things to try in the next section."))}d.isMDXComponent=!0}}]);
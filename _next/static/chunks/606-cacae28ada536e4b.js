(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[606],{7349:function(e,t,r){"use strict";var n=r(5893);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}t.Z=function(e){var t=s({},e);return(0,n.jsx)("img",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({alt:"image"},t))}},1606:function(e,t,r){"use strict";r.d(t,{J:function(){return j}});var n=r(5893),a=r(7294),s=r(3194),i=r(7349);var l=r(4557),c=r(2292),o=function(e){var t=e.children,r=(0,a.useRef)(null),s=(0,a.useState)(!1),i=s[0],l=s[1],c=(0,a.useState)(!1),o=c[0],d=c[1];return(0,n.jsxs)("div",{ref:r,onMouseEnter:function(){l(!0)},onMouseLeave:function(){l(!1),d(!1)},className:"relative",children:[i&&(0,n.jsx)("button",{"aria-label":"Copy code",type:"button",className:"absolute right-2 top-2 h-8 w-8 rounded border-2 bg-gray-700 p-1 dark:bg-gray-800 ".concat(o?"border-green-400 focus:border-green-400 focus:outline-none":"border-gray-300"),onClick:function(){d(!0),navigator.clipboard.writeText(r.current.textContent),setTimeout((function(){d(!1)}),2e3)},children:(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",stroke:"currentColor",fill:"none",className:o?"text-green-400":"text-gray-300",children:o?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"})}):(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"})})})}),(0,n.jsx)("pre",{children:t})]})},d=r(4051),u=r.n(d),x=r(7059),m=r.n(x);function h(e,t,r,n,a,s,i){try{var l=e[s](i),c=l.value}catch(o){return void r(o)}l.done?t(c):Promise.resolve(c).then(n,a)}var p=function(e){var t=e.title,r=void 0===t?"\u8ba2\u9605":t,s=(0,a.useRef)(null),i=(0,a.useState)(!1),l=i[0],c=i[1],o=(0,a.useState)(""),d=o[0],x=o[1],p=(0,a.useState)(!1),f=p[0],g=p[1],y=function(){var e,t=(e=u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("/api/".concat(m().newsletter.provider),{body:JSON.stringify({email:s.current.value}),headers:{"Content-Type":"application/json"},method:"POST"});case 3:return r=e.sent,e.next=6,r.json();case 6:if(!e.sent.error){e.next=11;break}return c(!0),x("Your e-mail address is invalid or you are already subscribed!"),e.abrupt("return");case 11:s.current.value="",c(!1),g(!0),x("Successfully! \ud83c\udf89 You are now subscribed.");case 15:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,a){var s=e.apply(t,r);function i(e){h(s,n,a,i,l,"next",e)}function l(e){h(s,n,a,i,l,"throw",e)}i(void 0)}))});return function(e){return t.apply(this,arguments)}}();return(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"pb-1 text-lg font-semibold text-gray-800 dark:text-gray-100",children:r}),(0,n.jsxs)("form",{className:"flex flex-col sm:flex-row",onSubmit:y,children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{className:"sr-only",htmlFor:"email-input",children:"Email address"}),(0,n.jsx)("input",{autoComplete:"email",className:"w-72 rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-black",id:"email-input",name:"email",placeholder:f?"You're subscribed !  \ud83c\udf89":"Enter your email",ref:s,required:!0,type:"email",disabled:f})]}),(0,n.jsx)("div",{className:"mt-2 flex w-full rounded-md shadow-sm sm:mt-0 sm:ml-3",children:(0,n.jsx)("button",{className:"w-full rounded-md bg-primary-500 py-2 px-4 font-medium text-white sm:py-0 ".concat(f?"cursor-default":"hover:bg-primary-700 dark:hover:bg-primary-400"," focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 dark:ring-offset-black"),type:"submit",disabled:f,children:f?"Thank you!":"Sign up"})})]}),l&&(0,n.jsx)("div",{className:"w-72 pt-2 text-sm text-red-500 dark:text-red-400 sm:w-96",children:d})]})};function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){f(e,t,r[t])}))}return e}function y(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var v={Image:i.Z,Video:function(e){var t=e.src;return(0,n.jsx)("iframe",{src:t,scrolling:"no",className:"aspect-video w-full",frameBorder:"no",allowFullScreen:!0})},TOCInline:c.Z,a:l.Z,pre:o,wrapper:function(e){var t=e.layout,a=y(e,["layout"]),s=r(7982)("./".concat(t)).default;return(0,n.jsx)(s,g({},a))},BlogNewsletterForm:function(e){var t=e.title;return(0,n.jsx)("div",{className:"flex items-center justify-center",children:(0,n.jsx)("div",{className:"bg-gray-100 p-6 dark:bg-gray-800 sm:px-14 sm:py-8",children:(0,n.jsx)(p,{title:t})})})}},j=function(e){var t=e.layout,r=e.mdxSource,i=y(e,["layout","mdxSource"]),l=(0,a.useMemo)((function(){return(0,s.getMDXComponent)(r)}),[r]);return(0,n.jsx)(l,g({layout:t,components:v},i))}},9950:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(5893);function a(e){var t=e.children;return(0,n.jsx)("h1",{className:"text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14",children:t})}},1098:function(e,t,r){"use strict";r.d(t,{TQ:function(){return o},$t:function(){return d},Uy:function(){return u}});var n=r(5893),a=r(9008),s=r(1163),i=r(7059),l=r.n(i),c=function(e){var t=e.title,r=e.description,i=e.ogType,c=e.ogImage,o=e.twImage,d=(0,s.useRouter)();return(0,n.jsxs)(a.default,{children:[(0,n.jsx)("title",{children:t}),(0,n.jsx)("meta",{name:"robots",content:"follow, index"}),(0,n.jsx)("meta",{name:"description",content:r}),(0,n.jsx)("meta",{property:"og:url",content:"".concat(l().siteUrl).concat(d.asPath)}),(0,n.jsx)("meta",{property:"og:type",content:i}),(0,n.jsx)("meta",{property:"og:site_name",content:l().title}),(0,n.jsx)("meta",{property:"og:description",content:r}),(0,n.jsx)("meta",{property:"og:title",content:t}),Array.isArray(c)?c.map((function(e){var t=e.url;return(0,n.jsx)("meta",{property:"og:image",content:t},t)})):(0,n.jsx)("meta",{property:"og:image",content:c},c),(0,n.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.jsx)("meta",{name:"twitter:site",content:l().twitter}),(0,n.jsx)("meta",{name:"twitter:title",content:t}),(0,n.jsx)("meta",{name:"twitter:description",content:r}),(0,n.jsx)("meta",{name:"twitter:image",content:o})]})},o=function(e){var t=e.title,r=e.description,a=l().siteUrl+l().socialBanner,s=l().siteUrl+l().socialBanner;return(0,n.jsx)(c,{title:t,description:r,ogType:"website",ogImage:a,twImage:s})},d=function(e){var t=e.title,r=e.description,i=l().siteUrl+l().socialBanner,o=l().siteUrl+l().socialBanner,d=(0,s.useRouter)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c,{title:t,description:r,ogType:"website",ogImage:i,twImage:o}),(0,n.jsx)(a.default,{children:(0,n.jsx)("link",{rel:"alternate",type:"application/rss+xml",title:"".concat(r," - RSS feed"),href:"".concat(l().siteUrl).concat(d.asPath,"/feed.xml")})})]})},u=function(e){var t=e.authorDetails,r=e.title,s=e.summary,i=e.date,o=e.lastmod,d=e.url,u=e.images,x=void 0===u?[]:u,m=new Date(i).toISOString(),h=new Date(o||i).toISOString(),p=(0===x.length?[l().socialBanner]:"string"===typeof x?[x]:x).map((function(e){return{"@type":"ImageObject",url:e.indexOf("http")>-1?e:"".concat(l().siteUrl).concat(e)}})),f={"@context":"https://schema.org","@type":"Article",mainEntityOfPage:{"@type":"WebPage","@id":d},headline:r,image:p,datePublished:m,dateModified:h,author:t?t.map((function(e){return{"@type":"Person",name:e.name}})):{"@type":"Person",name:l().author},publisher:{"@type":"Organization",name:l().author,logo:{"@type":"ImageObject",url:"".concat(l().siteUrl).concat(l().siteLogo)}},description:s},g=p[0].url;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c,{title:r,description:s,ogType:"article",ogImage:p,twImage:g}),(0,n.jsxs)(a.default,{children:[i&&(0,n.jsx)("meta",{property:"article:published_time",content:m}),o&&(0,n.jsx)("meta",{property:"article:modified_time",content:h}),(0,n.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(f,null,2)}})]})]})}},1725:function(e,t,r){"use strict";var n=r(5893),a=r(7294);t.Z=function(){var e=(0,a.useState)(!1),t=e[0],r=e[1];(0,a.useEffect)((function(){var e=function(){window.scrollY>50?r(!0):r(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]);return(0,n.jsxs)("div",{className:"fixed right-8 bottom-8 hidden flex-col gap-3 ".concat(t?"md:flex":"md:hidden"),children:[(0,n.jsx)("button",{"aria-label":"Scroll To Comment",type:"button",onClick:function(){document.getElementById("comment").scrollIntoView()},className:"rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600",children:(0,n.jsx)("svg",{className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:(0,n.jsx)("path",{fillRule:"evenodd",d:"M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z",clipRule:"evenodd"})})}),(0,n.jsx)("button",{"aria-label":"Scroll To Top",type:"button",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},className:"rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600",children:(0,n.jsx)("svg",{className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:(0,n.jsx)("path",{fillRule:"evenodd",d:"M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z",clipRule:"evenodd"})})})]})}},2292:function(e,t,r){"use strict";var n=r(5893);t.Z=function(e){var t=e.toc,r=e.indentDepth,a=void 0===r?3:r,s=e.fromHeading,i=void 0===s?1:s,l=e.toHeading,c=void 0===l?6:l,o=e.asDisclosure,d=void 0===o||o,u=e.exclude,x=void 0===u?"":u,m=Array.isArray(x)?new RegExp("^("+x.join("|")+")$","i"):new RegExp("^("+x+")$","i"),h=t.filter((function(e){return e.depth>=i&&e.depth<=c&&!m.test(e.value)})),p=(0,n.jsx)("ul",{className:"py-4 text-sm font-medium leading-relaxed xl:border-b xl:border-gray-200 xl:dark:border-gray-700",children:h.map((function(e){return(0,n.jsx)("li",{className:"".concat(e.depth>=a&&"ml-6"),children:(0,n.jsx)("a",{className:"text-primary-500",href:e.url,children:e.value})},e.value)}))});return(0,n.jsx)(n.Fragment,{children:d?(0,n.jsxs)("details",{open:!0,children:[(0,n.jsx)("summary",{className:"ml-6 pt-2 pb-2 text-xl font-bold",children:"\u76ee\u5f55"}),(0,n.jsx)("div",{className:"ml-6",children:p})]}):p})}},1067:function(e,t,r){"use strict";var n=r(5893),a=r(1664),s=r(9022);t.Z=function(e){var t=e.text;return(0,n.jsx)(a.default,{href:"/tags/".concat((0,s.Z)(t)),children:(0,n.jsx)("a",{className:"mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:t.split(" ").join("-")})})}},7383:function(e,t,r){"use strict";var n=r(5893),a=r(7059),s=r.n(a),i=r(5152),l=(0,i.default)((function(){return r.e(282).then(r.bind(r,5282))}),{loadableGenerated:{webpack:function(){return[5282]}},ssr:!1}),c=(0,i.default)((function(){return r.e(369).then(r.bind(r,1369))}),{loadableGenerated:{webpack:function(){return[1369]}},ssr:!1}),o=(0,i.default)((function(){return r.e(524).then(r.bind(r,9524))}),{loadableGenerated:{webpack:function(){return[9524]}},ssr:!1});t.Z=function(e){var t,r=e.frontMatter;switch(s().comment.giscusConfig.mapping||s().comment.utterancesConfig.issueTerm){case"pathname":t=r.slug;break;case"url":t=window.location.href;break;case"title":t=r.title}return(0,n.jsxs)("div",{id:"comment",children:[s().comment&&"giscus"===s().comment.provider&&(0,n.jsx)(c,{mapping:t}),s().comment&&"utterances"===s().comment.provider&&(0,n.jsx)(l,{issueTerm:t}),s().comment&&"disqus"===s().comment.provider&&(0,n.jsx)(o,{frontMatter:r})]})}},3291:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return N}});var n,a,s=r(5893),i=r(7294);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}var c;function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}var d;function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u.apply(this,arguments)}var x;function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},m.apply(this,arguments)}var h,p;function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},f.apply(this,arguments)}var g;function y(){return y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},y.apply(this,arguments)}var v={mail:function(e){return i.createElement("svg",l({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},e),n||(n=i.createElement("path",{d:"M2.003 5.884 10 9.882l7.997-3.998A2 2 0 0 0 16 4H4a2 2 0 0 0-1.997 1.884z"})),a||(a=i.createElement("path",{d:"m18 8.118-8 4-8-4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.118z"})))},github:function(e){return i.createElement("svg",o({viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},e),c||(c=i.createElement("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"})))},juejin:function(e){return i.createElement("svg",f({className:"juejin_svg__icon",viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},e),h||(h=i.createElement("path",{d:"M465.189 161.792c-22.967 18.14-44.325 35.109-47.397 37.742l-5.851 4.68 10.971 8.632c5.998 4.827 11.85 9.508 13.02 10.532 1.17 1.024 17.993 14.336 37.156 29.696l34.962 27.795 5.267-3.95c2.925-2.194 23.259-18.432 45.348-35.986 21.943-17.555 41.253-32.768 42.716-33.646 1.609-1.024 2.779-2.194 2.779-2.78 0-.438-9.655-8.63-21.504-17.846-11.995-9.363-22.674-17.847-23.845-18.871-15.945-13.02-49.737-39.059-50.76-39.059-.586.147-19.896 14.922-42.862 33.061zm233.325 180.37C507.465 493.275 508.928 492.105 505.417 489.911c-3.072-1.902-11.556-8.485-64.073-50.03-9.07-7.168-18.578-14.775-21.358-16.823-2.78-2.194-8.777-6.875-13.312-10.532-4.68-3.657-10.679-8.339-13.312-10.533-13.165-10.24-71.095-56.027-102.107-80.457-5.852-4.681-11.41-8.485-12.142-8.485-.731 0-10.971 7.754-22.674 17.116-11.703 9.508-22.674 18.286-24.284 19.456-1.755 1.17-5.12 3.95-7.46 6.144-2.34 2.34-4.828 4.096-5.413 4.096-3.072 0-.731 3.072 6.437 8.777 4.096 3.218 8.777 6.875 10.094 8.046 1.316 1.024 10.24 8.045 19.748 15.506s23.26 18.286 30.428 23.99c19.31 15.215 31.89 25.308 127.853 101.084 47.836 37.742 88.796 69.779 90.844 71.095 3.657 2.487 3.95 2.487 7.46-.292a1041.42 1041.42 0 0 0 16.092-12.727c6.875-5.413 14.775-11.703 17.554-13.897 30.135-23.699 80.018-63.05 81.774-64.512 1.17-1.024 12.434-9.802 24.868-19.603s37.888-29.696 56.32-44.324c18.579-14.629 46.227-36.425 61.733-48.567 15.506-12.142 27.794-22.528 27.502-23.26-.878-1.17-57.637-47.104-59.978-48.274-.731-.439-18.578 12.727-39.497 29.257z"})),p||(p=i.createElement("path",{d:"M57.93 489.326c-15.215 12.288-28.527 23.405-29.697 24.576-2.34 2.194-5.412-.44 80.018 66.852 33.207 26.185 32.622 25.747 57.637 45.495 10.386 8.192 36.279 28.672 57.783 45.495 38.18 30.135 44.91 35.401 52.663 41.545 2.048 1.756 22.967 18.14 46.372 36.572 23.26 18.432 74.167 58.514 112.933 89.088 38.912 30.573 71.095 55.734 71.826 56.027.732.293 7.46-4.389 14.921-10.386 21.797-16.97 90.259-70.949 101.523-79.872 5.705-4.535 12.873-10.24 15.945-12.58 3.072-2.488 6.436-5.12 7.314-5.852.878-.878 11.85-9.509 24.283-19.31 20.773-16.091 59.1-46.226 64.366-50.615 1.17-1.024 5.12-4.096 8.777-6.875 3.657-2.78 7.9-6.29 9.509-7.607 1.609-1.317 14.775-11.703 29.257-23.113 29.11-22.82 42.277-33.207 88.503-69.632 17.262-13.605 32.475-25.454 33.646-26.478 2.486-2.048 31.451-24.869 44.617-35.255 4.827-3.657 9.07-7.168 9.508-7.607.44-.585 5.998-4.827 12.435-9.8 6.436-4.828 13.165-10.24 15.067-11.85l3.365-2.926-9.948-7.753c-5.412-4.388-10.24-8.192-10.679-8.63-1.17-1.317-22.381-18.433-30.135-24.284-3.95-3.072-7.314-5.998-7.606-6.73-1.317-3.071-6.73.147-29.258 17.994-13.458 10.532-25.746 20.187-27.355 21.504-1.61 1.463-10.533 8.338-19.749 15.652-9.216 7.168-17.115 13.459-17.554 13.898-.439.438-6.583 5.412-13.897 10.971-7.168 5.559-15.214 11.703-17.7 13.75-4.974 4.097-5.413 4.39-20.334 16.239-5.56 4.388-11.264 8.777-12.435 9.8-1.17 1.025-20.333 16.092-42.422 33.354-22.09 17.408-41.546 32.768-43.155 34.084-1.609 1.463-14.482 11.557-28.525 22.528s-40.814 32.037-59.539 46.812c-18.578 14.775-42.276 33.353-52.516 41.399s-23.26 18.285-28.965 22.82l-10.386 8.339-4.389-3.072c-2.34-1.756-4.68-3.511-5.12-3.95-.439-.439-4.973-4.096-10.24-8.046-11.849-9.216-14.482-11.264-16.676-13.166-.878-.877-4.243-3.51-7.46-5.851-3.22-2.487-6.145-4.681-6.584-5.12-.439-.439-6.875-5.705-14.482-11.703-7.607-5.851-14.921-11.556-16.091-12.58-1.317-1.17-17.116-13.605-35.255-27.795-17.993-14.19-35.109-27.648-38.035-29.842-5.705-4.681-33.499-26.624-125.074-98.743-34.523-27.209-72.704-57.344-84.846-66.852-49.737-39.498-55.15-43.594-56.905-43.447-.877 0-14.043 10.24-29.257 22.528z"})))},zhihu:function(e){return i.createElement("svg",y({className:"zhihu_svg__icon",viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},e),g||(g=i.createElement("path",{d:"M564.7 230.1V803h60l25.2 71.4L756.3 803h131.5V230.1H564.7zm247.7 497h-59.9l-75.1 50.4-17.8-50.4h-18V308.3h170.7v418.8zM526.1 486.9H393.3c2.1-44.9 4.3-104.3 6.6-172.9h130.9l-.1-8.1c0-.6-.2-14.7-2.3-29.1-2.1-15-6.6-34.9-21-34.9H287.8c4.4-20.6 15.7-69.7 29.4-93.8l6.4-11.2-12.9-.7c-.8 0-19.6-.9-41.4 10.6-35.7 19-51.7 56.4-58.7 84.4-18.4 73.1-44.6 123.9-55.7 145.6-3.3 6.4-5.3 10.2-6.2 12.8-1.8 4.9-.8 9.8 2.8 13 10.5 9.5 38.2-2.9 38.5-3 .6-.3 1.3-.6 2.2-1 13.9-6.3 55.1-25 69.8-84.5h56.7c.7 32.2 3.1 138.4 2.9 172.9h-141l-2.1 1.5c-23.1 16.9-30.5 63.2-30.8 65.2l-1.4 9.2h167c-12.3 78.3-26.5 113.4-34 127.4-3.7 7-7.3 14-10.7 20.8-21.3 42.2-43.4 85.8-126.3 153.6-3.6 2.8-7 8-4.8 13.7 2.4 6.3 9.3 9.1 24.6 9.1 5.4 0 11.8-.3 19.4-1 49.9-4.4 100.8-18 135.1-87.6 17-35.1 31.7-71.7 43.9-108.9L497 850l5-12c.8-1.9 19-46.3 5.1-95.9l-.5-1.8-108.1-123-22 16.6c6.4-26.1 10.6-49.9 12.5-71.1h158.7v-8c0-40.1-18.5-63.9-19.2-64.9l-2.4-3z"})))},linkedin:function(e){return i.createElement("svg",u({viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},e),d||(d=i.createElement("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})))},twitter:function(e){return i.createElement("svg",m({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},e),x||(x=i.createElement("path",{d:"M23.953 4.57a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.06a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.936 4.936 0 0 0 4.604 3.417 9.867 9.867 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0 0 24 4.59z"})))}},j=function(e){var t=e.kind,r=e.href,n=e.size,a=void 0===n?8:n;if(!r||"mail"===t&&!/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(r))return null;var i=v[t];return(0,s.jsxs)("a",{className:"text-sm text-gray-500 transition hover:text-gray-600",target:"_blank",rel:"noopener noreferrer",href:r,children:[(0,s.jsx)("span",{className:"sr-only",children:t}),(0,s.jsx)(i,{className:"fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 h-".concat(a," w-").concat(a)})]})},b=r(7349),w=r(1098);function N(e){var t=e.children,r=e.frontMatter,n=r.name,a=r.avatar,i=r.occupation,l=r.company,c=r.email,o=r.juejin,d=r.zhihu,u=r.github;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(w.TQ,{title:"\u5173\u4e8e - ".concat(n),description:"\u5173\u4e8e\u6211 - ".concat(n)}),(0,s.jsx)("div",{className:"divide-y",children:(0,s.jsxs)("div",{className:"items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0",children:[(0,s.jsxs)("div",{className:"flex flex-col items-center space-x-2 pt-8",children:[(0,s.jsx)(b.Z,{src:a,alt:"\u5934\u50cf",width:"192px",height:"192px",className:"h-48 w-48 rounded-full"}),(0,s.jsx)("h3",{className:"pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight",children:n}),(0,s.jsx)("div",{className:"text-gray-500 dark:text-gray-400",children:i}),(0,s.jsx)("div",{className:"text-gray-500 dark:text-gray-400",children:l}),(0,s.jsxs)("div",{className:"flex space-x-3 pt-6",children:[(0,s.jsx)(j,{kind:"mail",href:"mailto:".concat(c),size:6}),(0,s.jsx)(j,{kind:"github",href:u,size:6}),(0,s.jsx)(j,{kind:"juejin",href:o,size:6}),(0,s.jsx)(j,{kind:"zhihu",href:d,size:6})]})]}),(0,s.jsx)("div",{className:"prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2",children:t})]})})]})}},1545:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var n=r(5893),a=r(7294),s=r(4557),i=r(1067),l=r(7062);function c(e){var t=e.slug,r=e.date,a=e.title,c=e.summary,o=e.tags,d=e.images,u=Array.isArray(d)?d[0]:d;return(0,n.jsx)("li",{className:"py-12",children:(0,n.jsx)("article",{children:(0,n.jsxs)("div",{className:"space-y-2 xl:grid xl:grid-cols-4 xl:items-start xl:gap-5 xl:space-y-0",children:[(0,n.jsxs)("dl",{className:"xl:col-span-1",children:[u?(0,n.jsx)("dt",{className:"mb-4",children:(0,n.jsx)(s.Z,{href:"/blog/".concat(t),className:"block overflow-hidden rounded shadow-lg",title:a,children:(0,n.jsx)("img",{alt:a,className:"transform object-cover duration-200 hover:scale-110",src:u})})}):null,(0,n.jsx)("dd",{className:"sr-only",children:"\u53d1\u5e03\u65f6\u95f4"}),(0,n.jsx)("dd",{className:"text-base font-medium leading-6 text-gray-500 dark:text-gray-400",children:(0,n.jsx)("time",{dateTime:r,children:(0,l.Z)(r)})})]}),(0,n.jsxs)("div",{className:"space-y-4 xl:col-span-3",children:[(0,n.jsxs)("div",{className:"space-y-4",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{className:"text-2xl font-bold leading-8 tracking-tight",children:(0,n.jsx)(s.Z,{href:"/blog/".concat(t),className:"text-gray-900 dark:text-gray-100",children:a})}),(0,n.jsx)("div",{className:"mt-3 flex flex-wrap",children:o.map((function(e){return(0,n.jsx)(i.Z,{text:e},e)}))})]}),(0,n.jsx)("div",{className:"prose max-w-none text-gray-500 dark:text-gray-400",children:c})]}),(0,n.jsx)("div",{className:"text-base font-medium leading-6",children:(0,n.jsx)(s.Z,{href:"/blog/".concat(t),className:"text-primary-500 hover:text-primary-600 dark:hover:text-primary-400","aria-label":'Read "'.concat(a,'"'),children:"\u67e5\u770b\u66f4\u591a \u2192"})})]})]})})})}function o(e){var t=e.totalPages,r=e.currentPage,a=r-1>0,i=r+1<=t;return(0,n.jsx)("div",{className:"space-y-2 pt-6 pb-8 md:space-y-5",children:(0,n.jsxs)("nav",{className:"flex justify-between",children:[!a&&(0,n.jsx)("button",{className:"cursor-auto disabled:opacity-50",disabled:!a,children:"\u4e0a\u4e00\u9875"}),a&&(0,n.jsx)(s.Z,{href:r-1===1?"/blog/":"/blog/page/".concat(r-1),children:(0,n.jsx)("button",{children:"\u4e0a\u4e00\u9875"})}),(0,n.jsxs)("span",{children:[r," of ",t]}),!i&&(0,n.jsx)("button",{className:"cursor-auto disabled:opacity-50",disabled:!i,children:"\u4e0b\u4e00\u9875"}),i&&(0,n.jsx)(s.Z,{href:"/blog/page/".concat(r+1),children:(0,n.jsx)("button",{children:"\u4e0b\u4e00\u9875"})})]})})}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e){var t=e.posts,r=(e.title,e.initialDisplayPosts),s=void 0===r?[]:r,i=e.pagination,l=(0,a.useState)(""),u=l[0],x=l[1],m=t.filter((function(e){return(e.title+e.summary+e.tags.join(" ")).toLowerCase().includes(u.toLowerCase())})),h=s.length>0&&!u?s:m;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"divide-y",children:[(0,n.jsx)("div",{className:"space-y-2 pt-6 pb-8 md:space-y-5",children:(0,n.jsxs)("div",{className:"relative max-w-lg",children:[(0,n.jsx)("input",{"aria-label":"\u641c\u7d22\u6587\u7ae0",type:"text",onChange:function(e){return x(e.target.value)},placeholder:"\u641c\u7d22\u6587\u7ae0",className:"block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"}),(0,n.jsx)("svg",{className:"absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})]})}),(0,n.jsxs)("ul",{children:[!m.length&&"\u6682\u65e0\u6570\u636e",h.map((function(e){var t=e.slug;return(0,a.createElement)(c,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){d(e,t,r[t])}))}return e}({},e,{key:t}))}))]})]}),i&&i.totalPages>1&&!u&&(0,n.jsx)(o,{currentPage:i.currentPage,totalPages:i.totalPages})]})}},5278:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return b}});var n=r(5893),a=r(4557),s=r(9950),i=r(5431),l=r(1098),c=r(7349),o=r(1067),d=r(7059),u=r.n(d),x=r(7383),m=r(1725),h=r(7294);function p(){var e=function(){var e=(0,h.useState)(0),t=e[0],r=e[1];return(0,h.useEffect)((function(){var e=function(){var e=window.scrollY,t=document.body.scrollHeight-window.innerHeight;t&&r(100*Number((e/t).toFixed(2)))};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[]),t}();return(0,n.jsx)("div",{style:{transform:"translateX(".concat(e-100,"%)")},className:"fixed top-0 left-0 h-1 w-full bg-primary-500 backdrop-blur-3xl transition-transform duration-150"})}var f=r(2292);function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){g(e,t,r[t])}))}return e}var v=function(e){return"".concat(u().siteRepo,"/blob/main/data/blog/").concat(e)},j={weekday:"long",year:"numeric",month:"long",day:"numeric"};function b(e){var t=e.frontMatter,r=e.authorDetails,d=e.next,h=e.prev,g=e.children,b=t.slug,w=t.fileName,N=t.date,k=t.title,O=t.tags,P=t.images,S=Array.isArray(P)?P[0]:P;return(0,n.jsxs)(i.Z,{children:[(0,n.jsx)(l.Uy,y({url:"".concat(u().siteUrl,"/blog/").concat(b),authorDetails:r},t)),(0,n.jsx)(p,{}),(0,n.jsx)(m.Z,{}),(0,n.jsx)("article",{children:(0,n.jsxs)("div",{className:"xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700",children:[(0,n.jsx)("header",{className:"pt-6 xl:pb-6",children:(0,n.jsxs)("div",{className:"space-y-1 text-center",children:[(0,n.jsx)("dl",{className:"space-y-10",children:(0,n.jsxs)("div",{children:[(0,n.jsx)("dt",{className:"sr-only",children:"Published on"}),(0,n.jsx)("dd",{className:"text-base font-medium leading-6 text-gray-500 dark:text-gray-400",children:(0,n.jsx)("time",{dateTime:N,children:new Date(N).toLocaleDateString(u().locale,j)})})]})}),(0,n.jsx)("div",{children:(0,n.jsx)(s.Z,{children:k})})]})}),(0,n.jsxs)("div",{className:"divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0",style:{gridTemplateRows:"auto 1fr"},children:[(0,n.jsxs)("div",{className:"",children:[(0,n.jsxs)("dl",{className:"pt-6 pb-10 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700",children:[(0,n.jsx)("dt",{className:"sr-only",children:"Authors"}),(0,n.jsx)("dd",{children:(0,n.jsx)("ul",{className:"flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8",children:r.map((function(e){return(0,n.jsxs)("li",{className:"flex items-center space-x-2",children:[e.avatar&&(0,n.jsx)(c.Z,{src:e.avatar,width:"38px",height:"38px",alt:"avatar",className:"h-10 w-10 rounded-full"}),(0,n.jsxs)("dl",{className:"whitespace-nowrap text-sm font-medium leading-5",children:[(0,n.jsx)("dt",{className:"sr-only",children:"\u4f5c\u8005"}),(0,n.jsx)("dd",{className:"text-gray-900 dark:text-gray-100",children:e.name})]})]},e.name)}))})})]}),(0,n.jsx)("h2",{className:"pt-6 text-xs font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400",children:"\u76ee\u5f55"}),(0,n.jsx)(f.Z,{asDisclosure:!1,toc:e.toc})]}),(0,n.jsxs)("div",{className:"xl:col-span-3 xl:row-span-2 xl:pb-0",children:[S?(0,n.jsx)("div",{className:"mt-6",children:(0,n.jsx)("img",{alt:k,className:"w-full rounded object-cover shadow-lg",src:S})}):null,(0,n.jsx)("div",{className:"prose max-w-none break-words pt-10 pb-8 dark:prose-dark",children:g}),(0,n.jsxs)("div",{className:"border-t border-gray-200 pt-6 pb-6 text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300",children:[(0,n.jsx)("div",{className:"mb-3",children:(0,n.jsx)(c.Z,{alt:"runjs-cool",width:384,height:140,src:"/static/images/runjs-cool.webp"})}),(0,n.jsx)("span",{children:"\u5173\u6ce8\u5fae\u4fe1\u516c\u4f17\u53f7\uff0c\u83b7\u53d6\u6700\u65b0\u539f\u521b\u6587\u7ae0\uff08\u9996\u53d1\uff09"}),(0,n.jsx)(a.Z,{href:v(w),children:"View on GitHub"})]}),(0,n.jsx)(x.Z,{frontMatter:t})]}),(0,n.jsxs)("footer",{children:[(0,n.jsxs)("div",{className:"divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y",children:[O&&(0,n.jsxs)("div",{className:"py-4 xl:py-8",children:[(0,n.jsx)("h2",{className:"text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400",children:"\u6807\u7b7e"}),(0,n.jsx)("div",{className:"mt-3 flex flex-wrap",children:O.map((function(e){return(0,n.jsx)(o.Z,{text:e},e)}))})]}),(d||h)&&(0,n.jsxs)("div",{className:"flex justify-between py-4 xl:block xl:space-y-8 xl:py-8",children:[h&&(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{className:"text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400",children:"\u4e0a\u4e00\u7bc7 \u6587\u7ae0"}),(0,n.jsx)("div",{className:"mt-3 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:(0,n.jsx)(a.Z,{href:"/blog/".concat(h.slug),children:h.title})})]}),d&&(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{className:"text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400",children:"\u4e0b\u4e00\u7bc7 \u6587\u7ae0"}),(0,n.jsx)("div",{className:"mt-3 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:(0,n.jsx)(a.Z,{href:"/blog/".concat(d.slug),children:d.title})})]})]})]}),(0,n.jsx)("div",{className:"pt-4 xl:pt-8",children:(0,n.jsx)(a.Z,{href:"/blog",className:"text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:"\u2190 \u8fd4\u56de\u6587\u7ae0\u5217\u8868"})})]})]})]})})]})}},9333:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return p}});var n=r(5893),a=r(4557),s=r(9950),i=r(5431),l=r(1098),c=r(7059),o=r.n(c),d=r(7062),u=r(7383),x=r(1725);function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){m(e,t,r[t])}))}return e}function p(e){var t=e.frontMatter,r=e.next,c=e.prev,m=e.children,p=t.slug,f=t.date,g=t.title;return(0,n.jsxs)(i.Z,{children:[(0,n.jsx)(l.Uy,h({url:"".concat(o().siteUrl,"/blog/").concat(p)},t)),(0,n.jsx)(x.Z,{}),(0,n.jsx)("article",{children:(0,n.jsxs)("div",{children:[(0,n.jsx)("header",{children:(0,n.jsxs)("div",{className:"space-y-1 border-b border-gray-200 pb-10 text-center dark:border-gray-700",children:[(0,n.jsx)("dl",{children:(0,n.jsxs)("div",{children:[(0,n.jsx)("dt",{className:"sr-only",children:"Published on"}),(0,n.jsx)("dd",{className:"text-base font-medium leading-6 text-gray-500 dark:text-gray-400",children:(0,n.jsx)("time",{dateTime:f,children:(0,d.Z)(f)})})]})}),(0,n.jsx)("div",{children:(0,n.jsx)(s.Z,{children:g})})]})}),(0,n.jsxs)("div",{className:"divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:divide-y-0 ",style:{gridTemplateRows:"auto 1fr"},children:[(0,n.jsx)("div",{className:"divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0",children:(0,n.jsx)("div",{className:"prose max-w-none pt-10 pb-8 dark:prose-dark",children:m})}),(0,n.jsx)(u.Z,{frontMatter:t}),(0,n.jsx)("footer",{children:(0,n.jsxs)("div",{className:"flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base",children:[c&&(0,n.jsx)("div",{className:"pt-4 xl:pt-8",children:(0,n.jsxs)(a.Z,{href:"/blog/".concat(c.slug),className:"text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:["\u2190 ",c.title]})}),r&&(0,n.jsx)("div",{className:"pt-4 xl:pt-8",children:(0,n.jsxs)(a.Z,{href:"/blog/".concat(r.slug),className:"text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:[r.title," \u2192"]})})]})})]})]})})]})}},7062:function(e,t,r){"use strict";var n=r(7059),a=r.n(n);t.Z=function(e){return new Date(e).toLocaleDateString(a().locale,{year:"numeric",month:"long",day:"numeric"})}},9022:function(e,t,r){"use strict";var n=r(9671);t.Z=function(e){return(0,n.slug)(e)}},7982:function(e,t,r){var n={"./AuthorLayout":3291,"./AuthorLayout.tsx":3291,"./ListLayout":1545,"./ListLayout.tsx":1545,"./PostLayout":5278,"./PostLayout.tsx":5278,"./PostSimple":9333,"./PostSimple.tsx":9333};function a(e){var t=s(e);return r(t)}function s(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=s,e.exports=a,a.id=7982}}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{425:function(e,t,n){"use strict";n.d(t,{f:function(){return A},F:function(){return o}});var r=n(7294),a=n(9008),i=(0,r.createContext)({setTheme:function(e){},themes:[]}),o=function(){return(0,r.useContext)(i)},l=["light","dark"],c="(prefers-color-scheme: dark)",A=function(e){var t=e.forcedTheme,n=e.disableTransitionOnChange,a=void 0!==n&&n,o=e.enableSystem,A=void 0===o||o,f=e.enableColorScheme,m=void 0===f||f,h=e.storageKey,p=void 0===h?"theme":h,b=e.themes,v=void 0===b?["light","dark"]:b,C=e.defaultTheme,y=void 0===C?A?"system":"light":C,I=e.attribute,R=void 0===I?"data-theme":I,w=e.value,x=e.children,j=(0,r.useState)((function(){return u(p,y)})),E=j[0],N=j[1],U=(0,r.useState)((function(){return u(p)})),k=U[0],T=U[1],S=w?Object.values(w):v,D=(0,r.useCallback)((function(e){var n=d(e);T(n),"system"!==E||t||Z(n,!1)}),[E,t]),M=(0,r.useRef)(D);M.current=D;var Z=(0,r.useCallback)((function(e,t,n){void 0===t&&(t=!0),void 0===n&&(n=!0);var r=(null==w?void 0:w[e])||e,i=a&&n?g():null;if(t)try{localStorage.setItem(p,e)}catch(e){}if("system"===e&&A){var o=d();r=(null==w?void 0:w[o])||o}if(n){var l,c=document.documentElement;"class"===R?((l=c.classList).remove.apply(l,S),c.classList.add(r)):c.setAttribute(R,r),null==i||i()}}),[]);(0,r.useEffect)((function(){var e=function(){return M.current.apply(M,[].slice.call(arguments))},t=window.matchMedia(c);return t.addListener(e),e(t),function(){return t.removeListener(e)}}),[]);var L=(0,r.useCallback)((function(e){t?Z(e,!0,!1):Z(e),N(e)}),[t]);return(0,r.useEffect)((function(){var e=function(e){e.key===p&&L(e.newValue)};return window.addEventListener("storage",e),function(){return window.removeEventListener("storage",e)}}),[L]),(0,r.useEffect)((function(){if(m){var e=t&&l.includes(t)?t:E&&l.includes(E)?E:"system"===E&&k||null;document.documentElement.style.setProperty("color-scheme",e)}}),[m,E,k,t]),r.createElement(i.Provider,{value:{theme:E,setTheme:L,forcedTheme:t,resolvedTheme:"system"===E?k:E,themes:A?[].concat(v,["system"]):v,systemTheme:A?k:void 0}},r.createElement(s,{forcedTheme:t,storageKey:p,attribute:R,value:w,enableSystem:A,defaultTheme:y,attrs:S}),x)},s=(0,r.memo)((function(e){var t=e.forcedTheme,n=e.storageKey,i=e.attribute,o=e.enableSystem,l=e.defaultTheme,A=e.value,s="class"===i?"var d=document.documentElement.classList;d.remove("+e.attrs.map((function(e){return"'"+e+"'"})).join(",")+");":"var d=document.documentElement;",u=function(e,t){e=(null==A?void 0:A[e])||e;var n=t?e:"'"+e+"'";return"class"===i?"d.add("+n+")":"d.setAttribute('"+i+"', "+n+")"},g="system"===l;return r.createElement(a.default,null,r.createElement("script",t?{key:"next-themes-script",dangerouslySetInnerHTML:{__html:"!function(){"+s+u(t)+"}()"}}:o?{key:"next-themes-script",dangerouslySetInnerHTML:{__html:"!function(){try {"+s+"var e=localStorage.getItem('"+n+"');"+(g?"":u(l)+";")+'if("system"===e||(!e&&'+g+')){var t="'+c+'",m=window.matchMedia(t);m.media!==t||m.matches?'+u("dark")+":"+u("light")+"}else if(e) "+(A?"var x="+JSON.stringify(A)+";":"")+u(A?"x[e]":"e",!0)+"}catch(e){}}()"}}:{key:"next-themes-script",dangerouslySetInnerHTML:{__html:"!function(){try{"+s+'var e=localStorage.getItem("'+n+'");if(e){'+(A?"var x="+JSON.stringify(A)+";":"")+u(A?"x[e]":"e",!0)+"}else{"+u(l)+";}}catch(t){}}();"}}))}),(function(e,t){return e.forcedTheme===t.forcedTheme})),u=function(e,t){if("undefined"!=typeof window){var n;try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},g=function(){var e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),function(){window.getComputedStyle(document.body),setTimeout((function(){document.head.removeChild(e)}),1)}},d=function(e){return e||(e=window.matchMedia(c)),e.matches?"dark":"light"}},3454:function(e,t,n){"use strict";var r,a;e.exports=(null===(r=n.g.process)||void 0===r?void 0:r.env)&&"object"===typeof(null===(a=n.g.process)||void 0===a?void 0:a.env)?n.g.process:n(7663)},6363:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(1271)}])},7059:function(e,t,n){"use strict";var r=n(3454),a={title:"Coding \u5de5\u574a | \u968f\u98ce",author:"\u968f\u98ce",headerTitle:"\u968f\u98ce\u5c0f\u7ad9",description:"\u5206\u4eab JavaScript \u4ee5\u53ca\u70ed\u95e8\u6846\u67b6\uff0c\u8bb0\u5f55\u524d\u7aef\u5de5\u7a0b\u5e08\u5b66\u4e60\u6210\u957f\u5386\u7a0b\u3002",language:"en-us",theme:"system",siteUrl:"https://github.com/balac2015",siteRepo:"https://github.com/balac2015",siteLogo:"/static/images/logo.png",image:"/static/images/avatar.png",socialBanner:"/static/images/twitter-card.png",email:"tianping888@163.com",github:"https://github.com/balac2015",juejin:"https://juejin.cn",zhihu:"https://www.zhihu.com",locale:"zh-CN",welcome:"\u81ea\u5728\uff0c\u8f7b\u76c8\uff0c\u6211\u672c\u4e0d\u60f3\u505c\u7559",analytics:{plausibleDataDomain:"",simpleAnalytics:!1,umamiWebsiteId:"",googleAnalyticsId:""},newsletter:{provider:""},comment:{provider:"",giscusConfig:{repo:r.env.NEXT_PUBLIC_GISCUS_REPO,repositoryId:r.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,category:r.env.NEXT_PUBLIC_GISCUS_CATEGORY,categoryId:r.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,mapping:"pathname",reactions:"1",metadata:"0",theme:"light",darkTheme:"transparent_dark",themeURL:""},utterancesConfig:{repo:r.env.NEXT_PUBLIC_UTTERANCES_REPO,issueTerm:"",label:"",theme:"",darkTheme:""},disqusConfig:{shortname:r.env.NEXT_PUBLIC_DISQUS_SHORTNAME}}};e.exports=a},8418:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,i=[],o=!0,l=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);o=!0);}catch(c){l=!0,a=c}finally{try{o||null==n.return||n.return()}finally{if(l)throw a}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var i,o=(i=n(7294))&&i.__esModule?i:{default:i},l=n(6273),c=n(387),A=n(7190);var s={};function u(e,t,n,r){if(e&&l.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(a?"%"+a:"")]=!0}}var g=function(e){var t,n=!1!==e.prefetch,r=c.useRouter(),i=o.default.useMemo((function(){var t=a(l.resolveHref(r,e.href,!0),2),n=t[0],i=t[1];return{href:n,as:e.as?l.resolveHref(r,e.as):i||n}}),[r,e.href,e.as]),g=i.href,d=i.as,f=e.children,m=e.replace,h=e.shallow,p=e.scroll,b=e.locale;"string"===typeof f&&(f=o.default.createElement("a",null,f));var v=(t=o.default.Children.only(f))&&"object"===typeof t&&t.ref,C=a(A.useIntersection({rootMargin:"200px"}),2),y=C[0],I=C[1],R=o.default.useCallback((function(e){y(e),v&&("function"===typeof v?v(e):"object"===typeof v&&(v.current=e))}),[v,y]);o.default.useEffect((function(){var e=I&&n&&l.isLocalURL(g),t="undefined"!==typeof b?b:r&&r.locale,a=s[g+"%"+d+(t?"%"+t:"")];e&&!a&&u(r,g,d,{locale:t})}),[d,g,I,b,n,r]);var w={ref:R,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,i,o,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(n))&&(e.preventDefault(),t[a?"replace":"push"](n,r,{shallow:i,locale:c,scroll:o}))}(e,r,g,d,m,h,p,b)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l.isLocalURL(g)&&u(r,g,d,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var x="undefined"!==typeof b?b:r&&r.locale,j=r&&r.isLocaleDomain&&l.getDomainLocale(d,x,r&&r.locales,r&&r.domainLocales);w.href=j||l.addBasePath(l.addLocale(d,x,r&&r.defaultLocale))}return o.default.cloneElement(t,w)};t.default=g},7190:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,i=[],o=!0,l=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);o=!0);}catch(c){l=!0,a=c}finally{try{o||null==n.return||n.return()}finally{if(l)throw a}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,r=e.disabled||!l,s=i.useRef(),u=a(i.useState(!1),2),g=u[0],d=u[1],f=a(i.useState(t?t.current:null),2),m=f[0],h=f[1],p=i.useCallback((function(e){s.current&&(s.current(),s.current=void 0),r||g||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=A.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=c.get(r):(t=c.get(n),A.push(n));if(t)return t;var a=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=a.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(n,t={id:n,observer:i,elements:a}),t}(n),a=r.id,i=r.observer,o=r.elements;return o.set(e,t),i.observe(e),function(){if(o.delete(e),i.unobserve(e),0===o.size){i.disconnect(),c.delete(a);var t=A.findIndex((function(e){return e.root===a.root&&e.margin===a.margin}));t>-1&&A.splice(t,1)}}}(e,(function(e){return e&&d(e)}),{root:m,rootMargin:n}))}),[r,m,n,g]);return i.useEffect((function(){if(!l&&!g){var e=o.requestIdleCallback((function(){return d(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[g]),i.useEffect((function(){t&&h(t.current)}),[t]),[p,g]};var i=n(7294),o=n(9311),l="undefined"!==typeof IntersectionObserver;var c=new Map,A=[]},4557:function(e,t,n){"use strict";var r=n(5893),a=n(1664);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}t.Z=function(e){var t=e.href,n=l(e,["href"]),i=t&&t.startsWith("/"),c=t&&t.startsWith("#");return i?(0,r.jsx)(a.default,{href:t,children:(0,r.jsx)("a",o({},n))}):c?(0,r.jsx)("a",o({href:t},n)):(0,r.jsx)("a",o({target:"_blank",rel:"noopener noreferrer",href:t},n))}},5431:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(5893);function a(e){var t=e.children;return(0,r.jsx)("div",{className:"mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0",children:t})}},1271:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return N}});var r=n(5893),a=(n(9247),n(1347),n(8085),n(4698),n(3984),n(9022),n(4315),n(1330),n(425)),i=n(9008),o=n(7059),l=n.n(o),c=n(4298),A=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.default,{strategy:"lazyOnload",src:"https://www.googletagmanager.com/gtag/js?id=".concat(l().analytics.googleAnalyticsId)}),(0,r.jsx)(c.default,{strategy:"lazyOnload",id:"ga-script",children:"\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n            gtag('config', '".concat(l().analytics.googleAnalyticsId,"', {\n              page_path: window.location.pathname,\n            });\n        ")})]})};var s,u,g=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.default,{strategy:"lazyOnload","data-domain":l().analytics.plausibleDataDomain,src:"https://plausible.io/js/plausible.js"}),(0,r.jsx)(c.default,{strategy:"lazyOnload",id:"plausible-script",children:"\n            window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }\n        "})]})},d=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.default,{strategy:"lazyOnload",id:"sa-script",children:"\n            window.sa_event=window.sa_event||function(){var a=[].slice.call(arguments);window.sa_event.q?window.sa_event.q.push(a):window.sa_event.q=[a]};\n        "}),(0,r.jsx)(c.default,{strategy:"lazyOnload",src:"https://scripts.simpleanalyticscdn.com/latest.js"})]})},f=function(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(c.default,{async:!0,defer:!0,"data-website-id":l().analytics.umamiWebsiteId,src:"https://umami.example.com/umami.js"})})},m=function(){return(0,r.jsxs)(r.Fragment,{children:[l().analytics.plausibleDataDomain&&(0,r.jsx)(g,{}),l().analytics.simpleAnalytics&&(0,r.jsx)(d,{}),l().analytics.umamiWebsiteId&&(0,r.jsx)(f,{}),l().analytics.googleAnalyticsId&&(0,r.jsx)(A,{})]})},h=[{href:"/blog",title:"\u6587\u7ae0"},{href:"/tags",title:"\u6807\u7b7e"},{href:"/projects",title:"\u9879\u76ee"},{href:"/tools",title:"\u5de5\u5177"},{href:"/boilerplate",title:"\u6a21\u677f"},{href:"/about",title:"\u5173\u4e8e"}],p=n(4557),b=n(5431),v=n(7294),C=function(){var e=(0,v.useState)(!1),t=e[0],n=e[1],a=function(){n((function(e){return document.body.style.overflow=e?"auto":"hidden",!e}))};return(0,r.jsxs)("div",{className:"sm:hidden",children:[(0,r.jsx)("button",{type:"button",className:"ml-1 mr-1 h-8 w-8 rounded py-1","aria-label":"Toggle Menu",onClick:a,children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"text-gray-900 dark:text-gray-100",children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"})})}),(0,r.jsxs)("div",{className:"fixed top-0 left-0 z-50 h-full w-full transform bg-gray-200 opacity-95 duration-300 ease-in-out dark:bg-gray-800 ".concat(t?"translate-x-0":"translate-x-full"),children:[(0,r.jsx)("div",{className:"flex justify-end",children:(0,r.jsx)("button",{type:"button",className:"mr-5 mt-11 h-8 w-8 rounded","aria-label":"Toggle Menu",onClick:a,children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"text-gray-900 dark:text-gray-100",children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})})}),(0,r.jsx)("nav",{className:"mt-8 h-full",children:h.map((function(e){return(0,r.jsx)("div",{className:"px-12 py-4",children:(0,r.jsx)(p.Z,{href:e.href,className:"text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100",onClick:a,children:e.title})},e.title)}))})]})]})},y=function(){var e=(0,v.useState)(!1),t=e[0],n=e[1],i=(0,a.F)(),o=i.theme,l=i.setTheme,c=i.resolvedTheme;return(0,v.useEffect)((function(){return n(!0)}),[]),(0,r.jsx)("button",{"aria-label":"Toggle Dark Mode",type:"button",className:"h-7 w-7 rounded p-1",onClick:function(){return l("dark"===o||"dark"===c?"light":"dark")},children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"text-gray-900 dark:text-gray-100",children:!t||"dark"!==o&&"dark"!==c?(0,r.jsx)("path",{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"}):(0,r.jsx)("path",{fillRule:"evenodd",d:"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",clipRule:"evenodd"})})})};function I(){return I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},I.apply(this,arguments)}var R=function(e){return v.createElement("svg",I({width:52,height:26,fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},e),s||(s=v.createElement("image",{xlinkHref:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAaCAYAAADFTB7LAAAAAXNSR0IArs4c6QAAAHplWElmTU0AKgAAAAgAAwESAAMAAAABAAEAAAExAAIAAAAeAAAAModpAAQAAAABAAAAUAAAAABBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKQAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAKKADAAQAAAABAAAAGgAAAACQIupnAAAEEWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNi4wLjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8eG1wTU06RG9jdW1lbnRJRD54bXAuZGlkOjdFNDI1QUQ2RkQxNzExRTg5RUUyRDA2RDA3NDUyMUM1PC94bXBNTTpEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06SW5zdGFuY2VJRD54bXAuaWlkOjdFNDI1QUQ1RkQxNzExRTg5RUUyRDA2RDA3NDUyMUM1PC94bXBNTTpJbnN0YW5jZUlEPgogICAgICAgICA8eG1wTU06RGVyaXZlZEZyb20gcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICA8c3RSZWY6aW5zdGFuY2VJRD54bXAuaWlkOjdFNDI1QUQzRkQxNzExRTg5RUUyRDA2RDA3NDUyMUM1PC9zdFJlZjppbnN0YW5jZUlEPgogICAgICAgICAgICA8c3RSZWY6ZG9jdW1lbnRJRD54bXAuZGlkOjdFNDI1QUQ0RkQxNzExRTg5RUUyRDA2RDA3NDUyMUM1PC9zdFJlZjpkb2N1bWVudElEPgogICAgICAgICA8L3htcE1NOkRlcml2ZWRGcm9tPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpPC94bXA6Q3JlYXRvclRvb2w+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo0psFQAAACSElEQVRYCc2WMUhVURjH79VQEISKDAfFAqVBbHDOLcFNB0scinJrkrbarMFBEAxSQXCJWuQNurgIEoJTOBRSrdFghqZgaIWv5+8v56qvd73vnKM37gc/znnnfN//+99z73v3BYFFFAqFengB67ALc9BsUZpuCiYuwjD8hH9jk4Vb6TpIUKf5Q9g44SrPfBam4a9Z32O8myCTzhZNnxsDGvbhDbRG3Zg/gD+gkPHBaC/1kWY9EJ3QW+YtcU1Z74IdiGKESRiXe25rNLgOW6ajvghVSeLst8OaydfwCi4k1XjvIVwF70CxAjU2YuRdg48QRY5JpU2tUw6io6bDV8YGl2LyL8Oyqdcw4lJfNhdBPU967rahrWxBTAJ1NaBnViGtzpg09yWE6kDPkb6tt90VjiuM1hdGhcba413PGSIvpUY88pQoKkOnA3SxiomiTZ8PiOj0Fn1qT6tBbwgUutUdp+VZrSOgq31mlWyZhF4lLIHiM1RblpakVbDyA/ZKds6wEIZhnvJ7sAU34Cn4hbnCJ37VyVVo94LiF8S+kZIVgkAnqKtMJTjJHMJToFs87tNEBjd9Ch1qHpP7CTo5xTsOdYepMrjhWuSSzynukt8Pv2EMk00u9f/jBANMvsfUfbgCeiVavxAigwWXq/LJxeQMdfpNXIcFTM5DH1xN0gtJGCChGoHJpMTz2qOf/jPKaDfchEvwHVbhAz5eMx6F/rtps/FoJeUJBnS3lgxlu+kW68gzGzK4lll3GJPBb5DPqskKnol9YzKTHg8A2r/9Qs/XFFsAAAAASUVORK5CYII=",height:26,width:40})),u||(u=v.createElement("image",{href:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAaCAYAAADFTB7LAAAAAXNSR0IArs4c6QAAAHplWElmTU0AKgAAAAgAAwESAAMAAAABAAEAAAExAAIAAAAeAAAAModpAAQAAAABAAAAUAAAAABBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKQAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAKKADAAQAAAABAAAAGgAAAACQIupnAAAEEWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNi4wLjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8eG1wTU06RG9jdW1lbnRJRD54bXAuZGlkOjdFNDI1QUQ2RkQxNzExRTg5RUUyRDA2RDA3NDUyMUM1PC94bXBNTTpEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06SW5zdGFuY2VJRD54bXAuaWlkOjdFNDI1QUQ1RkQxNzExRTg5RUUyRDA2RDA3NDUyMUM1PC94bXBNTTpJbnN0YW5jZUlEPgogICAgICAgICA8eG1wTU06RGVyaXZlZEZyb20gcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICA8c3RSZWY6aW5zdGFuY2VJRD54bXAuaWlkOjdFNDI1QUQzRkQxNzExRTg5RUUyRDA2RDA3NDUyMUM1PC9zdFJlZjppbnN0YW5jZUlEPgogICAgICAgICAgICA8c3RSZWY6ZG9jdW1lbnRJRD54bXAuZGlkOjdFNDI1QUQ0RkQxNzExRTg5RUUyRDA2RDA3NDUyMUM1PC9zdFJlZjpkb2N1bWVudElEPgogICAgICAgICA8L3htcE1NOkRlcml2ZWRGcm9tPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpPC94bXA6Q3JlYXRvclRvb2w+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo0psFQAAACSElEQVRYCc2WMUhVURjH79VQEISKDAfFAqVBbHDOLcFNB0scinJrkrbarMFBEAxSQXCJWuQNurgIEoJTOBRSrdFghqZgaIWv5+8v56qvd73vnKM37gc/znnnfN//+99z73v3BYFFFAqFengB67ALc9BsUZpuCiYuwjD8hH9jk4Vb6TpIUKf5Q9g44SrPfBam4a9Z32O8myCTzhZNnxsDGvbhDbRG3Zg/gD+gkPHBaC/1kWY9EJ3QW+YtcU1Z74IdiGKESRiXe25rNLgOW6ajvghVSeLst8OaydfwCi4k1XjvIVwF70CxAjU2YuRdg48QRY5JpU2tUw6io6bDV8YGl2LyL8Oyqdcw4lJfNhdBPU967rahrWxBTAJ1NaBnViGtzpg09yWE6kDPkb6tt90VjiuM1hdGhcba413PGSIvpUY88pQoKkOnA3SxiomiTZ8PiOj0Fn1qT6tBbwgUutUdp+VZrSOgq31mlWyZhF4lLIHiM1RblpakVbDyA/ZKds6wEIZhnvJ7sAU34Cn4hbnCJ37VyVVo94LiF8S+kZIVgkAnqKtMJTjJHMJToFs87tNEBjd9Ch1qHpP7CTo5xTsOdYepMrjhWuSSzynukt8Pv2EMk00u9f/jBANMvsfUfbgCeiVavxAigwWXq/LJxeQMdfpNXIcFTM5DH1xN0gtJGCChGoHJpMTz2qOf/jPKaDfchEvwHVbhAz5eMx6F/rtps/FoJeUJBnS3lgxlu+kW68gzGzK4lll3GJPBb5DPqskKnol9YzKTHg8A2r/9Qs/XFFsAAAAASUVORK5CYII=",xlinkHref:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAaCAYAAADFTB7LAAAAAXNSR0IArs4c6QAAAHplWElmTU0AKgAAAAgAAwESAAMAAAABAAEAAAExAAIAAAAeAAAAModpAAQAAAABAAAAUAAAAABBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKQAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAKKADAAQAAAABAAAAGgAAAACQIupnAAAEEWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNi4wLjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8eG1wTU06RG9jdW1lbnRJRD54bXAuZGlkOjdFNDI1QUQ2RkQxNzExRTg5RUUyRDA2RDA3NDUyMUM1PC94bXBNTTpEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06SW5zdGFuY2VJRD54bXAuaWlkOjdFNDI1QUQ1RkQxNzExRTg5RUUyRDA2RDA3NDUyMUM1PC94bXBNTTpJbnN0YW5jZUlEPgogICAgICAgICA8eG1wTU06RGVyaXZlZEZyb20gcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICA8c3RSZWY6aW5zdGFuY2VJRD54bXAuaWlkOjdFNDI1QUQzRkQxNzExRTg5RUUyRDA2RDA3NDUyMUM1PC9zdFJlZjppbnN0YW5jZUlEPgogICAgICAgICAgICA8c3RSZWY6ZG9jdW1lbnRJRD54bXAuZGlkOjdFNDI1QUQ0RkQxNzExRTg5RUUyRDA2RDA3NDUyMUM1PC9zdFJlZjpkb2N1bWVudElEPgogICAgICAgICA8L3htcE1NOkRlcml2ZWRGcm9tPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpPC94bXA6Q3JlYXRvclRvb2w+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo0psFQAAACSElEQVRYCc2WMUhVURjH79VQEISKDAfFAqVBbHDOLcFNB0scinJrkrbarMFBEAxSQXCJWuQNurgIEoJTOBRSrdFghqZgaIWv5+8v56qvd73vnKM37gc/znnnfN//+99z73v3BYFFFAqFengB67ALc9BsUZpuCiYuwjD8hH9jk4Vb6TpIUKf5Q9g44SrPfBam4a9Z32O8myCTzhZNnxsDGvbhDbRG3Zg/gD+gkPHBaC/1kWY9EJ3QW+YtcU1Z74IdiGKESRiXe25rNLgOW6ajvghVSeLst8OaydfwCi4k1XjvIVwF70CxAjU2YuRdg48QRY5JpU2tUw6io6bDV8YGl2LyL8Oyqdcw4lJfNhdBPU967rahrWxBTAJ1NaBnViGtzpg09yWE6kDPkb6tt90VjiuM1hdGhcba413PGSIvpUY88pQoKkOnA3SxiomiTZ8PiOj0Fn1qT6tBbwgUutUdp+VZrSOgq31mlWyZhF4lLIHiM1RblpakVbDyA/ZKds6wEIZhnvJ7sAU34Cn4hbnCJ37VyVVo94LiF8S+kZIVgkAnqKtMJTjJHMJToFs87tNEBjd9Ch1qHpP7CTo5xTsOdYepMrjhWuSSzynukt8Pv2EMk00u9f/jBANMvsfUfbgCeiVavxAigwWXq/LJxeQMdfpNXIcFTM5DH1xN0gtJGCChGoHJpMTz2qOf/jPKaDfchEvwHVbhAz5eMx6F/rtps/FoJeUJBnS3lgxlu+kW68gzGzK4lll3GJPBb5DPqskKnol9YzKTHg8A2r/9Qs/XFFsAAAAASUVORK5CYII=",height:26,width:40,x:15})))},w=function(e){e.page;var t=e.children;return(0,r.jsx)(b.Z,{children:(0,r.jsxs)("div",{className:"flex h-screen flex-col justify-between",children:[(0,r.jsxs)("header",{className:"flex items-center justify-between py-10",children:[(0,r.jsx)("h1",{children:(0,r.jsx)(p.Z,{href:"/","aria-label":l().headerTitle,children:(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsx)("span",{style:{},children:(0,r.jsx)(R,{})}),"string"===typeof l().headerTitle?(0,r.jsx)("div",{className:"hidden text-2xl font-semibold sm:block",children:l().headerTitle}):l().headerTitle]})})}),(0,r.jsxs)("div",{className:"flex items-center text-base leading-5",children:[(0,r.jsx)("div",{className:"hidden sm:block",children:h.map((function(e){return(0,r.jsx)(p.Z,{href:e.href,className:"p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4",children:e.title},e.title)}))}),(0,r.jsxs)("div",{className:"ml-1 mr-1 flex items-center sm:ml-4",children:[(0,r.jsx)("a",{className:"block p-1",title:"RSS",href:"/feed.xml",children:(0,r.jsxs)("svg",{fill:"currentColor",className:"h-5 w-5",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:[(0,r.jsx)("path",{d:"M3.75 3a.75.75 0 00-.75.75v.5c0 .414.336.75.75.75H4c6.075 0 11 4.925 11 11v.25c0 .414.336.75.75.75h.5a.75.75 0 00.75-.75V16C17 8.82 11.18 3 4 3h-.25z"}),(0,r.jsx)("path",{d:"M3 8.75A.75.75 0 013.75 8H4a8 8 0 018 8v.25a.75.75 0 01-.75.75h-.5a.75.75 0 01-.75-.75V16a6 6 0 00-6-6h-.25A.75.75 0 013 9.25v-.5zM7 15a2 2 0 11-4 0 2 2 0 014 0z"})]})}),(0,r.jsx)(y,{})]}),(0,r.jsx)(C,{})]})]}),(0,r.jsx)("main",{className:"mb-auto",children:t})]})})},x=(n(1163),n(3454));function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){j(e,t,n[t])}))}return e}x.env.SOCKET;function N(e){var t=e.Component,n=e.pageProps;n.page;return(0,r.jsxs)(a.f,{attribute:"class",defaultTheme:l().theme,children:[(0,r.jsx)(i.default,{children:(0,r.jsx)("meta",{content:"width=device-width, initial-scale=1",name:"viewport"})}),false,(0,r.jsx)(m,{}),(0,r.jsx)(w,{page:n.page,children:(0,r.jsx)(t,E({},n))})]})}},1330:function(){},4315:function(){},4698:function(){},9022:function(){},1347:function(){},3984:function(){},9247:function(){},8085:function(){},7663:function(e){!function(){var t={162:function(e){var t,n,r=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function o(e){if(t===setTimeout)return setTimeout(e,0);if((t===a||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:a}catch(e){t=a}try{n="function"===typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var l,c=[],A=!1,s=-1;function u(){A&&l&&(A=!1,l.length?c=l.concat(c):s=-1,c.length&&g())}function g(){if(!A){var e=o(u);A=!0;for(var t=c.length;t;){for(l=c,c=[];++s<t;)l&&l[s].run();s=-1,t=c.length}l=null,A=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function f(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new d(e,t)),1!==c.length||A||o(g)},d.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=f,r.addListener=f,r.once=f,r.off=f,r.removeListener=f,r.removeAllListeners=f,r.emit=f,r.prependListener=f,r.prependOnceListener=f,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var i=n[e]={exports:{}},o=!0;try{t[e](i,i.exports,r),o=!1}finally{o&&delete n[e]}return i.exports}r.ab="//";var a=r(162);e.exports=a}()},9008:function(e,t,n){e.exports=n(5443)},1664:function(e,t,n){e.exports=n(8418)},1163:function(e,t,n){e.exports=n(387)},4298:function(e,t,n){e.exports=n(699)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(6363),t(387)}));var n=e.O();_N_E=n}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2888],{86010:function(e,t,n){"use strict";function r(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.Z=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(i&&(i+=" "),i+=t);return i}},40425:function(e,t,n){"use strict";n.d(t,{F:function(){return c},f:function(){return l}});var r=n(67294),i=n(9008),o=n.n(i),a=(0,r.createContext)({setTheme:function(e){},themes:[]}),c=function(){return(0,r.useContext)(a)},u=["light","dark"],s="(prefers-color-scheme: dark)",l=function(e){var t=e.forcedTheme,n=e.disableTransitionOnChange,i=void 0!==n&&n,o=e.enableSystem,c=void 0===o||o,l=e.enableColorScheme,v=void 0===l||l,g=e.storageKey,b=void 0===g?"theme":g,y=e.themes,p=void 0===y?["light","dark"]:y,w=e.defaultTheme,x=void 0===w?c?"system":"light":w,k=e.attribute,E=void 0===k?"data-theme":k,T=e.value,S=e.children,j=(0,r.useState)((function(){return f(b,x)})),_=j[0],C=j[1],N=(0,r.useState)((function(){return f(b)})),O=N[0],L=N[1],P=T?Object.values(T):p,Z=(0,r.useCallback)((function(e){var n=h(e);L(n),"system"!==_||t||M(n,!1)}),[_,t]),I=(0,r.useRef)(Z);I.current=Z;var M=(0,r.useCallback)((function(e,t,n){void 0===t&&(t=!0),void 0===n&&(n=!0);var r=(null==T?void 0:T[e])||e,o=i&&n?m():null;if(t)try{localStorage.setItem(b,e)}catch(e){}if("system"===e&&c){var a=h();r=(null==T?void 0:T[a])||a}if(n){var u,s=document.documentElement;"class"===E?((u=s.classList).remove.apply(u,P),s.classList.add(r)):s.setAttribute(E,r),null==o||o()}}),[]);(0,r.useEffect)((function(){var e=function(){return I.current.apply(I,[].slice.call(arguments))},t=window.matchMedia(s);return t.addListener(e),e(t),function(){return t.removeListener(e)}}),[]);var A=(0,r.useCallback)((function(e){t?M(e,!0,!1):M(e),C(e)}),[t]);return(0,r.useEffect)((function(){var e=function(e){e.key===b&&A(e.newValue)};return window.addEventListener("storage",e),function(){return window.removeEventListener("storage",e)}}),[A]),(0,r.useEffect)((function(){if(v){var e=t&&u.includes(t)?t:_&&u.includes(_)?_:"system"===_&&O||null;document.documentElement.style.setProperty("color-scheme",e)}}),[v,_,O,t]),r.createElement(a.Provider,{value:{theme:_,setTheme:A,forcedTheme:t,resolvedTheme:"system"===_?O:_,themes:c?[].concat(p,["system"]):p,systemTheme:c?O:void 0}},r.createElement(d,{forcedTheme:t,storageKey:b,attribute:E,value:T,enableSystem:c,defaultTheme:x,attrs:P}),S)},d=(0,r.memo)((function(e){var t=e.forcedTheme,n=e.storageKey,i=e.attribute,a=e.enableSystem,c=e.defaultTheme,u=e.value,l="class"===i?"var d=document.documentElement.classList;d.remove("+e.attrs.map((function(e){return"'"+e+"'"})).join(",")+");":"var d=document.documentElement;",d=function(e,t){e=(null==u?void 0:u[e])||e;var n=t?e:"'"+e+"'";return"class"===i?"d.add("+n+")":"d.setAttribute('"+i+"', "+n+")"},f="system"===c;return r.createElement(o(),null,r.createElement("script",t?{key:"next-themes-script",dangerouslySetInnerHTML:{__html:"!function(){"+l+d(t)+"}()"}}:a?{key:"next-themes-script",dangerouslySetInnerHTML:{__html:"!function(){try {"+l+"var e=localStorage.getItem('"+n+"');"+(f?"":d(c)+";")+'if("system"===e||(!e&&'+f+')){var t="'+s+'",m=window.matchMedia(t);m.media!==t||m.matches?'+d("dark")+":"+d("light")+"}else if(e) "+(u?"var x="+JSON.stringify(u)+";":"")+d(u?"x[e]":"e",!0)+"}catch(e){}}()"}}:{key:"next-themes-script",dangerouslySetInnerHTML:{__html:"!function(){try{"+l+'var e=localStorage.getItem("'+n+'");if(e){'+(u?"var x="+JSON.stringify(u)+";":"")+d(u?"x[e]":"e",!0)+"}else{"+d(c)+";}}catch(t){}}();"}}))}),(function(e,t){return e.forcedTheme===t.forcedTheme})),f=function(e,t){if("undefined"!=typeof window){var n;try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},m=function(){var e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),function(){window.getComputedStyle(document.body),setTimeout((function(){document.head.removeChild(e)}),1)}},h=function(e){return e||(e=window.matchMedia(s)),e.matches?"dark":"light"}},6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(65588)}])},17022:function(e,t){"use strict";t.Z={title:"\u968f\u98ce",description:"\u524d\u7aef\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u7684\u5de5\u5177\uff0c\u8bb0\u5f55\u524d\u7aef\u5de5\u7a0b\u5e08\u5b66\u4e60\u6210\u957f\u5386\u7a0b\u3002",author:"\u968f\u98ce",theme:"system",links:{github:"https://github.com/balac2015"}}},65588:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r=n(26042),i=n(85893),o=(n(59247),n(2206),n(11621),n(74698),n(3984),n(60574),n(38085),n(1066),n(67294)),a="serviceWorker"in navigator&&void 0!==window.workbox,c=n(86010);function u(){var e=(0,o.useState)(!1),t=e[0],n=e[1];return(0,o.useEffect)((function(){if(a){var e=window.workbox;e.addEventListener("waiting",(function(){n(!0)})),e.register()}}),[]),t?(0,i.jsxs)("div",{role:"alert",className:(0,c.Z)("fixed bottom-5 right-5","animate-in slide-in-from-right","p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md "),children:[(0,i.jsx)("h5",{className:"mb-2 text-xl font-medium tracking-tight text-neutral-900 ",children:"New updates available!"}),(0,i.jsxs)("div",{className:"flex mt-4 space-x-3 lg:mt-4",children:[(0,i.jsx)("button",{"aria-label":"Refresh content",onClick:function(){var e=window.workbox;a?(e.addEventListener("controlling",(function(e){window.location.reload()})),e.messageSkipWaiting(),n(!1)):alert("Workbox is not present")},className:"inline-flex items-center py-1 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 ",children:"Refresh"}),(0,i.jsx)("button",{"aria-label":"Close",onClick:function(){return n(!1)},className:"inline-flex items-center py-1 px-3 text-sm font-medium text-center text-neutral-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 ",children:"Dismiss"})]})]}):null}var s=n(40425),l=n(9008),d=n.n(l),f=n(17022);function m(e){var t=e.Component,n=e.pageProps;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.f,{attribute:"class",defaultTheme:f.Z.theme,children:[(0,i.jsx)(d(),{children:(0,i.jsx)("meta",{content:"width=device-width, initial-scale=1",name:"viewport"})}),(0,i.jsx)(t,(0,r.Z)({},n))]}),(0,i.jsx)(u,{})]})}},11621:function(){},1066:function(){},74698:function(){},2206:function(){},60574:function(){},3984:function(){},59247:function(){},38085:function(){},9008:function(e,t,n){e.exports=n(5443)},14924:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})},26042:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(14924);function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){(0,r.Z)(e,t,n[t])}))}return e}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[9774,179],(function(){return t(6840),t(90387)}));var n=e.O();_N_E=n}]);
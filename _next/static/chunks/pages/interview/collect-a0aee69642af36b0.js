(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1093],{63386:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/interview/collect",function(){return n(26054)}])},98178:function(t,e,n){"use strict";n.d(e,{Z:function(){return s}});var r=n(36690),a=n(93089),i=n(61250),o=(n(29901),n(16227)),u=n.n(o),c=n(15013);function s(t){var e=t.question,n=t.query,o=void 0===n?{}:n,s=t.tagmap;return(0,i.jsx)(u(),{href:{pathname:"/interview/".concat(e._id),query:JSON.parse(JSON.stringify((0,a.Z)((0,r.Z)({},o),{page:void 0})))},children:(0,i.jsxs)("a",{className:"py-6 md:py-8 flex flex-col md:flex-row flex-wrap md:flex-nowrap group",children:[(0,i.jsxs)("div",{className:"md:w-48 md:mb-0 mb-2 flex-shrink-0 flex justify-between md:flex-col",children:[(0,i.jsx)("span",{className:"font-semibold title-font text-neutral-700 dark:text-slate-400",children:s[e.tagId]}),(0,i.jsx)("span",{className:"mt-1 text-neutral-500 dark:text-slate-300 text-sm",children:c.b[e.category]})]}),(0,i.jsxs)("div",{className:"md:flex-grow relative",children:[(0,i.jsx)("h2",{className:"text-xl md:text-2xl font-medium text-neutral-900 dark:text-slate-200 title-font mb-2",children:e.title}),(0,i.jsxs)("span",{className:"mt-1 text-neutral-500 dark:text-slate-400 text-sm",children:["\u96be\u5ea6\uff1a",(0,i.jsx)("span",{className:"text-orange-500",role:"level:"+e.level,children:(0,c.a)(e.level)})]}),(0,i.jsx)("span",{className:"text-blue-500 absolute right-0 top-1/2 -mt-[16px] opacity-0 -translate-x-6 ease-out duration-300 group-hover:opacity-100 group-hover:translate-x-0",children:(0,i.jsxs)("svg",{className:"w-10 h-10 ",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,i.jsx)("path",{d:"M5 12h14"}),(0,i.jsx)("path",{d:"M12 5l7 7-7 7"})]})})]})]})},e._id)}},26054:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return d}});var r=n(60947),a=n(11296),i=n(43112),o=n(61250),u=(n(29901),n(98178)),c=n(83432),s=n(13585),l=n(69634),f=n(6099);function d(){var t=(0,a.Z)((0,l.Z)("user",null),1)[0],e=(0,f.Z)((0,r.Z)((function(){var e,n,r,a,o,u,c,s,l,f;return(0,i.__generator)(this,(function(i){switch(i.label){case 0:return t.openid?[4,fetch("https://3623f8fd-8d3f-4d06-8034-59bc7addf8f7.bspapp.com/api/femap",{method:"post",headers:{"content-type":"application/json;charset=UTF-8"},body:JSON.stringify({action:"myCollect",user_id:t.openid})})]:[3,3];case 1:return[4,i.sent().json()];case 2:e=i.sent(),n=e.data,r=e.tags,a={},o=!0,u=!1,c=void 0;try{for(s=r[Symbol.iterator]();!(o=(l=s.next()).done);o=!0)f=l.value,a[f.id]=f.tagName}catch(d){u=!0,c=d}finally{try{o||null==s.return||s.return()}finally{if(u)throw c}}return[2,{data:n,tagmap:a}];case 3:return[2,{data:[],tagmap:{}}]}}))})),[t]),n=(e.loading,e.value);return t?(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(s.i,{title:"\u6211\u7684\u6536\u85cf - \u524d\u7aef\u9762\u8bd5\u9898",children:(0,o.jsx)("section",{className:"text-neutral-600 dark:text-slate-200 body-font overflow-hidden",children:(0,o.jsx)("div",{className:"container max-w-5xl px-5 py-16 mx-auto",children:(0,o.jsx)("div",{className:"divide-y divide-neutral-100 dark:divide-neutral-700",children:null===n||void 0===n?void 0:n.data.map((function(t){return(0,o.jsx)(u.Z,{tagmap:null===n||void 0===n?void 0:n.tagmap,query:{source:"collect"},question:t},t._id)}))})})})})}):(0,o.jsx)(c.default,{statusCode:500})}},15013:function(t,e,n){"use strict";n.d(e,{a:function(){return a},b:function(){return r}});var r={Choice:"\u9009\u62e9\u9898",QA:"\u95ee\u7b54\u9898"},a=function(t){for(var e="",n=Math.floor(t),r=0;r<n;r++)e+="\u2605";return t-n>0&&(e+="\u2606"),e}},83432:function(t,e,n){t.exports=n(64363)},6099:function(t,e,n){"use strict";n.d(e,{Z:function(){return i}});var r=n(29901),a=n(43202);function i(t,e){void 0===e&&(e=[]);var n=(0,a.Z)(t,e,{loading:!0}),i=n[0],o=n[1];return(0,r.useEffect)((function(){o()}),[o]),i}},43202:function(t,e,n){"use strict";n.d(e,{Z:function(){return i}});var r=n(43112),a=n(29901);function i(t,e,n){void 0===e&&(e=[]),void 0===n&&(n={loading:!1});var i=(0,a.useRef)(0),o=function(){var t=(0,a.useRef)(!1),e=(0,a.useCallback)((function(){return t.current}),[]);return(0,a.useEffect)((function(){return t.current=!0,function(){t.current=!1}}),[]),e}(),u=(0,a.useState)(n),c=u[0],s=u[1],l=(0,a.useCallback)((function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var a=++i.current;return c.loading||s((function(t){return(0,r.__assign)((0,r.__assign)({},t),{loading:!0})})),t.apply(void 0,e).then((function(t){return o()&&a===i.current&&s({value:t,loading:!1}),t}),(function(t){return o()&&a===i.current&&s({error:t,loading:!1}),t}))}),e);return[c,l]}},69634:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var r=n(29901),a=function(){};var i="undefined"!==typeof window,o=function(t,e,n){if(!i)return[e,a,a];if(!t)throw new Error("useLocalStorage key may not be falsy");var o=n?n.raw?function(t){return t}:n.deserializer:JSON.parse,u=(0,r.useRef)((function(t){try{var r=n?n.raw?String:n.serializer:JSON.stringify,a=localStorage.getItem(t);return null!==a?o(a):(e&&localStorage.setItem(t,r(e)),e)}catch(c){return e}})),c=(0,r.useState)((function(){return u.current(t)})),s=c[0],l=c[1];(0,r.useLayoutEffect)((function(){return l(u.current(t))}),[t]);var f=(0,r.useCallback)((function(e){try{var r="function"===typeof e?e(s):e;if("undefined"===typeof r)return;var a=void 0;a=n?n.raw?"string"===typeof r?r:JSON.stringify(r):n.serializer?n.serializer(r):JSON.stringify(r):JSON.stringify(r),localStorage.setItem(t,a),l(o(a))}catch(c){}}),[t,l]),d=(0,r.useCallback)((function(){try{localStorage.removeItem(t),l(void 0)}catch(c){}}),[t,l]);return[s,f,d]}},98536:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.d(e,{Z:function(){return r}})},60947:function(t,e,n){"use strict";function r(t,e,n,r,a,i,o){try{var u=t[i](o),c=u.value}catch(s){return void n(s)}u.done?e(c):Promise.resolve(c).then(r,a)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(a,i){var o=t.apply(e,n);function u(t){r(o,a,i,u,c,"next",t)}function c(t){r(o,a,i,u,c,"throw",t)}u(void 0)}))}}n.d(e,{Z:function(){return a}})},4713:function(t,e,n){"use strict";function r(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}n.d(e,{Z:function(){return r}})},11296:function(t,e,n){"use strict";n.d(e,{Z:function(){return i}});var r=n(4713);var a=n(7910);function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||(0,r.Z)(t,e)||(0,a.Z)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},46819:function(t,e,n){"use strict";function r(t){throw t}n.d(e,{Z:function(){return r}})},7910:function(t,e,n){"use strict";n.d(e,{Z:function(){return a}});var r=n(98536);function a(t,e){if(t){if("string"===typeof t)return(0,r.Z)(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,r.Z)(t,e):void 0}}}},function(t){t.O(0,[5759,9029,3585,9774,2888,179],(function(){return e=63386,t(t.s=e);var e}));var e=t.O();_N_E=e}]);
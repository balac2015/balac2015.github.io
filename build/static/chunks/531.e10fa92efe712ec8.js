"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[531],{8037:function(e,n,r){r.r(n),r.d(n,{default:function(){return m}});var t=r(5893),i=r(7294),a=r(719),c=r(1911),l=r(5527),s=r(7733);function u(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){u(e,n,r[n])}))}return e}var f=function(e){var n=e.name,r=(e.entry,e.extra),a=e.microConfig,c=e.basename,u=void 0===c?"":c,f=(e.fullScreen,e.height,(0,i.useRef)(null)),p=(0,i.useRef)(null),d=(0,i.useState)(!1),m=d[0],v=d[1];return(0,i.useEffect)((function(){var e,t;p.current&&(null===(t=(e=p.current).unmount)||void 0===t||t.call(e));if(f.current){v(!0);var i=s.ZP.find((function(e){return e.name===n}));return p.current=(0,l.ZN)(o({},i,{container:f.current,props:o({basename:u},r)}),o({},a)),p.current.mountPromise.then((function(){v(!1)})),function(){var e,n;p.current&&!m&&(null===(n=(e=p.current).unmount)||void 0===n||n.call(e),p.current=void 0)}}}),[n,u]),(0,t.jsx)("div",{children:(0,t.jsx)("div",{className:"micro-app-container",ref:f})})},p=(0,i.memo)(f);r(933),r(8770);function d(e){var n=e.defaultScreenIndex,r=void 0===n?0:n,l=(0,i.useState)(r),u=l[0],o=l[1],f={el:".pagination-list",clickable:!0,hideOnClick:!0,progressbarFillClass:"pagination-progressbar-fill",currentClass:"pagination-current",verticalClass:"pagination-vertical",renderBullet:function(e,n){var r=s.ZP[e].title;return'<li class="'.concat(n,' pagination-item">\n          <p class="text">').concat(r,'</p>\n          <div class="icon"></div>\n          <div class="tab"></div>\n      </li>')}};return(0,i.useEffect)((function(){o(r)}),[r]),(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsx)(a.tq,{direction:"vertical",slidesPerView:1,speed:800,spaceBetween:30,mousewheel:!0,pagination:f,modules:[c.Gk,c.tl],className:"swiper-container mySwiper",onSlideChange:function(e){o(e.realIndex)},children:s.ZP.map((function(e,n){return(0,t.jsx)(a.o5,{children:u===n?(0,t.jsx)(p,{name:e.name,basename:"/projects"}):null},e.name)}))}),(0,t.jsxs)("div",{className:"pagination-wrapper",children:[(0,t.jsx)("ul",{className:"pagination-list"}),(0,t.jsx)("div",{className:"pagination-line"})]})]})}var m=(0,i.memo)(d)}}]);
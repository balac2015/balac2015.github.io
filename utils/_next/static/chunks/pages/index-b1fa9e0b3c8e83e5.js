(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5728:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(5476)}])},5476:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return h}});var i=t(4246),r=t(8038),a=t.n(r),s=t(7378),c=t(7051),l={i8:"1.0.0"},d=JSON.parse('{"pI":[{"id":1,"name":"check-compact-case","kind":2,"kindString":"Module","flags":{},"children":[{"id":2,"name":"checkCompactCase","kind":64,"kindString":"Function","flags":{},"signatures":[{"id":3,"name":"checkCompactCase","kind":4096,"kindString":"Call signature","flags":{},"comment":{"summary":[{"kind":"text","text":"检查传入的字符串参数是否包含空格，非字符串、带空格返回 false"}],"blockTags":[{"tag":"@example","content":[{"kind":"code","text":"```ts\\nimport { checkCompactCase } from \'@balac/utils\'\\n\\ncheckCompactCase(\'thisiscompact\') // true\\ncheckCompactCase(\'this is not compact\') // false\\ncheckCompactCase(123) // false - input is not a string\\n```"}]}]},"parameters":[{"id":4,"name":"input","kind":32768,"kindString":"Parameter","flags":{},"type":{"type":"intrinsic","name":"unknown"}}],"type":{"type":"predicate","name":"input","asserts":false,"targetType":{"type":"intrinsic","name":"string"}}}]}],"groups":[{"title":"Functions","children":[2],"categories":[{"title":"String","children":[2]}]}]},{"id":5,"name":"check-lower-case","kind":2,"kindString":"Module","flags":{},"children":[{"id":6,"name":"checkLowerCase","kind":64,"kindString":"Function","flags":{},"signatures":[{"id":7,"name":"checkLowerCase","kind":4096,"kindString":"Call signature","flags":{},"comment":{"summary":[{"kind":"text","text":"检查传入的字符串参数是否包含大写字母，包含大写字母、非字符串返回 false"}],"blockTags":[{"tag":"@example","content":[{"kind":"code","text":"```ts\\nimport { checkLowerCase } from \'@balac/utils\'\\n\\ncheckLowerCase(\'this is lower\') // true\\ncheckLowerCase(\'This is not LOWER\') // false\\ncheckLowerCase(123) // false - input is not a string\\n```"}]}]},"parameters":[{"id":8,"name":"input","kind":32768,"kindString":"Parameter","flags":{},"type":{"type":"intrinsic","name":"unknown"}}],"type":{"type":"predicate","name":"input","asserts":false,"targetType":{"type":"intrinsic","name":"string"}}}]}],"groups":[{"title":"Functions","children":[6],"categories":[{"title":"String","children":[6]}]}]},{"id":9,"name":"check-running-in-browser","kind":2,"kindString":"Module","flags":{},"children":[{"id":10,"name":"checkRunningInBrowser","kind":64,"kindString":"Function","flags":{},"signatures":[{"id":11,"name":"checkRunningInBrowser","kind":4096,"kindString":"Call signature","flags":{},"comment":{"summary":[{"kind":"text","text":"检查当前代码是否在浏览器中运行"}],"blockTags":[{"tag":"@example","content":[{"kind":"code","text":"```ts\\nimport { checkRunningInBrowser } from \'@balac/utils\'\\n\\ncheckRunningInBrowser() // true\\n```"}]}]},"type":{"type":"intrinsic","name":"boolean"}}]}],"groups":[{"title":"Functions","children":[10],"categories":[{"title":"Environment","children":[10]}]}]},{"id":12,"name":"check-unique","kind":2,"kindString":"Module","flags":{},"children":[{"id":13,"name":"checkUnique","kind":64,"kindString":"Function","flags":{},"signatures":[{"id":14,"name":"checkUnique","kind":4096,"kindString":"Call signature","flags":{},"comment":{"summary":[{"kind":"text","text":"检查数组项是否唯一。对于非数组的任何值将返回 true。"}],"blockTags":[{"tag":"@example","content":[{"kind":"code","text":"```ts\\nimport { checkUnique } from \'@balac/utils\'\\n\\ncheckUnique([1, 2, 3]) // true\\ncheckUnique([1, 1, 2]) // false\\ncheckUnique(\'not array\') // true\\n```"}]}]},"parameters":[{"id":15,"name":"input","kind":32768,"kindString":"Parameter","flags":{},"type":{"type":"intrinsic","name":"unknown"}}],"type":{"type":"intrinsic","name":"boolean"}}]}],"groups":[{"title":"Functions","children":[13],"categories":[{"title":"Array","children":[13]}]}]},{"id":16,"name":"check-url-absolute","kind":2,"kindString":"Module","flags":{},"children":[{"id":17,"name":"checkUrlAbsolute","kind":64,"kindString":"Function","flags":{},"signatures":[{"id":18,"name":"checkUrlAbsolute","kind":4096,"kindString":"Call signature","flags":{},"comment":{"summary":[{"kind":"text","text":"检查传入的 URL 字符串参数是否以协议开头来确定它是否是绝对路径，非字符串将返回 false"}],"blockTags":[{"tag":"@example","content":[{"kind":"code","text":"```ts\\nimport { checkUrlAbsolute } from \'@balac/utils\'\\n\\ncheckUrlAbsolute(\\"http://example.com/page\\") // true\\ncheckUrlAbsolute(\\"/page\\") // false\\ncheckUrlAbsolute(123) // false - input is not a string\\n```"}]}]},"parameters":[{"id":19,"name":"url","kind":32768,"kindString":"Parameter","flags":{},"type":{"type":"intrinsic","name":"unknown"}}],"type":{"type":"intrinsic","name":"boolean"}}]}],"groups":[{"title":"Functions","children":[17],"categories":[{"title":"String","children":[17]}]}]},{"id":20,"name":"generate-integers","kind":2,"kindString":"Module","flags":{},"children":[{"id":21,"name":"generateIntegers","kind":64,"kindString":"Function","flags":{},"signatures":[{"id":22,"name":"generateIntegers","kind":4096,"kindString":"Call signature","flags":{},"comment":{"summary":[{"kind":"text","text":"生成一个从给定数字到另一个数字的整数数组。"}],"blockTags":[{"tag":"@example","content":[{"kind":"code","text":"```ts\\nimport { generateIntegers } from \'@balac/utils\'\\n\\ngenerateIntegers(1, 6) // [1, 2, 3, 4, 5, 6]\\ngenerateIntegers(\\"abc\\", 6) // [] - 有一个参数不是数字\\n```"}]}]},"parameters":[{"id":23,"name":"from","kind":32768,"kindString":"Parameter","flags":{},"type":{"type":"intrinsic","name":"unknown"}},{"id":24,"name":"to","kind":32768,"kindString":"Parameter","flags":{},"type":{"type":"intrinsic","name":"unknown"}}],"type":{"type":"array","elementType":{"type":"intrinsic","name":"number"}}}]}],"groups":[{"title":"Functions","children":[21],"categories":[{"title":"Array","children":[21]}]}]},{"id":25,"name":"sleep","kind":2,"kindString":"Module","flags":{},"children":[{"id":26,"name":"sleep","kind":64,"kindString":"Function","flags":{},"signatures":[{"id":27,"name":"sleep","kind":4096,"kindString":"Call signature","flags":{},"comment":{"summary":[{"kind":"text","text":"暂停当前函数"}],"blockTags":[{"tag":"@example","content":[{"kind":"code","text":"```ts\\nimport { sleep } from \'@balac/utils\'\\n\\nawait sleep(2000) // 暂停 2 秒\\nawait sleep(\\"abc\\") // 传人非数字的参数，暂停 0 秒\\n```"}]}]},"parameters":[{"id":28,"name":"milliseconds","kind":32768,"kindString":"Parameter","flags":{},"type":{"type":"intrinsic","name":"number"}}],"type":{"type":"reference","typeArguments":[{"type":"intrinsic","name":"void"}],"name":"Promise","qualifiedName":"Promise","package":"typescript"}}]}],"groups":[{"title":"Functions","children":[26],"categories":[{"title":"Misc","children":[26]}]}]},{"id":29,"name":"to-compact-case","kind":2,"kindString":"Module","flags":{},"children":[{"id":30,"name":"toCompactCase","kind":64,"kindString":"Function","flags":{},"signatures":[{"id":31,"name":"toCompactCase","kind":4096,"kindString":"Call signature","flags":{},"comment":{"summary":[{"kind":"text","text":"从传入字符串参数中删除所有空白字符。"}],"blockTags":[{"tag":"@example","content":[{"kind":"code","text":"```ts\\nimport { toCompactCase } from \'@balac/utils\'\\n\\ntoCompactCase(\'this is text\') // thisistext\\ntoCompactCase(\'someTEXT\') // someTEXT\\n```"}]}]},"parameters":[{"id":32,"name":"input","kind":32768,"kindString":"Parameter","flags":{},"type":{"type":"intrinsic","name":"unknown"}}],"type":{"type":"intrinsic","name":"string"}}]}],"groups":[{"title":"Functions","children":[30],"categories":[{"title":"String","children":[30]}]}]},{"id":33,"name":"to-letters","kind":2,"kindString":"Module","flags":{},"children":[{"id":34,"name":"toLetters","kind":64,"kindString":"Function","flags":{},"signatures":[{"id":35,"name":"toLetters","kind":4096,"kindString":"Call signature","flags":{},"comment":{"summary":[{"kind":"text","text":"从传入的字符串参数中删除所有非字母字符"}],"blockTags":[{"tag":"@example","content":[{"kind":"code","text":"```ts\\nimport { toLetters } from \'@balac/utils\'\\n\\ntoLetters(\'this is text\') // thisistext\\ntoLetters(\'123-Text!!!\') // Text\\n```"}]}]},"parameters":[{"id":36,"name":"input","kind":32768,"kindString":"Parameter","flags":{},"type":{"type":"intrinsic","name":"unknown"}}],"type":{"type":"intrinsic","name":"string"}}]}],"groups":[{"title":"Functions","children":[34],"categories":[{"title":"String","children":[34]}]}]},{"id":37,"name":"to-number","kind":2,"kindString":"Module","flags":{},"children":[{"id":38,"name":"toNumber","kind":64,"kindString":"Function","flags":{},"signatures":[{"id":39,"name":"toNumber","kind":4096,"kindString":"Call signature","flags":{},"comment":{"summary":[{"kind":"text","text":"将传入的参数作为数字返回，不能转换成数字则返回 0"}],"blockTags":[{"tag":"@example","content":[{"kind":"code","text":"```ts\\nimport { toNumber } from \'@balac/utils\'\\n\\ntoNumber(\'this is text\') // 0\\ntoNumber(\'3\') // 3\\ntoNumber(0.4) // 0.4\\ntoNumber(new Set([])) // 0\\n```"}]}]},"parameters":[{"id":40,"name":"input","kind":32768,"kindString":"Parameter","flags":{},"type":{"type":"intrinsic","name":"unknown"}}],"type":{"type":"intrinsic","name":"number"}}]}],"groups":[{"title":"Functions","children":[38],"categories":[{"title":"Number","children":[38]}]}]},{"id":41,"name":"to-ordinal","kind":2,"kindString":"Module","flags":{},"children":[{"id":42,"name":"toOrdinal","kind":64,"kindString":"Function","flags":{},"signatures":[{"id":43,"name":"toOrdinal","kind":4096,"kindString":"Call signature","flags":{},"comment":{"summary":[{"kind":"text","text":"如果可能，将数字转换为其序数字符串形式，否则返回第 0 个。\\n- 1 -> 1st\\n- 4.2 -> 4.2th\\n- notANumber -> 0th"}],"blockTags":[{"tag":"@example","content":[{"kind":"code","text":"```ts\\nimport { toOrdinal } from \'@balac/utils\'\\n\\ntoOrdinal(\'this is text\') // 0th\\ntoOrdinal(\'3\') // 3rd\\ntoOrdinal(\'11\') // 11th\\ntoOrdinal(3.14) // 3.14th\\n```"}]}]},"parameters":[{"id":44,"name":"input","kind":32768,"kindString":"Parameter","flags":{},"type":{"type":"intrinsic","name":"unknown"},"defaultValue":"0"}],"type":{"type":"intrinsic","name":"string"}}]}],"groups":[{"title":"Functions","children":[42],"categories":[{"title":"Number","children":[42]}]}]}]}'),o=t(6425);let m=e=>{let{className:n,children:t,inline:r,...a}=e,s=/language-(\w+)/u.exec(n||"");return!r&&s?(0,i.jsx)(o.Z,{PreTag:"div",language:s[1],style:{comment:{color:"#9CA3AF"},function:{color:"#F92D8E"},imports:{color:"#F92D8E"},keyword:{color:"#88a6f1"},'pre[class*="language-"]':{background:"transparent"},string:{color:"#D1D5DB"}},tabIndex:"0",...a,children:String(t).replace(/\n$/u,"")}):(0,i.jsx)("code",{className:n,...a,children:t})},g={};for(let e of d.pI){let{name:n,id:t,signatures:i}=e.children[0],r=i[0].comment.summary[0].text,a=i[0].comment.blockTags[0].content[0].text,s=e.groups[0].categories[0].title,c={code:a,id:t,name:n,signatures:i,slug:e.name,summary:r};g[s]?g[s].push(c):g[s]=[c]}let u={author:"Balac",desc:"一个 JavaScript 公用方法集合",title:"Utils"},p=()=>{let e=(0,s.useMemo)(()=>Object.entries(g).sort().map(e=>{let[n,t]=e;return(0,i.jsxs)("div",{children:[(0,i.jsx)("h2",{className:"text-gray-500",children:n}),t.map(e=>(0,i.jsx)("ul",{children:(0,i.jsx)("li",{children:(0,i.jsx)("a",{className:"block cursor-pointer truncate rounded px-4 py-2 font-medium hover:bg-primary hover:text-white",href:"#".concat(e.name),children:e.name})})},e.id))]},n)}),[]),n=(0,s.useMemo)(()=>Object.entries(g).sort().map(e=>{let[n,t]=e;return(0,i.jsx)(s.Fragment,{children:t.map(e=>(0,i.jsxs)(s.Fragment,{children:[(0,i.jsxs)("h2",{className:"scroll-mt-28",id:e.name,children:[(0,i.jsx)("a",{href:"#".concat(e.name),children:e.name}),(0,i.jsx)("span",{"aria-label":"in ".concat(n," category"),className:"ml-4 rounded bg-primary px-2 py-1 text-xs",role:"presentation",children:n})]}),(0,i.jsx)(c.D,{children:e.summary}),(0,i.jsx)(c.D,{components:{code:m},children:e.code})]},e.id))},n)}),[]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a(),{children:(0,i.jsx)("title",{children:u.title})}),(0,i.jsxs)("div",{className:"container",id:"top",children:[(0,i.jsx)("header",{className:"flex h-20 flex-col justify-center border-b border-primary bg-gray-900 md:container md:sticky md:top-0",children:(0,i.jsxs)("div",{className:"flex items-center justify-between",children:[(0,i.jsx)("a",{className:"flex items-center justify-center space-x-2 sm:justify-start",href:"/",children:(0,i.jsxs)("h1",{className:"bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-3xl font-bold leading-snug text-transparent",children:[u.title," ",(0,i.jsx)("span",{className:"text-xs",children:l.i8})]})}),(0,i.jsx)("ul",{className:"flex items-center space-x-4 md:-mr-4",children:(0,i.jsx)("li",{children:(0,i.jsx)("a",{"aria-label":"npm",className:"inline-block cursor-pointer rounded py-2 hover:bg-primary hover:text-white md:px-4",href:"./coverage/index.html",children:"测试覆盖率"})})})]})}),(0,i.jsx)("aside",{className:"fixed bottom-5 top-20 hidden overflow-y-auto overflow-x-hidden pt-16 scrollbar-track-gray-900 scrollbar-thumb-gray-500 md:block md:w-40 lg:w-60",children:(0,i.jsx)("nav",{className:"space-y-8 pb-16",children:e})}),(0,i.jsxs)("main",{className:"prose prose-lg prose-invert mt-16 pb-32 md:ml-52 lg:ml-72",children:[(0,i.jsxs)("p",{className:"lead",children:[u.desc,"\xa0"]}),(0,i.jsx)("h2",{children:"设计规则"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"零依赖"}),(0,i.jsx)("li",{children:"不会抛出异常."}),(0,i.jsx)("li",{children:"Never assume anything about input value(s)."}),(0,i.jsx)("li",{children:"总会返回一个合理的默认值"})]}),(0,i.jsx)("h3",{children:"命名规则"}),(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Prefix 前缀"}),(0,i.jsx)("th",{children:"Condition 返回"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"check"})}),(0,i.jsx)("td",{children:"返回一个布尔值"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"generate"})}),(0,i.jsx)("td",{children:"返回一个新数据"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"to"})}),(0,i.jsx)("td",{children:"Returns coerced input"})]}),(0,i.jsx)("tr",{children:(0,i.jsx)("td",{colSpan:2,children:(0,i.jsx)("small",{children:"不返回数据的函数没有前缀"})})})]})]}),(0,i.jsx)("p",{children:"与这种优雅的变量命名没有冲突，例如："}),(0,i.jsx)(c.D,{components:{code:m},children:"\n```js\nconst isUnique = checkUnique([1, 2, 3])\n```\n"}),(0,i.jsx)("h2",{children:"Install 安装"}),(0,i.jsx)("pre",{children:(0,i.jsx)(m,{className:"language-shell",children:"npm i @balac/utils"})}),(0,i.jsx)("hr",{}),n,(0,i.jsx)("a",{className:"fixed bottom-8 right-8 flex h-8 w-8 cursor-pointer items-center justify-center truncate rounded bg-gray-800/80 text-xs leading-none text-gray-100 no-underline hover:text-primary",href:"/#top",children:"Top"})]})]})]})};var h=p}},function(e){e.O(0,[459,774,888,179],function(){return e(e.s=5728)}),_N_E=e.O()}]);
(this.webpackJsonpabitable=this.webpackJsonpabitable||[]).push([[0],{15:function(e,t){e.exports={splitOnce:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" ";if(!e)return["",""];var n=e.indexOf(t);return[e.slice(0,n),e.slice(n+t.length)]},groupBy:function(e,t){return e.reduce((function(e,n){return(e[n[t]]=e[n[t]]||[]).push(n),e}),{})}}},33:function(e,t){},44:function(e,t,n){},46:function(e,t,n){},56:function(e,t){},57:function(e,t){},86:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(35),i=n.n(c),s=(n(44),n(3)),l=n.n(s),o=n(10),u=n(11),d=n(36),m=(n(46),n(6)),b=n(39),j=n(38),p=n(90),f=n(21),x=n(14),h=["\u0431\u0435\u0437 \u0432\u0441\u0442\u0443\u043f\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0438\u0441\u043f\u044b\u0442\u0430\u043d\u0438\u0439","\u043d\u0430 \u0431\u044e\u0434\u0436\u0435\u0442\u043d\u043e\u0435 \u043c\u0435\u0441\u0442\u043e \u0432 \u043f\u0440\u0435\u0434\u0435\u043b\u0430\u0445 \u043e\u0441\u043e\u0431\u043e\u0439 \u043a\u0432\u043e\u0442\u044b","\u043d\u0430 \u0431\u044e\u0434\u0436\u0435\u0442\u043d\u043e\u0435 \u043c\u0435\u0441\u0442\u043e \u0432 \u043f\u0440\u0435\u0434\u0435\u043b\u0430\u0445 \u0446\u0435\u043b\u0435\u0432\u043e\u0439 \u043a\u0432\u043e\u0442\u044b","\u043f\u043e \u043e\u0431\u0449\u0435\u043c\u0443 \u043a\u043e\u043d\u043a\u0443\u0440\u0441\u0443","\u043d\u0430 \u043a\u043e\u043d\u0442\u0440\u0430\u043a\u0442\u043d\u043e\u0439 \u043e\u0441\u043d\u043e\u0432\u0435"];function g(e){return function(t){var n=t.cells;return Object(x.a)(n).filter((function(e){return!e.classList.contains("hdr")})).reduce((function(t,n,a){var r,c=n.querySelector("input,select");return r=c?"checkbox"===c.type?c.checked:c.value:n.innerText.trim(),Object.assign(t,Object(f.a)({},e[a],r))}),{})}}var O=function(e,t){var n,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:275,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"\u043d\u0430 \u0431\u044e\u0434\u0436\u0435\u0442\u043d\u043e\u0435 \u043c\u0435\u0441\u0442\u043e \u0432 \u043f\u0440\u0435\u0434\u0435\u043b\u0430\u0445 \u043e\u0441\u043e\u0431\u043e\u0439 \u043a\u0432\u043e\u0442\u044b",c=Object(x.a)(e.tBodies[0].rows[0].cells),i=Object(x.a)(e.tBodies[0].rows[1].cells),s=c.filter((function(e){return e.colSpan>1})).map((function(e){return{position:e.cellIndex,span:e.colSpan}}));s.forEach((function(e){c.splice.apply(c,[e.position,1].concat(Object(x.a)(i.slice(n||0,e.span)))),n=e.position}));var l=Object(x.a)(c).map((function(e){return e.innerText.trim()}));l.shift();var o,u=Object(x.a)(e.tBodies[0].rows).filter((function(e){return!e.classList.contains("hdr")}));if("\u043b\u044e\u0431\u044b\u043c"===r.name){var d=[],m=[],b=u.filter((function(e,t){return h.includes(e.firstChild.innerText.trim())&&d.push(t),h.includes(e.firstChild.innerText.trim())}));if(!b[0])return[];d.forEach((function(e,t){m.push(u.slice(e,e+b[t].firstChild.rowSpan)),m[t][0].cells[0].parentNode.removeChild(m[t][0].cells[0])}));var j=m.flat().map(g(l)).filter((function(e){return+e["\u0415\u0413\u042d"]>=a}));return j.forEach((function(e){e.program=t})),j}var p=u.filter((function(e,t){return e.firstChild.innerText.trim()===r.name&&(o=t),e.firstChild.innerText.trim()===r.name}));if(!p[0])return[];var f=u.slice(o,o+p[0].firstChild.rowSpan);f[0].cells[0].parentNode.removeChild(f[0].cells[0]);var O=f.map(g(l)).filter((function(e){return+e["\u0415\u0413\u042d"]>=a}));return O.forEach((function(e){e.program=t})),O},v=n.p+"static/media/lost.1d2c67aa.gif",y=n(5),w=n(19),N=n(37),C=n(24),k=n(30),F=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")},P=n(1),S=["children","className"],T=["children","className"];function B(e){var t=e.children,n=e.className,a=Object(k.a)(e,S);return Object(P.jsx)("button",Object(y.a)(Object(y.a)({type:"button",className:F("relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50",n)},a),{},{children:t}))}function L(e){var t=e.children,n=e.className,a=Object(k.a)(e,T);return Object(P.jsx)("button",Object(y.a)(Object(y.a)({type:"button",className:F("relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50",n)},a),{},{children:t}))}function E(e){var t=e.className;return Object(P.jsx)("svg",{className:t,stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 320 512",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:Object(P.jsx)("path",{d:"M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"})})}function z(e){var t=e.className;return Object(P.jsx)("svg",{className:t,stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 320 512",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:Object(P.jsx)("path",{d:"M279 224H41c-21.4 0-32.1-25.9-17-41L143 64c9.4-9.4 24.6-9.4 33.9 0l119 119c15.2 15.1 4.5 41-16.9 41z"})})}function G(e){var t=e.className;return Object(P.jsx)("svg",{className:t,stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 320 512",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:Object(P.jsx)("path",{d:"M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"})})}function H(e){var t=e.preGlobalFilteredRows,n=e.globalFilter,a=e.setGlobalFilter,c=t.length,i=r.a.useState(n),s=Object(u.a)(i,2),l=s[0],o=s[1],d=Object(w.useAsyncDebounce)((function(e){a(e||void 0)}),200);return Object(P.jsxs)("label",{className:"flex gap-x-2 items-baseline  w-full sm:w-1/4",children:[Object(P.jsx)("span",{className:"text-gray-700",children:"\u041f\u043e\u0438\u0441\u043a: "}),Object(P.jsx)("input",{type:"text",className:"rounded-md w-full border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50",value:l||"",onChange:function(e){o(e.target.value),d(e.target.value)},placeholder:"".concat(c," \u0430\u0431\u0438\u0442\u0443\u0440\u0438\u0435\u043d\u0442(-\u0430/-\u043e\u0432/-\u043e\u043a)...")})]})}var D=function(e){var t=e.columns,n=e.data,a=Object(w.useTable)({columns:t,data:n,initialState:{pageSize:50}},w.useFilters,w.useGlobalFilter,w.useSortBy,w.usePagination),r=a.getTableProps,c=a.getTableBodyProps,i=a.headerGroups,s=a.prepareRow,l=a.page,o=a.canPreviousPage,u=a.canNextPage,d=a.pageOptions,m=a.pageCount,b=a.gotoPage,j=a.nextPage,p=a.previousPage,f=a.setPageSize,x=a.state,h=a.preGlobalFilteredRows,g=a.setGlobalFilter,O=a.state,v=O.pageIndex,k=O.pageSize;return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(N.a,{place:"bottom",type:"info",effect:"solid"}),Object(P.jsxs)("div",{className:"sm:flex sm:gap-x-2",children:[Object(P.jsx)(H,{preGlobalFilteredRows:h,globalFilter:x.globalFilter,setGlobalFilter:g}),i.map((function(e){return e.headers.map((function(e){return e.Filter?Object(P.jsx)("div",{className:"mt-2 sm:mt-0",children:e.render("Filter")},e.id):null}))}))]}),Object(P.jsx)("div",{className:"mt-4 flex flex-col",children:Object(P.jsx)("div",{className:"-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8",children:Object(P.jsx)("div",{className:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8",children:Object(P.jsx)("div",{className:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg",children:Object(P.jsxs)("table",Object(y.a)(Object(y.a)({},r()),{},{className:"min-w-full divide-y divide-gray-200",children:[Object(P.jsx)("thead",{className:"bg-gray-50",children:i.map((function(e){return Object(P.jsx)("tr",Object(y.a)(Object(y.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(P.jsx)("th",Object(y.a)(Object(y.a)({scope:"col",className:"group px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},e.getHeaderProps(e.getSortByToggleProps())),{},{title:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",children:Object(P.jsxs)("div",{className:"flex items-center justify-between",children:[e.render("Header"),Object(P.jsx)("span",{children:e.isSorted?e.isSortedDesc?Object(P.jsx)(G,{className:"w-4 h-4 text-gray-400"}):Object(P.jsx)(z,{className:"w-4 h-4 text-gray-400"}):Object(P.jsx)(E,{className:"w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100"})})]})}))}))}))}))}),Object(P.jsx)("tbody",Object(y.a)(Object(y.a)({},c()),{},{className:"bg-white divide-y divide-gray-200",children:l.map((function(e){return s(e),Object(P.jsx)("tr",Object(y.a)(Object(y.a)({},e.getRowProps()),{},{className:"transition-colors hover:bg-blue-100",children:e.cells.map((function(e){return Object(P.jsx)("td",Object(y.a)(Object(y.a)({},e.getCellProps()),{},{className:"px-6 py-4 whitespace-nowrap",role:"cell",children:"defaultRenderer"===e.column.Cell.name?Object(P.jsx)("div",{className:"text-sm text-gray-500",children:e.render("Cell")}):e.render("Cell")}))}))}))}))}))]}))})})})}),Object(P.jsxs)("div",{className:"py-3 flex items-center justify-between",children:[Object(P.jsxs)("div",{className:"flex-1 flex justify-between sm:hidden",children:[Object(P.jsx)(B,{onClick:function(){return p()},disabled:!o,children:"Previous"}),Object(P.jsx)(B,{onClick:function(){return j()},disabled:!u,children:"Next"})]}),Object(P.jsxs)("div",{className:"hidden sm:flex-1 sm:flex sm:items-center sm:justify-between",children:[Object(P.jsxs)("div",{className:"flex gap-x-2 items-baseline",children:[Object(P.jsxs)("span",{className:"text-sm text-gray-700",children:["\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 ",Object(P.jsx)("span",{className:"font-medium",children:v+1})," \u0438\u0437"," ",Object(P.jsx)("span",{className:"font-medium",children:d.length})]}),Object(P.jsxs)("label",{children:[Object(P.jsx)("span",{className:"sr-only",children:"Items Per Page"}),Object(P.jsx)("select",{className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50",value:k,onBlur:function(e){f(Number(e.target.value))},onChange:function(e){f(Number(e.target.value))},children:[25,50,250,1e3].map((function(e){return Object(P.jsxs)("option",{value:e,children:["\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c ",e]},e)}))})]})]}),Object(P.jsx)("div",{children:Object(P.jsxs)("nav",{className:"relative z-0 inline-flex rounded-md shadow-sm -space-x-px","aria-label":"Pagination",children:[Object(P.jsxs)(L,{className:"rounded-l-md",onClick:function(){return b(0)},disabled:!o,children:[Object(P.jsx)("span",{className:"sr-only",children:"First"}),Object(P.jsx)(C.a,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})]}),Object(P.jsxs)(L,{onClick:function(){return p()},disabled:!o,children:[Object(P.jsx)("span",{className:"sr-only",children:"Previous"}),Object(P.jsx)(C.c,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})]}),Object(P.jsxs)(L,{onClick:function(){return j()},disabled:!u,children:[Object(P.jsx)("span",{className:"sr-only",children:"Next"}),Object(P.jsx)(C.d,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})]}),Object(P.jsxs)(L,{className:"rounded-r-md",onClick:function(){return b(m-1)},disabled:!u,children:[Object(P.jsx)("span",{className:"sr-only",children:"Last"}),Object(P.jsx)(C.b,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})]})]})})]})]})]})},M=function(){return Object(P.jsx)("footer",{className:"text-gray-600 px-6 lg:px-8 py-2",children:Object(P.jsx)("div",{className:"mx-auto flex flex-col md:flex-row justify-center items-center space-y-4",children:Object(P.jsxs)("div",{className:"text-sm",children:["\xa9",Object(P.jsx)("a",{href:"https://github.com/LetonGerman",children:"German Leton"})," |"," ",Object(P.jsx)("a",{href:"https://itworks.group/",children:"ITWorks Group"})]})})})},I=n(89),R=n(17),_=[{id:0,name:"\u0431\u0435\u0437 \u0432\u0441\u0442\u0443\u043f\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0438\u0441\u043f\u044b\u0442\u0430\u043d\u0438\u0439"},{id:1,name:"\u043d\u0430 \u0431\u044e\u0434\u0436\u0435\u0442\u043d\u043e\u0435 \u043c\u0435\u0441\u0442\u043e \u0432 \u043f\u0440\u0435\u0434\u0435\u043b\u0430\u0445 \u043e\u0441\u043e\u0431\u043e\u0439 \u043a\u0432\u043e\u0442\u044b"},{id:2,name:"\u043d\u0430 \u0431\u044e\u0434\u0436\u0435\u0442\u043d\u043e\u0435 \u043c\u0435\u0441\u0442\u043e \u0432 \u043f\u0440\u0435\u0434\u0435\u043b\u0430\u0445 \u0446\u0435\u043b\u0435\u0432\u043e\u0439 \u043a\u0432\u043e\u0442\u044b"},{id:3,name:"\u043f\u043e \u043e\u0431\u0449\u0435\u043c\u0443 \u043a\u043e\u043d\u043a\u0443\u0440\u0441\u0443"},{id:4,name:"\u043d\u0430 \u043a\u043e\u043d\u0442\u0440\u0430\u043a\u0442\u043d\u043e\u0439 \u043e\u0441\u043d\u043e\u0432\u0435"},{id:5,name:"\u043b\u044e\u0431\u044b\u043c"}];var W=function(e){var t=e.value,n=e.onConditionChange;return Object(P.jsx)(I.a,{value:_[t.id],onChange:function(e){n(e)},children:Object(P.jsxs)("div",{className:"relative mt-1",children:[Object(P.jsxs)(I.a.Button,{className:"relative py-2 pl-3 pr-10 mx-1 text-left bg-white rounded-lg shadow-sm cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm",children:[Object(P.jsx)("span",{className:"block truncate",children:t.name}),Object(P.jsx)("span",{className:"absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none",children:Object(P.jsx)(R.c,{className:"w-5 h-5 text-gray-400","aria-hidden":"true"})})]}),Object(P.jsx)(p.a,{as:a.Fragment,leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:Object(P.jsx)(I.a.Options,{className:"absolute py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm  z-50",children:_.map((function(e){return Object(P.jsx)(I.a.Option,{className:function(e){var t=e.active;return"".concat(t?"text-gray-900 bg-blue-100":"text-gray-700","\n                          cursor-default select-none relative py-2 pl-10 pr-4")},value:e,children:function(t){var n=t.selected;t.active;return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)("span",{className:"".concat(n?"font-medium":"font-normal"," block truncate"),children:e.name}),n?Object(P.jsx)("span",{className:"".concat("text-amber-600","\n                                absolute inset-y-0 left-0 flex items-center pl-3"),children:Object(P.jsx)(R.a,{className:"w-5 h-5","aria-hidden":"true"})}):null]})}},e.id)}))})})]})})},A=n(23),q=n.n(A),J=n(15),U={name:"\u0424\u0418\u041e",eg:"\u0415\u0413\u042d",egid:"\u0415\u0413\u042d+\u0418\u0414",priority1:"\u041f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442 1",place1:"\u041c\u0435\u0441\u0442\u043e 1",priority2:"\u041f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442 2",place2:"\u041c\u0435\u0441\u0442\u043e 2",priority3:"\u041f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442 3",place3:"\u041c\u0435\u0441\u0442\u043e 3",priority4:"\u041f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442 4",place4:"\u041c\u0435\u0441\u0442\u043e 4"},Z=function(e){var t=e.tableData,n=function(){var e=Object(o.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],t.forEach((function(e){var t={};Object.keys(e).forEach((function(n){if(n.startsWith("priority")){var a=Object(J.splitOnce)(e[n]),r=Object(u.a)(a,1);t[U[n]]=r[0]}else t[U[n]]=e[n]})),n.push(t)})),e.abrupt("return",n);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a=function(){var e=Object(o.a)(l.a.mark((function e(){var a,r,c,i,s,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n(t);case 2:a=e.sent,r=q.a.utils.json_to_sheet(a,{header:["\u0424\u0418\u041e","\u0415\u0413\u042d","\u0415\u0413\u042d+\u0418\u0414","\u041f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442 1","\u041c\u0435\u0441\u0442\u043e 1","\u041f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442 2","\u041c\u0435\u0441\u0442\u043e 2","\u041f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442 3","\u041c\u0435\u0441\u0442\u043e 3","\u041f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442 4","\u041c\u0435\u0441\u0442\u043e 4"]}),c=q.a.utils.book_new(),i=[],a.map((function(e){return Object.entries(e).map((function(e,t){var n=Object(u.a)(e,2)[1].toString();i[t]=i[t]>=n.length?i[t]:n.length}))})),r["!cols"]=i.map((function(e){return{width:e+5}})),q.a.utils.book_append_sheet(c,r,"Abit"),s=new Date,o={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",timeZone:"Europe/Moscow"},q.a.writeFile(c,"\u0410\u0431\u0438\u0442 ".concat(new Intl.DateTimeFormat("ru-RU",o).format(s),".xlsx"));case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(P.jsx)("button",{type:"button",className:"bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg mt-3",onClick:function(){a()},children:Object(P.jsx)(R.b,{className:"h-5 w-5"})})},K=[{id:0,name:"\u043b\u044e\u0431\u043e\u043c"},{id:1,name:"01.03.02 \xab\u041f\u0440\u0438\u043a\u043b\u0430\u0434\u043d\u0430\u044f \u043c\u0430\u0442\u0435\u043c\u0430\u0442\u0438\u043a\u0430 \u0438 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0442\u0438\u043a\u0430\xbb"},{id:2,name:"09.03.01 \xab\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0442\u0438\u043a\u0430 \u0438 \u0432\u044b\u0447\u0438\u0441\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u0442\u0435\u0445\u043d\u0438\u043a\u0430\xbb"},{id:3,name:"09.03.02 \xab\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0438 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438\xbb"},{id:4,name:"09.03.03 \xab\u041f\u0440\u0438\u043a\u043b\u0430\u0434\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0442\u0438\u043a\u0430\xbb"},{id:5,name:"09.03.04 \xab\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u0430\u044f \u0438\u043d\u0436\u0435\u043d\u0435\u0440\u0438\u044f\xbb"},{id:6,name:"10.03.01 \xab\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u0430\u044f \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u044c\xbb"},{id:7,name:"11.03.02 \xab\u0418\u043d\u0444\u043e\u043a\u043e\u043c\u043c\u0443\u043d\u0438\u043a\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438 \u0438 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0441\u0432\u044f\u0437\u0438\xbb"},{id:8,name:"11.03.03 \xab\u041a\u043e\u043d\u0441\u0442\u0440\u0443\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0438 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u044f \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u044b\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\xbb"},{id:9,name:"12.03.01 \xab\u041f\u0440\u0438\u0431\u043e\u0440\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u0435\xbb"},{id:10,name:"12.03.02 \xab\u041e\u043f\u0442\u043e\u0442\u0435\u0445\u043d\u0438\u043a\u0430\xbb"},{id:11,name:"12.03.03 \xab\u0424\u043e\u0442\u043e\u043d\u0438\u043a\u0430 \u0438 \u043e\u043f\u0442\u043e\u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0442\u0438\u043a\u0430\xbb"},{id:12,name:"12.03.04 \xab\u0411\u0438\u043e\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0438 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438\xbb"},{id:13,name:"12.03.05 \xab\u041b\u0430\u0437\u0435\u0440\u043d\u0430\u044f \u0442\u0435\u0445\u043d\u0438\u043a\u0430 \u0438 \u043b\u0430\u0437\u0435\u0440\u043d\u044b\u0435 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438\xbb"},{id:14,name:"13.03.01 \xab\u0422\u0435\u043f\u043b\u043e\u044d\u043d\u0435\u0440\u0433\u0435\u0442\u0438\u043a\u0430 \u0438 \u0442\u0435\u043f\u043b\u043e\u0442\u0435\u0445\u043d\u0438\u043a\u0430\xbb"},{id:15,name:"13.03.02 \xab\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u044d\u043d\u0435\u0440\u0433\u0435\u0442\u0438\u043a\u0430 \u0438 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u0442\u0435\u0445\u043d\u0438\u043a\u0430\xbb"},{id:16,name:"15.03.04 \xab\u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044f \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0432 \u0438 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0441\u0442\u0432\xbb"},{id:17,name:"15.03.06 \xab\u041c\u0435\u0445\u0430\u0442\u0440\u043e\u043d\u0438\u043a\u0430 \u0438 \u0440\u043e\u0431\u043e\u0442\u043e\u0442\u0435\u0445\u043d\u0438\u043a\u0430\xbb"},{id:18,name:"16.03.01 \xab\u0422\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0444\u0438\u0437\u0438\u043a\u0430\xbb"},{id:19,name:"16.03.03 \xab\u0425\u043e\u043b\u043e\u0434\u0438\u043b\u044c\u043d\u0430\u044f, \u043a\u0440\u0438\u043e\u0433\u0435\u043d\u043d\u0430\u044f \u0442\u0435\u0445\u043d\u0438\u043a\u0430 \u0438 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0436\u0438\u0437\u043d\u0435\u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u0438\u044f\xbb"},{id:20,name:"18.03.01 \xab\u0425\u0438\u043c\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u044f\xbb"},{id:21,name:"18.03.02 \xab\u042d\u043d\u0435\u0440\u0433\u043e- \u0438 \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0441\u0431\u0435\u0440\u0435\u0433\u0430\u044e\u0449\u0438\u0435 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u044b \u0432 \u0445\u0438\u043c\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438, \u043d\u0435\u0444\u0442\u0435\u0445\u0438\u043c\u0438\u0438 \u0438 \u0431\u0438\u043e\u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438\xbb"},{id:22,name:"19.03.01 \xab\u0411\u0438\u043e\u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u044f\xbb"},{id:23,name:"23.03.03 \xab\u042d\u043a\u0441\u043f\u043b\u0443\u0430\u0442\u0430\u0446\u0438\u044f \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u043d\u043e-\u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u043c\u0430\u0448\u0438\u043d \u0438 \u043a\u043e\u043c\u043f\u043b\u0435\u043a\u0441\u043e\u0432\xbb"},{id:24,name:"24.03.02 \xab\u0421\u0438\u0441\u0442\u0435\u043c\u044b \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0434\u0432\u0438\u0436\u0435\u043d\u0438\u0435\u043c \u0438 \u043d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044f\xbb"},{id:25,name:"27.03.04 \xab\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0432 \u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0441\u0438\u0441\u0442\u0435\u043c\u0430\u0445\xbb"},{id:26,name:"13.03.01 \xab27.03.05 \xab\u0418\u043d\u043d\u043e\u0432\u0430\u0442\u0438\u043a\u0430\xbb"},{id:27,name:"38.03.05 \xab\u0411\u0438\u0437\u043d\u0435\u0441-\u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0442\u0438\u043a\u0430\xbb"},{id:28,name:"44.03.04 \xab\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0435 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435\xbb"},{id:29,name:"45.03.04 \xab\u0418\u043d\u0442\u0435\u043b\u043b\u0435\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0432 \u0433\u0443\u043c\u0430\u043d\u0438\u0442\u0430\u0440\u043d\u043e\u0439 \u0441\u0444\u0435\u0440\u0435\xbb"}];var Q,V=function(e){var t=e.value,n=e.onProgramChange;return Object(P.jsx)(I.a,{value:K[t.id],onChange:function(e){n(e)},children:Object(P.jsxs)("div",{className:"relative mt-1",children:[Object(P.jsxs)(I.a.Button,{className:"relative py-2 pl-3 pr-10 mx-1 text-left bg-white rounded-lg shadow-sm cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm",children:[Object(P.jsx)("span",{className:"block truncate",children:t.name}),Object(P.jsx)("span",{className:"absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none",children:Object(P.jsx)(R.c,{className:"w-5 h-5 text-gray-400","aria-hidden":"true"})})]}),Object(P.jsx)(p.a,{as:a.Fragment,leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:Object(P.jsx)(I.a.Options,{className:"absolute py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-50",children:K.map((function(e){return Object(P.jsx)(I.a.Option,{className:function(e){var t=e.active;return"".concat(t?"text-gray-900 bg-blue-100":"text-gray-700","\n                          cursor-default select-none relative py-2 pl-10 pr-4")},value:e,children:function(t){var n=t.selected;t.active;return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)("span",{className:"".concat(n?"font-medium":"font-normal"," block truncate"),children:e.name}),n?Object(P.jsx)("span",{className:"".concat("text-amber-600","\n                                absolute inset-y-0 left-0 flex items-center pl-3"),children:Object(P.jsx)(R.a,{className:"w-5 h-5","aria-hidden":"true"})}):null]})}},e.id)}))})})]})})},X=Object(m.css)(Q||(Q=Object(d.a)(["\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\tmargin-left: -50px;\n\tmargin-top: -50px;\n\tbackground-size: 100%;\n\topacity: 1;\n"]))),Y=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(!0),i=Object(u.a)(c,2),s=i[0],d=i[1],m=Object(a.useState)(!1),f=Object(u.a)(m,2),x=f[0],h=f[1],g=Object(a.useState)(275),y=Object(u.a)(g,2),w=y[0],N=y[1],C=Object(a.useState)({id:1,name:"\u043d\u0430 \u0431\u044e\u0434\u0436\u0435\u0442\u043d\u043e\u0435 \u043c\u0435\u0441\u0442\u043e \u0432 \u043f\u0440\u0435\u0434\u0435\u043b\u0430\u0445 \u043e\u0441\u043e\u0431\u043e\u0439 \u043a\u0432\u043e\u0442\u044b"}),k=Object(u.a)(C,2),F=k[0],S=k[1],T=Object(a.useState)({id:0,name:"\u043b\u044e\u0431\u043e\u043c"}),B=Object(u.a)(T,2),L=B[0],E=B[1],z=Object(a.useMemo)((function(){return[{Header:"\u0424\u0418\u041e",accessor:"name"},{Header:"\u0415\u0413\u042d+\u0418\u0414",accessor:"egid"},{Header:"\u0415\u0413\u042d",accessor:"eg"},{Header:"\u041f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442 1 (\u2116 \u043f/\u043f)",accessor:"priority1",Cell:function(e){var t=e.row;return Object(P.jsxs)("span",{className:"text-sm text-gray-500","data-tip":Object(J.splitOnce)(t.values.priority1)[1],children:[Object(J.splitOnce)(t.values.priority1)[0]," ",t.original.place1?"(".concat(t.original.place1,")"):""]})}},{Header:"\u041f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442 2 (\u2116 \u043f/\u043f)",accessor:"priority2",Cell:function(e){var t=e.row;return Object(P.jsxs)("span",{className:"text-sm text-gray-500","data-tip":Object(J.splitOnce)(t.values.priority2)[1],children:[Object(J.splitOnce)(t.values.priority2)[0]," ",t.original.place2?"(".concat(t.original.place2,")"):""]})}},{Header:"\u041f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442 3 (\u2116 \u043f/\u043f)",accessor:"priority3",Cell:function(e){var t=e.row;return Object(P.jsxs)("span",{className:"text-sm text-gray-500","data-tip":Object(J.splitOnce)(t.values.priority3)[1],children:[Object(J.splitOnce)(t.values.priority3)[0]," ",t.original.place3?"(".concat(t.original.place3,")"):""]})}},{Header:"\u041f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442 4 (\u2116 \u043f/\u043f)",accessor:"priority4",Cell:function(e){var t=e.row;return Object(P.jsxs)("span",{className:"text-sm text-gray-500","data-tip":Object(J.splitOnce)(t.values.priority4)[1],children:[Object(J.splitOnce)(t.values.priority4)[0]," ",t.original.place4?"(".concat(t.original.place4,")"):""]})}}]}),[]),G=Object(a.useMemo)((function(){return{308:"01.03.02 \xab\u041f\u0440\u0438\u043a\u043b\u0430\u0434\u043d\u0430\u044f \u043c\u0430\u0442\u0435\u043c\u0430\u0442\u0438\u043a\u0430 \u0438 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0442\u0438\u043a\u0430\xbb",309:"09.03.01 \xab\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0442\u0438\u043a\u0430 \u0438 \u0432\u044b\u0447\u0438\u0441\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u0442\u0435\u0445\u043d\u0438\u043a\u0430\xbb",310:"09.03.02 \xab\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0438 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438\xbb",311:"09.03.03 \xab\u041f\u0440\u0438\u043a\u043b\u0430\u0434\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0442\u0438\u043a\u0430\xbb",312:"09.03.04 \xab\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u0430\u044f \u0438\u043d\u0436\u0435\u043d\u0435\u0440\u0438\u044f\xbb",313:"10.03.01 \xab\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u0430\u044f \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u044c\xbb",314:"11.03.02 \xab\u0418\u043d\u0444\u043e\u043a\u043e\u043c\u043c\u0443\u043d\u0438\u043a\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438 \u0438 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0441\u0432\u044f\u0437\u0438\xbb",315:"11.03.03 \xab\u041a\u043e\u043d\u0441\u0442\u0440\u0443\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0438 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u044f \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u044b\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\xbb",316:"12.03.01 \xab\u041f\u0440\u0438\u0431\u043e\u0440\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u0435\xbb",317:"12.03.02 \xab\u041e\u043f\u0442\u043e\u0442\u0435\u0445\u043d\u0438\u043a\u0430\xbb",318:"12.03.03 \xab\u0424\u043e\u0442\u043e\u043d\u0438\u043a\u0430 \u0438 \u043e\u043f\u0442\u043e\u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0442\u0438\u043a\u0430\xbb",319:"12.03.04 \xab\u0411\u0438\u043e\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0438 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438\xbb",320:"12.03.05 \xab\u041b\u0430\u0437\u0435\u0440\u043d\u0430\u044f \u0442\u0435\u0445\u043d\u0438\u043a\u0430 \u0438 \u043b\u0430\u0437\u0435\u0440\u043d\u044b\u0435 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438\xbb",321:"13.03.01 \xab\u0422\u0435\u043f\u043b\u043e\u044d\u043d\u0435\u0440\u0433\u0435\u0442\u0438\u043a\u0430 \u0438 \u0442\u0435\u043f\u043b\u043e\u0442\u0435\u0445\u043d\u0438\u043a\u0430\xbb",322:"13.03.02 \xab\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u044d\u043d\u0435\u0440\u0433\u0435\u0442\u0438\u043a\u0430 \u0438 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u0442\u0435\u0445\u043d\u0438\u043a\u0430\xbb",323:"15.03.04 \xab\u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044f \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0432 \u0438 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0441\u0442\u0432\xbb",324:"15.03.06 \xab\u041c\u0435\u0445\u0430\u0442\u0440\u043e\u043d\u0438\u043a\u0430 \u0438 \u0440\u043e\u0431\u043e\u0442\u043e\u0442\u0435\u0445\u043d\u0438\u043a\u0430\xbb",325:"16.03.01 \xab\u0422\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0444\u0438\u0437\u0438\u043a\u0430\xbb",326:"16.03.03 \xab\u0425\u043e\u043b\u043e\u0434\u0438\u043b\u044c\u043d\u0430\u044f, \u043a\u0440\u0438\u043e\u0433\u0435\u043d\u043d\u0430\u044f \u0442\u0435\u0445\u043d\u0438\u043a\u0430 \u0438 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0436\u0438\u0437\u043d\u0435\u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u0438\u044f\xbb",327:"18.03.01 \xab\u0425\u0438\u043c\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u044f\xbb",328:"18.03.02 \xab\u042d\u043d\u0435\u0440\u0433\u043e- \u0438 \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0441\u0431\u0435\u0440\u0435\u0433\u0430\u044e\u0449\u0438\u0435 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u044b \u0432 \u0445\u0438\u043c\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438, \u043d\u0435\u0444\u0442\u0435\u0445\u0438\u043c\u0438\u0438 \u0438 \u0431\u0438\u043e\u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438\xbb",329:"19.03.01 \xab\u0411\u0438\u043e\u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u044f\xbb",330:"23.03.03 \xab\u042d\u043a\u0441\u043f\u043b\u0443\u0430\u0442\u0430\u0446\u0438\u044f \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u043d\u043e-\u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u043c\u0430\u0448\u0438\u043d \u0438 \u043a\u043e\u043c\u043f\u043b\u0435\u043a\u0441\u043e\u0432\xbb",331:"24.03.02 \xab\u0421\u0438\u0441\u0442\u0435\u043c\u044b \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0434\u0432\u0438\u0436\u0435\u043d\u0438\u0435\u043c \u0438 \u043d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044f\xbb",332:"27.03.04 \xab\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0432 \u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0441\u0438\u0441\u0442\u0435\u043c\u0430\u0445\xbb",333:"13.03.01 \xab27.03.05 \xab\u0418\u043d\u043d\u043e\u0432\u0430\u0442\u0438\u043a\u0430\xbb",334:"38.03.05 \xab\u0411\u0438\u0437\u043d\u0435\u0441-\u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0442\u0438\u043a\u0430\xbb",335:"44.03.04 \xab\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0435 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435\xbb",336:"45.03.04 \xab\u0418\u043d\u0442\u0435\u043b\u043b\u0435\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0432 \u0433\u0443\u043c\u0430\u043d\u0438\u0442\u0430\u0440\u043d\u043e\u0439 \u0441\u0444\u0435\u0440\u0435\xbb"}}),[]),H=function(){var e=Object(o.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],n=[],Object.keys(G).forEach((function(e){n.push(e),t.push(Object(b.a)("https://api.allorigins.win/raw?url=https://abit.itmo.ru/bachelor/rating_rank/all/".concat(e,"/")).text())})),e.t0=n,e.next=6,Promise.all(t);case 6:return e.t1=e.sent,e.abrupt("return",[e.t0,e.t1]);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(o.a)(l.a.mark((function e(){var t,n,a,r,c,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,H();case 3:return n=e.sent,a=Object(u.a)(n,2),r=a[0],a[1].forEach((function(e,n){var a=(new DOMParser).parseFromString(e,"text/html").querySelector("table"),c=O(a,r[n],w,F);t.push(c)})),c=Object(J.groupBy)(t.flat(1),"\u0424\u0418\u041e"),i=[],Object.keys(c).forEach((function(e){var t={name:c[e][0]["\u0424\u0418\u041e"],eg:c[e][0]["\u0415\u0413\u042d"],egid:c[e][0]["\u0415\u0413\u042d+\u0418\u0414"]};c[e].forEach((function(e){+e["\u041d\u043e\u043c\u0435\u0440 \u0437\u0430\u044f\u0432\u043b\u0435\u043d\u0438\u044f"]<5&&(t["priority".concat(e["\u041d\u043e\u043c\u0435\u0440 \u0437\u0430\u044f\u0432\u043b\u0435\u043d\u0438\u044f"])]=G[e.program],t["place".concat(e["\u041d\u043e\u043c\u0435\u0440 \u0437\u0430\u044f\u0432\u043b\u0435\u043d\u0438\u044f"])]=e["\u2116 \u043f/\u043f"])})),i.push(t)})),[],L&&0!==L.id&&(i=i.filter((function(e){return[e.priority1,e.priority2,e.priority3,e.priority4].some((function(e){return e===L.name}))}))),e.abrupt("return",i);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!1),d(!0),e.prev=2,e.next=5,I();case 5:t=e.sent,e.next=13;break;case 8:return e.prev=8,e.t0=e.catch(2),d(!1),h(!0),e.abrupt("return");case 13:r(t),d(!1),t.length<1&&h(!0);case 16:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(){return e.apply(this,arguments)}}(),_=Object(a.useCallback)(Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R();case 2:case"end":return e.stop()}}),e)}))),[]);return Object(a.useEffect)((function(){_()}),[]),Object(P.jsxs)("div",{className:"min-h-screen flex flex-col justify-between bg-gray-100 text-gray-900 pt-2",children:[Object(P.jsxs)("main",{className:"max-w-8xl mb-auto px-4 sm:px-6 lg:px-8 pt-4",children:[Object(P.jsxs)("div",{className:"flex flex-auto flex-wrap items-center justify-center",children:[Object(P.jsx)("span",{className:"mx-1 mt-1",children:"\u0410\u0431\u0438\u0442\u0443\u0440\u0438\u0435\u043d\u0442\u044b \u0418\u0422\u041c\u041e, \u043f\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0435 \u0432 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0438"}),Object(P.jsx)(V,{className:"mt-1",value:L,onProgramChange:E}),Object(P.jsx)("span",{className:"mx-1 mt-1",children:"\u0441 \u0443\u0441\u043b\u043e\u0432\u0438\u0435\u043c \u043f\u043e\u0441\u0442\u0443\u043f\u043b\u0435\u043d\u0438\u044f"}),Object(P.jsx)(W,{className:"mt-1",value:F,onConditionChange:S}),Object(P.jsx)("span",{className:"mx-1  mt-1",children:"\u0438 \u0431\u0430\u043b\u043b\u043e\u043c \u0415\u0413\u042d \u043d\u0435 \u043c\u0435\u043d\u0435\u0435"}),Object(P.jsx)("div",{className:"relative inline-block mt-1",children:Object(P.jsx)("input",{type:"number",value:w,onChange:function(e){var t;t=e.target.value||void 0,N(t>300?300:t<0?0:t)},name:"",id:"",min:"0",max:"300",className:"py-2 pl-3 pr-2 mx-1 mt-1 text-left bg-white rounded-lg shadow-sm cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm"})})]}),Object(P.jsxs)("div",{className:"flex justify-center",children:[Object(P.jsx)("button",{type:"button",className:"mr-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mt-3",onClick:function(){R()},children:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c"}),Object(P.jsx)(Z,{tableData:n})]}),Object(P.jsx)(p.a,{show:s,enter:"transition-opacity duration-250",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition-opacity duration-250",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:Object(P.jsx)(j.DotLoader,{color:"#1946ba",loading:s,css:X,size:175})}),Object(P.jsxs)("div",{className:"mt-6",children:[Object(P.jsx)(p.a,{show:!s&&n.length>0,enter:"transition-opacity duration-250",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition-opacity duration-250",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:Object(P.jsx)(D,{columns:z,data:n})}),Object(P.jsx)(p.a,{show:x,enter:"transition-opacity duration-250",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition-opacity duration-250",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:Object(P.jsx)("div",{className:"flex justify-center align-center",children:Object(P.jsx)("img",{src:v,alt:"travolta is confused"})})})]})]}),Object(P.jsx)(M,{})]})},$=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,91)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};i.a.render(Object(P.jsx)(r.a.StrictMode,{children:Object(P.jsx)(Y,{})}),document.getElementById("root")),$()}},[[86,1,2]]]);
//# sourceMappingURL=main.4c6ea0ba.chunk.js.map
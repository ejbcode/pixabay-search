(this.webpackJsonppixabay=this.webpackJsonppixabay||[]).push([[0],{12:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),o=a.n(c),s=a(2),l=a.n(s),i=a(5),m=a(1),u=function(e){var t=e.error;return r.a.createElement("p",{className:"alert alert-danger",role:"alert"},t)},b=function(e){var t=e.setSearch,a=e.setPage,c=Object(n.useState)(""),o=Object(m.a)(c,2),s=o[0],l=o[1],i=Object(n.useState)(!1),b=Object(m.a)(i,2),p=b[0],f=b[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),""!==s.trim()?(f(!1),t(s),a(1)):f(!0)}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"form-group col-md-8"},r.a.createElement("input",{type:"text",className:"form-control form-control-lg",placeholder:"What are you looking for?",onChange:function(e){return l(e.target.value)}})),r.a.createElement("div",{className:"form-group col-md-4"},r.a.createElement("input",{type:"submit",className:"btn btn-lg btn-primary btn-block",value:"Find"}))),p&&r.a.createElement(u,{error:"Please fill the input with a keyword"}))},p=function(e){var t=Object.assign({},e),a=t.tags,n=t.previewURL;return r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:n,alt:a,className:"card-img-top"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-text"},a)))},f=function(e){var t=e.data;return r.a.createElement("div",{className:"card-columns"},t.map((function(e){return r.a.createElement("a",{href:e.largeImageURL,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(p,Object.assign({key:e.id},e)))})))};var d=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)([]),s=Object(m.a)(o,2),u=s[0],p=s[1],d=Object(n.useState)(1),v=Object(m.a)(d,2),E=v[0],g=v[1],h=Object(n.useState)(1),j=Object(m.a)(h,2),y=j[0],N=j[1],O="https://pixabay.com/api/?key=".concat("17527816-68d8832ae994a8ecc8b573c40","&q=").concat(a,"&per_page=").concat(20,"&page=").concat(E);return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==a){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,fetch(O);case 4:return t=e.sent,e.next=7,t.json();case 7:n=e.sent,p(n.hits),N(Math.ceil(n.totalHits/20));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[O,E,a]),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"jumbotron py-2"},r.a.createElement("h2",{className:"text-center"},"Search for Image"),r.a.createElement(b,{setSearch:c,setPage:g})),r.a.createElement("div",{className:"row justify-content-center p-3"},r.a.createElement(f,{data:u}),1===E?null:r.a.createElement("button",{type:"button",className:"btn btn-info mr-1",onClick:function(){var e=E-1;0!==e&&g(e)}},"\xab Previous"),E===y?null:r.a.createElement("button",{type:"button",className:"btn btn-info ",onClick:function(){var e=E+1;e>y||g(e)}},"Next \xbb")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,a){e.exports=a(12)}},[[6,1,2]]]);
//# sourceMappingURL=main.d8e10817.chunk.js.map
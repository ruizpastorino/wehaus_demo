(this.webpackJsonpwehaus_desafio=this.webpackJsonpwehaus_desafio||[]).push([[0],{26:function(e,t,s){},27:function(e,t,s){},28:function(e,t,s){},29:function(e,t,s){},37:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s.n(c),a=s(20),i=s.n(a),l=(s(26),s(27),s(28),s(29),s(12)),r=s(2),o=s(7),j=s.n(o),d=s(10),b=s(3),x=s(11),u=s(0),h=function(e){var t,s=e.reff,c=e.label,n=e.icon,a=e.onChange,i=e.name,l=e.value,r=e.placeholder,o=void 0===r?"":r,j=e.colorIcon,d=void 0===j?"orange":j,b=e.type,h=void 0===b?"text":b,m=e.style;return Object(u.jsxs)("div",{style:m,className:"d-flex align-items-end my-2",children:[n&&Object(u.jsx)("div",{style:{width:"40px",height:"40px"},className:"center-all align-items-start",children:Object(u.jsx)("i",{style:{color:d},className:"fas display-6 fa-"+n})}),Object(u.jsxs)("div",{className:"flex-1",children:[Object(u.jsx)("label",{children:c}),Object(u.jsx)("input",(t={className:"text-success text-lowercase bg-light",ref:s,name:i,value:l,type:h},Object(x.a)(t,"value",l),Object(x.a)(t,"onChange",a),Object(x.a)(t,"placeholder",o),t))]})]})},m=function(e){var t=e.reff,s=e.label,c=e.icon,n=e.onChange,a=e.name,i=e.value,l=e.colorIcon,r=void 0===l?"orange":l,o=e.children,j=e.style;return Object(u.jsxs)("div",{style:j,className:"d-flex align-items-end my-2",children:[c&&Object(u.jsx)("div",{style:{width:"40px",height:"40px"},className:"center-all align-items-start",children:Object(u.jsx)("i",{style:{color:r},className:"fas display-6 fa-"+c})}),Object(u.jsxs)("div",{className:"flex-1",children:[Object(u.jsx)("label",{children:s}),Object(u.jsx)("select",{ref:t,name:a,value:i,className:"text-capitalize bg-light",onChange:n,children:o})]})]})},f=function(e){var t=e.variant,s=void 0===t?"light":t;return Object(u.jsxs)("div",{style:{width:"200px"},className:"p-4 h-100  bg-".concat(s," center-all mr-2"),children:[Object(u.jsx)("h4",{style:{lineHeight:"30px"},className:"strong-text display-4",children:"Rick and Morty"}),Object(u.jsx)("p",{className:"display-7 strong-text w-100 mt-3",children:"Api Rest Demo"})]})},p=function(e){var t=e.data,s=e.setPickedEpisodes,c=t.location.url.split("location/")[1];return Object(u.jsxs)("div",{style:{width:"200px"},className:"bg-grey d-flex flex-column mr-2 mb-2 p-2",children:[Object(u.jsx)("div",{className:"center-all",children:Object(u.jsx)("img",{style:{width:"150px",height:"150px",backgroundColor:"grey"},className:"bg-white rounded-circle mb-3 hand-pointer",src:t.image,alt:""})}),Object(u.jsxs)("div",{className:"p-2",children:[Object(u.jsx)("h4",{className:"strong-text display-7",children:t.name}),Object(u.jsxs)("h5",{className:"display-8",children:[Object(u.jsx)("span",{className:"font-weight-bold mr-2",children:"Status: "})," ",t.status]}),Object(u.jsxs)("h5",{className:"display-8",children:[Object(u.jsx)("span",{className:"font-weight-bold mr-2",children:"Especie:"})," ",t.species]}),Object(u.jsxs)(l.b,{to:"/location/".concat(c),className:"display-8 d-block text-info",children:[Object(u.jsx)("span",{className:"font-weight-bold mr-2",children:"Location:"})," ",t.location.name]}),Object(u.jsxs)("h5",{className:"display-8 hand-pointer",onClick:function(){s(t.episode.map((function(e){return e.split("episode/")[1]})))},children:[Object(u.jsx)("span",{className:"font-weight-bold mr-2",children:"Episodios: "})," ",t.episode.length]})]})]})},O=function(){return Object(u.jsx)("div",{className:"center-all flex-1 h-100",children:Object(u.jsx)("div",{className:"spin",children:Object(u.jsx)("i",{className:"display-3 fas fa-spinner text-primary"})})})},g=function(e){var t=e.action,s=e.info;return Object(u.jsxs)("div",{className:"flex-1 text-right",children:[Object(u.jsx)("button",{disabled:null===s.prev,className:"btn btn-warning mr-3",onClick:function(){return t(s.prev)},children:Object(u.jsx)("i",{className:"fas fa-chevron-left"})}),Object(u.jsx)("button",{disabled:null===s.next,className:"btn btn-warning",onClick:function(){return t(s.next)},children:Object(u.jsx)("i",{className:"fas fa-chevron-right"})})]})},v=function(e){var t=n.a.createRef(),s=e.settings,c=s.closeAction,a=s.lockWindow,i=s.lockStatus,l=s.lockAction,r=s.cancelButtonTitle,o=s.extraButtonTitle,j=s.extraButtonColor,d=s.extraButtonAction,b=s.confirmButtonTitle,x=s.confirmButtonAction,h=s.hideButtons,m=s.title,f=function(){t.current.className+=" show-down",setTimeout((function(){c()}),250)};return Object(u.jsx)("div",{className:"modal-outside",children:Object(u.jsxs)("div",{ref:t,className:"modal-window lines-bg",children:[Object(u.jsxs)("div",{className:"d-flex justify-content-between w-100 bg-dark p-3",children:[Object(u.jsx)("h5",{className:"flex-1 strong-text m-0",children:m}),a&&Object(u.jsx)("i",{className:"lock-button fas fa-".concat(i?"lock":"lock-open"," mr-2"),onClick:l}),Object(u.jsx)("i",{className:"close-button fas fa-times",onClick:f})]}),Object(u.jsxs)("div",{className:"p-3",children:[e.children,!h&&Object(u.jsxs)("div",{className:"d-flex w-100 mt-3",children:[Object(u.jsx)("button",{className:"flex-1 mr-2 btn btn-light",onClick:f,children:r||"CANCELAR"}),o&&Object(u.jsx)("button",{className:"flex-1 mr-2 btn btn-".concat(j||"light"),onClick:d,children:o}),Object(u.jsx)("button",{className:"flex-1 btn btn-success",onClick:x,children:b||"CONFIRMAR"})]}),Object(u.jsx)("p",{className:"text-center text-secondary mt-3",children:"(*) Los campos indicados deben ser completados"})]})]})})},N=function(e){var t=e.episodes,s=e.close,n=Object(c.useState)(t[0]),a=Object(b.a)(n,2),i=a[0],l=a[1],o=Object(r.f)();return Object(u.jsx)(v,{settings:{title:"Episodios",closeAction:s,confirmButtonAction:function(){o.push("/episode/"+i),s()}},children:Object(u.jsx)("div",{className:"my-4",children:Object(u.jsx)(m,{label:"Seleccionar Episodio",onChange:function(e){return l(e.target.value)},children:t.map((function(e){return Object(u.jsxs)("option",{value:e,children:["Episodio ",e]},e)}))})})})},y=function(){var e=Object(c.useState)({}),t=Object(b.a)(e,2),s=t[0],n=t[1],a=Object(c.useState)(""),i=Object(b.a)(a,2),l=i[0],r=i[1],o=Object(c.useState)([]),x=Object(b.a)(o,2),m=x[0],v=x[1],y=Object(c.useState)(!1),w=Object(b.a)(y,2),k=w[0],C=w[1],E=Object(c.useState)(!1),S=Object(b.a)(E,2),R=S[0],B=S[1],A="https://rickandmortyapi.com/api/character/";Object(c.useEffect)((function(){P()}),[]);var P=function(){var e=Object(d.a)(j.a.mark((function e(t){var s,c,a,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C(!0),e.next=3,fetch(t||A);case 3:return s=e.sent,e.next=6,s.json();case 6:c=e.sent,a=c.results,i=c.info,200===s.status?(v(a),n(i)):(console.log(i),v([]),n({next:null,prev:null})),C(!1);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"d-flex screen",children:[Object(u.jsx)(f,{variant:"primary"}),Object(u.jsxs)("div",{className:"flex-1 d-flex flex-column h-100",children:[Object(u.jsx)("div",{className:"bg-secondary p-3 d-flex w-100 rounded",children:Object(u.jsxs)("div",{className:"d-flex align-items-center",children:[Object(u.jsx)("h5",{className:"strong-text m-0 mr-3",children:"Buscar Personaje"}),Object(u.jsx)(h,{style:{marginRight:"20px"},value:l,onChange:function(e){return r(e.target.value)}}),Object(u.jsx)("button",{className:"btn btn-primary mr-5",onClick:function(){P(A+"?name="+l)},children:Object(u.jsx)("i",{className:"fas fa-search display-6"})}),Object(u.jsx)(g,{action:P,info:s})]})}),Object(u.jsxs)("p",{className:"font-italic p-2",children:["Mostrando ",s.count," resultados"]}),k?Object(u.jsx)(O,{}):m.length?Object(u.jsx)("div",{className:"d-flex flex-wrap scroll-area flex-1 align-items-start",children:m.map((function(e,t){return Object(u.jsx)(p,{data:e,setPickedEpisodes:B},t)}))}):Object(u.jsxs)("div",{className:"center-all w-100 h-100",children:[Object(u.jsx)("i",{className:"fas fa-search display-3 mb-5"}),Object(u.jsx)("p",{className:"strong-text display-5",children:"Sin resultados"})]})]}),R&&Object(u.jsx)(N,{episodes:R,close:function(){return B(!1)}})]})},w=function(e){var t=e.data;return Object(u.jsxs)("div",{style:{width:"200px"},className:"bg-success h-100 p-3 d-flex flex-column justify-content-center",children:[Object(u.jsx)("h6",{style:{lineHeight:"30px"},className:"strong-text display-4 mb-3",children:"Rick and Morty"}),Object(u.jsx)("h1",{className:"strong-text display-7 mb-2",children:t.name}),Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)("p",{className:"strong-text",children:"Tipo"}),Object(u.jsx)("h6",{className:"w-100",children:t.type})]}),Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)("p",{className:"strong-text",children:"Dimension"}),Object(u.jsx)("h6",{className:"w-100",children:t.dimension})]}),Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)("p",{className:"strong-text",children:"Residentes"}),Object(u.jsx)("h6",{className:"w-100",children:t.residents.length})]})]})},k=s(9),C={page:1,pages:1,display:25,range:[]},E=function(e){var t=e.length,s=e.setRange,n=Object(c.useState)(C),a=Object(b.a)(n,2),i=a[0],l=a[1],r=i.page,o=i.pages,j=i.display,d=i.range,h=i.min,m=i.max,f=Object(c.createRef)();Object(c.useEffect)((function(){p()}),[t,j,r]);var p=function(){o=Math.ceil(t/j),r>o&&(r=1);for(var e=[],c=1;c<=o;c++)e.push(c);h=(m=r*j)-j,l(Object(k.a)(Object(k.a)({},i),{},{page:r,pages:o,range:e,min:h,max:m})),s({min:h,max:m})},O=function(e){l(Object(k.a)(Object(k.a)({},i),{},Object(x.a)({},e.target.name,e.target.value)))},g=function(){r<o&&r++,l(Object(k.a)(Object(k.a)({},i),{},{page:r})),f.current.selectedIndex=r-1},v=function(){r>1&&r--,l(Object(k.a)(Object(k.a)({},i),{},{page:r})),f.current.selectedIndex=r-1};return Object(u.jsxs)("div",{style:{height:"50px"},tabIndex:0,className:"pagination bg-dark n p-3",onKeyDown:function(e){39===e.keyCode&&g(),37===e.keyCode&&v()},children:[Object(u.jsxs)("p",{className:"text-white flex-1 text-truncate",children:["desde ",h+1," hasta ",m>t?t:m]}),Object(u.jsxs)("div",{style:{width:"300px"},className:"d-flex align-items-center",children:[Object(u.jsx)("i",{className:"btn fas fa-chevron-circle-left display-7 click-animate text-secondary",onClick:v}),Object(u.jsx)("label",{className:"m-0 mr-2",children:"pagina"}),Object(u.jsx)("select",{style:{width:"unset"},name:"page",className:"mr-2",onChange:O,ref:f,children:d.map((function(e,t){return Object(u.jsx)("option",{value:e,children:e},t)}))}),Object(u.jsx)("label",{className:"m-0 mr-2",children:"mostrar"}),Object(u.jsxs)("select",{style:{width:"unset"},name:"display",onChange:O,children:[Object(u.jsx)("option",{value:25,children:"25"}),Object(u.jsx)("option",{value:50,children:"50"}),Object(u.jsx)("option",{value:75,children:"75"}),Object(u.jsx)("option",{value:100,children:"100"})]}),Object(u.jsx)("i",{className:"btn fas fa-chevron-circle-right display-7 click-animate text-secondary",onClick:g})]}),Object(u.jsxs)("p",{className:"text-white flex-1 text-right text-truncate",children:["total: ",t," elementos"]})]})},S=function(e){var t=e.data,s=e.title,n=e.setPickedEpisodes,a=Object(c.useState)([]),i=Object(b.a)(a,2),r=i[0],o=i[1],x=Object(c.useState)({min:1,max:25}),h=Object(b.a)(x,2),m=h[0],f=h[1],g=Object(c.useState)(!1),v=Object(b.a)(g,2),N=v[0],y=v[1];Object(c.useEffect)((function(){w(m)}),[t]);var w=function(){var e=Object(d.a)(j.a.mark((function e(s){var c,n,a,i,l;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(y(!0),c=[],n=s.min;n<s.max;n++)void 0!==t[n]&&(a=t[n].split("character/")[1],c.push(a));return e.next=5,fetch("https://rickandmortyapi.com/api/character/"+c);case 5:return i=e.sent,e.next=8,i.json();case 8:l=e.sent,o(l),y(!1);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){w(m)}),[m]),Object(u.jsxs)("div",{className:"ml-3 flex-1 d-flex flex-column h-100",children:[Object(u.jsxs)("div",{className:"d-flex bg-light p-3",children:[Object(u.jsx)("h6",{className:"strong-text flex-1 m-0",children:s}),Object(u.jsxs)(l.b,{to:"/",className:"m-0 px-2 text-warning display-8",children:["Volver ",Object(u.jsx)("i",{className:"fas fa-home text-warning"})]})]}),Object(u.jsx)("div",{className:"d-flex flex-wrap align-items-start scroll-area flex-1",children:N?Object(u.jsx)(O,{}):r.map((function(e,t){return Object(u.jsx)(p,{data:e,setPickedEpisodes:n},t)}))}),Object(u.jsx)(E,{length:t.length,setRange:f})]})},R=function(e){var t=e.match,s=Object(c.useState)(null),n=Object(b.a)(s,2),a=n[0],i=n[1],l=Object(c.useState)(!1),r=Object(b.a)(l,2),o=r[0],x=r[1],h=function(){var e=Object(d.a)(j.a.mark((function e(){var s,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://rickandmortyapi.com/api/location/"+t.params.id);case 2:return s=e.sent,e.next=5,s.json();case 5:c=e.sent,200===s.status?i(c):console.log(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){h()}),[]),null===a?Object(u.jsx)("div",{className:"screen",children:Object(u.jsx)(O,{})}):Object(u.jsxs)("div",{className:"screen d-flex",children:[Object(u.jsx)(w,{data:a}),Object(u.jsx)(S,{data:a.residents,title:"Residentes de "+a.name,setPickedEpisodes:x}),o&&Object(u.jsx)(N,{episodes:o,close:function(){return x(!1)}})]})},B=function(e){var t=e.match,s=Object(c.useState)(null),n=Object(b.a)(s,2),a=n[0],i=n[1],l=Object(c.useState)(!1),r=Object(b.a)(l,2),o=r[0],x=r[1],h=function(){var e=Object(d.a)(j.a.mark((function e(){var s,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://rickandmortyapi.com/api/episode/"+t.params.id);case 2:return s=e.sent,e.next=5,s.json();case 5:c=e.sent,200===s.status?(i(c),console.log(c)):console.log(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){h()}),[t.params.id]),null===a?Object(u.jsx)("div",{className:"screen",children:Object(u.jsx)(O,{})}):Object(u.jsxs)("div",{className:"screen d-flex",children:[Object(u.jsx)(f,{variant:"danger"}),Object(u.jsx)(S,{data:a.characters,title:"Episodio: ".concat(a.name," (").concat(a.air_date,") - Personajes: ").concat(a.characters.length),setPickedEpisodes:x}),o&&Object(u.jsx)(N,{episodes:o,close:function(){return x(!1)}})]})};var A=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(l.a,{children:Object(u.jsxs)(r.c,{children:[Object(u.jsx)(r.a,{exact:!0,path:"/",component:y}),Object(u.jsx)(r.a,{exact:!0,path:"/location/:id",component:R}),Object(u.jsx)(r.a,{exact:!0,path:"/episode/:id",component:B})]})})})},P=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,38)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;s(e),c(e),n(e),a(e),i(e)}))};i.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(A,{})}),document.getElementById("root")),P()}},[[37,1,2]]]);
//# sourceMappingURL=main.fa98bf0a.chunk.js.map
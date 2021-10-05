(this["webpackJsonprest-countries-api"]=this["webpackJsonprest-countries-api"]||[]).push([[0],{10:function(e,t,n){e.exports={"countries-container":"CountryInput_countries-container__39FZh","input-container":"CountryInput_input-container__2Tn3R","input-field":"CountryInput_input-field__2ysQM","search-icon":"CountryInput_search-icon__Z6CZ0","select-field":"CountryInput_select-field__3UQAd","arrow-icon":"CountryInput_arrow-icon__1COYN"}},16:function(e,t,n){e.exports={header:"Header_header__3mObx",heading:"Header_heading__3BwOQ"}},2:function(e,t,n){e.exports={"details-container":"CountryDetails_details-container__1klB2","details-box":"CountryDetails_details-box__3ejXn","btn-box":"CountryDetails_btn-box__NLOdo","icon-arrow":"CountryDetails_icon-arrow__1bzt2","back-btn":"CountryDetails_back-btn__2IQli","country-box":"CountryDetails_country-box__1Qmi0","country-img":"CountryDetails_country-img__23U-p","country-name":"CountryDetails_country-name__1ClNw","col-box":"CountryDetails_col-box__2dq60","col--1":"CountryDetails_col--1__UDAL7","col--2":"CountryDetails_col--2__1Sllk","info-text":"CountryDetails_info-text__91S0W","border-text":"CountryDetails_border-text__19gdi","border-box":"CountryDetails_border-box__2zaYd","span-no":"CountryDetails_span-no__pBJ4Q"}},20:function(e,t,n){e.exports={countries:"CountryList_countries__2KHwL"}},23:function(e,t,n){e.exports={message:"CountryMessage_message__3lZAu"}},24:function(e,t,n){e.exports={text:"CountryError_text__2QLWr"}},25:function(e,t,n){e.exports={loading:"LoadingSpinner_loading__3yUdn"}},30:function(e,t,n){},32:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(9),r=n(19),i=n.n(r),o=(n(30),n(3)),l=n(16),u=n.n(l),j=n(0),b=function(){return Object(j.jsx)("div",{className:u.a.header,children:Object(j.jsx)("h1",{className:u.a.heading,children:"Where in the world?"})})},x=(n(32),n(6)),d=n.n(x),p=n(11),h=n(7),O=n(10),m=n.n(O),_=n(8),f=n.n(_),v=function(e){return Object(j.jsxs)("div",{className:f.a.country,children:[Object(j.jsx)("img",{src:e.imgSrc,alt:"",className:f.a.img}),Object(j.jsxs)("div",{className:f.a.data,children:[Object(j.jsx)("h3",{className:f.a.name,children:e.name}),Object(j.jsxs)("p",{className:f.a.paragraph,children:["Population:",Object(j.jsx)("span",{children:e.population})]}),Object(j.jsxs)("p",{className:f.a.paragraph,children:["Region:",Object(j.jsx)("span",{children:e.region})]}),Object(j.jsxs)("p",{className:f.a.paragraph,children:["Capital:",Object(j.jsx)("span",{children:e.capital})]})]})]})},g=n(20),y=n.n(g),N=function(e){return Object(j.jsx)("div",{className:y.a.countries,children:e.countries.map((function(e){return Object(j.jsx)(s.b,{to:"/countries/".concat(e.alpha3Code),children:Object(j.jsx)(v,{imgSrc:e.flag,name:e.name,population:e.population,region:e.region,capital:e.capital})},e.numericCode)}))})},C=n(23),w=n.n(C),k=function(){return Object(j.jsx)("p",{className:w.a.message,children:"Country not found."})},D=n(24),S=n.n(D),A=function(e){return Object(j.jsx)("p",{className:S.a.text,children:e.message})},L=n(25),I=n.n(L),Q=function(){return Object(j.jsx)("div",{className:I.a.loading})},B=n(13),E=function(e){var t=Object(c.useState)([]),n=Object(h.a)(t,2),a=n[0],s=n[1],r=Object(c.useState)(""),i=Object(h.a)(r,2),o=i[0],l=i[1],u=Object(c.useState)(""),b=Object(h.a)(u,2),x=b[0],O=b[1],_=Object(c.useState)(!1),f=Object(h.a)(_,2),v=f[0],g=f[1],y=Object(c.useState)(!1),C=Object(h.a)(y,2),w=C[0],D=C[1];Object(c.useEffect)((function(){var e=function(){var e=Object(p.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://restcountries.com/v2/all");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,s(n),g(!1),D(!0),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0),g(!0);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();""===o&&""===x&&e();var t=function(){var e=Object(p.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://restcountries.com/v2/name/".concat(o));case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,s(n),g(!1),D(!0),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0.message),g(!0);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),n=function(){var e=Object(p.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://restcountries.com/v2/continent/".concat(x));case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,s(n),g(!1),D(!0),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0),g(!0);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();""!==x&&n();var c=setTimeout((function(){""!==o&&t()}),500);return function(){clearTimeout(c)}}),[o,x]);return Object(j.jsxs)("div",{className:m.a["countries-container"],children:[v&&Object(j.jsx)(A,{message:"Please check your internet connection or try again later."}),Object(j.jsxs)("div",{className:m.a["input-container"],children:[Object(j.jsxs)("div",{className:m.a["input-field"],children:[Object(j.jsx)(B.c,{className:m.a["search-icon"]}),Object(j.jsx)("input",{onChange:function(e){l(e.target.value),O("")},value:o,type:"text",placeholder:"Search for a country..."})]}),Object(j.jsxs)("div",{className:m.a["select-field"],children:[Object(j.jsx)(B.b,{className:m.a["arrow-icon"]}),Object(j.jsxs)("select",{name:"select-where",value:x,onChange:function(e){O(e.target.value),l("")},label:"Fiter by Region",children:[Object(j.jsx)("option",{value:"",children:"Filter by Region "}),Object(j.jsx)("option",{value:"Africa",children:"Africa"}),Object(j.jsx)("option",{value:"Americas",children:"America"}),Object(j.jsx)("option",{value:"Asia",children:"Asia"}),Object(j.jsx)("option",{value:"Europe",children:"Europe"}),Object(j.jsx)("option",{value:"Oceania",children:"Oceania"})]})]})]}),void 0!==a.length?Object(j.jsx)(N,{countries:a}):Object(j.jsx)(k,{}),!w&&Object(j.jsx)(Q,{})]})},R=n(2),T=n.n(R),H=function(){var e=Object(c.useState)({}),t=Object(h.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),i=Object(h.a)(r,2),l=i[0],u=i[1],b=Object(c.useState)(!1),x=Object(h.a)(b,2),O=x[0],m=x[1],_=n.flag,f=n.name,v=n.nativeName,g=n.population,y=n.region,N=n.subregion,C=n.capital,w=n.topLevelDomain,k=n.currencies,D=n.languages,S=n.borders,L=Object(o.g)().id;return Object(c.useEffect)((function(){var e=function(){var e=Object(p.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://restcountries.com/v2/alpha/".concat(L));case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,a(n),u(!1),m(!0),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0),u(!0);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();e()}),[L]),Object(j.jsxs)("div",{className:T.a["details-container"],children:[l&&Object(j.jsx)(A,{message:"Please check your internet connection or try again later."}),Object(j.jsxs)("div",{className:T.a["details-box"],children:[Object(j.jsx)("div",{className:T.a["btn-box"],children:Object(j.jsxs)(s.b,{to:"/countries",children:[Object(j.jsx)(B.a,{className:T.a["icon-arrow"]}),Object(j.jsx)("button",{className:T.a["back-btn"],children:"Back"})]})}),Object(j.jsxs)("div",{className:T.a["country-box"],children:[Object(j.jsx)("img",{className:T.a["country-img"],src:_,alt:""}),Object(j.jsxs)("div",{className:T.a["info-box"],children:[Object(j.jsxs)("h1",{className:T.a["country-name"],children:[" ",f," "]}),Object(j.jsxs)("div",{className:T.a["col-box"],children:[Object(j.jsxs)("div",{className:T.a["col--1"],children:[Object(j.jsxs)("p",{className:T.a["info-text"],children:["Native Name:",Object(j.jsx)("span",{children:v})]}),Object(j.jsxs)("p",{className:T.a["info-text"],children:["Population:",Object(j.jsx)("span",{children:g})]}),Object(j.jsxs)("p",{className:T.a["info-text"],children:["Region:",Object(j.jsx)("span",{children:y})]}),Object(j.jsxs)("p",{className:T.a["info-text"],children:["Sub Region:",Object(j.jsx)("span",{children:N})]}),Object(j.jsxs)("p",{className:T.a["info-text"],children:["Capital:",Object(j.jsx)("span",{children:C})]})]}),Object(j.jsxs)("div",{className:T.a["col--2"],children:[Object(j.jsxs)("p",{className:T.a["info-text"],children:["Top Level Domain:",Object(j.jsx)("span",{children:w})]}),Object(j.jsxs)("p",{className:T.a["info-text"],children:["Currencies:",Object(j.jsx)("span",{children:k&&k[0].name})]}),Object(j.jsxs)("p",{className:T.a["info-text"],children:["Languages:",D&&Object(j.jsx)("span",{children:D.map((function(e){return"".concat(e.name)})).join(", ")})]})]})]}),Object(j.jsx)("div",{className:T.a["border-box"],children:Object(j.jsxs)("p",{className:T.a["border-text"],children:["Borders:",S?S.slice(0,3).map((function(e){return Object(j.jsx)("span",{children:e},e)})):Object(j.jsx)("span",{className:T.a["span-no"],children:" No Border "})]})})]})]})]}),!O&&Object(j.jsx)(Q,{})]})};var J=function(){return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(b,{}),Object(j.jsx)("main",{children:Object(j.jsxs)(o.d,{children:[Object(j.jsx)(o.b,{path:"/",exact:!0,children:Object(j.jsx)(o.a,{to:"/countries"})}),Object(j.jsx)(o.b,{path:"/countries",exact:!0,children:Object(j.jsx)(E,{})}),Object(j.jsx)(o.b,{path:"/countries/:id",exact:!0,children:Object(j.jsx)(H,{})})]})})]})};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(s.a,{children:Object(j.jsx)(J,{})})}),document.getElementById("root"))},8:function(e,t,n){e.exports={country:"Country_country__1hT3S",img:"Country_img__1Cm0c",data:"Country_data__3gsOb",name:"Country_name__XA7Ye",paragraph:"Country_paragraph__3JHQ1"}}},[[42,1,2]]]);
//# sourceMappingURL=main.39515d64.chunk.js.map
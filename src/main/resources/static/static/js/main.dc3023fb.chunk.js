(this["webpackJsonpmy-app-chris"]=this["webpackJsonpmy-app-chris"]||[]).push([[0],{173:function(e,t,a){},175:function(e,t,a){},177:function(e,t,a){},233:function(e,t,a){e.exports=a(471)},238:function(e,t,a){},239:function(e,t,a){},240:function(e,t,a){},263:function(e,t,a){},264:function(e,t,a){},265:function(e,t,a){},266:function(e,t,a){},471:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(229),c=a.n(l),o=(a(173),a(238),a(171)),s=a(15),m=a(17),i=(a(239),function(e){return Object(n.useEffect)((function(){document.title="".concat(e.title," | AuthorBook Management"),window.scrollTo(0,0)}),[]),r.a.createElement(r.a.Fragment,null,e.children)}),u=(a(240),function(){return r.a.createElement("div",{className:"footer_main"},r.a.createElement("div",{className:"last_div"},r.a.createElement("p",null,"All Right Reserved @AuthorBookManagement 2020"),r.a.createElement("small",{className:"bottom_link"},"www.manageauthor.com")))}),d=function(){return r.a.createElement(i,{title:"Home"},r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"home_btn"},r.a.createElement("h1",null,"Welcome to Author Book Management System."),r.a.createElement("h2",null,"You can see the various books by different authors here."),r.a.createElement(m.b,{to:"/authors"},r.a.createElement("button",null,r.a.createElement("strong",null,"Explore Authors"))),r.a.createElement("h3",null,"Thanks for Visiting Us.")),r.a.createElement(u,null)))},h=(a(175),function(){return r.a.createElement("header",null,r.a.createElement("div",{className:"title"},r.a.createElement("h3",null,"Author-Book Management ")),r.a.createElement("div",{className:"header_links"},r.a.createElement(m.b,{to:"/"},"Home"),r.a.createElement(m.b,{to:"/authors"},"View Authors")),r.a.createElement("div",{className:"add_btn"},r.a.createElement(m.b,{to:"/author/add"},r.a.createElement("button",null,"Add Author"))))}),E=a(21),p=a.n(E),b=a(50),f=(a(177),a(25)),g=a(95),N=a(74),k=a.n(N);k.a.defaults.baseURL="https://simple-author-fullstack.herokuapp.com";var v=function(e){return k.a.get("/get-all-author/".concat(e))},y=function(e,t){return k.a.get("/get-all-book/author/".concat(e,"/").concat(t))},j=function(e,t){return k.a.post("/add-book/author/".concat(e),t)},O=function(e){return k.a.post("/add-author",e)},P=function(e){return k.a.put("/update-price/book/".concat(e.bookId,"?newPrice=").concat(e.price))},A=Object(s.f)((function(e){var t=function(){var t=Object(b.a)(p.a.mark((function t(a){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n={email:a.email,firstName:a.firstName,lastName:a.lastName,phone:a.phone,address:a.address},O(n).then((function(t){e.history.push("/authors")}),(function(e){alert("Please Change the Email!!! Email Already Used")}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),a=f.a({firstName:f.b().required("Please Enter  First Name"),lastName:f.b().required("Please Enter  Last Name"),email:f.b().email("Invalid Email Address").required("Email is requied"),phone:f.b().required("Please Enter  Mobile Number"),address:f.b().required("Please Enter  Address")}),n=Object(g.a)({initialValues:{email:"",firstName:"",lastName:"",phone:"",address:""},onSubmit:t,validationSchema:a});return r.a.createElement(i,{title:"Add Author"},r.a.createElement("div",{className:"form_main"},r.a.createElement("form",{action:"",className:"formRegister",onSubmit:n.handleSubmit},r.a.createElement("div",{className:"formHead"},r.a.createElement("br",null),r.a.createElement("strong",{className:"strongMargin"},"Add Author")),r.a.createElement("section",null,r.a.createElement("label",{htmlFor:"firstName"},"First Name"),r.a.createElement("input",Object.assign({type:"text",id:"firstName"},n.getFieldProps("firstName"))),n.touched.firstName&&n.errors.firstName?r.a.createElement("p",{size:"sm",style:{color:"red"}},n.errors.firstName):null),r.a.createElement("section",null,r.a.createElement("label",{htmlFor:"lastName"},"Last Name"),r.a.createElement("input",Object.assign({type:"text",id:"lastName"},n.getFieldProps("lastName"))),n.touched.lastName&&n.errors.lastName?r.a.createElement("p",{size:"sm",style:{color:"red"}},n.errors.lastName):null),r.a.createElement("section",null,r.a.createElement("label",{htmlFor:"email"},"Valid Email"),r.a.createElement("input",Object.assign({type:"email",id:"email"},n.getFieldProps("email"))),n.touched.email&&n.errors.email?r.a.createElement("p",{size:"sm",style:{color:"red"}},n.errors.email):null),r.a.createElement("section",null,r.a.createElement("label",{htmlFor:"phone"},"Mobile No"),r.a.createElement("input",Object.assign({type:"number",id:"phone"},n.getFieldProps("phone"))),n.touched.phone&&n.errors.phone?r.a.createElement("p",{size:"sm",style:{color:"red"}},n.errors.phone):null),r.a.createElement("section",null,r.a.createElement("label",{htmlFor:"address"},"Address"),r.a.createElement("input",Object.assign({type:"text",id:"address"},n.getFieldProps("address"))),n.touched.address&&n.errors.address?r.a.createElement("p",{size:"sm",style:{color:"red"}},n.errors.address):null),r.a.createElement("section",null,r.a.createElement("button",{type:"submit"},r.a.createElement("h4",null,"Add")),r.a.createElement(m.b,{to:"/authors"},r.a.createElement("button",{className:"cancelButton"},r.a.createElement("h4",null,"Cancel")))))))})),w=a(58),F=(a(263),a(264),Object(s.f)((function(e){var t=e.auth.firstName+" "+e.auth.lastName;return r.a.createElement("div",{className:"author"},r.a.createElement("h2",null,e.auth.firstName," ",e.auth.lastName),r.a.createElement("p",null,"Email : ",e.auth.email),r.a.createElement("h6",null,"Phone : ",e.auth.phone),r.a.createElement("hr",null),r.a.createElement("div",{className:"authorDetails"},r.a.createElement(m.b,{to:"/books/".concat(t,"/").concat(e.auth.id)},r.a.createElement("button",null,"All Books")),"              ",r.a.createElement(m.b,{to:"/book/add/".concat(t,"/").concat(e.auth.id)},r.a.createElement("button",null,"Add Book"))))}))),S=Object(s.f)((function(e){var t=Object(n.useState)([{}]),a=Object(w.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(1),s=Object(w.a)(o,2),m=s[0],u=s[1];return Object(n.useEffect)((function(){(function(){var e=Object(b.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(m>=1)){e.next=3;break}return e.next=3,v(m).then((function(e){c(e.data)}),(function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[m]),r.a.createElement(i,{title:"Authors"},r.a.createElement("div",{className:"authors"},r.a.createElement("h1",null,"All Authors"),l.map((function(e,t){return r.a.createElement(F,{key:t,auth:e})})),l.length>0?"":r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{style:{color:"red"}},"No more Authors Please")),m<1?"":r.a.createElement("button",{disabled:m<1,onClick:function(){return u(m-1)}},"Previous"),"          ",l.length>0?r.a.createElement("button",{onClick:function(){return u(m+1)}},"Next"):""))})),x=Object(s.f)((function(e){var t=e.match.params.authorId,a=e.match.params.name,n=function(){var n=Object(b.a)(p.a.mark((function n(r){var l;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return l={name:r.name,year:r.year,price:r.price},console.log(l),n.next=4,j(t,l).then((function(n){e.history.push("/books/".concat(a,"/").concat(t))}),(function(e){console.log(e)}));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=f.a({name:f.b().required("Please Enter  Book Name"),year:f.b().required("Please Enter   Published year"),price:f.b().required("Please Enter  Mobile Number")}),c=Object(g.a)({initialValues:{name:"",price:"",year:""},onSubmit:n,validationSchema:l});return r.a.createElement(i,{title:"Add Book"},r.a.createElement("div",{className:"form_main"},r.a.createElement("form",{action:"",className:"formRegister",onSubmit:c.handleSubmit},r.a.createElement("div",{className:"formHead"},r.a.createElement("br",null),r.a.createElement("strong",{className:"strongMargin"},"Add Book")),r.a.createElement("section",null,r.a.createElement("label",{htmlFor:"name"},"Book Name"),r.a.createElement("input",Object.assign({type:"text",id:"name"},c.getFieldProps("name"))),c.touched.name&&c.errors.name?r.a.createElement("p",{size:"sm",style:{color:"red"}},c.errors.name):null),r.a.createElement("section",null,r.a.createElement("label",{htmlFor:"year"},"Year Published"),r.a.createElement("input",Object.assign({type:"text",id:"year"},c.getFieldProps("year"))),c.touched.year&&c.errors.year?r.a.createElement("p",{size:"sm",style:{color:"red"}},c.errors.year):null),r.a.createElement("section",null,r.a.createElement("label",{htmlFor:"price"},"Price Per Book"),r.a.createElement("input",Object.assign({type:"number",id:"price"},c.getFieldProps("price"))),c.touched.price&&c.errors.price?r.a.createElement("p",{size:"sm",style:{color:"red"}},c.errors.price):null),r.a.createElement("section",null,r.a.createElement("button",{type:"submit"},r.a.createElement("h4",null,"Add")),r.a.createElement(m.b,{to:"/authors"},r.a.createElement("button",{className:"cancelButton"},r.a.createElement("h4",null,"Cancel")))))))})),B=(a(265),a(266),Object(s.f)((function(e){var t=Object(n.useState)(!1),a=Object(w.a)(t,2),l=a[0],c=a[1],o=function(){c(!l)},s=function(){var t=Object(b.a)(p.a.mark((function t(a){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o(),n={price:a.price,bookId:e.b.id},P(n).then((function(){e.passedFunction(!e.d)}),(function(e){console.log(e)}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=f.a({price:f.b().required("Please Enter New Price")}),i=Object(g.a)({initialValues:{price:""},onSubmit:s,validationSchema:m}),u=function(){var t=Object(b.a)(p.a.mark((function t(){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(a=e.b.id,k.a.delete("/delete-book/".concat(a))).then((function(){e.passedFunction(!e.d)}),(function(e){console.log("Cannot detete Book")}));case 1:case"end":return t.stop()}var a}),t)})));return function(){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:"author"},r.a.createElement("h2",null,e.b.name),r.a.createElement("p",null,"Published on: ",e.b.year),r.a.createElement("h6",null,"Price :$USD ",e.b.price),r.a.createElement("div",{className:"bookDetails"},r.a.createElement("form",{onSubmit:i.handleSubmit},l?r.a.createElement(r.a.Fragment,null,r.a.createElement("section",null,r.a.createElement("label",{htmlFor:"price"},"New Price"),r.a.createElement("input",Object.assign({type:"number",id:"price"},i.getFieldProps("price"))),i.touched.price&&i.errors.price?r.a.createElement("p",{size:"sm",style:{color:"red"}},i.errors.price):null),r.a.createElement("button",{style:{backgroundColor:"#00b2a9"},type:"submit"},"Submit")):""),l?r.a.createElement("button",{style:{backgroundColor:"#00b2a9"},onClick:o},"Cancel"):r.a.createElement("button",{style:{backgroundColor:"#00b2a9"},onClick:o},"Update Price"),"       ",r.a.createElement("button",{onClick:u},"Remove")))}))),C=Object(s.f)((function(e){var t=e.match.params.authorId,a=e.match.params.name,l=Object(n.useState)([{}]),c=Object(w.a)(l,2),o=c[0],s=c[1],u=Object(n.useState)(1),d=Object(w.a)(u,2),h=d[0],E=d[1],f=Object(n.useState)(!1),g=Object(w.a)(f,2),N=g[0],k=g[1];return Object(n.useEffect)((function(){(function(){var e=Object(b.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(h>=1)){e.next=3;break}return e.next=3,y(t,h).then((function(e){s(e.data)}),(function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[h,N]),r.a.createElement(i,{title:e.match.params.name},r.a.createElement("div",{className:"books"},r.a.createElement("h1",null,e.match.params.name),r.a.createElement("h2",null,"Books"),o.map((function(e,t){return r.a.createElement(B,{key:t,b:e,d:N,passedFunction:k})})),o.length>0?"":r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{style:{color:"red"}},"No more Books Please"),r.a.createElement("h4",null,r.a.createElement(m.b,{to:"/authors"},"Back to Authors"))),h<1?"":r.a.createElement("button",{disabled:h<1,onClick:function(){return E(h-1)}},"Previous"),"          ",r.a.createElement(m.b,{to:"/book/add/".concat(a,"/").concat(t)}," ",r.a.createElement("button",{style:{backgroundColor:"#00b2a9"}},"Add Book")),"          ",o.length>0?r.a.createElement("button",{onClick:function(){return E(h+1)}},"Next"):""))})),q=function(e){var t=function(e){var t=e.component,a=Object(o.a)(e,["component"]);return r.a.createElement(s.a,Object.assign({},a,{render:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(t,null))}}))},a=function(e){var t=e.component,a=Object(o.a)(e,["component"]);return r.a.createElement(s.a,Object.assign({},a,{render:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,null),r.a.createElement(t,null),r.a.createElement(u,null))}}))};return r.a.createElement(m.a,null,r.a.createElement(s.c,null,r.a.createElement(t,{exact:!0,path:"/",component:d}),r.a.createElement(a,{path:"/authors",component:S}),r.a.createElement(a,{path:"/author/add",component:A}),r.a.createElement(a,{path:"/book/add/:name/:authorId",component:x}),r.a.createElement(a,{path:"/books/:name/:authorId",component:C})))};a(267);var M=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(q,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[233,1,2]]]);
//# sourceMappingURL=main.dc3023fb.chunk.js.map
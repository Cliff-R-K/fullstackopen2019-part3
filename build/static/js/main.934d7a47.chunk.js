(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,n,t){e.exports=t(38)},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(13),u=t.n(o),c=t(2),l=function(e){var n=e.value,t=e.onChange;return r.a.createElement("div",null,"filter shown with",r.a.createElement("input",{value:n,onChange:t}))},s=function(e){var n=e.addPerson,t=e.newName,a=e.nameHandler,o=e.newNumber,u=e.numberHandler;return r.a.createElement("form",{onSubmit:n},"name: ",r.a.createElement("input",{value:t,onChange:a}),r.a.createElement("br",null),"number: ",r.a.createElement("input",{value:o,onChange:u}),r.a.createElement("br",null),r.a.createElement("button",{type:"submit"},"add"))},i=function(e){var n=e.person,t=e.removePerson;return r.a.createElement("p",{style:{margin:0}},n.name," ",n.number,r.a.createElement("button",{onClick:function(){return t(n)}},"delete"))},m=function(e){var n=e.filter,t=e.persons,a=e.removePerson;return n.length>0&&(t=t.filter(function(e){return e.name.toLowerCase().includes(n)||e.number.includes(n)})),t.map(function(e){return r.a.createElement(i,{key:e.id,person:e,removePerson:a})})},d=t(3),f=t.n(d),b="/api/persons",p=function(){return f.a.get(b).then(function(e){return e.data})},v=function(e,n){return f.a.put("".concat(b,"/").concat(e),n).then(function(e){return e.data})},h=p,g=function(e){return p().then(function(n){if(n.some(function(n){return n.name===e.name})){if(window.confirm("".concat(e.name," is already added to the phonebook, replace the old number with a new one?"))){var t=n.find(function(n){return n.name===e.name});return v(t.id,e)}return null}f.a.post(b,e).then(function(e){return e.data})})},E=function(e){return f.a.delete("".concat(b,"/").concat(e)).then(function(e){return e.data})},w=function(e){var n=e.message,t=e.className;return null===n?null:r.a.createElement("div",{className:t}," ",n," ")},j=function(){var e=Object(a.useState)([]),n=Object(c.a)(e,2),t=n[0],o=n[1],u=Object(a.useState)(""),i=Object(c.a)(u,2),d=i[0],f=i[1],b=Object(a.useState)(""),p=Object(c.a)(b,2),v=p[0],j=p[1],O=Object(a.useState)(""),k=Object(c.a)(O,2),C=k[0],N=k[1],P=Object(a.useState)({message:null,class:null}),S=Object(c.a)(P,2),y=S[0],H=S[1],A=function(){h().then(function(e){o(e)})};Object(a.useEffect)(A,[]);return r.a.createElement("div",null,r.a.createElement("h1",{id:"Header"}," Phonebook "),r.a.createElement(w,{message:y.message,className:y.class}),r.a.createElement(l,{value:C,onChange:function(e){N(e.target.value)}}),r.a.createElement("h3",null,"add a new"),r.a.createElement(s,{addPerson:function(e){e.preventDefault();var n={name:d,number:v};g(n).then(function(e){console.log("Response from App: ",e,"newPerson",n),e&&(A(),console.log("after",t),H({message:"Added ".concat(e.name),class:"notification"}),console.log(y),setTimeout(function(){H({message:null,class:null})},5e3)),f(""),j("")}).catch(function(e){console.log("dkasodkaopsdkaop"),console.log(e.response.data),alert(e.response.data)})},newName:d,nameHandler:function(e){f(e.target.value)},newNumber:v,numberHandler:function(e){j(e.target.value)}}),r.a.createElement("h3",null," Numbers "),r.a.createElement(m,{filter:C,persons:t,removePerson:function(e){var n=window.confirm("delete ".concat(e.name," ?"));console.log("Confirmation",n),n&&(E(e.id),o(t.filter(function(n){return n.id!==e.id})))}}))};t(37);u.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.934d7a47.chunk.js.map
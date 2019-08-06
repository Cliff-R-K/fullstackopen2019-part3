(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,n,t){e.exports=t(41)},40:function(e,n,t){},41:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(13),u=t.n(o),c=t(2),l=function(e){var n=e.value,t=e.onChange;return r.a.createElement("div",null,"filter shown with",r.a.createElement("input",{value:n,onChange:t}))},s=function(e){var n=e.addPerson,t=e.newName,a=e.nameHandler,o=e.newNumber,u=e.numberHandler;return r.a.createElement("form",{onSubmit:n},"name: ",r.a.createElement("input",{value:t,onChange:a}),r.a.createElement("br",null),"number: ",r.a.createElement("input",{value:o,onChange:u}),r.a.createElement("br",null),r.a.createElement("button",{type:"submit"},"add"))},i=function(e){var n=e.person,t=e.removePerson;return r.a.createElement("p",{style:{margin:0}},n.name," ",n.number,r.a.createElement("button",{onClick:function(){return t(n)}},"delete"))},m=function(e){var n=e.filter,t=e.persons,a=e.removePerson;return n.length>0&&(t=t.filter(function(e){return e.name.toLowerCase().includes(n)||e.number.includes(n)})),t.map(function(e){return r.a.createElement(i,{key:e.id,person:e,removePerson:a})})},f=t(3),d=t.n(f),b="/api/persons",p=function(){return d.a.get(b).then(function(e){return e.data})},g=function(e,n){return d.a.put("".concat(b,"/").concat(e),n).then(function(e){return e.data})},v=p,h=function(e){return p().then(function(n){if(n.some(function(n){return n.name===e.name})){if(window.confirm("".concat(e.name," is already added to the phonebook, replace the old number with a new one?"))){var t=n.find(function(n){return n.name===e.name});return g(t.id,e)}return null}return d.a.post(b,e).then(function(e){return e.data})})},E=function(e){return d.a.delete("".concat(b,"/").concat(e)).then(function(e){return e.data})},w=function(e){var n=e.message,t=e.className;return null===n?null:r.a.createElement("div",{className:t}," ",n," ")},j=(t(37),function(){var e=Object(a.useState)([]),n=Object(c.a)(e,2),t=n[0],o=n[1],u=Object(a.useState)(""),i=Object(c.a)(u,2),f=i[0],d=i[1],b=Object(a.useState)(""),p=Object(c.a)(b,2),g=p[0],j=p[1],O=Object(a.useState)(""),C=Object(c.a)(O,2),N=C[0],P=C[1],S=Object(a.useState)({message:null,class:null}),k=Object(c.a)(S,2),y=k[0],H=k[1],A=function(){v().then(function(e){o(e)})};Object(a.useEffect)(A,[]);return r.a.createElement("div",null,r.a.createElement("h1",{id:"Header"}," Phonebook "),r.a.createElement(w,{message:y.message,className:y.class}),r.a.createElement(l,{value:N,onChange:function(e){P(e.target.value)}}),r.a.createElement("h3",null,"add a new"),r.a.createElement(s,{addPerson:function(e){e.preventDefault();var n={name:f,number:g};h(n).then(function(e){console.log("Response from App: ",e,"newPerson",n),e&&(A(),console.log("after",t),H({message:"Added ".concat(e.name),class:"notification"}),console.log(y),setTimeout(function(){H({message:null,class:null})},5e3)),d(""),j("")}).catch(function(e){H({message:e.response.data.toString(),class:"error"}),console.log(e.response.data),setTimeout(function(){H({message:null,class:null})},5e3)})},newName:f,nameHandler:function(e){d(e.target.value)},newNumber:g,numberHandler:function(e){j(e.target.value)}}),r.a.createElement("h3",null," Numbers "),r.a.createElement(m,{filter:N,persons:t,removePerson:function(e){var n=window.confirm("delete ".concat(e.name," ?"));console.log("Confirmation",n),n&&(E(e.id),o(t.filter(function(n){return n.id!==e.id})))}}))});t(40);u.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.70f7f562.chunk.js.map
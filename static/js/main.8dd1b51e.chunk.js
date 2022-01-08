(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{12:function(t,e,n){t.exports={label:"ContactForm_label__ChlaT",input:"ContactForm_input__3skWG",button:"ContactForm_button__3cMTh"}},20:function(t,e,n){t.exports={label:"Filter_label__1vE1p",input:"Filter_input__8ktBs"}},21:function(t,e,n){t.exports={list:"ContactList_list__A-5HB",deleteButton:"ContactList_deleteButton__3FIj3",deleteSpinner:"ContactList_deleteSpinner__iHEoU"}},45:function(t,e,n){},47:function(t,e,n){},66:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(15),o=n.n(r),s=n(4),i=n(27),u=n(9),l=n(1),d=n(24),b=n(6),j=Object(d.a)({reducerPath:"contacts",baseQuery:Object(b.d)({baseUrl:"https://61d73c4b35f71e0017c2eab8.mockapi.io/api/v1/"}),tagTypes:["contacts"],endpoints:function(t){return{fetchContacts:t.query({query:function(){return"/contacts"},providesTags:["contacts"]}),addContact:t.mutation({query:function(t){return{url:"/contacts",method:"POST",body:t}},invalidatesTags:["contacts"]}),deleteContact:t.mutation({query:function(t){return{url:"/contacts/".concat(t),method:"DELETE"}},invalidatesTags:["contacts"]})}}}),m=j.useFetchContactsQuery,p=j.useAddContactMutation,h=j.useDeleteContactMutation,O=n(19),f=n(25),v=n.n(f),x=(Object(l.b)("phoneBook/addContact",(function(t){return{payload:Object(O.a)(Object(O.a)({},t),{},{id:v.a.generate()})}})),Object(l.b)("phoneBook/deleteContact"),Object(l.b)("phoneBook/filter")),C=Object(l.d)("",Object(u.a)({},x,(function(t,e){return e.payload}))),_=Object(l.a)({reducer:Object(u.a)({filter:C},j.reducerPath,j.reducer),middleware:function(t){return[].concat(Object(i.a)(t()),[j.middleware])},devTools:!1}),g=(n(45),n(11)),y=n(12),N=n.n(y),T=n(2);var k=function(){var t=Object(a.useState)(""),e=Object(g.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),o=Object(g.a)(r,2),s=o[0],i=o[1],u=m().data,l=p(),d=Object(g.a)(l,2),b=d[0],j=d[1].isLoading,h=function(t){var e=t.target,n=e.name,a=e.value;"name"===n?c(a):i(a)};return Object(T.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e={name:t.currentTarget.name.value,number:t.currentTarget.number.value};u.find((function(t){return t.name===e.name}))?alert("".concat(e.name," is already in contacts!")):b(e),c(""),i("")},children:[Object(T.jsxs)("label",{className:N.a.label,children:["Name:",Object(T.jsx)("input",{type:"text",name:"name",className:N.a.input,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:n,onChange:h})]}),Object(T.jsxs)("label",{className:N.a.label,children:["Phone:",Object(T.jsx)("input",{type:"tel",name:"number",className:N.a.input,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:s,onChange:h})]}),Object(T.jsx)("button",{type:"submit",className:N.a.button,disabled:j,children:"ADD CONTACT"})]})},A=(j.endpoints.fetchContacts.select(),function(t){return t.filter}),B=n(20),F=n.n(B);var w=function(){var t=Object(s.e)(A),e=Object(s.d)();return Object(T.jsxs)("label",{className:F.a.label,children:["Filter"," ",Object(T.jsx)("input",{type:"text",className:F.a.input,name:"filter",value:t,onChange:function(t){return e(x(t.target.value))}})]})},L=(n(47),n(21)),S=n.n(L);var q=function(t){var e=t.contacts,n=Object(s.e)((function(t){return function(t,e){var n=A(t).toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(n)||t.number.includes(n)}))}(t,e)})),a=h(),c=Object(g.a)(a,2),r=c[0],o=c[1].isLoading;return Object(T.jsx)("ul",{className:S.a.list,children:n.map((function(t){var e=t.id,n=t.name,a=t.number;return Object(T.jsxs)("li",{children:[n,": ",a,Object(T.jsx)("button",{className:S.a.deleteButton,onClick:function(){return r(e)},disabled:o,children:"Delete"})]},e)}))})},D=n(26),E=n.n(D),P=function(){var t=m(),e=t.data,n=t.isFetching;return Object(T.jsxs)("div",{children:[e&&Object(T.jsx)(q,{contacts:e}),n&&Object(T.jsx)(E.a,{})]})};var M=function(){return Object(T.jsx)("div",{className:"App",children:Object(T.jsxs)("div",{children:[Object(T.jsx)("h1",{children:"Phonebook"}),Object(T.jsx)(k,{}),Object(T.jsx)("h2",{children:"Contacts"}),Object(T.jsx)(w,{}),Object(T.jsx)(P,{})]})})};o.a.render(Object(T.jsx)(c.a.StrictMode,{children:Object(T.jsx)(s.a,{store:_,children:Object(T.jsx)(M,{})})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.8dd1b51e.chunk.js.map
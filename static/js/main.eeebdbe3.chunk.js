(this.webpackJsonptictactoe=this.webpackJsonptictactoe||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var n=c(1),j=c.n(n),r=c(6),s=c.n(r),i=c(7),a=c(4),b=(c(12),c(0)),l=function(){var e=Object(n.useState)("x"),t=Object(a.a)(e,2),c=t[0],j=t[1],r=Object(n.useState)(Array(9).fill("")),s=Object(a.a)(r,2),l=s[0],u=s[1],o=Object(n.useState)(),x=Object(a.a)(o,2),O=x[0],d=x[1],h=function(e){if(""===l[e]){if("x"!==O&&"o"!==O){var t=Object(i.a)(l);"x"===c?(t[e]="x",j("o")):(t[e]="o",j("x")),function(e){var t={across:[[0,1,2],[3,4,5],[6,7,8]],down:[[0,3,6],[1,4,7],[2,5,8]],diagonal:[[0,4,8],[2,4,6]]};for(var c in t)t[c].forEach((function(t){""===e[t[0]]||""===e[t[1]]||""===e[t[2]]||e[t[0]]===e[t[1]]&&e[t[1]]===e[t[2]]&&d(e[t[0]])}))}(t),u(t)}}else alert("Already been clicked!")},f=function(e){var t=e.num;return Object(b.jsx)("td",{onClick:function(){return h(t)},children:l[t]})};return Object(b.jsxs)("div",{className:"Container",children:[Object(b.jsx)("h1",{children:"Tic - Tac - Toe"}),Object(b.jsxs)("div",{className:"turnReset",children:[Object(b.jsxs)("p",{children:["Your turn: ",Object(b.jsx)("span",{children:c})]}),Object(b.jsx)("button",{onClick:function(){return u(Array(9).fill("")),j("x"),void d(null)},children:"Reset"})]}),Object(b.jsx)("table",{children:Object(b.jsxs)("tbody",{children:[Object(b.jsxs)("tr",{children:[Object(b.jsx)(f,{num:0}),Object(b.jsx)(f,{num:1}),Object(b.jsx)(f,{num:2})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)(f,{num:3}),Object(b.jsx)(f,{num:4}),Object(b.jsx)(f,{num:5})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)(f,{num:6}),Object(b.jsx)(f,{num:7}),Object(b.jsx)(f,{num:8})]})]})}),O&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("p",{className:"win",children:[O," is the winner!"]}),Object(b.jsx)("button",{onClick:function(){return d(null),u(Array(9).fill("")),void j("x")},children:"Play Again"})]})]})};var u=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(l,{})})};s.a.render(Object(b.jsx)(j.a.StrictMode,{children:Object(b.jsx)(u,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.eeebdbe3.chunk.js.map
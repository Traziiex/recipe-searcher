(this["webpackJsonpmon-app"]=this["webpackJsonpmon-app"]||[]).push([[0],[,,,,,,,,,,,function(e,c,t){},,function(e,c,t){},,function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){"use strict";t.r(c);var n=t(1),a=t.n(n),s=t(5),r=t.n(s),i=(t(11),t(3)),o=t.n(i),j=t(6),p=t(4),u=(t(13),t(0));var b=function(e){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"recipe-container",children:[Object(u.jsx)("h1",{children:e.recipe.recipe.label}),Object(u.jsx)("img",{src:e.recipe.recipe.image})]})})},d=(t(15),t(16),t(17),t.p+"static/media/food.3b44fe2f.svg"),l=t.p+"static/media/search.bbf29c2e.svg";var h=function(){var e=Object(n.useState)("none"),c=Object(p.a)(e,2),t=c[0],a=c[1],s=Object(n.useState)([]),r=Object(p.a)(s,2),i=r[0],h=r[1],m=function(){var e=Object(j.a)(o.a.mark((function e(){var c,n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,fetch("https://api.edamam.com/search?q=".concat(t,"&app_id=").concat("4b353692","&app_key=").concat("a5cc238333cee8ed7741a1302e34865a"));case 3:return c=e.sent,e.next=6,c.json();case 6:n=e.sent,a=n.hits,h(a),console.log(a);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("nav",{children:Object(u.jsx)("div",{className:"nav-container",children:Object(u.jsxs)("div",{children:[Object(u.jsx)("img",{src:d}),Object(u.jsx)("input",{type:"text",onChange:function(e){a(e.target.value)}}),Object(u.jsx)("img",{src:l,alt:"Search",className:"search-btn",onClick:m})]})})}),Object(u.jsx)("main",{children:Object(u.jsx)("div",{className:"disp-container",children:i.map((function(e){return Object(u.jsx)(b,{recipe:e})}))})})]})};r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(h,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.abbdf28f.chunk.js.map
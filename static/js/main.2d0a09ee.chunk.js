(this.webpackJsonpreact_orders=this.webpackJsonpreact_orders||[]).push([[0],[,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"Roma"},{"id":2,"name":"Anna"},{"id":3,"name":"Max"}]')},function(e){e.exports=JSON.parse('[{"id":1,"name":"Milk","orderId":4},{"id":2,"name":"Bread","orderId":4},{"id":3,"name":"Eggs","orderId":4},{"id":4,"name":"Cheese","orderId":5},{"id":5,"name":"Sugar","orderId":3},{"id":6,"name":"Banana","orderId":1},{"id":7,"name":"Beer","orderId":1},{"id":8,"name":"Coffee","orderId":3},{"id":9,"name":"Cake","orderId":1}]')},function(e){e.exports=JSON.parse('[{"id":1,"userId":1,"title":"Sunday"},{"id":2,"userId":2,"title":"Today"},{"id":3,"title":"Work","userId":1},{"id":4,"title":"Monday","userId":2},{"id":5,"title":"Everyday","tasks":["4","5"],"userId":3}]')},function(e,r,a){e.exports=a(16)},,,,,,,function(e,r,a){},function(e,r,a){"use strict";a.r(r);var n=a(0),t=a.n(n),d=a(4),i=a.n(d),u=a(2),s=a(1),c=a.n(s),o=c.a.shape({id:c.a.number.isRequired,name:c.a.string.isRequired}),m=c.a.shape({id:c.a.number.isRequired,name:c.a.string.isRequired,orderId:c.a.number.isRequired}),l=(c.a.shape({id:c.a.number.isRequired,userId:c.a.number.isRequired,title:c.a.string.isRequired,user:o.isRequired}),function(e){var r=e.product;return t.a.createElement(t.a.Fragment,null,"".concat(r.name))});l.propTypes={product:m.isRequired};var p=function(e){var r=e.products;return t.a.createElement(t.a.Fragment,null,t.a.createElement("ul",{className:"ui list"},r.map((function(e){return t.a.createElement("li",{key:e.id},t.a.createElement(l,{product:e}))}))))},f=function(e){var r=e.user;return t.a.createElement(t.a.Fragment,null,"(".concat(r.name,")"))};f.propTypes={user:o.isRequired};var E=function(e){var r=e.order,a=r.title,n=r.user;return t.a.createElement("div",{className:"ui card"},t.a.createElement("div",{className:"ui content"},t.a.createElement("div",{className:"ui description"},t.a.createElement("p",null,"".concat(a," - "),t.a.createElement(f,{user:n})),t.a.createElement(f,{user:r.user}),r.products.length?t.a.createElement(p,{products:r.products}):t.a.createElement("p",null,"No products found"))))},I=function(e){var r=e.orders;return t.a.createElement("div",{className:"container"},r.map((function(e){return t.a.createElement(E,{order:e})})))},v=(a(15),a(5)),R=a(6),g=a(7).map((function(e){return Object(u.a)(Object(u.a)({},e),{},{user:v.find((function(r){return r.id===e.userId})),products:R.filter((function(r){return r.orderId===e.id}))})}));var q=function(){return t.a.createElement(I,{orders:g})};i.a.render(t.a.createElement(q,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.2d0a09ee.chunk.js.map
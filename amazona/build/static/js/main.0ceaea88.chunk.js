(this.webpackJsonpamazona=this.webpackJsonpamazona||[]).push([[0],{19:function(e,t,a){},20:function(e,t,a){},43:function(e,t,a){},49:function(e,t,a){e.exports=a(81)},58:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(2),c=a(27),i=a.n(c),o=(a(58),a(7)),s=a.n(o),u=a(14),m=a(11),d=a.n(m),E=function(){return function(){var e=Object(u.a)(s.a.mark((function e(t){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:"PRODUCT_LIST_REQUEST"}),e.next=4,d.a.get("/api/products");case 4:a=e.sent,n=a.data,t({type:"PRODUCT_LIST_SUCCESS",payload:n}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:"PRODUCT_LIST_FAIL",payload:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()},p=a(4);var _=function(e){var t=e.checkArr,a=e.topic;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"product__screen--topic"},r.a.createElement("h1",{className:"product__screen--topicHeading"},a)),r.a.createElement("ul",{className:"products"},t.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("div",{className:"product"},r.a.createElement(p.b,{to:"/product/".concat(e._id)},r.a.createElement("img",{src:e.image,alt:"product".concat(t),className:"product__image"})),r.a.createElement("div",{className:"product__name text-captalize"},r.a.createElement(p.b,{to:"/product/".concat(e._id)},e.name)),r.a.createElement("div",{className:"product__brand"},e.brand),r.a.createElement("div",{className:"product__price"},"NRS",e.price),r.a.createElement("div",{className:"product__rating-reviews"},r.a.createElement("div",null,"Reviews:",e.numReviews),r.a.createElement("div",{className:"product__rating"},"Rating: ",e.rating))))}))),r.a.createElement("div",{className:"scroll__to--top",onClick:function(){window.scrollTo({top:-640,behavior:"smooth"})}},r.a.createElement("h2",null,"^")))};var v=function(e){var t=Object(l.c)((function(e){return e.productList})),a=t.products,c=t.loading,i=t.error,o=Object(l.b)();return Object(n.useEffect)((function(){o(E())}),[o]),c?r.a.createElement("div",null,"Loading..."):i?r.a.createElement("div",null,i):r.a.createElement(r.a.Fragment,null,r.a.createElement(_,{checkArr:a}))},f=a(22),h=a(16),b=a.n(h),g=function(e,t){return function(){var a=Object(u.a)(s.a.mark((function a(n,r){var l,c,i,o;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,d.a.get("/api/products/"+e);case 3:l=a.sent,c=l.data,n({type:"CART_ADD_ITEM",payload:{product:c._id,name:c.name,image:c.image,price:c.price,countInStock:c.countInStock,qty:t}}),i=r(),o=i.cart.cartItems,b.a.set("cartItems",JSON.stringify(o)),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(0),console.log("what the hell is happening");case 13:case"end":return a.stop()}}),a,null,[[0,10]])})));return function(e,t){return a.apply(this,arguments)}}()},S=(a(43),a(9));var y=function(e){var t=Object(l.c)((function(e){return e.cart})).cartItems,a=e.match.params.id,c=e.location.search?Number(e.location.search.split("=")[1]):1,i=Object(l.b)();Object(n.useEffect)((function(){a&&i(g(a,c))}),[a,c,i]);var o=function(t){i(function(e){return function(t,a){t({type:"CART_REMOVE_ITEM",payload:e});var n=a().cart.cartItems;b.a.set("cartItems",JSON.stringify(n))}}(t)),e.history.push("/cart")};return r.a.createElement("div",{className:"cart"},r.a.createElement("div",{className:"cart__list"},r.a.createElement("ul",{className:"cart__list-container"},r.a.createElement("li",null,r.a.createElement("h3",null,r.a.createElement(S.a,null),r.a.createElement("span",{className:"shopping__heading"},"Shopping Cart")),r.a.createElement("div",null,r.a.createElement("h3",null,"Price"))),0===t.length?r.a.createElement("div",null,"Cart is Empty"):t.map((function(t,a){return r.a.createElement("li",{key:a},r.a.createElement("div",{className:"cart__image"},r.a.createElement("img",{src:t.image,alt:"cart-1"})),r.a.createElement("div",{className:"cart__name"},r.a.createElement("div",null,r.a.createElement(p.b,{to:"/product/"+t.product},t.name)),r.a.createElement("div",null,"Qty:",r.a.createElement("select",{value:t.qty,onChange:function(a){return function(t,a){i(g(a,t.target.value)),console.log(t.target.value),e.history.push("/cart")}(a,t.product)}},Object(f.a)(Array(t.countInStock).keys()).map((function(e,t){return r.a.createElement("option",{key:t,value:e+1},e+1)}))),r.a.createElement("button",{type:"button",className:"button button__delete",onClick:function(){return o(t.product)}},"Delete"))),r.a.createElement("div",{className:"cart__price"},t.price))})))),r.a.createElement("div",{className:"cart__action"},r.a.createElement("h3",null,"SubTotal:(",t.reduce((function(e,t){return parseInt(e)+parseInt(t.qty)}),0),")Items ==","  ","NRS","  ",t.reduce((function(e,t){return e+t.price*t.qty}),0),r.a.createElement("sub",null,"Only")),r.a.createElement("button",{onClick:function(){e.history.push("/signin?redirect=shipping")},className:"button primary full-width",disabled:0===t.length},"Proceed To CheckOut")))},N=a(3);a(19);var O=function(e){var t=Object(n.useState)(1),a=Object(N.a)(t,2),c=a[0],i=a[1],o=Object(l.c)((function(e){return e.productDetails})),m=o.product,E=o.loading,_=o.error,v=Object(l.b)();return Object(n.useEffect)((function(){var t;v((t=e.match.params.id,function(){var e=Object(u.a)(s.a.mark((function e(a){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(t),a({type:"PRODUCT_DETAILS_REQUEST",payload:t}),e.next=5,d.a.get("/api/products/"+t);case 5:n=e.sent,r=n.data,console.log(r),a({type:"PRODUCT_DETAILS_SUCCESS",payload:r}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),a({type:"PRODUCT_DETAILS_FAIL",payload:e.t0.message});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()))}),[v,e.match.params.id]),r.a.createElement("div",null,r.a.createElement("div",{className:"back-to-home"},r.a.createElement(p.b,{to:"/"},"Back To Home")),E?r.a.createElement("div",null,"Loading...."):_?r.a.createElement("div",null,r.a.createElement("h1",null,"What the hell is happening")):r.a.createElement("div",{className:"product__details"},r.a.createElement("div",{className:"product__details--img"},r.a.createElement("img",{src:m.image,alt:"product ".concat(m._id)})),r.a.createElement("div",{className:"product__details--info"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("h2",null,m.name)),r.a.createElement("li",null,m.rating),r.a.createElement("li",null,r.a.createElement("b",null,m.price)),r.a.createElement("li",null,"Description:",m.description))),r.a.createElement("div",{className:"product__details--action"},r.a.createElement("ul",null,r.a.createElement("li",null,"Price: ",m.price),r.a.createElement("li",null,"Status: ",m.countInStock>0?"In Stock":"Out of Stock"),r.a.createElement("li",null,"Qty:",r.a.createElement("select",{value:c,onChange:function(e){i(e.target.value)}},Object(f.a)(Array(m.countInStock).keys()).map((function(e,t){return r.a.createElement("option",{key:t,value:e+1},e+1)})))),r.a.createElement("li",null,m.countInStock>0&&r.a.createElement("button",{onClick:function(){e.history.push("/cart/"+e.match.params.id+"?qty="+c),console.log(e.history)},className:"button btn__success"},"Add To Cart"))))))};a(78),a(20);var C=function(e){var t=Object(l.b)(),a=Object(l.c)((function(e){return e.userSignin})),c=a.loading,i=a.userInfo,o=a.error,m=Object(n.useState)(""),E=Object(N.a)(m,2),_=E[0],v=E[1],f=Object(n.useState)(""),h=Object(N.a)(f,2),g=h[0],S=h[1],y=e.location.search?e.location.search.split("=")[1]:"/";return Object(n.useEffect)((function(){i&&e.history.push(y)}),[i,y,e.history]),r.a.createElement("div",{className:"signin__screen"},r.a.createElement("div",{className:"form"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(function(e,t){return function(){var a=Object(u.a)(s.a.mark((function a(n){var r,l;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n({type:"USER_SIGNIN_REQUEST",payload:{email:e,password:t}}),a.prev=1,a.next=4,d.a.post("/api/users/signin",{email:e,password:t});case 4:r=a.sent,l=r.data,n({type:"USER_SIGNIN_SUCCESS",payload:l}),b.a.set("userInfo",JSON.stringify(l)),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(1),n({type:"USER_SIGNIN_FAIL",payload:"Invalid User and Password"});case 13:case"end":return a.stop()}}),a,null,[[1,10]])})));return function(e){return a.apply(this,arguments)}}()}(_,g))}},r.a.createElement("ul",{className:"form__container"},r.a.createElement("li",null,r.a.createElement("h2",null,"Sign-In")),r.a.createElement("li",null,c&&r.a.createElement("div",null,"loading...."),o&&r.a.createElement("div",{className:"error__message"},o)),r.a.createElement("li",null,r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",name:"email",id:"email",onChange:function(e){return v(e.target.value)}})),r.a.createElement("li",null,r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",name:"password",id:"password",onChange:function(e){return S(e.target.value)}})),r.a.createElement("li",null,r.a.createElement("button",{type:"submit",className:"button success"},"SignIn")),r.a.createElement("li",null,"New to BijuPlaza?"),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/"===y?"register":"register?redirect="+y,className:"button secondary text-center"},"Create your BijuPlaza Account"))))))};var I=function(e){var t=Object(l.b)(),a=Object(l.c)((function(e){return e.userRegister})),c=a.loading,i=a.userInfo,o=a.error,m=Object(n.useState)(""),E=Object(N.a)(m,2),_=E[0],v=E[1],f=Object(n.useState)(""),h=Object(N.a)(f,2),b=h[0],g=h[1],S=Object(n.useState)(""),y=Object(N.a)(S,2),O=y[0],C=y[1],I=Object(n.useState)(""),j=Object(N.a)(I,2),T=j[0],R=j[1];console.log(T);var k=e.location.search?e.location.search.split("=")[1]:"/signin";return Object(n.useEffect)((function(){i&&e.history.push(k)}),[i,e.history,k]),r.a.createElement("div",{className:"register__screen"},r.a.createElement("div",{className:"form"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(function(e,t,a){return function(){var n=Object(u.a)(s.a.mark((function n(r){var l,c;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r({type:"USER_REGISTER_REQUEST",payload:{name:e,email:t,password:a}}),n.prev=1,n.next=4,d.a.post("/api/users/register",{name:e,email:t,password:a});case 4:l=n.sent,c=l.data,r({type:"USER_REGISTER_SUCCESS",payload:c}),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),r({type:"USER_REGISTER_FAIL",payload:n.t0.message});case 12:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e){return n.apply(this,arguments)}}()}(_,b,O))}},r.a.createElement("ul",{className:"form__container"},r.a.createElement("li",null,r.a.createElement("h2",null,"Creat Account")),r.a.createElement("li",null,c&&r.a.createElement("div",null,"loading...."),o&&r.a.createElement("div",null,o)),r.a.createElement("li",null,r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{type:"text",name:"name",id:"name",onChange:function(e){return v(e.target.value)}})),r.a.createElement("li",null,r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",name:"email",id:"email",onChange:function(e){return g(e.target.value)}})),r.a.createElement("li",null,r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",name:"password",id:"password",onChange:function(e){return C(e.target.value)}})),r.a.createElement("li",null,r.a.createElement("label",{htmlFor:"repassword"},"Re-Enter Password"),r.a.createElement("input",{type:"password",name:"repassword",id:"repassword",onChange:function(e){return R(e.target.value)}})),r.a.createElement("li",null,r.a.createElement("button",{type:"submit",className:"button primary"},"Register")),r.a.createElement("li",{className:"last__child"},r.a.createElement("h4",{className:"inline-block"},"Already have an account?"),r.a.createElement(p.b,{to:"/"===k?"signin":"signin?redirect="+k,className:"button secondary text-center"},"Sign In"))))))};a(79);var j=function(e){var t=Object(n.useState)(!1),a=Object(N.a)(t,2),c=a[0],i=a[1],o=Object(l.b)(),m=Object(l.c)((function(e){return e.productSave})),p=m.loading,_=m.success,v=m.error,f=Object(l.c)((function(e){return e.productDelete})).success,h=Object(l.c)((function(e){return e.productList})).products,b=Object(n.useState)(),g=Object(N.a)(b,2),S=g[0],y=g[1],O=Object(n.useState)(),C=Object(N.a)(O,2),I=C[0],j=C[1],T=Object(n.useState)(),R=Object(N.a)(T,2),k=R[0],U=R[1],w=Object(n.useState)(),P=Object(N.a)(w,2),A=P[0],D=P[1],L=Object(n.useState)(),x=Object(N.a)(L,2),F=x[0],M=x[1],Q=Object(n.useState)(),G=Object(N.a)(Q,2),B=G[0],q=G[1],z=Object(n.useState)(),J=Object(N.a)(z,2),H=J[0],V=J[1],W=Object(n.useState)(),X=Object(N.a)(W,2),K=X[0],Y=X[1],Z=Object(n.useState)(),$=Object(N.a)(Z,2),ee=($[0],$[1]),te=function(e){var t;o((t=e._id,function(){var e=Object(u.a)(s.a.mark((function e(a,n){var r,l,c,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=n(),l=r.userSignin.userInfo,a({type:"PRODUCT_DELETE_REQUEST",payload:t}),e.next=5,d.a.delete("/api/products/"+t,{headers:{authorization:"Bearer"+l.token}});case 5:c=e.sent,i=c.data,a({type:"PRODUCT_DELETE_SUCCESS",payload:i,success:!0}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),a({type:"PRODUCT_DELETE_FAIL",payload:e.t0.message});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,a){return e.apply(this,arguments)}}()))};Object(n.useEffect)((function(){_&&i(!1),o(E())}),[_,f,o]);var ae=function(e){i(!0),y(e._id),j(e.name),U(e.price),D(e.brand),q(e.image),V(e.category),Y(e.description),M(e.countInStock),ee(e.reviews)};return r.a.createElement("div",{className:"content content__margined"},r.a.createElement("div",{className:"product__header"},r.a.createElement("h3",null,"Products"),r.a.createElement("div",null,c?r.a.createElement("button",{type:"button",className:"button__danger",onClick:function(){return i(!1)}},"Back To list"):r.a.createElement("button",{type:"button",className:"button__success",onClick:function(){return ae({})}},"Create Products"))),c&&r.a.createElement("div",{className:"signin__screen"},r.a.createElement("div",{className:"form"},r.a.createElement("form",{onSubmit:function(e){var t;e.preventDefault(),o((t={_id:S,name:I,price:k,image:B,brand:A,category:H,countInStock:F,description:K},function(){var e=Object(u.a)(s.a.mark((function e(a,n){var r,l,c,i,o,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,a({type:"PRODUCT_DETAILS_REQUEST",payload:t}),r=n(),l=r.userSignin.userInfo,t._id){e.next=11;break}return e.next=6,d.a.post("/api/products",t,{headers:{Authorization:"Bearer"+l.token}});case 6:c=e.sent,i=c.data,a({type:"PRODUCT_DETAILS_SUCCESS",payload:i}),e.next=16;break;case 11:return e.next=13,d.a.put("/api/products/"+t._id,t,{headers:{authorization:"Bearer"+l.token}});case 13:o=e.sent,u=o.data,a({type:"PRODUCT_DETAILS_SUCCESS",payload:u});case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(0),a({type:"PRODUCT_DETAILS_FAIL",payload:"hello how are you my bug"});case 21:case"end":return e.stop()}}),e,null,[[0,18]])})));return function(t,a){return e.apply(this,arguments)}}()))}},r.a.createElement("ul",{className:"form__container"},r.a.createElement("li",null,r.a.createElement("h2",null,"Create Product")),r.a.createElement("li",null,p&&r.a.createElement("div",null,"loading...."),v&&r.a.createElement("div",{className:"error__message"},"What the hell")),r.a.createElement("li",null,r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{value:I,type:"text",name:"name",id:"name",onChange:function(e){return j(e.target.value)}})),r.a.createElement("li",null,r.a.createElement("label",{htmlFor:"price"},"Price"),r.a.createElement("input",{value:k,type:"text",name:"price",id:"price",onChange:function(e){return U(e.target.value)}})),r.a.createElement("li",null,r.a.createElement("label",{htmlFor:"image"},"Image"),r.a.createElement("input",{value:B,type:"text",name:"image",id:"image",onChange:function(e){return q(e.target.value)}})),r.a.createElement("li",null,r.a.createElement("label",{htmlFor:"brand"},"Brand"),r.a.createElement("input",{value:A,type:"text",name:"brand",id:"brand",onChange:function(e){return D(e.target.value)}})),r.a.createElement("li",null,r.a.createElement("label",{htmlFor:"category"},"Category"),r.a.createElement("input",{value:H,type:"text",name:"category",id:"category",onChange:function(e){return V(e.target.value)}})),r.a.createElement("li",null,r.a.createElement("label",{htmlFor:"countInStock"},"Count In Stock"),r.a.createElement("input",{value:F,type:"text",name:"countInStock",id:"countInStock",onChange:function(e){return M(e.target.value)}})),r.a.createElement("li",null,r.a.createElement("label",{htmlFor:"description"},"Description"),r.a.createElement("textarea",{value:K,name:"description",id:"description",onChange:function(e){return Y(e.target.value)}})),r.a.createElement("li",null,r.a.createElement("button",{type:"submit",className:"button success"},S?"Update":"Create")),r.a.createElement("li",null,r.a.createElement("button",{onClick:function(){return i(!1)},type:"button",className:"button__danger"},"Back")))))),r.a.createElement("div",null,r.a.createElement("h3",{className:"text-center margin-buttom"},"Product List")),r.a.createElement("div",{className:"product__list"},r.a.createElement("table",{className:"table"},r.a.createElement("thead",{className:"table__header"},r.a.createElement("tr",null,r.a.createElement("th",null,"ID"),r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Price"),r.a.createElement("th",null,"Brand"),r.a.createElement("th",null,"Category"),r.a.createElement("th",null,"Action"))),r.a.createElement("tbody",null,h.map((function(e,t){return r.a.createElement("tr",{key:e._id},r.a.createElement("td",null,e._id),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.price),r.a.createElement("td",null,e.brand),r.a.createElement("td",null,e.category),r.a.createElement("td",{className:"flex-button"},r.a.createElement("button",{className:"button__warning color-black mr-2",onClick:function(){return ae(e)}},"Edit"),r.a.createElement("button",{className:"button__danger color-black mr-2",onClick:function(){return te(e)}},"Delete")))}))))))};var T=function(e){return r.a.createElement("div",{className:"checkout__steps"},r.a.createElement("div",{className:e.step1?"active":""},"SignIn"),r.a.createElement("div",{className:e.step2?"active":""},"Shipping"),r.a.createElement("div",{className:e.step3?"active":""},"Payment"),r.a.createElement("div",{className:e.step4?"active":""},"Place Order"))};var R=function(e){var t=Object(l.b)(),a=Object(n.useState)(""),c=Object(N.a)(a,2),i=c[0],o=c[1],s=Object(n.useState)(""),u=Object(N.a)(s,2),m=u[0],d=u[1],E=Object(n.useState)(""),p=Object(N.a)(E,2),_=p[0],v=p[1],f=Object(n.useState)(""),h=Object(N.a)(f,2),b=h[0],g=h[1];return r.a.createElement("div",null,r.a.createElement(T,{step1:!0,step2:!0}),r.a.createElement("div",{className:"register__screen"},r.a.createElement("div",{className:"form"},r.a.createElement("form",{onSubmit:function(a){var n;a.preventDefault(),t((n={address:i,city:m,postalCode:_,country:b},function(e){console.log("value from saveShipping actions when  I will clicked the continue button of the shipping screens",n),e({type:"CART_SAVE_SHIPPING",payload:n})})),e.history.push("/payment")}},r.a.createElement("ul",{className:"form__container"},r.a.createElement("li",null,r.a.createElement("h2",{className:"form__container--logo"},r.a.createElement(S.d,null)),r.a.createElement("h2",{className:"form__container--heading"},"Shipping Screen")),r.a.createElement("li",null,r.a.createElement("label",{htmlFor:"address"},"Address"),r.a.createElement("input",{type:"text",name:"address",id:"address",onChange:function(e){return o(e.target.value)}})),r.a.createElement("li",null,r.a.createElement("label",{htmlFor:"city"},"City"),r.a.createElement("input",{type:"text",name:"city",id:"city",onChange:function(e){return d(e.target.value)}})),r.a.createElement("li",null,r.a.createElement("label",{htmlFor:"postalCode"},"Postal Code"),r.a.createElement("input",{type:"text",name:"postalCode",id:"postalCode",onChange:function(e){return v(e.target.value)}})),r.a.createElement("li",null,r.a.createElement("label",{htmlFor:"country"},"Country"),r.a.createElement("input",{type:"text",name:"country",id:"country",onChange:function(e){return g(e.target.value)}})),r.a.createElement("li",null,r.a.createElement("button",{type:"submit",className:"button primary"},"Continue")))))))},k=a(45);var U=function(e){var t=Object(l.b)(),a=Object(n.useState)(""),c=Object(N.a)(a,2),i=c[0],o=c[1];return r.a.createElement("div",{className:"payment__screen--container"},r.a.createElement(T,{step1:!0,step2:!0,step3:!0}),r.a.createElement("div",{className:"register__screen"},r.a.createElement("div",{className:"form"},r.a.createElement("form",{onSubmit:function(a){var n;a.preventDefault(),t((n=i,function(e){console.log("value from the savePayment actions when I clicked the continue button of the payment screen",n),e({type:"CART_SAVE_PAYMENT",payload:n})})),e.history.push("/placeorder")}},r.a.createElement("ul",{className:"form__container"},r.a.createElement("li",null,r.a.createElement("h2",{className:"form__container--logo"},r.a.createElement(k.a,null)),r.a.createElement("h2",{className:"form__container--heading"},"Payment Method")),r.a.createElement("li",null,r.a.createElement("div",{className:"form__container--input-1"},r.a.createElement("input",{type:"radio",className:"form__container--radio",name:"paymentMethod",id:"paymentMethod",onChange:function(e){return o(e.target.value)},value:"esewa"}),r.a.createElement("label",{htmlFor:"paymentMethod"},r.a.createElement("img",{src:"../images/eSewa.png",alt:"esewa",className:"payment--logo esewa--logo"})))),r.a.createElement("li",null,r.a.createElement("div",{className:"form__container--input-2"},r.a.createElement("input",{type:"radio",className:"form__container--radio",name:"paymentMethod",id:"paymentMethod",onChange:function(e){return o(e.target.value)},value:"Khalti"}),r.a.createElement("label",{htmlFor:"paymentMethod"},r.a.createElement("img",{src:"../images/khalti.png",alt:"Khalti",className:"payment--logo khalti--logo"})))),r.a.createElement("li",null,r.a.createElement("button",{type:"submit",className:"button primary"},"Continue")))))))};a(80);var w=function(e){var t=Object(l.c)((function(e){return e.cart}));console.log(t);var a=t.cartItems,c=t.shipping,i=t.payment;Object(n.useEffect)((function(){}),[e.history]),console.log(c),c==={}&&e.history.push("/shipping"),i||e.history.push("/payment");var o=a.reduce((function(e,t){return e+t.price*t.qty}),0),s=o<1e3?0:70,u=.13*o,m=o+s+u;return r.a.createElement("div",{className:"placeorder__container"},r.a.createElement(T,{step1:!0,step2:!0,step3:!0,step4:!0}),r.a.createElement("div",{className:"placeorder"},r.a.createElement("div",{className:"placeorder__info"},r.a.createElement("div",null,r.a.createElement("h3",null,"Shipping"),r.a.createElement("pre",null,r.a.createElement("h4",null,"Address: ",c.address),r.a.createElement("h4",null,"City: ",c.city),r.a.createElement("h4",null,"Postal:",c.postalCode),r.a.createElement("h4",null,"Country:",c.country))),r.a.createElement("div",null,r.a.createElement("h3",null,"Payment"),r.a.createElement("div",null,"Payment Method is done by using: ",i),r.a.createElement("div",null,r.a.createElement("ul",{className:"cart__list-container"},r.a.createElement("li",null,r.a.createElement("h3",null,"Shopping placeorder"),r.a.createElement("div",null,"price")),0===a.length?r.a.createElement("div",null,"placeorder is Empty"):a.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("div",{className:"cart__image"},r.a.createElement("img",{src:e.image,alt:"cart-1"})),r.a.createElement("div",{className:"cart__name"},r.a.createElement("div",null,r.a.createElement(p.b,{to:"/product/"+e.product},e.name)),r.a.createElement("div",null,"Qty:",e.qty)),r.a.createElement("div",{className:"cart__price"},e.price))})))))),r.a.createElement("div",{className:"placeorder__action"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("button",{onClick:function(){e.history.push("/signin?redirect=shipping")},className:"button primary full-width"},"Place Order")),r.a.createElement("li",null,r.a.createElement("h3",null,"Order Summary")),r.a.createElement("li",null,r.a.createElement("div",null,"Items"),r.a.createElement("div",null,"NRS ",o)),r.a.createElement("li",null,r.a.createElement("div",null,"Shipping"),r.a.createElement("div",null,"NRS ",s)),r.a.createElement("li",null,r.a.createElement("div",null,"Tax"),r.a.createElement("div",null,"NRS ",u.toFixed(3))),r.a.createElement("li",null,r.a.createElement("div",null,"Order Total"),r.a.createElement("div",null,"NRS ",m))))))};var P=function(e){var t=Object(l.c)((function(e){return e.productList})),a=t.products,c=t.loading,i=t.error,o=Object(l.b)();Object(n.useEffect)((function(){o(E())}),[o]);var s=[],u="";return a.filter((function(e,t){(u=a.find((function(e){return e.image==="/images/d".concat(t,".jpg")})))&&s.push(u)})),console.log(s),c?r.a.createElement("div",null,"Loading..."):i?r.a.createElement("div",null,i):r.a.createElement(r.a.Fragment,null,r.a.createElement(_,{checkArr:s,topic:"Shirts"}))};var A=function(e){var t=Object(n.useState)(""),a=Object(N.a)(t,2),c=a[0],i=a[1],o=Object(n.useState)(""),m=Object(N.a)(o,2),E=m[0],p=m[1],_=Object(n.useState)(""),v=Object(N.a)(_,2),f=v[0],h=v[1],g=Object(l.b)(),y=Object(l.c)((function(e){return e.userSignin})).userInfo,O=Object(l.c)((function(e){return e.userUpdate})),C=O.loading,I=O.success,j=O.error;Object(n.useEffect)((function(){y&&(h(y.email),i(y.name),p(y.password))}),[y]);var T=function(e){var t=e.target,a=t.name,n=t.value;"name"===a&&i(n),"email"===a&&h(n),"password"===a&&p(n)};return r.a.createElement("div",{className:"profile"},r.a.createElement("div",{className:"profile__info"},r.a.createElement("div",{className:"form"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),g(function(e){var t=e.userId,a=e.name,n=e.email,r=e.password;return function(){var e=Object(u.a)(s.a.mark((function e(l,c){var i,o,u,m;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=c(),o=i.userSignin.userInfo,l({type:"USER_UPDATE_REQUEST",payload:{userId:t,name:a,email:n,password:r}}),e.prev=2,console.log(t),console.log(a),console.log(n),console.log(r),console.log(o.token),e.next=10,d.a.put("/api/users/"+t,{name:a,email:n,password:r},{headers:{Authorization:"Bearer"+o.token}});case 10:u=e.sent,m=u.data,console.log(m),l({type:"USER_UPDATE_SUCCESS",payload:m}),b.a.set("userInfo",JSON.stringify(m)),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(2),l({type:"USER_UPDATE_FAIL",payload:e.t0.message});case 20:case"end":return e.stop()}}),e,null,[[2,17]])})));return function(t,a){return e.apply(this,arguments)}}()}({userId:y._id,email:f,name:c,password:E}))}},r.a.createElement("ul",{className:"form__container"},r.a.createElement("li",null,r.a.createElement("h1",{className:"form__container--logo"},r.a.createElement(S.h,null)),r.a.createElement("h2",{className:"form__container--heading"},"User Profile")),r.a.createElement("li",null,C&&r.a.createElement("div",null,"Loading....."),j&&r.a.createElement("div",null," ",j),I&&r.a.createElement("div",null," Profile Saved SuccessFully")),r.a.createElement("li",null,r.a.createElement("label",{htmlFor:"name"},"Name:"),r.a.createElement("input",{type:"text",value:c,name:"name",id:"name",onChange:T})),r.a.createElement("li",null,r.a.createElement("label",{htmlFor:"email"},"email:"),r.a.createElement("input",{type:"text",value:f,name:"email",id:"email",onChange:T})),r.a.createElement("li",null,r.a.createElement("label",{htmlFor:"password"},"Password:"),r.a.createElement("input",{type:"password",value:E,name:"password",id:"password",onChange:T})),r.a.createElement("li",null,r.a.createElement("button",{type:"button",onClick:function(){g((function(e){b.a.remove("userInfo"),e({type:"USER_LOGOUT"})})),e.history.push("/"),window.location.reload(!1)},className:"button button__danger full-width"},"logOut")),r.a.createElement("li",null,r.a.createElement("button",{type:"submit",className:"button__success full-width"},"Update")))))))};var D=function(e){var t=Object(l.c)((function(e){return e.productList})),a=t.products,c=t.loading,i=t.error,o=Object(l.b)();Object(n.useEffect)((function(){o(E())}),[o]);var s=[],u="";return a.map((function(e,t){(u=a.find((function(e){return e.image==="/images/p".concat(t,".jpg")})))&&s.push(u)})),c?r.a.createElement("div",null,"Loading..."):i?r.a.createElement("div",null,i):r.a.createElement(r.a.Fragment,null,r.a.createElement(_,{topic:"Pants",checkArr:s}))};var L=function(e){var t=Object(l.c)((function(e){return e.productList})),a=t.products,c=t.loading,i=t.error,o=Object(l.b)();Object(n.useEffect)((function(){o(E())}),[o]);var s=[],u="";return a.map((function(e,t){(u=a.find((function(e){return e.image==="/images/sh".concat(t,".jpg")})))&&s.push(u)})),c?r.a.createElement("div",null,"Loading....."):i?r.a.createElement("div",null,i):r.a.createElement(r.a.Fragment,null,r.a.createElement(_,{topic:"shoes",checkArr:s}))},x=a(25);var F=function(e){var t=e.openMenu,a=e.userInfo;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"header__brand"},r.a.createElement("button",{className:"header__burger",onClick:t},"\u2630"),r.a.createElement(p.b,{to:"/",className:"header__biju--brand"},r.a.createElement("span",{className:"biju__brand"},"B"),"ijuPlaza")),r.a.createElement("div",{className:"header__links"},r.a.createElement(p.b,{to:"/cart"},r.a.createElement(x.c,null),r.a.createElement("sup",null,"Cart")),a?r.a.createElement(p.b,{to:"/profile"},r.a.createElement(S.g,null)," ",r.a.createElement("sup",null,a.name.split(" ")[0])):r.a.createElement(p.b,{to:"/signin"},r.a.createElement(S.e,null),r.a.createElement("sup",null,"SignIn"))))},M=a(47),Q=a(46);var G=function(e){var t=e.closeMenu,a=e.isAdmin;return r.a.createElement("div",{className:"sidebar__container"},r.a.createElement("div",{className:"sidebar__header"},r.a.createElement("h2",null,"Shopping Categories"),r.a.createElement("button",{onClick:t,className:"btn-close"},"X")),r.a.createElement("div",{className:"sidebar__scroll"},r.a.createElement("ul",{className:"sidebar__list"},r.a.createElement("li",{className:"sidebar__list--item"},r.a.createElement(p.b,{to:"/",className:"sidebar__list--link"},r.a.createElement(S.b,null)," HomePage")),r.a.createElement("li",{className:"sidebar__list--item"},r.a.createElement(p.b,{to:"/shirts",className:"sidebar__list--link"},r.a.createElement(Q.a,null)," Shirts")),r.a.createElement("li",{className:"sidebar__list--item"},r.a.createElement(p.b,{to:"/pants",className:"sidebar__list--link"},r.a.createElement(x.a,null)," Pants")),r.a.createElement("li",{className:"sidebar__list--item"},r.a.createElement(p.b,{to:"/shoes",className:"sidebar__list--link"},r.a.createElement(x.b,null)," Shoes")),r.a.createElement("li",{className:"sidebar__list--item"},r.a.createElement(p.b,{to:"/cart",className:"sidebar__list--link"},r.a.createElement(M.a,null)," Cart")),r.a.createElement("li",{className:"sidebar__list--item"},r.a.createElement(p.b,{to:"/profile",className:"sidebar__list--link"},r.a.createElement(S.f,null)," Profile")),a?r.a.createElement("li",{className:"sidebar__list--item"},r.a.createElement(p.b,{to:"/products",className:"sidebar__list--link"},r.a.createElement(S.c,null)," Products")):r.a.createElement(r.a.Fragment,null),r.a.createElement("li",{className:"sidebar__list--item"},r.a.createElement(p.b,{to:"/shipping",className:"sidebar__list--link"},r.a.createElement(S.d,null),"Shipping")))),r.a.createElement("div",{className:"sidebar__footer"},r.a.createElement("h2",{className:"sidebar__footer--topic"},"Welcome to the BijuPlaza")))},B=a(6);var q=function(e){var t=e.PantScreen,a=e.Shirt,n=e.ShoesScreen,l=e.AddItemScreen,c=e.SignInScreen,i=e.RegisterScreen,o=e.ProfileScreen,s=e.ShippingScreen,u=e.PlaceorderScreen,m=e.PaymentScreen,d=e.ProductScreen,E=e.HomeScreen,p=e.CartScreen;return r.a.createElement(r.a.Fragment,null,r.a.createElement(B.a,{path:"/pants",component:t}),r.a.createElement(B.a,{path:"/shirts",component:a}),r.a.createElement(B.a,{path:"/shoes",component:n}),r.a.createElement(B.a,{path:"/products",component:l}),r.a.createElement(B.a,{path:"/signin",component:c}),r.a.createElement(B.a,{path:"/register",component:i}),r.a.createElement(B.a,{path:"/profile",component:o}),r.a.createElement(B.a,{path:"/shipping",component:s}),r.a.createElement(B.a,{path:"/payment",component:m}),r.a.createElement(B.a,{path:"/placeOrder",component:u}),r.a.createElement(B.a,{path:"/product/:id",component:d}),r.a.createElement(B.a,{path:"/",exact:!0,component:E}),r.a.createElement(B.a,{path:"/cart/:id?",component:p}))};var z=function(e){var t,a=Object(l.c)((function(e){return e.userSignin})).userInfo;t=!!a&&a.isAdmin;var n=function(){document.querySelector(".sidebar").classList.remove("open"),document.querySelector(".overlay").classList.remove("active")};return r.a.createElement(p.a,null,r.a.createElement("div",null,r.a.createElement("div",{className:"grid__container "},r.a.createElement("div",{className:"header"},r.a.createElement(F,{openMenu:function(){document.querySelector(".sidebar").classList.add("open"),document.querySelector(".overlay").classList.add("active")},userInfo:a})),r.a.createElement("aside",{className:"sidebar"},r.a.createElement(G,{closeMenu:function(){document.querySelector(".sidebar").classList.remove("open"),document.querySelector(".overlay").classList.remove("active")},isAdmin:t})),r.a.createElement("main",{className:"main"},r.a.createElement(q,{PantScreen:D,Shirt:P,ShoesScreen:L,AddItemScreen:j,SignInScreen:C,RegisterScreen:I,ProfileScreen:A,ShippingScreen:R,PaymentScreen:U,PlaceorderScreen:w,ProductScreen:O,HomeScreen:v,CartScreen:y,closeOverlay:n})),r.a.createElement("footer",{className:"footer"},"@ All right reserved")),r.a.createElement("div",{className:"overlay",onClick:n})))},J=a(17);var H=a(48),V=a(18);var W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cartItems:[],shipping:{},payment:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CART_ADD_ITEM":var a=t.payload,n=e.cartItems.find((function(e){return e.product===a.product}));return n?{cartItems:e.cartItems.map((function(e){return e.product===n.product?a:e}))}:Object(V.a)(Object(V.a)({},e),{},{cartItems:[].concat(Object(f.a)(e.cartItems),[a])});case"CART_REMOVE_ITEM":return{cartItems:e.cartItems.filter((function(e){return e.product!==t.payload}))};case"CART_SAVE_SHIPPING":return Object(V.a)(Object(V.a)({},e),{},{shipping:t.payload});case"CART_SAVE_PAYMENT":return Object(V.a)(Object(V.a)({},e),{},{payment:t.payload});default:return e}};var X={cart:{cartItems:b.a.getJSON("cartItems")||[],shipping:{},payment:""},userSignin:{userInfo:b.a.getJSON("userInfo")||!1}},K=Object(J.c)({productList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{products:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PRODUCT_LIST_REQUEST":return{loading:!0,products:[]};case"PRODUCT_LIST_SUCCESS":return{loading:!1,products:t.payload};case"PRODUCT_LIST_FAIL":return{loading:!1,error:t.payload};default:return e}},productDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{product:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PRODUCT_DETAILS_REQUEST":return{loading:!0};case"PRODUCT_DETAILS_SUCCESS":return{loading:!1,product:t.payload};case"PRODUCT_DETAILS_FAIL":return{loading:!1,error:t.payload};default:return e}},cart:W,userSignin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_SIGNIN_REQUEST":return{loading:!0};case"USER_SIGNIN_SUCCESS":return{loading:!1,userInfo:t.payload};case"USER_SIGNIN_FAIL":return{loading:!1,error:t.payload};default:return e}},userRegister:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_REGISTER_REQUEST":return{loading:!0};case"USER_REGISTER_SUCCESS":return{loading:!1,userInfo:t.payload};case"USER_REGISTER_FAIL":return{loading:!1,error:t.payload};default:return e}},userUpdate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_UPDATE_REQUEST":return{loading:!0};case"USER_UPDATE_SUCCESS":return{loading:!1,userInfo:t.payload,success:!0};case"USER_UPDATE_FAIL":return{loading:!1,error:t.payload};default:return e}},productSave:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{product:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PRODUCT_DETAILS_REQUEST":return{loading:!0,products:[]};case"PRODUCT_DETAILS_SUCCESS":return{loading:!1,success:!0,product:t.payload};case"PRODUCT_DETAILS_FAIL":return{loading:!1,error:t.payload};default:return e}},productDelete:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{product:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PRODUCT_DELETE_REQUEST":return{loading:!0};case"PRODUCT_DELETE_SUCCESS":return{loading:!1,product:t.payload,success:!0};case"PRODUCT_DELETE_FAIL":return{loading:!1,error:t.payload};default:return e}}}),Y=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||J.d,Z=Object(J.e)(K,X,Y(Object(J.a)(H.a)));i.a.render(r.a.createElement(l.a,{store:Z},r.a.createElement(z,null)),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.0ceaea88.chunk.js.map
"use strict";(self.webpackChunkcreekside_logistics_app=self.webpackChunkcreekside_logistics_app||[]).push([[951],{2510:function(e,t,n){n.r(t);var r=n(5861),a=n(4942),o=n(7757),i=n.n(o),l=n(7294),c=n(7951),s=n(4382),u=n(7216),p=n(8423),d=n(581),m=n(9308),g=n(6968),h=n(2483),f=n(2374),b=n(4093),v=n(3336),w=n(3774),y=n(5444),Z=n(5167),E=n(6504);function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=function(){var e=l.useContext(w.Z),t=e.handleRegister,n=e.url,a=e.isLoggedIn,o=l.useContext(Z.Z).showMessage,x=l.useState({name:"",phone:"",email:"",password:""}),k=x[0],j=x[1],C=l.useState(!1),P=C[0],S=C[1],D=l.useState(!1),W=D[0],M=D[1],_=l.useState("rgba(0,0,0,0) url('/mockups/"+["phone","tab","computer"][Math.floor(3*Math.random())]+".jpg') center center/cover no-repeat local padding-box border-box"),A=_[0];_[1];a()&&"undefined"!=typeof window&&(0,y.navigate)(n||"/");var I=function(e){var t;j(O(O({},k),{},((t={})[""+e.target.id]=e.target.value,t)))},L=function(){var e=(0,r.Z)(i().mark((function e(n){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),!(r=(0,E.qg)(k.name)||(0,E.tH)(k.phone)||(0,E.Le)(k.email)||(0,E.ym)(k.password))){e.next=5;break}return o("warning",r),e.abrupt("return");case 5:S(!0),t(k),S(!1);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return l.createElement(s.Z,{direction:{xs:"column",lg:"row"}},l.createElement(c.Z,{width:1,p:2,height:"100vh",minHeight:"700px",display:"flex",justifyContent:"center",alignItems:"center",position:"relative"},l.createElement(s.Z,{width:1,direction:"column",maxWidth:"500px",spacing:2},l.createElement(h.Z,{src:"/splash.png",variant:"square",alt:"logo",sx:{alignSelf:"center",height:100,width:100}}),l.createElement(m.Z,{variant:"h4",color:"text.primary",gutterBottom:!0,textAlign:"center"},"Sign up"),l.createElement(u.Z,{value:k.name,onChange:I,label:"Name",id:"name",fullWidth:!0}),l.createElement(u.Z,{value:k.phone,onChange:I,label:"Phone Number",id:"phone",fullWidth:!0}),l.createElement(u.Z,{value:k.email,onChange:I,label:"Email",id:"email",fullWidth:!0}),l.createElement(u.Z,{value:k.password,onChange:I,label:"Password",id:"password",type:W?"text":"password",fullWidth:!0,InputProps:{endAdornment:l.createElement(p.Z,{position:"end"},l.createElement(d.Z,{"aria-label":"toggle password visibility",onClick:function(){M(!W)},onMouseDown:function(e){return e.preventDefault()},edge:"end"},W?l.createElement(v.Z,null):l.createElement(b.Z,null)))}}),l.createElement(g.Z,{variant:"contained",color:"primary",fullWidth:!0,size:"large",onClick:L,disabled:Boolean(!(k.email&&k.password&&k.name&&k.phone)||P)},P?l.createElement(f.Z,{size:25}):"Register")),l.createElement(m.Z,{variant:"body2",color:"text.secondary",sx:{position:"absolute",bottom:20},component:y.Link,to:"/login"},"Already have an account?")),l.createElement(c.Z,{display:{xs:"none",lg:"block"},width:1,sx:{background:A},p:20}))}}}]);
//# sourceMappingURL=component---src-pages-register-js-d35029ed401f74178de7.js.map
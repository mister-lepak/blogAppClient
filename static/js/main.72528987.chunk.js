(this.webpackJsonpblogappclient=this.webpackJsonpblogappclient||[]).push([[0],{62:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),s=n.n(a),r=n(30),o=n.n(r),i=n(2),u=n(3),j=n.n(u),d=n(6),l=n(4),b=n(64),O=function(){var e=sessionStorage.getItem("user");return e?JSON.parse(e):null},m=function(){return sessionStorage.getItem("token")||null},h=function(){sessionStorage.removeItem("token"),sessionStorage.removeItem("user")},p=function(e,t){sessionStorage.setItem("token",e),sessionStorage.setItem("user",JSON.stringify(t))},x=function(e){var t=Object(a.useState)(e),n=Object(l.a)(t,2),c=n[0],s=n[1];return{value:c,onChange:function(e){s(e.target.value)}}},f=n(8),v=function(e){var t=O();return e.adminMode?Object(c.jsxs)("div",{className:"ui dividing clearing segment",children:[Object(c.jsx)("h1",{className:"ui left floated header",onClick:function(){e.history.push({pathname:"/dashboard",state:{adminMode:e.adminMode}})},children:"Blog App"}),Object(c.jsxs)("div",{className:"ui right floated header",children:[Object(c.jsx)("button",{className:"ui button",onClick:function(){e.history.push({pathname:"/post/create",state:{adminMode:e.adminMode}})},children:Object(c.jsx)("h3",{children:"Create New Post"})}),Object(c.jsx)("button",{className:"ui button",onClick:function(){h(),e.history.push("/log-in")},children:Object(c.jsx)("h3",{children:"Sign Out"})})]}),Object(c.jsxs)("div",{className:"ui right floated header",children:["Welcome, ",t.username,"!"]})]}):Object(c.jsxs)("div",{className:"ui dividing clearing segment",children:[Object(c.jsx)(f.b,{to:{pathname:"/"},children:Object(c.jsx)("button",{className:"ui left floated header",children:"Blog App"})}),Object(c.jsx)("div",{className:"ui right floated header",children:Object(c.jsx)(f.b,{to:{pathname:"/log-in"},children:Object(c.jsx)("button",{className:"ui button",children:"Log In"})})})]})},g=n(32),N=n(10),y=n.n(N),w=function(e){var t=e.postId,n=e.loggedInMode,a=x(""),s=x(""),r="/";n&&(Object(g.a)("submissionURL"),r="/dashboard");var o=function(){var n=Object(d.a)(j.a.mark((function n(){return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,y.a.post("/comment/create",{content:s.value,user:a.value,post:t}).then((function(t){e.history.push({submissionURL:r})})).catch((function(e){console.log(e)}));case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("form",{className:"ui form",children:[Object(c.jsxs)("div",{className:"field",children:[Object(c.jsx)("label",{children:"Name"}),Object(c.jsx)("input",Object(i.a)({type:"text",name:"name",placeholder:"Your Name"},a))]}),Object(c.jsxs)("div",{className:"field",children:[Object(c.jsx)("label",{children:"Comment"}),Object(c.jsx)("input",Object(i.a)({type:"text",name:"comment",placeholder:"Input Comment Here"},s))]}),Object(c.jsx)("a",{className:"ui button",type:"submit",onClick:o,children:"Submit"})]})})};var k=function(e){var t=e.user,n=Object(a.useState)([]),s=Object(l.a)(n,2),r=s[0],o=s[1],u=Object(a.useState)([]),O=Object(l.a)(u,2),m=O[0],h=O[1],p=!1,x=function(e){return t?(p=!0,Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"right floated column",children:[Object(c.jsx)(f.b,{to:{pathname:"post/"+e.postId+"/delete",props:e},children:Object(c.jsx)("i",{className:"delete icon"})}),Object(c.jsx)(f.b,{to:{pathname:"post/"+e.postId+"/update",props:e},children:Object(c.jsx)("i",{className:"edit icon"})})]})})):null},v=function(){var e=Object(d.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://afternoon-headland-20920.herokuapp.com/",{mode:"cors"});case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,o(n.posts),h(n.comments),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){v()}),[e]);var g=function(e){var t=e.comments,n=e.postId;return t.map((function(e,t){if(e.post._id===n){var a=new Date(e.timeStamp),s=Object(b.a)(a,"yyyy-MMMM-dd kk:mm:ss");return Object(c.jsx)("div",{className:"comment",children:Object(c.jsxs)("div",{className:"content",children:[Object(c.jsxs)("a",{className:"author",children:[" ",e.user," "]}),Object(c.jsx)("div",{className:"metadata",children:Object(c.jsx)("span",{className:"date",children:s})}),Object(c.jsx)("div",{className:"text",children:Object(c.jsx)("p",{children:e.content})})]})})}}))},N=function(e){var t=e.posts,n=e.comments;return t.map((function(t,a){var s=new Date(t.timeStamp),r=Object(b.a)(s,"yyyy-MMMM-dd kk:mm:ss");return Object(c.jsxs)("div",{className:"ui raised very padded text container segment",children:[Object(c.jsxs)("div",{className:"ui grid",children:[Object(c.jsx)("div",{className:"left floated fourteen wide column",children:Object(c.jsx)("h2",{className:"ui header",children:Object(c.jsx)("a",{href:"/post/"+t._id,children:t.title})})}),Object(c.jsx)(x,{postId:t.id})]}),Object(c.jsxs)("p",{children:["by ",t.username," on ",r]}),Object(c.jsx)("p",{children:t.content}),Object(c.jsxs)("div",{className:"ui comments ",children:[Object(c.jsx)("h3",{className:"ui dividing header ",children:"Comments"}),Object(c.jsx)(g,{comments:n,postId:t._id}),Object(c.jsx)(w,Object(i.a)({postId:t._id,loggedInMode:p},e))]})]})}))};return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(N,Object(i.a)({posts:r,comments:m},e))})},S=function(e){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(v,{}),Object(c.jsx)(k,Object(i.a)({},e))]})},M=n(5),C=function(e){var t=O(),n=Object(M.g)().id,s=Object(a.useState)([]),r=Object(l.a)(s,2),o=r[0],u=r[1],b=!1;b=!!t;var m=function(){var e=Object(d.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/post/"+n,{mode:"cors"});case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,u(c),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){m()}),[]);var h=function(){return Object(c.jsxs)("div",{className:"ui raised very padded text container segment",children:[Object(c.jsx)("h1",{className:"ui header",children:o[0]&&o[0].title}),Object(c.jsx)("p",{children:o[0]&&o[0].content})]})};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(v,Object(i.a)({adminMode:b},e)),Object(c.jsx)(h,{})]})},I=function(e){var t=O(),n=Object(M.g)().id,s=Object(a.useState)(e.title),r=Object(l.a)(s,2),o=r[0],i=r[1],u=Object(a.useState)(e.content),b=Object(l.a)(u,2),m=b[0],h=b[1],p=Object(a.useState)(null),x=Object(l.a)(p,2),f=(x[0],x[1],Object(a.useState)(!1)),v=Object(l.a)(f,2);v[0],v[1];Object(a.useEffect)((function(){i(e.title),h(e.content)}),[e.title,e.content]);var g=function(){var c=Object(d.a)(j.a.mark((function c(){var a;return j.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return a="",a=e.updateMode?"/post/".concat(n,"/update"):"/post/create",c.next=4,y.a.post(a,{title:o,content:m,user:t.username}).then((function(t){e.history.push("/dashboard")})).catch((function(e){console.log(e)}));case 4:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}();return Object(c.jsxs)("form",{className:"ui raised very padded text container segmented form",children:[Object(c.jsxs)("div",{className:"field",children:[Object(c.jsx)("label",{children:"Post Title"}),Object(c.jsx)("input",{type:"text",name:"title",value:o,onChange:function(e){i(e.target.value)}})]}),Object(c.jsxs)("div",{className:"field",children:[Object(c.jsx)("label",{children:"Post Contents"}),Object(c.jsx)("textarea",{type:"text",name:"content",value:m,onChange:function(e){h(e.target.value)}})]}),Object(c.jsx)("a",{className:"ui button",type:"submit",onClick:g,children:"Submit"})]})},F=function(e){var t=O(),n=!1;return n=!!t,Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(v,Object(i.a)(Object(i.a)({adminMode:n},e),{},{username:t.username})),Object(c.jsx)(I,Object(i.a)({username:t.username},e))]})},E=function(e){var t=Object(M.g)().id,n=Object(a.useState)([]),s=Object(l.a)(n,2),r=s[0],o=s[1],i=function(){var e=Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("/post/".concat(t,"/delete")).then((function(e){o(e.data)})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){i()}),[]);var u=function(){var n=Object(d.a)(j.a.mark((function n(){return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,y.a.post("/post/".concat(t,"/delete")).then((function(e){console.log("success")})).catch((function(e){console.log("fall to error"),console.log(e)}));case 2:e.history.push({pathname:"/dashboard"});case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("h3",{children:["Are you sure that you want to delete this post named ",r.title,"?"]}),Object(c.jsx)("a",{children:Object(c.jsx)("button",{className:"ui positive button",onClick:u,children:"Yes"})}),Object(c.jsx)("a",{href:"/dashboard",children:Object(c.jsx)("button",{className:"ui negative button",children:"No"})})]})},A=function(e){var t=O(),n=Object(M.g)().id,s=Object(a.useState)([]),r=Object(l.a)(s,2),o=r[0],u=r[1],b=!1;b=!!t;var m=function(){var e=Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("/post/".concat(n,"/update")).then((function(e){u(e.data)})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){m()}),[]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(v,Object(i.a)({adminMode:b},e)),Object(c.jsx)(I,Object(i.a)({title:o.title,content:o.content,updateMode:"true"},e))]})},L=function(e){var t=Object(a.useState)(e),n=Object(l.a)(t,2),c=n[0],s=n[1];return{value:c,onChange:function(e){s(e.target.value)}}},P=function(e){var t=L(""),n=L(""),s=Object(a.useState)(null),r=Object(l.a)(s,2),o=r[0],u=r[1],b=Object(a.useState)(!1),O=Object(l.a)(b,2),m=O[0],h=O[1],x=(Object(a.useRef)(),Object(a.useRef)(),function(){var c=Object(d.a)(j.a.mark((function c(){return j.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return u(null),h(!0),c.next=4,y.a.post("/log-in",{username:t.value,password:n.value}).then((function(t){h(!1),p(t.data.token,t.data.user),e.history.push("/dashboard")})).catch((function(e){h(!1),401===e.response.status?u(e.response.data.message):u("Something went wrong. Please try again later")}));case 4:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}());return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(v,{}),Object(c.jsxs)("form",{className:"ui raised very padded text container segmented form",onSubmit:function(e){!function(e){e.preventDefault()}(e)},children:[Object(c.jsxs)("div",{className:"field",children:[Object(c.jsx)("label",{children:"Username"}),Object(c.jsx)("input",Object(i.a)(Object(i.a)({type:"text",name:"username"},t),{},{autoComplete:"new-password"}))]}),Object(c.jsxs)("div",{className:"field",children:[Object(c.jsx)("label",{children:"Password"}),Object(c.jsx)("input",Object(i.a)(Object(i.a)({type:"password",name:"password"},n),{},{autoComplete:"new-password"}))]}),o&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("small",{style:{color:"red"},children:o}),Object(c.jsx)("br",{})]}),Object(c.jsx)("br",{}),Object(c.jsx)("button",{className:"ui button",type:"submit",value:m?"Loading...":"Login",onClick:x,disabled:m,children:"Submit"})]})]})},J=function(e){var t=O();return Object(c.jsxs)("div",{children:[Object(c.jsx)(v,Object(i.a)(Object(i.a)({adminMode:!0},e),{},{username:t.username})),Object(c.jsx)(k,Object(i.a)({user:t.username},e))]})},R=n(16),_=function(e){var t=e.component,n=Object(R.a)(e,["component"]);return Object(c.jsx)(M.b,Object(i.a)(Object(i.a)({},n),{},{render:function(e){return m()?Object(c.jsx)(t,Object(i.a)({},e)):Object(c.jsx)(M.a,{to:{pathname:"/log-in",state:{from:e.location}}})}}))},B=function(e){var t=e.component,n=Object(R.a)(e,["component"]);return Object(c.jsx)(M.b,Object(i.a)(Object(i.a)({},n),{},{render:function(e){return m()?Object(c.jsx)(M.a,{to:{pathname:"/dashboard"}}):Object(c.jsx)(t,Object(i.a)({},e))}}))},D=function(){var e=Object(a.useState)(!0),t=Object(l.a)(e,2),n=t[0],s=t[1],r=function(){var e=Object(d.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("/verifyToken?token=".concat(t)).then((function(e){p(e.data.token,e.data.user),s(!1)})).catch((function(e){h(),s(!1)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){var e=m();e&&r(e)}),[]),n&&m()?Object(c.jsx)("div",{children:"Checking Authentication..."}):Object(c.jsx)(f.a,{basename:"/blogAppClient",children:Object(c.jsxs)(M.d,{children:[Object(c.jsx)(M.b,{exact:!0,path:"/",component:S}),Object(c.jsx)(_,{exact:!0,path:"/post/create",component:F}),Object(c.jsx)(M.b,{exact:!0,path:"/post/:id",component:C}),Object(c.jsx)(_,{exact:!0,path:"/post/:id/delete",component:E}),Object(c.jsx)(_,{exact:!0,path:"/post/:id/update",component:A}),Object(c.jsx)(B,{exact:!0,path:"/log-in",component:P}),Object(c.jsx)(_,{exact:!0,path:"/dashboard",component:J})]})})};o.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(D,{})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.72528987.chunk.js.map
/*! For license information please see main.c2d48948.chunk.js.LICENSE.txt */
(this["webpackJsonplunch-wpa"]=this["webpackJsonplunch-wpa"]||[]).push([[0],{11:function(e){e.exports=JSON.parse('{"baseURL":"https://lunchapi.hsuan.app/api/","project":"http://local.sivir.pw:3000","gmailSuffix":"gm.tnfsh.tn.edu.tw","docRoot":"https://tnfsa.github.io/document/","googleCloudPlatformId":"1081268402297-stef8id8lhkhjd7lvh1de82eubmcn3re","version":"0.2.1 \u6e2c\u8a66\u7248"}')},64:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(26),o=n.n(a),s=(n(64),n(65),n(18)),i=n(12),l=n(7),j=n(8),d=n(10),u=n(9),h=n(54),b=n(11),p=n(1),O=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){var e={url:b.docRoot+"status.json"};return Object(p.jsx)(h.Offline,{polling:e,children:Object(p.jsx)("p",{style:{textAlign:"center"},className:"p-3 mb-2 bg-danger text-white",children:"\u96e2\u7dda\u4e2d\uff0c\u8acb\u6aa2\u5bdf\u60a8\u7684\u9023\u7dda\u72c0\u6cc1"})})}}]),n}(r.a.Component),m=n(83),f=n(84),x=n(81),g=n(14),v=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var c;Object(l.a)(this,n),c=t.call(this,e);var r=(new g.a).getAll(),a=[];return r.isGoogle?a.push(!0):a.push(!1),r.isSells?a.push(!0):a.push(!1),r.session?a.push(!0):a.push(!1),c.state={isGoogle:a[0],isSells:a[1],isLoggedIn:a[2],username:r.name||"Anonymous"},c}return Object(j.a)(n,[{key:"render",value:function(){var e="\u55e8! "+this.state.username;return Object(p.jsx)(r.a.Fragment,{children:Object(p.jsxs)(m.a,{bg:"light",expand:"lg",children:[Object(p.jsx)(m.a.Brand,{href:"/",children:"\u7f8e\u5ee3\u8a02\u9910\u7cfb\u7d71"}),Object(p.jsx)(m.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(p.jsxs)(m.a.Collapse,{id:"basic-navbar-nav",children:[Object(p.jsxs)(f.a,{className:"mr-auto",children:[Object(p.jsx)(f.a.Link,{href:"#/restaurant",children:"\u9910\u5ef3"}),this.state.isSells&&Object(p.jsxs)(x.a,{title:"\u5e97\u5bb6\u7ba1\u7406",id:"basic-nav-dropdown",children:[Object(p.jsx)(x.a.Item,{href:"#/config/store",children:"\u5546\u5bb6\u8a2d\u5b9a"}),Object(p.jsx)(x.a.Item,{href:"#/config/menu",children:"\u83dc\u55ae\u8a2d\u5b9a"})]}),Object(p.jsxs)(x.a,{title:"\u76f8\u95dc\u9023\u7d50",id:"basic-nav-dropdown",children:[Object(p.jsx)(x.a.Item,{href:"https://sites.google.com/view/tnfshsu/",rel:"noreferrer noopener",target:"_blank",children:"\u5b78\u806f\u6703"}),Object(p.jsx)(x.a.Item,{href:"https://tnfsacec.github.io",rel:"noreferrer noopener",target:"_blank",children:"\u9078\u59d4\u6703"})]})]}),this.state.isLoggedIn?Object(p.jsxs)(x.a,{title:e,id:"basic-nav-dropdown",children:[Object(p.jsx)(x.a.Item,{href:"#/history",children:"\u6b77\u53f2\u7d00\u9304"}),Object(p.jsx)(x.a.Item,{href:"#/settings",children:"\u8a2d\u5b9a"}),Object(p.jsx)(x.a.Item,{onClick:function(){var e=new g.a;e.remove("id"),e.remove("isGoogle"),e.remove("isSells"),e.remove("session"),e.remove("nameame"),e.set("alert","\u767b\u51fa\u6210\u529f",{path:"/"}),window.location.replace("/")},children:"\u767b\u51fa"})]}):Object(p.jsxs)(f.a,{children:[Object(p.jsx)(f.a.Link,{href:"#/signup",children:"\u8a3b\u518a"}),Object(p.jsx)(f.a.Link,{href:"#/login",children:"\u767b\u5165"})]})]})]})})}}]),n}(r.a.Component),w=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var c;Object(l.a)(this,n),c=t.call(this,e);var r=[],a=(new g.a).getAll();return a.alert?r.push(!0):r.push(!1),c.state={alert:r[0],alertSentence:a.alert},c}return Object(j.a)(n,[{key:"componentDidMount",value:function(){(new g.a).remove("alert")}},{key:"render",value:function(){return Object(p.jsxs)(r.a.Fragment,{children:[Object(p.jsx)("p",{className:"p-3 mb-2 bg-success text-white",children:"version: "+b.version}),this.state.alert&&Object(p.jsx)("p",{className:"p-3 mb-2 bg-success text-white",children:this.state.alertSentence})]})}}]),n}(r.a.Component),y=n(79),k=n(80),C=n(57),N=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(p.jsxs)(r.a.Fragment,{children:[Object(p.jsx)("br",{}),Object(p.jsx)("div",{className:"p-3 mb-2 bg-dark text-white",children:Object(p.jsxs)(y.a,{children:[Object(p.jsx)("br",{}),Object(p.jsxs)(k.a,{children:[Object(p.jsxs)(C.a,{children:[Object(p.jsx)(s.b,{to:"/privacy",children:"\u96b1\u79c1\u6b0a\u8072\u660e"}),Object(p.jsx)("br",{}),Object(p.jsx)(s.b,{to:"/COC",children:"\u4f7f\u7528\u8005\u4f7f\u7528\u689d\u6b3e"}),Object(p.jsx)("br",{}),Object(p.jsx)(s.b,{to:"/feedback",children:"\u610f\u898b\u53cd\u994b"})]}),Object(p.jsxs)(C.a,{children:["\u95dc\u65bc\u6211\u5011\uff1a",Object(p.jsx)("br",{}),Object(p.jsx)("a",{href:"https://sivir.pw",rel:"noreferrer noopener",target:"_blank",children:"Alias722"}),"\u3001",Object(p.jsx)("a",{href:"https://hsuan.app/",rel:"noreferrer noopener",target:"_blank",children:"Hsuan1117"}),"\u3001",Object(p.jsx)("a",{href:"https://neodoggy.github.io/",rel:"noreferrer noopener",target:"_blank",children:"Neodoggy"})]})]})]})})]})}}]),n}(r.a.Component),I=n(30),S=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(p.jsxs)(I.a,{children:[Object(p.jsxs)(I.a.Item,{children:[Object(p.jsx)("img",{className:"d-block w-100",src:"https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg",alt:"First slide"}),Object(p.jsxs)(I.a.Caption,{children:[Object(p.jsx)("h3",{children:"First slide label"}),Object(p.jsx)("p",{children:"\u5c0d\u4e0d\u8d77\u6211\u76dc\u5716"})]})]}),Object(p.jsxs)(I.a.Item,{children:[Object(p.jsx)("img",{className:"d-block w-100",src:"https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg",alt:"Second slide"}),Object(p.jsxs)(I.a.Caption,{children:[Object(p.jsx)("h3",{children:"Second slide label"}),Object(p.jsx)("p",{children:"\u5c0d\u4e0d\u8d77\u6211\u76dc\u5716"})]})]}),Object(p.jsxs)(I.a.Item,{children:[Object(p.jsx)("img",{className:"d-block w-100",src:"https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg",alt:"Third slide"}),Object(p.jsxs)(I.a.Caption,{children:[Object(p.jsx)("h3",{children:"Third slide label"}),Object(p.jsx)("p",{children:"\u5c0d\u4e0d\u8d77\u6211\u76dc\u5716"})]})]})]})}}]),n}(r.a.Component),T=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"componentDidMount",value:function(){window.scrollTo({top:0,behavior:"smooth"})}},{key:"render",value:function(){return Object(p.jsx)(r.a.Fragment,{children:Object(p.jsx)(y.a,{children:Object(p.jsx)(S,{})})})}}]),n}(r.a.Component),E=n(59),A=n.n(E),F=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){var e=b.googleCloudPlatformId+".apps.googleusercontent.com",t=function(e){console.log(JSON.stringify(e));var t={token:e.accessToken},n=b.baseURL+"google";fetch(n,{method:"POST",body:JSON.stringify(t),headers:new Headers({"Content-Type":"application/json",Accept:"application/json"})}).then((function(e){return e.ok?e.json():e.text().then((function(e){throw new Error(e)}))})).catch((function(e){console.log(e.message);var t=JSON.parse(e.message);window.alert("".concat(t.message,"\n\u8207\u4f3a\u670d\u5668\u9023\u7dda\u932f\u8aa4\uff0c\u8acb\u518d\u8a66\u4e00\u6b21\n\u5982\u679c\u554f\u984c\u7121\u6cd5\u89e3\u6c7a\uff0c\u8acb\u806f\u7d61\u7ba1\u7406\u54e1"))})).then((function(t){var n;if(void 0!==e.profileObj.givenName){var c=new g.a;c.set("session",t.access_token,{path:"/"}),c.set("isGoogle","true",{path:"/"}),c.set("alert","\u767b\u5165\u6210\u529f",{path:"/"}),c.set("userName",null===e||void 0===e||null===(n=e.profileObj)||void 0===n?void 0:n.givenName,{path:"/"}),window.location.replace("/")}})).catch((function(e){console.log("Failed: ".concat(e))}))};return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(A.a,{clientId:e,buttonText:"\u4f7f\u7528 Google \u767b\u5165",onSuccess:t,onFailure:t,hostedDomain:b.gmailSuffix,cookiePolicy:"single_host_origin"})})}}]),n}(r.a.Component),B=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"componentDidMount",value:function(){window.scrollTo({top:0,behavior:"smooth"})}},{key:"render",value:function(){return Object(p.jsx)(r.a.Fragment,{children:Object(p.jsx)(y.a,{children:Object(p.jsxs)("form",{className:"signInBlock",children:[Object(p.jsx)("h3",{style:{textAlign:"center"},children:"\u767b\u5165"}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{children:"\u96fb\u5b50\u90f5\u4ef6"}),Object(p.jsx)("input",{id:"userInputEmail",type:"email",className:"form-control",placeholder:"Enter email"})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{children:"\u5bc6\u78bc"}),Object(p.jsx)("input",{id:"userInputPasswd",type:"password",className:"form-control",placeholder:"Enter password"})]}),Object(p.jsxs)(k.a,{children:[Object(p.jsx)(C.a,{}),Object(p.jsx)(C.a,{}),Object(p.jsx)(C.a,{children:Object(p.jsx)(s.b,{type:"submit",className:"btn btn-primary btn-block",onClick:function(){var e=document.getElementById("userInputEmail"),t=document.getElementById("userInputPasswd");if(-1!==e.value.search(/^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/)){var n={email:e.value,password:t.value},c=b.baseURL+"login";fetch(c,{method:"POST",body:JSON.stringify(n),headers:new Headers({"Content-Type":"application/json",Accept:"application/json"})}).then((function(e){return e.ok?e.json():e.text().then((function(e){throw new Error(e)}))})).catch((function(e){console.log(e.message);var t=JSON.parse(e.message);window.alert("".concat(t.message,"\n\u8207\u4f3a\u670d\u5668\u9023\u7dda\u932f\u8aa4\uff0c\u8acb\u518d\u8a66\u4e00\u6b21\n\u5982\u679c\u554f\u984c\u7121\u6cd5\u89e3\u6c7a\uff0c\u8acb\u806f\u7d61\u7ba1\u7406\u54e1"))})).then((function(e){var t=new g.a;return t.set("session",e.access_token,{path:"/"}),t.set("alert","\u767b\u5165\u6210\u529f",{path:"/"}),e})).catch((function(e){console.log("Failed: ".concat(e))})).then((function(e){var t=b.baseURL+"me";fetch(t,{method:"GET",headers:{Accept:"application/json",Authorization:"Bearer ".concat(e.access_token)}}).then((function(e){return e.ok?e.json():e.text().then((function(e){throw new Error(e)}))})).catch((function(e){console.log(e.message);var t=JSON.parse(e.message);window.alert("".concat(t.message,"\n\u8207\u4f3a\u670d\u5668\u9023\u7dda\u932f\u8aa4\uff0c\u8acb\u518d\u8a66\u4e00\u6b21\n\u5982\u679c\u554f\u984c\u7121\u6cd5\u89e3\u6c7a\uff0c\u8acb\u806f\u7d61\u7ba1\u7406\u54e1"))})).then((function(e){var t=new g.a;t.set("name",e.name,{path:"/"}),t.set("id",e.id,{path:"/"}),t.set("isSells",!0,{path:"/"}),document.location.replace("/")}))}))}},children:"Submit"})})]}),Object(p.jsx)("hr",{}),Object(p.jsx)("label",{children:"\u5176\u4ed6\u767b\u5165\u65b9\u5f0f\uff1f"}),Object(p.jsx)("div",{className:"otherLoginMethod",children:Object(p.jsx)(F,{})})]})})})}}]),n}(r.a.Component),L=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"componentDidMount",value:function(){window.scrollTo({top:0,behavior:"smooth"})}},{key:"render",value:function(){return Object(p.jsx)(r.a.Fragment,{children:Object(p.jsx)("h1",{style:{textAlign:"center"},children:"\u8a02\u9910"})})}}]),n}(r.a.Component),P=n(45),M=n(85),R=n(56);var U=function(){var e=Object(c.useState)([]),t=Object(P.a)(e,2),n=t[0],a=t[1],o=window.location.href.split("/");return Object(c.useEffect)((function(){!function(){var e=b.baseURL+"stores/"+o[5]+"/products";fetch(e,{method:"GET"}).then((function(e){return e.ok?e.json():e.text().then((function(e){throw new Error(e)}))})).catch((function(e){console.log(e.message);var t=JSON.parse(e.message);window.alert("".concat(t.message,"\n\u8207\u4f3a\u670d\u5668\u9023\u7dda\u932f\u8aa4\uff0c\u8acb\u518d\u8a66\u4e00\u6b21\n\u5982\u679c\u554f\u984c\u7121\u6cd5\u89e3\u6c7a\uff0c\u8acb\u806f\u7d61\u7ba1\u7406\u54e1")),window.location.replace("#/login")})).then((function(e){console.log(e),a(e)}))}()}),[]),Object(p.jsx)("div",{className:"ListStore",children:n&&(n.length>0?n.map((function(e){return Object(p.jsxs)(M.a,{children:[Object(p.jsx)(M.a.Img,{variant:"top",src:e.picUrl}),Object(p.jsxs)(M.a.Body,{style:{display:"flex"},children:[Object(p.jsxs)("div",{children:[Object(p.jsx)(M.a.Title,{children:e.name}),Object(p.jsx)(M.a.Text,{children:e.description})]}),Object(p.jsx)("div",{style:{marginLeft:"auto"},children:Object(p.jsx)(R.a,{variant:"primary",href:b.project+"#/order/"+e.id,children:"\u7acb\u5373\u524d\u5f80"})})]})]})})):Object(p.jsxs)(r.a.Fragment,{children:[Object(p.jsx)("br",{}),Object(p.jsx)("h2",{style:{textAlign:"center"},children:"\u67e5\u7121\u8cc7\u6599"})]}))})},D=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"componentDidMount",value:function(){window.scrollTo({top:0,behavior:"smooth"})}},{key:"render",value:function(){return Object(p.jsxs)(r.a.Fragment,{children:[Object(p.jsx)("h1",{style:{textAlign:"center"},children:"\u5403\u4ec0\u9ebc"}),Object(p.jsx)(U,{})]})}}]),n}(r.a.Component);var J=[{name:"\u555f\u52d5\u5546\u5e97",url:"/settings/activate"},{name:"\u8b8a\u66f4\u5546\u5e97\u540d",url:"/settings/change_name"},{name:"\u8b8a\u66f4\u5bc6\u78bc",url:"/settings/change_password"}],_={change_name:{title:"\u8b8a\u66f4\u5546\u5e97\u540d",hint:"\u8acb\u8f38\u5165\u5546\u5e97\u540d",placeholder:"\u65b0\u5546\u5e97\u540d",submitUri:b.baseURL+"stores",method:"PUT"},change_password:{title:"\u8b8a\u66f4\u5bc6\u78bc",hint:"\u8acb\u8f38\u5165\u65b0\u5bc6\u78bc",placeholder:"\u65b0\u5bc6\u78bc",submitUri:b.baseURL+"change_password",method:"POST",return:["password"]},activate:{title:"\u555f\u52d5\u5546\u5e97",hint:"\u8acb\u8f38\u5165\u5546\u5e97\u540d",placeholder:"\u5546\u5e97\u540d",submitUri:b.baseURL+"stores",method:"POST",return:["name"]}};var G=function(){return J.map((function(e){return Object(p.jsx)(M.a,{children:Object(p.jsx)(M.a.Body,{style:{display:"flex"},children:Object(p.jsx)("div",{children:Object(p.jsx)(s.b,{to:e.url,children:e.name})})})})}))},H=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){var e=document.location.href.split("/")[5];return Object(p.jsxs)(r.a.Fragment,{children:[_[e]&&Object(p.jsxs)(r.a.Fragment,{children:[Object(p.jsx)("h2",{children:_[e].title}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{children:_[e].hint}),Object(p.jsx)("input",{id:"userInput",type:"text",className:"form-control",placeholder:_[e].placeholder})]}),Object(p.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",onClick:function(){var t=(new g.a).getAll();t.session||(window.alert("Session expired"),document.location.replace("/"));var n={method:_[e].method,headers:{Accept:"application/json",Authorization:"Bearer ".concat(t.session)}};if("POST"===_[e].method){for(var c={},r=0;r<_[e].return.length;++r){var a=document.getElementById("userInput");c[_[e].return[r]]=a.value}n.body=JSON.stringify(c)}fetch(_[e].submitUri,n).then((function(e){return e.ok?e.json():e.text().then((function(e){throw new Error(e)}))})).catch((function(e){console.log(e.message);var t=JSON.parse(e.message);window.alert("".concat(t.message,"\n\u8207\u4f3a\u670d\u5668\u9023\u7dda\u932f\u8aa4\uff0c\u8acb\u518d\u8a66\u4e00\u6b21\n\u5982\u679c\u554f\u984c\u7121\u6cd5\u89e3\u6c7a\uff0c\u8acb\u806f\u7d61\u7ba1\u7406\u54e1"))})).then((function(t){console.log(t),document.location.replace("#/settings/".concat(e))}))},children:"\u78ba\u8a8d"})]}),!_[e]&&e&&Object(p.jsx)("h2",{children:"\u8acb\u8f38\u5165\u5408\u6cd5\u529f\u80fd"}),!_[e]&&!e&&Object(p.jsx)("h2",{children:"\u8acb\u9078\u53d6\u5de6\u908a\u529f\u80fd\u4ee5\u7e7c\u7e8c"})]})}}]),n}(r.a.Component),q=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"componentDidMount",value:function(){window.scrollTo({top:0,behavior:"smooth"})}},{key:"render",value:function(){return Object(p.jsxs)(r.a.Fragment,{children:[Object(p.jsx)("h1",{style:{textAlign:"center"},children:"\u8a2d\u5b9a"}),Object(p.jsx)(y.a,{children:Object(p.jsxs)(k.a,{children:[Object(p.jsx)(C.a,{xs:3,children:Object(p.jsx)(G,{})}),Object(p.jsx)(C.a,{xs:7,children:Object(p.jsx)(H,{})})]})})]})}}]),n}(r.a.Component);var W=function(){var e=Object(c.useState)([]),t=Object(P.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){!function(){var e=b.baseURL+"stores";console.log(e),fetch(e,{method:"GET"}).then((function(e){return e.ok?e.json():e.text().then((function(e){throw new Error(e)}))})).catch((function(e){console.log(e.message);var t=JSON.parse(e.message);window.alert("".concat(t.message,"\n\u8207\u4f3a\u670d\u5668\u9023\u7dda\u932f\u8aa4\uff0c\u8acb\u518d\u8a66\u4e00\u6b21\n\u5982\u679c\u554f\u984c\u7121\u6cd5\u89e3\u6c7a\uff0c\u8acb\u806f\u7d61\u7ba1\u7406\u54e1")),window.location.replace("#/login")})).then((function(e){console.log(e),r(e)}))}()}),[]),Object(p.jsx)("div",{className:"ListStore",children:n&&n.length>0&&n.map((function(e){return Object(p.jsxs)(M.a,{children:[Object(p.jsx)(M.a.Img,{variant:"top",src:e.picUrl}),Object(p.jsxs)(M.a.Body,{style:{display:"flex"},children:[Object(p.jsxs)("div",{children:[Object(p.jsx)(M.a.Title,{children:e.name}),Object(p.jsx)(M.a.Text,{children:e.description})]}),Object(p.jsx)("div",{style:{marginLeft:"auto"},children:Object(p.jsx)(R.a,{variant:"primary",href:b.project+"#/order/"+e.id,children:"\u7acb\u5373\u524d\u5f80"})})]})]})}))})},z=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"componentDidMount",value:function(){window.scrollTo({top:0,behavior:"smooth"})}},{key:"render",value:function(){return Object(p.jsxs)(r.a.Fragment,{children:[Object(p.jsx)("h1",{style:{textAlign:"center"},children:"\u9910\u5ef3"}),Object(p.jsx)(y.a,{children:Object(p.jsx)(W,{})})]})}}]),n}(r.a.Component),Z=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"componentDidMount",value:function(){window.scrollTo({top:0,behavior:"smooth"})}},{key:"render",value:function(){return Object(p.jsx)(r.a.Fragment,{children:Object(p.jsx)("h1",{style:{textAlign:"center"},children:"\u6b77\u53f2\u7d00\u9304"})})}}]),n}(r.a.Component),$=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"componentDidMount",value:function(){window.scrollTo({top:0,behavior:"smooth"})}},{key:"render",value:function(){return Object(p.jsx)(r.a.Fragment,{children:Object(p.jsx)("h1",{style:{textAlign:"center"},children:"\u5546\u5bb6\u8a2d\u5b9a"})})}}]),n}(r.a.Component),V=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{className:"optionBar",children:Object(p.jsx)("ul",{children:Object(p.jsx)("li",{children:Object(p.jsx)(s.b,{to:"/config/menu/new",children:"\u65b0\u589e"})})})})}}]),n}(r.a.Component),Q=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"componentDidMount",value:function(){window.scrollTo({top:0,behavior:"smooth"})}},{key:"render",value:function(){return Object(p.jsxs)(r.a.Fragment,{children:[Object(p.jsx)("h1",{style:{textAlign:"center"},children:"\u83dc\u55ae\u8a2d\u5b9a"}),Object(p.jsx)(y.a,{children:Object(p.jsx)(V,{})})]})}}]),n}(r.a.Component),K=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"componentDidMount",value:function(){window.scrollTo({top:0,behavior:"smooth"})}},{key:"render",value:function(){return Object(p.jsx)(r.a.Fragment,{children:Object(p.jsx)("h1",{style:{textAlign:"center"},children:"\u9032\u968e\u8a2d\u5b9a"})})}}]),n}(r.a.Component),X=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"componentDidMount",value:function(){window.scrollTo({top:0,behavior:"smooth"});var e=new RegExp("\n","g"),t=b.docRoot+"title.json";fetch(t).then((function(e){return e.json()})).then((function(e){document.getElementById("title").innerHTML=e.title}));var n=b.docRoot+"coc.json";fetch(n).then((function(e){return e.json()})).then((function(t){for(var n=0;n<t.title.length;++n){var c=document.createElement("H2");c.textContent=t.title[n],document.getElementById("COC").appendChild(c),document.getElementById("COC").innerHTML+="<p>"+t.context[n].replace(e,"<br>")+"</p>"}var r=document.createElement("H3");r.innerText="\u6700\u5f8c\u66f4\u65b0\u65e5\u671f\uff1a"+t.date,document.getElementById("COC").appendChild(r)}))}},{key:"render",value:function(){return Object(p.jsxs)(r.a.Fragment,{children:[Object(p.jsx)("h1",{style:{textAlign:"center"},children:"\u4f7f\u7528\u8005\u4f7f\u7528\u689d\u6b3e"}),Object(p.jsxs)(y.a,{children:[Object(p.jsx)("br",{}),Object(p.jsx)("p",{id:"title"}),Object(p.jsx)("div",{id:"COC"})]})]})}}]),n}(r.a.Component),Y=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"componentDidMount",value:function(){window.scrollTo({top:0,behavior:"smooth"});var e=new RegExp("\n","g"),t=b.docRoot+"title.json";fetch(t).then((function(e){return e.json()})).then((function(e){document.getElementById("title").innerHTML=e.title}));var n=b.docRoot+"privacy.json";fetch(n).then((function(e){return e.json()})).then((function(t){for(var n=0;n<t.title.length;++n){var c=document.createElement("H2");c.textContent=t.title[n],document.getElementById("policy").appendChild(c),document.getElementById("policy").innerHTML+="<p>"+t.context[n].replace(e,"<br>")+"</p>"}var r=document.createElement("H3");r.innerText="\u6700\u5f8c\u66f4\u65b0\u65e5\u671f\uff1a"+t.date,document.getElementById("policy").appendChild(r)}))}},{key:"render",value:function(){return Object(p.jsxs)(r.a.Fragment,{children:[Object(p.jsx)("h1",{style:{textAlign:"center"},children:"\u96b1\u79c1\u6b0a\u8072\u660e"}),Object(p.jsxs)(y.a,{children:[Object(p.jsx)("br",{}),Object(p.jsx)("p",{id:"title"}),Object(p.jsx)("div",{id:"policy"})]})]})}}]),n}(r.a.Component),ee=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var c;return Object(l.a)(this,n),(c=t.call(this,e)).state={loading:!1},c}return Object(j.a)(n,[{key:"render",value:function(){var e=this;return Object(p.jsx)(r.a.Fragment,{children:Object(p.jsx)(y.a,{children:Object(p.jsxs)("form",{className:"signInBlock",children:[Object(p.jsx)("h3",{style:{textAlign:"center"},children:"\u5e33\u865f\u8a3b\u518a"}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{children:"\u555f\u52d5\u78bc"}),Object(p.jsx)("input",{id:"activateToken",type:"text",className:"form-control",placeholder:"Enter the activate code",required:!0})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{children:"\u96fb\u5b50\u90f5\u4ef6"}),Object(p.jsx)("input",{id:"userInputEmail",type:"email",className:"form-control",placeholder:"Enter email",required:!0})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{children:"\u5bc6\u78bc"}),Object(p.jsx)("input",{id:"userInputPasswd",type:"password",className:"form-control",placeholder:"Enter password",required:!0})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{children:"\u5bc6\u78bc\u78ba\u8a8d"}),Object(p.jsx)("input",{id:"userInputPasswdVerification",type:"password",className:"form-control",placeholder:"Enter password",required:!0})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{children:"\u4f7f\u7528\u8005\u540d\u7a31"}),Object(p.jsx)("input",{id:"username",type:"text",className:"form-control",placeholder:"Enter the username",required:!0})]}),Object(p.jsxs)(k.a,{children:[Object(p.jsx)(C.a,{}),Object(p.jsx)(C.a,{}),Object(p.jsx)(C.a,{children:this.state.loading?Object(p.jsx)(s.b,{className:"btn btn-primary btn-block",type:"submit",children:"\u8acb\u7a0d\u5f8c"}):Object(p.jsx)(s.b,{className:"btn btn-primary btn-block",type:"submit",onClick:function(){var t=document.getElementById("userInputPasswd"),n=document.getElementById("userInputPasswdVerification"),c=document.getElementById("userInputEmail"),r=document.getElementById("activateToken"),a=document.getElementById("username");if(t.value&&n.value&&c.value&&r.value&&a.value){if(t.value!==n.value)return window.alert("\u5bc6\u78bc\u8207\u5bc6\u78bc\u9a57\u8b49\u4e0d\u7b26"),t.value="",void(n.value="");if(-1!==c.value.search(/^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/)){var o={email:c.value,name:a.value,password:t.value,registration_code:r.value},s=b.baseURL+"register";e.setState({loading:!0}),fetch(s,{method:"POST",body:JSON.stringify(o),headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.ok?e.json():e.text().then((function(e){throw new Error(e)}))})).catch((function(t){console.log(t.message);var n=JSON.parse(t.message);window.alert("".concat(n.message,"\n\u8207\u4f3a\u670d\u5668\u9023\u7dda\u932f\u8aa4\uff0c\u8acb\u518d\u8a66\u4e00\u6b21\n\u5982\u679c\u554f\u984c\u7121\u6cd5\u89e3\u6c7a\uff0c\u8acb\u806f\u7d61\u7ba1\u7406\u54e1")),e.setState({loading:!1})})).then((function(t){(new g.a).set("alert","\u8a3b\u518a\u6210\u529f",{path:"/"}),window.location.replace("/login"),e.setState({loading:!1})})).catch((function(t){console.log("Failed: ".concat(t)),e.setState({loading:!1})})).then(e.setState({loading:!1}))}}},children:"\u9001\u51fa"})})]})]})})})}}]),n}(r.a.Component),te=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(p.jsx)(r.a.Fragment,{children:Object(p.jsx)(ee,{})})}}]),n}(r.a.Component),ne=n(82),ce=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(p.jsxs)(r.a.Fragment,{children:[Object(p.jsx)("h1",{style:{textAlign:"center"},children:"\u610f\u898b\u53cd\u994b"}),Object(p.jsx)(y.a,{children:Object(p.jsxs)(ne.a,{children:[Object(p.jsxs)(ne.a.Group,{children:[Object(p.jsx)(ne.a.Label,{children:"\u66b1\u7a31\uff1a"}),Object(p.jsx)(ne.a.Control,{id:"nickName",type:"text",placeholder:"\u5c0f/\u5927\u660e",required:!0}),Object(p.jsx)(ne.a.Text,{className:"text-muted",children:"\u6211\u5011\u7d55\u5c0d\u4e0d\u6703\u56e0\u70ba\u4f60\u7684\u66b1\u7a31\u5f88\u667a\u969c\u5c31\u4e0d\u7406\u4f60"})]}),Object(p.jsxs)(ne.a.Group,{children:[Object(p.jsx)(ne.a.Label,{children:"\u554f\u984c\uff1a"}),Object(p.jsx)(ne.a.Control,{as:"textarea",rows:"5",id:"question",required:!0})]}),Object(p.jsx)(R.a,{variant:"primary",type:"submit",onClick:function(){var e=document.getElementById("nickName"),t=document.getElementById("question");if(""!==e.value&&""!==t.value){var n=new FormData;n.append("entry.1239005013",e.value),n.append("entry.664971969",t.value);fetch("https://docs.google.com/forms/u/0/d/e/1FAIpQLSdppxPAZlPuLMgelWDJ1wP6fIB4vScvivNrn3BZ9g7etGklCA/formResponse",{method:"POST",mode:"no-cors",body:n}).then((function(e){return e.ok?e.json():e.text().then((function(e){throw new Error(e)}))})).catch((function(e){console.log(e.message);var t=JSON.parse(e.message);window.alert("".concat(t.message,"\n\u8207\u4f3a\u670d\u5668\u9023\u7dda\u932f\u8aa4\uff0c\u8acb\u518d\u8a66\u4e00\u6b21\n\u5982\u679c\u554f\u984c\u7121\u6cd5\u89e3\u6c7a\uff0c\u8acb\u806f\u7d61\u7ba1\u7406\u54e1"))})).then((function(e){window.alert("message sent"),console.log(e)})),window.alert("\u5df2\u7d93\u6536\u5230\u4f60\u7684\u8a0a\u606f\u4e86\n\u6211\u5011\u5c07\u6703\u52aa\u529b\u6539\u9032"),(new g.a).set("alert","\u50b3\u9001\u6210\u529f",{path:"/"}),document.location.replace("#/feedback")}},children:"\u9001\u51fa"})]})})]})}}]),n}(r.a.Component),re=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"componentDidMount",value:function(){window.scrollTo({top:0,behavior:"smooth"})}},{key:"render",value:function(){return Object(p.jsx)(r.a.Fragment,{children:Object(p.jsx)("h1",{style:{textAlign:"center"},children:"\u65b0\u589e\u83dc\u55ae"})})}}]),n}(r.a.Component);var ae=function(){return Object(p.jsxs)(s.a,{children:[Object(p.jsx)(O,{}),Object(p.jsx)(v,{}),Object(p.jsx)(w,{}),Object(p.jsxs)(i.c,{children:[Object(p.jsx)(i.a,{path:"/login",component:B}),Object(p.jsx)(i.a,{path:"/restaurant",component:z}),Object(p.jsx)(i.a,{path:"/settings",component:q}),Object(p.jsx)(i.a,{path:"/purchase",component:L}),Object(p.jsx)(i.a,{path:"/order/:id",component:D}),Object(p.jsx)(i.a,{path:"/history",component:Z}),Object(p.jsx)(i.a,{path:"/config/store",component:$}),Object(p.jsx)(i.a,{path:"/config/menu/new",component:re}),Object(p.jsx)(i.a,{path:"/config/menu",component:Q}),Object(p.jsx)(i.a,{path:"/config/advanced/:id",component:K}),Object(p.jsx)(i.a,{path:"/privacy",component:Y}),Object(p.jsx)(i.a,{path:"/COC",component:X}),Object(p.jsx)(i.a,{path:"/signup",component:te}),Object(p.jsx)(i.a,{path:"/feedback",component:ce}),Object(p.jsx)(i.a,{path:"/",component:T})]}),Object(p.jsx)(N,{})]})},oe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function se(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var ie=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,86)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))};o.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(ae,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");oe?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):se(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):se(t,e)}))}}(),ie()}},[[74,1,2]]]);
//# sourceMappingURL=main.c2d48948.chunk.js.map
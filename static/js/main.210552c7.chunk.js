(this["webpackJsonpsam-15"]=this["webpackJsonpsam-15"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(9),i=n.n(r),o=(n(14),n(8)),s=n(6),u=n(7),l=n(2),d=(n(15),n.p+"static/media/darth-siena.db68d2e1.png"),b=n.p+"static/media/light-siena.3bee5c62.png",j=n.p+"static/media/grainne.ef132bd0.png",h=n.p+"static/media/ruby.ab404e88.png",f=n(0),m=new URLSearchParams(window.location.search),O=500,v=m.get("tickRate")||60,p=m.get("successAt")||60;var g=function(){var e=c.a.useState(60),t=Object(l.a)(e,2),n=t[0],a=t[1],r=c.a.useCallback((function(e){return e>n?e-=2*Math.random():e<n-100?e+=2*Math.random():e=e+2*Math.random()*2-2,e}),[n]),i=c.a.useCallback((function(){for(var e=[],t=0,n=0;n<O;n++)t=r(t),e.push(t);return e}),[r]),m=c.a.useState(2),g=Object(l.a)(m,2),w=g[0],y=g[1],k=c.a.useState(.05),S=Object(l.a)(k,2),C=S[0],N=S[1],M=c.a.useState(15),L=Object(l.a)(M,2),E=L[0],I=L[1],R=c.a.useState(i()),A=Object(l.a)(R,2),B=A[0],F=A[1],Y=c.a.useState(i()),T=Object(l.a)(Y,2),D=T[0],U=T[1],z=c.a.useState(50),J=Object(l.a)(z,2),P=J[0],q=J[1],K=c.a.useState(100),W=Object(l.a)(K,2),G=W[0],H=W[1],Q=x("ArrowUp"),V=x("ArrowDown"),X=x("ArrowLeft"),Z=x("ArrowRight"),$=c.a.useState([]),_=Object(l.a)($,2),ee=_[0],te=_[1],ne=c.a.useRef(1),ae=c.a.useRef(),ce=c.a.useState(!1),re=Object(l.a)(ce,2),ie=re[0],oe=re[1],se=c.a.useMemo((function(){return ie}),[ie]),ue=c.a.useState(""),le=Object(l.a)(ue,2),de=le[0],be=le[1],je=c.a.useState(""),he=Object(l.a)(je,2),fe=he[0],me=he[1],Oe=c.a.useState(!1),ve=Object(l.a)(Oe,2),pe=ve[0],ge=ve[1],xe=c.a.useState(!0),we=Object(l.a)(xe,2),ye=we[0],ke=we[1],Se=c.a.useCallback((function(){var e=de.trim().toLowerCase().replace(/\s+/g,"");return"frog"===e||"frogbog"===e?(ge(!0),void me("Yep.")):"ruby"===e?(ge(!0),void me("Not what we were looking for, but I'll take it.")):"rosa"===e?(ge(!0),void me("Yeah she know it.")):"siena"===e?(me("Use her proper name."),void ge(!1)):"grainne"===e?(me("Oof. You've put me in a tough position. But, like, come on.... Try again"),void ge(!1)):(me("Try again"),void ge(!1))}),[de]),Ce=c.a.useCallback((function(e){for(var t=e[e.length-1],n=Object(u.a)(e.slice(w)),a=0;a<w;a++)n.push(r(t));return n}),[r,w]),Ne=c.a.useCallback((function(){F(Ce),U(Ce)}),[Ce]),Me=c.a.useCallback((function(){Q!==V&&q((function(e){return Q?e-10:e+10})),X!==Z&&H((function(e){return X?e-15:e+10}))}),[V,X,Z,Q]),Le=c.a.useCallback((function(){Math.random()<C&&te((function(e){var t=80*Math.random()+10,n=25*Math.random()+5,a=3*Math.random(),c=a>2?j:a>1?b:d;return[].concat(Object(u.a)(e),[{top:t,size:n,left:100,image:c}])}))}),[C]),Ee=c.a.useCallback((function(){te((function(e){var t,n=[],a=Object(s.a)(e);try{for(a.s();!(t=a.n()).done;){var c=t.value,r=c.left-.2*w;r<0-c.width||n.push(Object(o.a)(Object(o.a)({},c),{},{left:r}))}}catch(i){a.e(i)}finally{a.f()}return n}))}),[w]),Ie=c.a.useCallback((function(){var e=document.querySelectorAll(".piece, .asteroid"),t=document.querySelector(".me").getBoundingClientRect();if(G<0)oe(!0);else{var n,a=Object(s.a)(e);try{for(a.s();!(n=a.n()).done;){var c=n.value.getBoundingClientRect();!(t.right<c.left||t.left>c.right||t.bottom<c.top||t.top>c.bottom)&&oe(!0)}}catch(r){a.e(r)}finally{a.f()}}}),[G]);return c.a.useEffect((function(){if(!ye)return ae.current=setInterval((function(){ie?clearInterval(ae.current):(ne.current=ne.current+1,y(2+Math.ceil(ne.current*v/4e3)),N((function(e){return e+2e-4})),I((function(e){return e+.02})),a((function(e){return e-.1})),Ne(),Me(),Ee(),Le(),Ie())}),v),function(){return clearInterval(ae.current)}}),[Ie,ie,Ne,Le,Ee,Me,ye]),Object(f.jsxs)("div",{className:"app",children:[Object(f.jsxs)("div",{className:"you-died",style:{display:se?"block":"none"},children:["You died!",ne.current/20>p&&Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("span",{children:[" You did OK though. So riddle me this: ",Object(f.jsx)("b",{children:"Who is the prettiest girl you know?"})]}),Object(f.jsx)("br",{}),Object(f.jsxs)("form",{onSubmit:function(e){return e.preventDefault(),!1},children:[Object(f.jsx)("input",{onChange:function(e){return be(e.target.value)},value:de}),Object(f.jsx)("button",{type:"submit",onClick:Se,children:"Submit"})]}),Object(f.jsx)("div",{children:Object(f.jsx)("i",{children:fe})})]}),ne.current/20<=p&&Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("span",{children:" Not great."}),Object(f.jsx)("br",{}),Object(f.jsx)("button",{onClick:function(){return window.location.reload()},children:"Restart"})]})]}),Object(f.jsx)("div",{className:"next-clue",style:{opacity:pe?"1":"0"},children:"Your next clue: blah blah blah TBD"}),Object(f.jsxs)("div",{className:"start-prompt",style:{pointerEvents:ye?"initial":"none",opacity:ye?"1":"0"},children:["Surivie to 60 for a clue.",Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsx)("button",{onClick:function(){return ke(!1)},children:"I'll try but I'm not as good as Jason"}),Object(f.jsx)("br",{}),"(Use arrow keys.)"]}),Object(f.jsx)("div",{className:"clock",children:Math.floor(ne.current/20)}),Object(f.jsx)("div",{className:"ceiling",children:B.map((function(e,t){return Object(f.jsx)("div",{className:"piece",style:{width:"".concat(.2,"%"),height:"".concat(100-e,"%")}},t)}))}),Object(f.jsxs)("div",{className:"center",children:[Object(f.jsx)("div",{className:"me",style:{width:E,height:E,top:P,left:G},children:Object(f.jsx)("img",{src:h,alt:""})}),ee.map((function(e,t){return Object(f.jsx)("div",{className:"asteroid",style:{top:"".concat(e.top,"%"),left:"".concat(e.left,"%"),width:e.size,height:e.size},children:Object(f.jsx)("img",{src:e.image,alt:""})},t)}))]}),Object(f.jsx)("div",{className:"floor",children:D.map((function(e,t){return Object(f.jsx)("div",{className:"piece",style:{width:"".concat(.2,"%"),height:"".concat(100-e,"%")}},t)}))})]})};function x(e){var t=c.a.useState(!1),n=Object(l.a)(t,2),a=n[0],r=n[1];function i(t){t.key===e&&r(!0)}var o=function(t){t.key===e&&r(!1)};return c.a.useEffect((function(){return window.addEventListener("keydown",i),window.addEventListener("keyup",o),function(){window.removeEventListener("keydown",i),window.removeEventListener("keyup",o)}}),[]),a}var w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(g,{})}),document.getElementById("root")),w()}},[[17,1,2]]]);
//# sourceMappingURL=main.210552c7.chunk.js.map
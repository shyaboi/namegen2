(this.webpackJsonpnamegenapi=this.webpackJsonpnamegenapi||[]).push([[0],{110:function(e,t,a){"use strict";a.r(t);var n,o=a(0),r=a.n(o),l=a(20),c=a.n(l),i=(a(85),a(23)),s=a(24),u=a(27),m=a(26),p=(a(86),a(129)),d=a(140),h=a(135),g=a(131),f=a(132),v=a(136),E=a(69),b=a.n(E),y=a(41),w=a(8),k=a(70),C=a(71),x=a(28),W=a.n(x),j=a(133),O=a(134),S=a(48),N=a.n(S),T=a(49),M=a.n(T),B=a(50),D=a.n(B),A=a(130),R=a(137),G=(a(46),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={topWord:"TopWord",nextWord:"",words:[]},e.useStyles=Object(p.a)({root:{width:500}}),e.handleChange=function(t,a){var n=e.state.words.pop();console.log(n),e.setState({nextWord:n}),e.setState({topWord:n}),e.state.words.length<4&&W.a.get("https://namegenserver.herokuapp.com/10").then((function(t){var a,n=t.data;console.log(n),(a=e.state.words).unshift.apply(a,Object(C.a)(n))})),console.log(e.state.topWord)},e.copyCodeToClipboard=function(){e.state.topWord.select(),document.execCommand("copy")},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;W.a.get("https://namegenserver.herokuapp.com/10").then((function(t){var a=Object(k.a)(t.data),n=a[0],o=a.slice(1);e.setState({words:o}),e.setState({topWord:n})}))}},{key:"render",value:function(){return r.a.createElement(A.a,null,r.a.createElement(R.a,{display:"flex",flexDirection:"row",p:1,m:1,bgcolor:"background.paper"},r.a.createElement(g.a,{variant:"h1",component:"h2",gutterBottom:!0,key:this.state.topWord},this.state.topWord)),r.a.createElement(R.a,{display:"flex",flexDirection:"row-reverse",p:1,m:1,bgcolor:"background.paper"},r.a.createElement(f.a,{variant:"contained",color:"primary",onClick:this.copyCodeToClipboard},"Copy")),r.a.createElement(R.a,{display:"flex",justifyContent:"center",m:1,p:1,bgcolor:"background.paper"}),r.a.createElement(j.a,{className:this.useStyles.root},r.a.createElement(O.a,{label:"Recents",value:"recents",icon:r.a.createElement(N.a,null)}),r.a.createElement(O.a,{label:"Refresh",value:"refresh",icon:r.a.createElement(M.a,null)}),r.a.createElement(O.a,{label:"Next",value:"next",onClick:this.handleChange,icon:r.a.createElement(D.a,null)})))}}]),a}(r.a.Component)),I=a(138);function J(e){return n=e}var U=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).useStyles=Object(p.a)({root:{width:500}}),e.onChange=function(){},e.handleChange=function(t,a){e.setState({numChoice:n});var o=n;console.log(o),W.a.get("https://namegenserver.herokuapp.com/multi/".concat(o)).then((function(t){var a=t.data;e.setState({words:a})}))},e.state={topWord:"TopWord",words:[],numChoice:2},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({numChoice:n});var t=parseInt(this.state.numChoice)-1;W.a.get("https://namegenserver.herokuapp.com/multi/".concat(t)).then((function(t){var a=t.data;e.setState({words:a})}))}},{key:"grabMor",value:function(){}},{key:"render",value:function(){for(var e=this.state.words,t=[],a=0;a<e.length;a++)t.push(e[a].charAt(0).toUpperCase()+e[a].slice(1));return console.log(t),r.a.createElement(A.a,null,r.a.createElement(R.a,{p:1,m:1,bgcolor:"background.paper"},r.a.createElement(g.a,{display:"flex",flexWrap:"wrap",variant:"h5",component:"h5",gutterBottom:!0,key:t},t)),r.a.createElement(R.a,{display:"flex",flexDirection:"row-reverse",p:1,m:1,bgcolor:"background.paper"},r.a.createElement(f.a,{variant:"contained",color:"primary"},"Copy")),r.a.createElement("div",{className:this.useStyles.root},r.a.createElement(g.a,{id:"discrete-slider",gutterBottom:!0},"How Many Words"),r.a.createElement(I.a,{defaultValue:2,getAriaValueText:J,"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",step:1,marks:!0,min:1,max:10,onMouseUp:this.handleChange})),r.a.createElement(R.a,{display:"flex",justifyContent:"center",m:1,p:1,bgcolor:"background.paper"}))}}]),a}(r.a.Component),V=a(139),H=Object(p.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function L(){var e=H();return r.a.createElement(y.a,null,r.a.createElement("div",{className:e.root},r.a.createElement(d.a,{position:"static"},r.a.createElement(h.a,null,r.a.createElement(v.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu"},r.a.createElement(b.a,null)),r.a.createElement(g.a,{variant:"h6",className:e.title},r.a.createElement(f.a,{color:"inherit"},r.a.createElement(V.a,{component:y.b,to:"/TopWord"},"Top Word"),"  ")),r.a.createElement(g.a,{variant:"h6",className:e.title},r.a.createElement(f.a,{color:"inherit"},r.a.createElement(V.a,{component:y.b,to:"/MultiWord"},"Repo Name Generator"))),r.a.createElement(g.a,{variant:"h6",className:e.title},r.a.createElement(f.a,{color:"inherit"},"API Documentation")),r.a.createElement(f.a,{color:"inherit"},"Anoter Thing"))),r.a.createElement(w.c,null,r.a.createElement(w.a,{path:"/TopWord",component:G},r.a.createElement(G,null)),r.a.createElement(w.a,{exact:!0,path:"/MultiWord",component:U},r.a.createElement(U,null)))))}var P=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(A.a,null,r.a.createElement(L,null))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},80:function(e,t,a){e.exports=a(110)},85:function(e,t,a){},86:function(e,t,a){}},[[80,1,2]]]);
//# sourceMappingURL=main.7e0879d7.chunk.js.map
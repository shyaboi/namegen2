(this.webpackJsonpnamegenapi=this.webpackJsonpnamegenapi||[]).push([[0],{121:function(e,t,a){e.exports=a.p+"static/media/get.dfa81e2b.png"},140:function(e,t,a){e.exports=a(279)},145:function(e,t,a){},146:function(e,t,a){},279:function(e,t,a){"use strict";a.r(t);var n,o=a(0),r=a.n(o),l=a(9),s=a.n(l),c=(a(145),a(24)),i=a(25),m=a(27),u=a(26),p=(a(146),a(124)),h=a(308),d=a(316),g=a(317),v=a(312),y=a(313),b=a(122),E=a.n(b),f=a(320),w=a(322),k=a(318),S=a(43),C=a(14),W=a(57),T=a(123),j=a(38),B=a.n(j),x=a(314),O=a(315),D=a(113),P=a.n(D),N=a(114),A=a.n(N),U=a(311),I=a(319),q=(a(64),a(34)),G=a.n(q),R=a(324),J=a(323),M=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={topWord:"TopWord",nextWord:"",words:[],pastWords:[]},e.useStyles=Object(h.a)({root:{width:500}}),e.handleChange=function(){var t=e.state.words.pop(),a=e.state.pastWords;console.log(a),a.push(t),localStorage.setItem("Previous Words",a),e.setState({nextWord:t}),e.setState({topWord:t}),e.state.words.length<4&&B.a.get("https://namegenserver.herokuapp.com/10").then((function(t){var a,n=t.data;console.log(n),(a=e.state.words).unshift.apply(a,Object(T.a)(n))})),console.log(e.state.topWord)},e.copyState=function(){G()(e.state.topWord)},e.clear=function(){e.setState({pastWords:[e.state.topWord]}),localStorage.setItem("Previous Words",[e.state.topWord])},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;B.a.get("https://namegenserver.herokuapp.com/10").then((function(t){var a=Object(W.a)(t.data),n=a[0],o=a.slice(1);if(e.setState({words:o}),e.setState({topWord:n}),null===localStorage.getItem("Previous Words")){var r=[n];e.setState({pastWords:[r]})}else{var l=localStorage.getItem("Previous Words").split(",");console.log(l),l.push(n),localStorage.setItem("Previous Words",l),e.setState({pastWords:l})}}))}},{key:"render",value:function(){var e=this.state.pastWords.map((function(e){return r.a.createElement(J.a,{title:e,enterDelay:800,leaveDelay:200,"aria-label":"PascalCase"},r.a.createElement(R.a,{label:e,value:e}))}));return r.a.createElement(U.a,null,r.a.createElement(v.a,{variant:"h3",component:"h3"},"Top Word"),r.a.createElement(I.a,{display:"flex",flexDirection:"row",p:1,m:1,bgcolor:"background.paper"},r.a.createElement(v.a,{variant:"h1",component:"h2",gutterBottom:!0,key:this.state.topWord},this.state.topWord)),r.a.createElement(I.a,{display:"flex",flexDirection:"row-reverse",p:1,m:1,bgcolor:"background.paper"},r.a.createElement(y.a,{variant:"contained",color:"primary",onClick:this.copyState},"Copy")),r.a.createElement(I.a,{display:"flex",justifyContent:"center",m:1,p:1,bgcolor:"background.paper"}),r.a.createElement(x.a,{className:this.useStyles.root},r.a.createElement(O.a,{label:"Recents",value:"recents",onClick:this.clear,icon:r.a.createElement(P.a,null)}),r.a.createElement(O.a,{label:"Next",value:"next",onClick:this.handleChange,icon:r.a.createElement(A.a,null)})),r.a.createElement(U.a,null,r.a.createElement(v.a,{variant:"h3",component:"h3"},"Past Words"),r.a.createElement("ul",null,e)))}}]),a}(r.a.Component),L=a(325),H=[];function _(e){return n=e}var F=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).useStyles=Object(h.a)({root:{width:500}}),e.onChange=function(){},e.copyLowerState=function(){var t=e.state.words.toString().replace(/,/g,"");G()(t)},e.copyCapState=function(){for(var t=e.state.words,a=[],n=0;n<t.length;n++){a.push(t[n].charAt(0).toUpperCase()+t[n].slice(1));var o=a.toString().replace(/,/g,"");G()(o)}},e.copyCamelState=function(){for(var t=Object(W.a)(e.state.words),a=t[0],n=t.slice(1),o=[],r=0;r<n.length;r++)o.push(n[r].charAt(0).toUpperCase()+n[r].slice(1));var l=o.toString().replace(/,/g,"");G()(a+l)},e.copyHyphenState=function(){var t=e.state.words.toString().replace(/,/g,"-");G()(t)},e.copyUnderState=function(){var t=e.state.words.toString().replace(/,/g,"_");G()(t)},e.handleChange=function(t,a){e.setState({numChoice:n});var o=n;B.a.get("https://namegenserver.herokuapp.com/multi/".concat(o)).then((function(t){var a=t.data;e.setState({words:a})}));var r=e.state.words;H.push(r),e.setState({oldWords:H})},e.state={topWord:"TopWord",words:[],numChoice:2,oldWords:[]},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({numChoice:n});var t=parseInt(this.state.numChoice);B.a.get("https://namegenserver.herokuapp.com/multi/".concat(t)).then((function(t){var a=t.data;e.setState({words:a})}))}},{key:"render",value:function(){for(var e=this.state.words,t=[],a=0;a<e.length;a++)t.push(e[a].charAt(0).toUpperCase()+e[a].slice(1));var n=this.state.oldWords.map((function(e){return r.a.createElement(J.a,{title:JSON.stringify(e),enterDelay:800,leaveDelay:200,"aria-label":"PascalCase"},r.a.createElement(R.a,{label:JSON.stringify(e),value:JSON.stringify(e)}))}));return r.a.createElement(U.a,null,r.a.createElement(I.a,{p:1,m:1,bgcolor:"background.paper"},r.a.createElement(v.a,{variant:"h3",component:"h3"},"Generated Name"),r.a.createElement(v.a,{display:"flex",flexWrap:"wrap",variant:"h5",component:"h5",gutterBottom:!0,key:t},t)),r.a.createElement(I.a,{display:"flex",flexDirection:"row-reverse",p:1,m:1,bgcolor:"background.paper"},r.a.createElement(J.a,{title:"This will copy the Generate Name in PascalCase",enterDelay:800,leaveDelay:300,"aria-label":"PascalCase"},r.a.createElement(y.a,{variant:"contained",color:"primary",onClick:this.copyCapState},"Copy PascalCase")),r.a.createElement(J.a,{title:"This will copy the Generate Name in camelCase",enterDelay:800,leaveDelay:300,"aria-label":"camelCase"},r.a.createElement(y.a,{variant:"contained",color:"primary",onClick:this.copyCamelState},"Copy camelCase")),r.a.createElement(J.a,{title:"This will copy the Generate Name in flatcase",enterDelay:800,leaveDelay:300,"aria-label":"flatcase"},r.a.createElement(y.a,{variant:"contained",color:"primary",onClick:this.copyLowerState},"Copy flatcase")),r.a.createElement(J.a,{title:"This will copy the Generate Name in kebab-case-lowercase",enterDelay:800,leaveDelay:300,"aria-label":"kebab-case-lower"},r.a.createElement(y.a,{variant:"contained",color:"primary",onClick:this.copyHyphenState},"Copy kebab-case")),r.a.createElement(J.a,{title:"This will copy the Generate Name in snake_case_lowercase",enterDelay:800,leaveDelay:300,"aria-label":"snake_case_lowercase"},r.a.createElement(y.a,{variant:"contained",color:"primary",onClick:this.copyUnderState},"Copy snake_case"))),r.a.createElement("div",{className:this.useStyles.root},r.a.createElement(v.a,{id:"discrete-slider",gutterBottom:!0},"How Many Words"),r.a.createElement(L.a,{defaultValue:2,getAriaValueText:_,"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",step:1,marks:!0,min:1,max:10,onMouseUp:this.handleChange})),r.a.createElement(I.a,{display:"flex",justifyContent:"center",m:1,p:1,bgcolor:"background.paper"}),r.a.createElement(I.a,null,r.a.createElement(v.a,{variant:"h3",component:"h3"},"Past Words"),r.a.createElement("ul",null,n)))}}]),a}(r.a.Component),Y=a(19),V=a(121),z=a.n(V),Q=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(U.a,null,r.a.createElement(v.a,{variant:"h1",component:"h1",gutterBottom:!0},"API Documentation"),r.a.createElement(v.a,{variant:"h3",component:"h3",gutterBottom:!0},"Version"),r.a.createElement(v.a,{variant:"body1",gutterBottom:!0},"This API currently in \u03b1lpha"),r.a.createElement(v.a,{variant:"h3",component:"h3",gutterBottom:!0},"User Story"),r.a.createElement(v.a,{variant:"body1",gutterBottom:!0},"You need some words for a project, When you visit the API, you get the desired amount of words back in an array that is easy to parse through and find what you want."),r.a.createElement(v.a,{variant:"h3",component:"h3",gutterBottom:!0},"Future Development"),r.a.createElement(v.a,{variant:"body1",gutterBottom:!0},"I plan on soon adding an alphabetical enpoint to get all words starting with 'b' for example."),r.a.createElement(v.a,{variant:"h3",component:"h3",gutterBottom:!0},"Usage"),r.a.createElement(v.a,{variant:"body1",gutterBottom:!0},"This API in its current form simply delivers an arrays of words in different varients."),r.a.createElement(v.a,{variant:"body1",gutterBottom:!0},"If you would like more that one word in the array, change the last number. Currently there are 7 numbered endpoints; at the moment, hosted on Heroku."),r.a.createElement(Y.a,{codeString:"https://namegenserver.herokuapp.com/1\nhttps://namegenserver.herokuapp.com/10\nhttps://namegenserver.herokuapp.com/100\nhttps://namegenserver.herokuapp.com/1000\nhttps://namegenserver.herokuapp.com/10000\nhttps://namegenserver.herokuapp.com/100000\nhttps://namegenserver.herokuapp.com/multi/ANYNUMBER"}),r.a.createElement(v.a,{variant:"body1",gutterBottom:!0},"This API in its current form simply delivers an arrays of words in different varients."),r.a.createElement(v.a,{variant:"h3",component:"h3",gutterBottom:!0},r.a.createElement("a",{href:"https://shyaboi.github.io/pstmn/"},"Getwoman")," Usage"),r.a.createElement(v.a,{variant:"body1",gutterBottom:!0},"If you would like, you can use my API tester to try out these endpoints, simply choose 'Get', under method, choose the URL endpoint to get, then submit, and your response should look similar to the screenshot below."),r.a.createElement("a",{href:"https://shyaboi.github.io/pstmn/"},r.a.createElement("img",{src:z.a,width:"950px",height:"500px"}),"Getwoman"),r.a.createElement(v.a,{variant:"h3",component:"h3",gutterBottom:!0},"Javascript Fetch Usage"),r.a.createElement(v.a,{variant:"body1",gutterBottom:!0},"The simplest way to make a request in vanilla Javascript would be the fetch method. You can fetch ten random words such as the example below:"),r.a.createElement(Y.a,{codeString:"fetch('https://namegenserver.herokuapp.com/10')\n    .then(response => response.json())\n    .then(data => console.log(data));"}),r.a.createElement(v.a,{variant:"body1",gutterBottom:!0},"This request will come back with one result, which will be ten random words, all in lower case, in an array. The response should look similar to the response below;"),r.a.createElement(Y.a,{codeString:'[\n  "nonascendently",\n  "trainful",\n  "spins",\n  "tui",\n  "overshadowment",\n  "wispish",\n  "netty",\n  "bombilation",\n  "playwright",\n  "geologic"\n]'}),r.a.createElement(v.a,{variant:"h3",component:"h3",gutterBottom:!0},"JQuery Usage"),r.a.createElement(v.a,{variant:"body1",gutterBottom:!0},"The simplest way to make a request with JQuery would be the get method. You can get ten random words such as the example below:"),r.a.createElement(Y.a,{codeString:'$.get("https://namegenserver.herokuapp.com/10", \n  function(data, status){\n    console.log("Data: " + data);\n  });'}),r.a.createElement(v.a,{variant:"body1",gutterBottom:!0},"This request will come back with one result, which will be ten random words, all in lower case, in an array. The response should look similar to the response below;"),r.a.createElement(Y.a,{codeString:'[\n  "peebeens",\n  "stodging",\n  "wendell",\n  "leporids",\n  "massageuse",\n  "sontag",\n  "photoradio",\n  "toiled",\n  "aspread",\n  "intruse"\n]'}),r.a.createElement(v.a,{variant:"h3",component:"h3",gutterBottom:!0},"Node.js HTTPS Module Usage"),r.a.createElement(v.a,{variant:"body1",gutterBottom:!0},"To use the API with Node HTTPS Get method, you can use a request similar to the example below;"),r.a.createElement(Y.a,{codeString:"var https = require('https');\n\nvar options = {\n  host: 'namegenserver.herokuapp.com',\n  path: '/10/',\n  headers: {\n    Accept': 'application/json'\n            }\n          };\n  https.get(options, function (res) {\n    var json = '';\n    res.on('data', function (chunk) {\n                  json += chunk;\n              });\n    res.on('end', function () {\n      if (res.statusCode === 200) {\n        try {\n          var data = JSON.parse(json);\n            // data is available here:\n            console.log(json);\n                      } catch (e) {\n                          console.log('Error parsing JSON!');\n                      }\n                  } else {\n                      console.log('Status:', res.statusCode);\n                  }\n              });\n          }).on('error', function (err) {\n              console.log('Error:', err);\n          });"}),r.a.createElement(v.a,{variant:"body1",gutterBottom:!0},"This request will come back with one result, which will be ten random words, all in lower case, in an array. The response should look similar to the response below;"),r.a.createElement(Y.a,{codeString:'[\n  "unmaturative",\n  "asternata",\n  "outroving",\n  "sullenly",\n  "precapitalist",\n  "pharmacologists",\n  "kinetoscopic",\n  "weakeners",\n  "unpredictabilness",\n  "banked"\n]'}),r.a.createElement(v.a,{variant:"h3",component:"h3",gutterBottom:!0},"Python Request Module Usage"),r.a.createElement(v.a,{variant:"body1",gutterBottom:!0},"To use the API with Pythons request module, you can use a request similar to the example below;"),r.a.createElement(Y.a,{codeString:"import requests\nr = requests.get('https://namegenserver.herokuapp.com/10')\nprint(r.json())"}),r.a.createElement(v.a,{variant:"body1",gutterBottom:!0},"This request will come back with one result, which will be ten random words, all in lower case, in an array. The response should look similar to the response below;"),r.a.createElement(Y.a,{codeString:'[\n  "solonetses",\n  "adenotomy",\n  "scrappier",\n  "baldricked",\n  "persorption",\n  "neuronist",\n  "belzebub",\n  "undepressible",\n  "teguments",\n  "lowerer"\n]'}),r.a.createElement(v.a,{variant:"h3",component:"h3",gutterBottom:!0},"cURL Usage"),r.a.createElement(v.a,{variant:"body1",gutterBottom:!0},"To use the API with cURL, open your terminal, and you can use a request similar to the example below;"),r.a.createElement(Y.a,{codeString:'curl "https://namegenserver.herokuapp.com/10"'}),r.a.createElement(v.a,{variant:"body1",gutterBottom:!0},"The result of the cURL will be an array of words in the specified amount, similar to the example below;",r.a.createElement(Y.a,{codeString:'% Total    % Received % Xferd  Average Speed   Time    Time     Time  Current\nDload  Upload   Total   Spent    Left  Speed\n100   130  100   130    0     0    214      0 --:--:-- --:--:-- --:--:--   214\n["strongyloplasmata","overaccurate","nonlegitimacy","nyroca","photolysis","suers","wiriness","pararhotacism","bides","seafighter"]\n'})))}}]),a}(r.a.Component),$=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(U.a,null,r.a.createElement(v.a,{variant:"h1",component:"h1",align:"center",gutterBottom:!0},"^",r.a.createElement("br",null),"Welcome To",r.a.createElement("br",null),"Name Generator 2"))}}]),a}(r.a.Component),X=Object(h.a)((function(e){return{root:{flexGrow:1,position:"relative"},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},dropdown:{position:"absolute",top:28,right:0,left:0,zIndex:1,border:"1px solid",padding:e.spacing(1),backgroundColor:e.palette.background.paper}}}));function K(){var e=r.a.useState(null),t=Object(p.a)(e,2),a=t[0],n=t[1],o=function(){n(null)},l=X();return r.a.createElement(S.a,null,r.a.createElement("div",{className:l.root},r.a.createElement(d.a,{position:"static"},r.a.createElement(g.a,{"aria-controls":"simple-menu","aria-haspopup":"true"},r.a.createElement(k.a,null,r.a.createElement("div",null,r.a.createElement(y.a,{onClick:function(e){n(e.currentTarget)}},r.a.createElement(E.a,null)),r.a.createElement(f.a,{id:"simple-menu",anchorEl:a,keepMounted:!0,open:Boolean(a),onClose:o},r.a.createElement(w.a,{onClick:o,component:S.b,to:"/Home"},"Home"),r.a.createElement(w.a,{onClick:o},"FutureThings"),r.a.createElement(w.a,{onClick:o},"FutureThings")))),r.a.createElement(v.a,{variant:"h6",className:l.title},r.a.createElement(y.a,{color:"inherit"},r.a.createElement(w.a,{component:S.b,to:"/TopWord"},"Top Word"),"  ")),r.a.createElement(v.a,{variant:"h6",className:l.title},r.a.createElement(y.a,{color:"inherit"},r.a.createElement(w.a,{component:S.b,to:"/MultiWord"},"Name Generator"))),r.a.createElement(v.a,{variant:"h6",className:l.title},r.a.createElement(y.a,{color:"inherit"}," ",r.a.createElement(w.a,{component:S.b,to:"/Docs"},"API Documentation"))))),r.a.createElement(C.d,null,r.a.createElement(C.b,{exact:!0,path:"/"},r.a.createElement(C.a,{to:"/Docs"})),r.a.createElement(C.b,{exact:!0,path:"/namegen2"},r.a.createElement(C.a,{to:"/Docs"})),r.a.createElement(C.b,{path:"/Home",component:$},r.a.createElement($,null)),r.a.createElement(C.b,{path:"/TopWord",component:M},r.a.createElement(M,null)),r.a.createElement(C.b,{exact:!0,path:"/MultiWord",component:F},r.a.createElement(F,null)),r.a.createElement(C.b,{exact:!0,path:"/Docs",component:Q},r.a.createElement(Q,null)))))}var Z=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(U.a,null,r.a.createElement(K,null))}}]),a}(r.a.Component),ee=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function te(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Z,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/namegen2",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/namegen2","/service-worker.js");ee?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):te(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):te(t,e)}))}}()}},[[140,1,2]]]);
//# sourceMappingURL=main.6f84b9cd.chunk.js.map
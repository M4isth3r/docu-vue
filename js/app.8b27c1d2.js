(function(e){function t(t){for(var a,s,i=t[0],c=t[1],u=t[2],l=0,m=[];l<i.length;l++)s=i[l],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&m.push(r[s][0]),r[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);p&&p(t);while(m.length)m.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},o=[];function s(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"79ca0e32"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=r[e]=[t,a]}));t.push(n[2]=a);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=s(e);var u=new Error;o=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",u.name="ChunkLoadError",u.type=a,u.request=o,n[1](u)}r[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/docu-vue/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var p=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"03c8":function(e,t,n){e.exports=n.p+"img/ghost_type_icon.2e3f6d08.svg"},"0560":function(e,t,n){e.exports=n.p+"img/electric_type_icon.8ae8fecd.svg"},"0f0b":function(e,t,n){e.exports=n.p+"img/normal_type_icon.a7239f96.svg"},"0f93":function(e,t,n){"use strict";n("b157")},"0fac":function(e,t,n){"use strict";n("1a3f")},1028:function(e,t,n){e.exports=n.p+"img/steel_type_icon.3dd13518.svg"},"1a3f":function(e,t,n){},2032:function(e,t,n){},"2a95":function(e,t,n){"use strict";n("954a")},"2e39":function(e,t,n){},3027:function(e,t,n){e.exports=n.p+"img/grass_type_icon.945875b9.svg"},"368a":function(e,t,n){e.exports=n.p+"img/poicon_type_icon.8afc9580.svg"},"496b":function(e,t,n){e.exports=n.p+"img/ground_type_icon.ec600469.svg"},"49dd":function(e,t,n){},"4b6e":function(e,t,n){},"4de6":function(e,t,n){"use strict";n("2e39")},"50e2":function(e,t,n){},"512f":function(e,t,n){},5231:function(e,t,n){"use strict";n("5b94")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:"/hacker-news"}},[e._v("HackerNews")]),e._v(" | "),n("router-link",{attrs:{to:"/todo-list"}},[e._v("TodoList")]),e._v(" | "),n("router-link",{attrs:{to:{name:"RouterDocu"}}},[e._v("RouterDocu")]),e._v(" | "),n("router-link",{attrs:{to:"/poke-wiki"}},[e._v("PokeWiki")]),e._v(" | "),n("router-link",{attrs:{to:{name:"About"}}},[e._v("About")]),e._v(" | "),n("router-link",{attrs:{to:{name:"Login"}}},[e._v("Login")]),e._v(" | "),n("router-link",{attrs:{to:{name:"Register"}}},[e._v("Register")]),e._v(" | "),n("router-link",{attrs:{to:{name:"VeeValidate"}}},[e._v("VeeValidate")])],1),n("router-view")],1)},o=[],s=(n("a17c"),{name:"App",components:{}}),i=s,c=(n("ecd7"),n("2877")),u=Object(c["a"])(i,r,o,!1,null,"2d62e1da",null),l=u.exports,p=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-docu-hacker-news")},d=[],f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"v-container"},[n("custom-spinner",{attrs:{id:"spinner"}}),n("custom-searcher",{on:{"search-value":e.getData}},[n("img",{attrs:{src:e.cactus.src,alt:e.cactus.alt}})]),n("v-docu-table",{directives:[{name:"show",rawName:"v-show",value:!e.isSpinnerVisible,expression:"!isSpinnerVisible"}],attrs:{hackerNewsData:e.hackerNewsData}})],1)},v=[],h=(n("ac1f"),n("841c"),n("99af"),n("159b"),n("d81d"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"v-container"},["error"===e.hackerNewsData?n("span",[e._v(e._s(e.hackerNewsData))]):n("table",{},[n("thead",[n("tr",e._l(e.collection,(function(t,a){return n("th",{key:a,class:t.field},[e._v(" "+e._s(t.header)+" ")])})),0)]),n("tbody",e._l(e.hackerNewsData,(function(t,a){return n("tr",{key:a},e._l(e.collection,(function(a,r){return n("td",{key:r,class:a.field},["url"===a.field?n("p",[n("a",{attrs:{href:t.url,target:"_blank"}},[e._v(" "+e._s(t.url)+" ")])]):n("span",[e._v(e._s(t[a.field]))])])})),0)})),0)])])}),_=[],g={name:"VDocuTable",props:{hackerNewsData:{type:Array,default:function(){return[]}}},data:function(){return{collection:[{header:"Author",field:"author"},{header:"Title",field:"title"},{header:"Link",field:"url"},{header:"Comments",field:"num_comments"},{header:"Date",field:"created_at"}]}}},b=g,k=(n("2a95"),Object(c["a"])(b,h,_,!1,null,"52282fc8",null)),y=k.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"show",attrs:{id:"spinner"}})},x=[],C={name:"CustomSpinner",data:function(){return{}}},D=C,N=(n("a445"),Object(c["a"])(D,w,x,!1,null,"44735a1f",null)),T=N.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{attrs:{id:"custom-searcher"},on:{submit:function(t){return t.preventDefault(),e.checkForm.apply(null,arguments)}}},[e._t("default"),n("div",{staticClass:"nes-field"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.valueToSearch,expression:"valueToSearch"},{name:"focus",rawName:"v-focus"}],staticClass:"nes-input",attrs:{type:"text",placeholder:"Value to search..."},domProps:{value:e.valueToSearch},on:{input:function(t){t.target.composing||(e.valueToSearch=t.target.value)}}})]),n("div",{staticClass:"nes-field btn"},[n("button",{staticClass:"nes-btn is-primary",attrs:{type:"submit"},on:{click:e.fireEvent}},[e._v(" Submit ")])]),n("div",{staticClass:"nes-field btn"},[n("button",{staticClass:"nes-btn is-error",attrs:{type:"reset"},on:{click:e.rechargeData}},[e._v(" Reset ")])])],2)},j=[],S=(n("30fe"),{name:"CustomSearcher",data:function(){return{valueToSearch:""}},methods:{checkForm:function(){""!=this.valueToSearch?this.$emit("search-value",this.valueToSearch):alert("You has to fill the input!!")},rechargeData:function(){this.$emit("recharge-data")},fireEvent:function(){this.$emit("submit-pressed",this.valueToSearch)}}}),E=S,$=(n("5231"),Object(c["a"])(E,O,j,!1,null,"2544c7b6",null)),P=$.exports,V=n("9abd"),L=n.n(V),R={name:"VDocuHackerNews",components:{VDocuTable:y,CustomSpinner:T,CustomSearcher:P},data:function(){return{hackerNewsData:[],temporalData:[],url:"https://hn.algolia.com/api/v1/search?",search:"vue",page:0,hitsPerPage:20,isSpinnerVisible:!0,cactus:{src:L.a,alt:"cactus"}}},methods:{getData:function(e){this.search=e,this.searchData()},searchData:function(){var e=this;fetch("".concat(this.url,"query=").concat(this.search,"&page=").concat(this.page,"&hitsPerPage=").concat(this.hitsPerPage),{method:"GET"}).then((function(e){return e.json()})).then((function(t){console.table(t.hits),e.hackerNewsData.length=0,t.hits.map((function(e){return{author:e.author,title:e.title,url:e.url,num_comments:e.num_comments,created_at:new Date(e.created_at).toLocaleString()}})).forEach((function(t){e.hackerNewsData.push(t),e.$el.querySelector("#spinner").classList.remove("show"),e.isSpinnerVisible=!1}))})).catch((function(){e.hackerNewsData="error",e.$el.querySelector("#spinner").classList.remove("show"),e.isSpinnerVisible=!1}))}},created:function(){this.searchData()},mounted:function(){console.log("MOUNTED")},updated:function(){console.log("UPDATED")}},q=R,A=Object(c["a"])(q,f,v,!1,null,null,null),M=A.exports,U={name:"HackerNews",components:{VDocuHackerNews:M}},H=U,Y=Object(c["a"])(H,m,d,!1,null,null,null),F=Y.exports,I=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("img",{class:e.myClass,attrs:{alt:e.alternativeText,src:n("cf05")}}),a("HelloWorld",{attrs:{msg:e.userLogged}}),a("MiComponente"),a("VDocuAxios")],1)},W=[],z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{directives:[{name:"color",rawName:"v-color"}]},[e._v(e._s(e._f("capitalize")(e.msg,{onlyFirstLetter:!0})))]),n("div",{staticClass:"time"},[e._v(e._s(e.time||"..."))]),n("div",[n("p",[e._v(" Veces que has saludado: "+e._s(e.greetNumber)+" - Saludo * 2 = "+e._s(e.doubleGreetNumber)+" ")]),n("button",{staticClass:"nes-btn",on:{click:function(t){e.greet(),e.clickHandler(t)}}},[e._v("Saludar!")])])])},G=[],J={methods:{clickHandler:function(e){console.log(e.target)}}},B=n("5a0c"),K={name:"HelloWorld",mixins:[J],props:{msg:String},data:function(){return{text:String,greetNumber:0,time:""}},computed:{doubleGreetNumber:function(){return 2*this.greetNumber}},methods:{greet:function(){this.count()},count:function(){this.greetNumber++},formatDate:function(){var e=B(Date.now()).format("DD-MM-YYYY h:mm:ss A");this.time=e},streamingOfTime:function(){var e=this;setInterval((function(){e.formatDate()}),1e3)}},created:function(){this.streamingOfTime()}},Q=K,X=(n("4de6"),Object(c["a"])(Q,z,G,!1,null,"4765552e",null)),Z=X.exports,ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[e.condition?n("p",[e._v("Esta frase no se va a mostrar")]):n("p",{directives:[{name:"color",rawName:"v-color",value:"#42b983",expression:"'#42b983'"}]},[e._v(e._s(e.miVariable))])])},te=[],ne={name:"MiComponente",data:function(){return{miVariable:"Mi primer componente con Vue :)",condition:!1}}},ae=ne,re=Object(c["a"])(ae,ee,te,!1,null,"1bffa55c",null),oe=re.exports,se=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"})},ie=[],ce=n("1da1"),ue=(n("96cf"),n("bc3a")),le=n.n(ue),pe="https://jsonplaceholder.typicode.com/todos",me={get:function(){return le.a.get(pe)},getTodo:function(e){return le.a.get("".concat(pe,"/").concat(e))},create:function(e){return le.a.post(pe,e)},update:function(e){return le.a.put("".concat(pe,"/").concat(e.id),e)},delete:function(e){return le.a.delete(pe,e)}},de={methods:{getTodos:function(){return Object(ce["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,me.get();case 3:t=e.sent,console.log(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},getTodo:function(e){return Object(ce["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,me.getTodo(e);case 3:n=t.sent,console.log(n.data),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},modifyTodos:function(){return Object(ce["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t={userId:1,id:1,title:"Do homework",completed:!0},e.prev=1,e.next=4,me.update(t);case 4:n=e.sent,console.log(n.data),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))()}},created:function(){this.getTodos(),this.getTodo(1),this.modifyTodos()}},fe=de,ve=Object(c["a"])(fe,se,ie,!1,null,"02bad57b",null),he=ve.exports,_e=n("852e"),ge=n.n(_e),be="https://reqres.in/api",ke={setUserLogged:function(e){var t=new Date(Date.now()+6e4);ge.a.set("userLogged",e,{expires:t})},getUserLogged:function(){return ge.a.get("userLogged")},removeUserLogged:function(){ge.a.remove("userLogged")},register:function(e,t){var n={email:e,password:t};return le.a.post("".concat(be,"/register"),n)},login:function(e,t){var n={email:e,password:t};return le.a.post("".concat(be,"/login"),n)}},ye={name:"Home",components:{HelloWorld:Z,MiComponente:oe,VDocuAxios:he},data:function(){return{alternativeText:"Vue logo",myClass:"my-class"}},computed:{userLogged:function(){return"welcome ".concat(ke.getUserLogged()||"")}}},we=ye,xe=Object(c["a"])(we,I,W,!1,null,null,null),Ce=xe.exports,De=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",[e._v("Error 404: la ruta indicada no existe")])},Ne=[],Te={},Oe=Te,je=Object(c["a"])(Oe,De,Ne,!1,null,"62b24be5",null),Se=je.exports,Ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"poke-detail"},[n("h1",[e._v(e._s(e.pokemonData.name))]),n("img",{staticClass:"pokemon-img",attrs:{src:e.pokemonData.sprites.front_default,alt:e.pokemonData.name}}),n("img",{staticClass:"pokemon-img",attrs:{src:e.pokemonData.sprites.back_default,alt:e.pokemonData.name}}),n("h3",[e._v("Type")]),n("div",{staticClass:"type-content"},e._l(e.pokemonTypes,(function(t,a){return n("div",{key:a},[n("img",{attrs:{src:t.img,alt:""}}),n("p",[e._v(e._s(t.name))])])})),0)])},$e=[],Pe=(n("b0c0"),{bug:"bug_type_icon",dark:"dark_type_icon",dragon:"dragon_type_icon",electric:"electric_type_icon",fairy:"fairy_type_icon",fighting:"fighting_type_icon",fire:"fire_type_icon",flying:"flying_type_icon",ghost:"ghost_type_icon",grass:"grass_type_icon",ground:"ground_type_icon",ice:"ice_type_icon",normal:"normal_type_icon",poison:"poison_type_icon",psychic:"psychic_type_icon",rock:"rock_type_icon",steel:"steel_type_icon",water:"water_type_icon"}),Ve=function(e){return Pe[e]},Le=Ve,Re={name:"PokeDetail",components:{},data:function(){return{pokemonData:{},pokemonTypes:[]}},methods:{getUrlSvg:function(e){return n("9e30").context(e)}},created:function(){var e=this;console.log(this.$route.params),this.pokemonData=this.$route.params,this.pokemonData.types.forEach((function(t){var a={},r=Le(t.type.name);a.name=t.type.name,a.img=n("ab1b")("./".concat(r,".svg")),e.pokemonTypes.push(a)}))}},qe=Re,Ae=(n("0f93"),Object(c["a"])(qe,Ee,$e,!1,null,"d4d89c78",null)),Me=Ae.exports,Ue=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"poke-wiki"},[n("poke-dex")],1)},He=[],Ye=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[n("custom-spinner",{attrs:{id:"spinner"}}),n("custom-searcher",{on:{"search-value":e.getData,"recharge-data":e.getAllPokemons,"submit-pressed":e.handleClick}}),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.showSpinner,expression:"!showSpinner"}],staticClass:"group"},e._l(e.pokemons,(function(t,a){return n("div",{key:a,staticClass:"card",on:{click:function(n){return e.openPokemonDetail(t)}}},[n("p",[e._v(e._s(t.species.name))]),n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.sprites.front_default,expression:"pokemon.sprites.front_default"}],attrs:{alt:t.species.name}})])})),0)],1)},Fe=[],Ie=(n("4de4"),n("caad"),n("2532"),{name:"PokeDex",components:{CustomSpinner:T,CustomSearcher:P},data:function(){return{pokemons:[],persistPokemons:[],showSpinner:!0}},methods:{openPokemonDetail:function(e){this.$router.push({name:"pokemon",params:e})},getAllPokemons:function(){this.pokemons=[].concat(this.persistPokemons)},getData:function(e){this.pokemons=this.persistPokemons.filter((function(t){return t.species.name.includes(e)}))},handleClick:function(e){alert("You have just searched ".concat(e))}},created:function(){var e=this;fetch("https://pokeapi.co/api/v2/pokemon?limit=151").then((function(e){return e.json()})).then((function(t){t.results.forEach((function(t){fetch(t.url).then((function(e){return e.json()})).then((function(t){e.persistPokemons.push(t),e.pokemons=[].concat(e.persistPokemons)}))}))}))},updated:function(){var e=this;setTimeout((function(){e.$el.querySelector("#spinner").classList.remove("show"),e.showSpinner=!1}),1e3)}}),We=Ie,ze=(n("8e2c"),Object(c["a"])(We,Ye,Fe,!1,null,"3824521c",null)),Ge=ze.exports,Je={name:"PokeWiki",components:{PokeDex:Ge}},Be=Je,Ke=Object(c["a"])(Be,Ue,He,!1,null,"481ce859",null),Qe=Ke.exports,Xe=function(){var e=this,t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"container"},[a("div",{staticClass:"card border-light"},[a("h2",[t._v("Router push")]),a("p",[t._v("Se navega a la ruta que se pasa como parámetro.")]),a("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"code"},[t._m(0)]),a("p",{staticClass:"navigation-button",on:{click:function(){return e.$router.push({name:"Home"})}}},[t._v(" Ejemplo: navegar al home ")])]),a("div",{staticClass:"card border-light"},[a("h2",[t._v("Router replace")]),a("p",[t._v(" No se guarda en la historia del navegaddor, no es posible dar hacia atrás para volver a la página anterior ")]),a("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"code"},[t._m(1)]),a("p",{staticClass:"navigation-button",on:{click:function(){return e.$router.replace({name:"About"})}}},[t._v(" Ejemplo: navegar al about ")])]),a("div",{staticClass:"card border-light"},[a("h2",[t._v("Props en el Vue Router")]),t._m(2),a("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"code"},[t._m(3)]),a("p",{staticClass:"navigation-button",on:{click:function(){return e.$router.push({name:"About",params:{title:"OpenSource is the way!"}})}}},[t._v(" Ejemplo: navegar al about ")])])])},Ze=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",{staticClass:"language-javascript"},[e._v("        "),n("code",[e._v("\n    // Con la URL de la ruta\n    this.$router.push('home')\n    // Con el nombre de la ruta\n    this.$router.push({ path: 'home' })\n        ")]),e._v("\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",{staticClass:"language-javascript"},[e._v("        "),n("code",[e._v("\n    // Con la URL de la ruta\n    this.$router.replace('about')\n    // Con el nombre de la ruta\n    this.$router.replace({ path: 'about' })\n        ")]),e._v("\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("Setear "),n("strong",[e._v("props")]),e._v(" a true en el array del router.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",{staticClass:"language-javascript"},[e._v("        "),n("code",[e._v('\n    {\n      path: "/users",\n      name: "users",\n      component: Users\n      props: true\n    }\n    // ¡Solo funciona navegando por el name!\n    this.$router.push({ name: \'About\', params: { title: \'OpenSource is the way!\' }})"\n        ')]),e._v("\n      ")])}],et={},tt=et,nt=(n("0fac"),Object(c["a"])(tt,Xe,Ze,!1,null,"0c3152b2",null)),at=nt.exports,rt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container",attrs:{id:"todo-list"}},[n("todo-list-component")],1)},ot=[],st=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"todo-list-componet"}},[n("todo-add-component",{on:{"add-new-task":e.addNewTask}}),n("div",{staticClass:"list"},[n("ul",e._l(e.tasks,(function(t,a){return n("todo-item-component",{key:a,staticClass:"task",class:{completed:t.completed},attrs:{task:t},on:{"click-on-task":e.completeTask}},[e._v(" "+e._s(t.text)+" ")])})),1)])],1)},it=[],ct=(n("7db0"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{on:{click:function(t){return e.completeTask(e.task.text)}}},[e._v(" ["+e._s(e.task.completed)+"] - "+e._s(e.task.text)+" ")])}),ut=[],lt={props:["task"],methods:{completeTask:function(e){this.$emit("click-on-task",{text:e})}}},pt=lt,mt=Object(c["a"])(pt,ct,ut,!1,null,"34d2b273",null),dt=mt.exports,ft=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"form"},[n("custom-searcher",{on:{"search-value":e.createTask}})],1)},vt=[],ht={components:{CustomSearcher:P},data:function(){return{}},methods:{createTask:function(e){if(e.length>0){var t={text:e,completed:!1};this.$emit("add-new-task",t)}}}},_t=ht,gt=(n("d81b"),Object(c["a"])(_t,ft,vt,!1,null,"73f27dc3",null)),bt=gt.exports,kt={components:{TodoItemComponent:dt,TodoAddComponent:bt},data:function(){return{newTask:"",tasks:[{text:"aprender vue",completed:!1}]}},methods:{addNewTask:function(e){this.tasks.push(e)},completeTask:function(e){var t=this.tasks.find((function(t){return t.text===e.text}));void 0!==t&&(t.completed=!t.completed)},print:function(){console.log("Hola Mundo!")}}},yt=kt,wt=(n("920d"),Object(c["a"])(yt,st,it,!1,null,"08565c18",null)),xt=wt.exports,Ct={name:"TodoList",components:{TodoListComponent:xt},data:function(){return{}}},Dt=Ct,Nt=Object(c["a"])(Dt,rt,ot,!1,null,null,null),Tt=Nt.exports,Ot=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[n("h1",{staticClass:"title"},[e._v("Sign in to page")]),n("form",{staticClass:"form",attrs:{action:""},on:{submit:function(t){return t.preventDefault(),e.login.apply(null,arguments)}}},[n("label",{staticClass:"form-label",attrs:{for:"#email"}},[e._v("Email:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-input",attrs:{type:"email",id:"email",required:"",placeholder:"Email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),n("label",{staticClass:"form-label",attrs:{for:"#password"}},[e._v("Password:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-input",attrs:{type:"password",id:"password",required:"",placeholder:"Password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e.error?n("p",{staticClass:"error"},[e._v(e._s(e.wrongTypedData))]):e._e(),n("input",{staticClass:"form-submit",attrs:{type:"submit",value:"Sign in"}})]),n("p",{staticClass:"msg"},[e._v(" Don't have an account yet? "),n("router-link",{attrs:{to:"/register"}},[e._v("Register now")])],1),e._m(0)])},jt=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"example"},[n("span",[e._v("Data example becouse we are using for login/register "),n("a",{attrs:{href:"https://reqres.in/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://reqres.in/")])]),n("span",[e._v('"email": "eve.holt@reqres.in"')]),n("span",[e._v('"password": "cityslicka"')])])}],St={data:function(){return{email:"",password:"",error:!1,wrongTypedData:"Incorrect username or password."}},methods:{login:function(){var e=this;ke.login(this.email,this.password).then((function(){ke.setUserLogged(e.email),e.$router.push("/")}),(function(){return e.error=!0}))}}},Et=St,$t=(n("8fb0"),Object(c["a"])(Et,Ot,jt,!1,null,"6e705b37",null)),Pt=$t.exports,Vt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[n("h1",{staticClass:"title"},[e._v("Login in the page")]),n("form",{staticClass:"form",attrs:{action:""},on:{submit:function(t){return t.preventDefault(),e.register.apply(null,arguments)}}},[n("label",{staticClass:"form-label",attrs:{for:"#email"}},[e._v("Email:")]),n("v-docu-input",{attrs:{id:"email",type:"email",placeholder:"Email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),n("label",{staticClass:"form-label",attrs:{for:"#password"}},[e._v("Password:")]),n("v-docu-input",{attrs:{id:"password",type:"password",placeholder:"Password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),e.password&&e.hasPasswordNumbers?n("span",{staticClass:"error"},[e._v(" The password can not contain numbers. ")]):e._e(),n("label",{staticClass:"form-label",attrs:{for:"#password-repeat"}},[e._v("Please repeat the password:")]),n("v-docu-input",{attrs:{id:"password-repeat",type:"password",placeholder:"Repeat password"},model:{value:e.passwordRepeat,callback:function(t){e.passwordRepeat=t},expression:"passwordRepeat"}}),e.passwordRepeat&&!e.isPasswordMatch?n("span",{staticClass:"error"},[e._v(" The passwords are not match. ")]):e._e(),n("input",{staticClass:"form-submit",attrs:{type:"submit",value:"Register"}})],1),e._m(0)])},Lt=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"example"},[n("span",[e._v("Data example because we are using for login/register "),n("a",{attrs:{href:"https://reqres.in/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://reqres.in/")])]),n("span",[e._v('"email": "eve.holt@reqres.in"')]),n("span",[e._v('"password": "pistol"')])])}],Rt=(n("00b4"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("input",{staticClass:"form-input",attrs:{type:e.type,placeholder:e.placeholder},domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target.value)}}})}),qt=[],At={props:["value","type","placeholder"]},Mt=At,Ut=Object(c["a"])(Mt,Rt,qt,!1,null,null,null),Ht=Ut.exports,Yt={components:{VDocuInput:Ht},data:function(){return{email:"",password:"",passwordRepeat:""}},computed:{hasPasswordNumbers:function(){return/\d/.test(this.password)},isPasswordMatch:function(){return this.password===this.passwordRepeat}},methods:{register:function(){var e=this;ke.register(this.email,this.password,this.passwordRepeat).then((function(){return e.$router.push("/")}),(function(){return alert("Ups! Somthing was wrong :(")}))}}},Ft=Yt,It=(n("c9ac"),Object(c["a"])(Ft,Vt,Lt,!1,null,"77a8ebfc",null)),Wt=It.exports,zt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("ValidationObserver",{scopedSlots:e._u([{key:"default",fn:function(t){var a=t.handleSubmit;return[n("form",{on:{submit:function(t){return t.preventDefault(),a(e.onSubmit)}}},[n("h2",[e._v("Vue.js + VeeValidate - Form Validation")]),n("ValidationProvider",{attrs:{name:"First Name",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[n("label",{attrs:{for:"firstName"}},[e._v("First Name:")]),n("VDocuInput",{attrs:{id:"firstName"},model:{value:e.firstName,callback:function(t){e.firstName=t},expression:"firstName"}}),n("span",{staticClass:"error"},[e._v(e._s(a[0]))])]}}],null,!0)}),n("ValidationProvider",{attrs:{name:"Last Name",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[n("label",{attrs:{for:"lastName"}},[e._v("Last Name:")]),n("VDocuInput",{attrs:{id:"lastName"},model:{value:e.lastName,callback:function(t){e.lastName=t},expression:"lastName"}}),n("span",{staticClass:"error"},[e._v(e._s(a[0]))])]}}],null,!0)}),n("ValidationProvider",{attrs:{name:"Email",rules:"required|email"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[n("label",{attrs:{for:"email"}},[e._v("Email: ")]),n("VDocuInput",{attrs:{id:"email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),n("span",{staticClass:"error"},[e._v(e._s(a[0]))])]}}],null,!0)}),n("button",{attrs:{type:"submit"}},[e._v("Submit")])],1)]}}])})],1)},Gt=[],Jt={name:"VDocueVeeValidate",components:{VDocuInput:Ht},data:function(){return{firstName:"",lastName:"",email:""}},methods:{onSubmit:function(){alert("Success!! :-) Form has been submitted!")}}},Bt=Jt,Kt=(n("67e0"),Object(c["a"])(Bt,zt,Gt,!1,null,"479b20e4",null)),Qt=Kt.exports;a["a"].use(p["a"]);var Xt=[{path:"/",name:"Home",component:Ce},{path:"/login",name:"Login",component:Pt},{path:"/register",name:"Register",component:Wt},{path:"/vee-validate",name:"VeeValidate",component:Qt},{path:"/about",name:"About",props:!0,component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/hacker-news",name:"HackerNews",component:F},{path:"/todo-list",name:"TodoList",component:Tt},{path:"/router-docu",name:"RouterDocu",component:at},{path:"/poke-wiki",name:"PokeWiki",component:Qe},{path:"/pokemon/:id",name:"pokemon",component:Me},{path:"*",component:Se,alias:"404"}],Zt=new p["a"]({routes:Xt}),en=Zt,tn=n("a7c6"),nn=n.n(tn),an=n("d36c"),rn=(n("4717"),n("caf9")),on=n("5a0c");a["a"].filter("date",(function(e){return on(e).format("DD-MM-YYYY h:mm:ss A")})),a["a"].directive("focus",{inserted:function(e){e.focus()}}),a["a"].directive("color",{inserted:function(e,t){e.style.color=t.value}});var sn=n("5530"),cn=n("7bb1"),un=n("4c93");Object(cn["c"])("required",Object(sn["a"])(Object(sn["a"])({},un["b"]),{},{message:function(e){return"The field ".concat(e," is required.")}})),Object(cn["c"])("email",Object(sn["a"])(Object(sn["a"])({},un["a"]),{},{message:function(e){return"The ".concat(e," format is invalid.")}})),a["a"].component("ValidationProvider",cn["b"]),a["a"].component("ValidationObserver",cn["a"]),a["a"].use(an["a"]),a["a"].use(nn.a),a["a"].use(rn["a"]),a["a"].config.productionTip=!1,new a["a"]({router:en,render:function(e){return e(l)}}).$mount("#app")},"5b94":function(e,t,n){},"5bc7":function(e,t,n){e.exports=n.p+"img/bug_type_icon.9e6561af.svg"},"609d":function(e,t,n){e.exports=n.p+"img/fighting_type_icon.44b4e562.svg"},"67e0":function(e,t,n){"use strict";n("50e2")},"6f09":function(e,t,n){e.exports=n.p+"img/water_type_icon.76a1ede8.svg"},"7ae1":function(e,t,n){},"8e2c":function(e,t,n){"use strict";n("2032")},"8fb0":function(e,t,n){"use strict";n("e409")},"920d":function(e,t,n){"use strict";n("512f")},"954a":function(e,t,n){},"9abd":function(e,t,n){e.exports=n.p+"img/cactus.636e56ab.svg"},"9bb6":function(e,t,n){e.exports=n.p+"img/rock_type_icon.1ae0c82a.svg"},"9e30":function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="9e30"},a445:function(e,t,n){"use strict";n("edbb")},ab1b:function(e,t,n){var a={"./bug_type_icon.svg":"5bc7","./dark_type_icon.svg":"f72f","./dragon_type_icon.svg":"ccba","./electric_type_icon.svg":"0560","./fairy_type_icon.svg":"e7d6","./fighting_type_icon.svg":"609d","./fire_type_icon.svg":"fd4f","./flying_type_icon.svg":"ad21","./ghost_type_icon.svg":"03c8","./grass_type_icon.svg":"3027","./ground_type_icon.svg":"496b","./ice_type_icon.svg":"b44c","./normal_type_icon.svg":"0f0b","./poicon_type_icon.svg":"368a","./psychic_type_icon.svg":"e275","./rock_type_icon.svg":"9bb6","./steel_type_icon.svg":"1028","./water_type_icon.svg":"6f09"};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id="ab1b"},ad21:function(e,t,n){e.exports=n.p+"img/flying_type_icon.7175d74f.svg"},b157:function(e,t,n){},b44c:function(e,t,n){e.exports=n.p+"img/ice_type_icon.d75aa9d4.svg"},c9ac:function(e,t,n){"use strict";n("49dd")},ccba:function(e,t,n){e.exports=n.p+"img/dragon_type_icon.382162d7.svg"},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},d81b:function(e,t,n){"use strict";n("7ae1")},e275:function(e,t,n){e.exports=n.p+"img/psychic_type_icon.e0e3f001.svg"},e409:function(e,t,n){},e7d6:function(e,t,n){e.exports=n.p+"img/fairy_type_icon.344fc465.svg"},ecd7:function(e,t,n){"use strict";n("4b6e")},edbb:function(e,t,n){},f72f:function(e,t,n){e.exports=n.p+"img/dark_type_icon.a8a9c792.svg"},fd4f:function(e,t,n){e.exports=n.p+"img/fire_type_icon.cde66115.svg"}});
//# sourceMappingURL=app.8b27c1d2.js.map
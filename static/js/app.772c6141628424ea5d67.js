webpackJsonp([1],{"1uuo":function(t,e){},LM6p:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),s=a("Dd8w"),i=a.n(s),o=a("mtWM"),r=a.n(o),c=a("NYxO"),u=a("ye7G"),l={computed:i()({},Object(u.b)({search:"search"})),data:function(){return{}},methods:{searchMovie:function(t){this.$store.dispatch("searchMovie",this.search)},setTime:function(){var t=this;this.timer&&(clearTimeout(this.timer),this.timer=null),this.timer=setTimeout(function(){t.searchMovie()},1e3)}}},v={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-input",attrs:{type:"text",name:"movie",id:"movie",placeholder:"Search Your Movie"},domProps:{value:t.search},on:{keyup:t.setTime,input:function(e){e.target.composing||(t.search=e.target.value)}}})])},staticRenderFns:[]};var p=a("VU/8")(l,v,!1,function(t){a("ic5c")},"data-v-5064bf15",null).exports,m=a("oqQY"),_=a.n(m),h=a("pDpx"),d=a.n(h),f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"modal-fade"}},[a("div",{staticClass:"modal-backdrop"},[a("div",{staticClass:"modal"},[a("header",{staticClass:"modal-header"},[t._t("header",[a("button",{staticClass:"btn-close",attrs:{type:"button"},on:{click:t.close}},[t._v("\n           x\n         ")])])],2),t._v(" "),a("section",{staticClass:"modal-body"},[t._t("body")],2),t._v(" "),a("footer",{staticClass:"modal-footer"},[t._t("footer",[a("button",{staticClass:" btn",attrs:{type:"button"},on:{click:t.close}},[t._v("\n             Close\n         ")])])],2)])])])},staticRenderFns:[]};var g={components:{modal:a("VU/8")({methods:{close:function(){this.$emit("close")}}},f,!1,function(t){a("ZCD4")},"data-v-15df02ad",null).exports},computed:i()({},Object(c.b)(["getMovies","getDetailMovie"]),Object(u.b)({search:"search",page:"page_number"})),data:function(){return{image:d.a,isOpen:!1}},filters:{dateFormat:function(t){return _()(t).format("DD-MMMM-YYYY")}},created:function(){this.getTopMovie()},methods:{getTopMovie:function(){this.$store.dispatch("topMovie")},poster:function(t){return t?"http://image.tmdb.org/t/p/original/"+t:this.image},modal:function(t){this.isOpen=!0,this.$store.dispatch("getDetailMovies",t)},nextpage:function(){this.$store.commit("nextPage"),this.$store.dispatch("searchMovie",this.search)},lastpage:function(){1!==this.page&&(this.$store.commit("lastPage"),this.$store.dispatch("searchMovie",this.search))},closeModal:function(){this.$store.commit("RESET_DETAIL_MOVIE",[]),this.isOpen=!1}}},b={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"container"},[t._l(t.getMovies,function(e){return[a("div",{key:e.id,staticClass:"card",staticStyle:{width:"18rem"}},[a("img",{attrs:{src:t.poster(e.poster_path),width:"100px",alt:e.title}}),t._v(" "),a("div",{staticClass:"container flex__card"},[a("h5",{staticClass:"card-title"},[t._v(t._s(e.title))]),t._v(" "),a("p",{staticClass:"card-text"},[t._v(t._s(e.overview.substring(0,60)+"..."))]),t._v(" "),a("button",{on:{click:function(a){return t.modal(e.id)}}},[t._v("See")])])])]})],2),t._v(" "),t.getMovies.length?a("footer",{staticStyle:{display:"flex","justify-content":"center"}},[a("button",{staticStyle:{"margin-right":"10px"},attrs:{disabled:1==t.page},on:{click:t.lastpage}},[t._v("last page")]),t._v(" "),a("button",{on:{click:t.nextpage}},[t._v("next page")])]):t._e(),t._v(" "),t.isOpen?a("modal",{on:{close:t.closeModal},scopedSlots:t._u([{key:"header",fn:function(){},proxy:!0},{key:"body",fn:function(){return[a("img",{attrs:{src:t.poster(t.getDetailMovie.poster_path),alt:t.getDetailMovie.title}}),t._v(" "),a("h1",[t._v(t._s(t.getDetailMovie.title))]),t._v(" "),a("p",{staticStyle:{"background-color":"greenyellow",display:"inline-block",padding:"10px 5px"}},[t._v(t._s(t._f("dateFormat")(t.getDetailMovie.release_date)))]),t._v(" "),a("div",{staticClass:"genres"},[t._l(t.getDetailMovie.genres,function(e,n){return[a("span",{key:n,staticClass:"genre"},[t._v(t._s(e.name))])]})],2),t._v(" "),a("p",[t._v(t._s(t.getDetailMovie.overview))])]},proxy:!0}],null,!1,1725202631)}):t._e()],1)},staticRenderFns:[]};var M=a("VU/8")(g,b,!1,function(t){a("LM6p")},"data-v-46677eed",null).exports,x={name:"App",components:{"search-component":p,"movie-component":M}},E={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("search-component"),this._v(" "),e("movie-component")],1)},staticRenderFns:[]};var k=a("VU/8")(x,E,!1,function(t){a("VF3p")},null,null).exports,y=a("/ocq"),T={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))]),t._v(" "),a("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),a("br"),t._v(" "),a("li",[a("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var D=a("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},T,!1,function(t){a("1uuo")},"data-v-d8ec41bc",null).exports;n.a.use(y.a);var S=new y.a({routes:[{path:"/",name:"HelloWorld",component:D},{path:"/movie",name:"movie",component:M}]}),C=a("Xxa5"),w=a.n(C),O=a("exGp"),$=a.n(O);n.a.use(c.a);var j="04ff38168fe3dfe8fdf6585c81f5c4a9",V="https://api.themoviedb.org/3/",I=new c.a.Store({state:{page_number:1,search:"",movies:[],detail_movies:[]},mutations:{SET_MOVIES:function(t,e){t.movies=e},RESET_MOVIES:function(t,e){console.log(e),t.movies=e},SET_DETAIL_MOVIES:function(t,e){t.detail_movies=e},SET_TOP_RATE:function(t,e){t.movies=e},nextPage:function(t){t.page_number+=1},lastPage:function(t){t.page_number-=1},SET_LOADING:function(t,e){t.isLoading=e},RESET_DETAIL_MOVIE:function(t,e){t.detail_movies=e},updateField:u.c},getters:{input:function(t){return t.input},getMovies:function(t){return t.movies},getDetailMovie:function(t){return t.detail_movies},getField:u.a},actions:{searchMovie:function(t,e){var a=this;return $()(w.a.mark(function n(){var s,i;return w.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(s=t.state.page_number,!e){a.next=8;break}return a.next=4,r.a.get(V+"search/movie?api_key="+j+"&query="+e+"&page="+s);case 4:(i=a.sent).status&&(t.commit("SET_MOVIES",i.data.results),t.commit("SET_LOADING",!1)),a.next=9;break;case 8:t.dispatch("topMovie");case 9:case"end":return a.stop()}},n,a)}))()},getDetailMovies:function(t,e){var a=this;return $()(w.a.mark(function n(){var s;return w.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,r.a.get(V+"movie/"+e+"?api_key="+j);case 2:200==(s=a.sent).status&&t.commit("SET_DETAIL_MOVIES",s.data);case 4:case"end":return a.stop()}},n,a)}))()},topMovie:function(t){var e=this;return $()(w.a.mark(function a(){var n;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.a.get(V+"movie/top_rated?api_key="+j+"&page="+t.state.page_number);case 2:200==(n=e.sent).status&&t.commit("SET_TOP_RATE",n.data.results);case 4:case"end":return e.stop()}},a,e)}))()}}});n.a.config.productionTip=!1,new n.a({el:"#app",router:S,store:I,components:{App:k},template:"<App/>"})},VF3p:function(t,e){},ZCD4:function(t,e){},ic5c:function(t,e){},pDpx:function(t,e,a){t.exports=a.p+"static/img/kekeyi.17434df.png"}},["NHnr"]);
//# sourceMappingURL=app.772c6141628424ea5d67.js.map
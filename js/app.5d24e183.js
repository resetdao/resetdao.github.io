(function(t){function e(e){for(var n,c,o=e[0],r=e[1],l=e[2],u=0,m=[];u<o.length;u++)c=o[u],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&m.push(a[c][0]),a[c]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);d&&d(e);while(m.length)m.shift()();return s.push.apply(s,l||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],n=!0,o=1;o<i.length;o++){var r=i[o];0!==a[r]&&(n=!1)}n&&(s.splice(e--,1),t=c(c.s=i[0]))}return t}var n={},a={app:0},s=[];function c(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,c),i.l=!0,i.exports}c.m=t,c.c=n,c.d=function(t,e,i){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(c.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(i,n,function(e){return t[e]}.bind(null,n));return i},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],r=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var d=r;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"04fa":function(t,e,i){},"10b4":function(t,e,i){t.exports=i.p+"img/gov-bento.66899c8c.png"},"13aa":function(t,e,i){},"15b8":function(t,e,i){"use strict";var n=i("13aa"),a=i.n(n);a.a},"1c5e":function(t,e,i){t.exports=i.p+"img/nash.9036efcc.png"},"2bb3":function(t,e,i){t.exports=i.p+"img/gov-bento-V2.0.6fef2795.png"},"2bdb":function(t,e,i){},"3e33":function(t,e,i){t.exports=i.p+"img/das.360ee6e6.png"},"4ab6":function(t,e,i){var n={"./1_odaily.png":"8115","./2_chainnews.png":"a1f2","./3_winkrypto.png":"78ef","./4_币乎.png":"c4c5"};function a(t){var e=s(t);return i(e)}function s(t){if(!i.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}a.keys=function(){return Object.keys(n)},a.resolve=s,t.exports=a,a.id="4ab6"},"4c97":function(t,e,i){t.exports=i.p+"img/weichat.5b240989.png"},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},s=[],c=(i("5c0b"),i("2877")),o={},r=Object(c["a"])(o,a,s,!1,null,null,null),l=r.exports,d=i("8c4f"),u=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home-wrapper"},[i("navBar"),i("sectionOne"),i("sectionTwo"),i("sectionThree"),i("sectionFour"),i("sectionFive"),i("sectionSix"),i("fooTer")],1)},m=[],v=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"navbar-warpper"},[i("nav",{staticClass:"navbar navbar-expand-md navbar-dark navbar-transparent fixed-top sticky-navigation",attrs:{id:"calay-navbar"}},[t._m(0),i("button",{staticClass:"navbar-toggler navbar-toggler-right text-white",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation"},on:{click:t.clickBtn}},[i("span",{staticClass:"iconfont"},[t._v("")])]),i("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarCollapse"}},[i("ul",{staticClass:"navbar-nav ml-auto"},[t._l(t.navList,(function(e){return i("li",{key:e.id,staticClass:"nav-item"},[i("a",{staticClass:"nav-link page-scroll",class:{active:e.id==t.isActive},attrs:{target:"_blank",href:e.ref},on:{click:function(i){return t.changNav(e.id)}}},[t._v(t._s(e.title))])])})),i("li",{staticClass:"nav-item lan-item"},[i("a",{staticClass:"nav-link lan",class:{active:"EN"==t.lanIsActive},on:{click:function(e){return t.changLen(2)}}},[t._v("EN")]),i("a",{staticClass:"nav-link lan",class:{active:"CN"==t.lanIsActive},on:{click:function(e){return t.changLen(1)}}},[t._v("CN")])])],2)])])])},h=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"navbar-brand",attrs:{href:"index.html"}},[n("img",{attrs:{src:i("cf05")}})])}],p=i("a78e"),b=i.n(p),g={name:"navbar",data:function(){return{isActive:"home",isclick:!1,lanIsActive:"EN"}},computed:{getlang:{get:function(){return this.$store.state.language}},navList:{get:function(){return this.$t("navBar.list")}}},watch:{getlang:function(t){console.log(t),this.lanIsActive="zh"==t?"CN":"EN"}},methods:{clickBtn:function(){this.isclick?(this.isclick=!1,document.getElementById("navbarCollapse").style.display="none"):(this.isclick=!0,document.getElementById("navbarCollapse").style.display="block")},changNav:function(t){this.isActive=t,this.isclick=!0,this.clickBtn()},changLen:function(t){1===t?(this.lanIsActive="CN",this.$i18n.locale="zh",this.$store.dispatch("setLanguage","zh")):(this.lanIsActive="EN",this.$i18n.locale="en",this.$store.dispatch("setLanguage","en")),document.documentElement.clientWidth<768&&(this.isclick=!0,this.clickBtn())}},created:function(){var t=b.a.get("language");"zh"==t?(this.lanIsActive="CN",this.$store.dispatch("setLanguage","zh")):(this.lanIsActive="EN",this.$store.dispatch("setLanguage","en"));var e=this;window.onscroll=function(){document.documentElement.scrollTop>100?document.getElementById("calay-navbar").style.background="rgb(521, 32, 59, 1)":document.getElementById("calay-navbar").style.background="rgb(521, 32, 59, 0.8)";var t=document.getElementById("navbarCollapse").style.display;document.documentElement.clientWidth<768&&"block"==t&&(e.isclick=!0,e.clickBtn())}}},A=g,f=(i("15b8"),Object(c["a"])(A,v,h,!1,null,null,null)),D=f.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"fooTer-warpper bg-dark text-white"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6 mx-auto text-center"},[n("h3",{staticClass:"text-white"},[t._v(t._s(t.$t("fooTer.title")))]),n("div",{staticClass:"divider divider-sm bg-white mt-3"}),n("p",{staticClass:"mt-4 lead"},[t._v(" "+t._s(t.$t("fooTer.text"))+" ")]),n("ul",{staticClass:"list-inline social social-sm social-rounded mt-4"},[t._m(0),t._m(1),t._m(2),n("li",{staticClass:"list-inline-item",on:{click:function(e){t.isActive=!t.isActive}}},[t._m(3)])]),n("img",{directives:[{name:"show",rawName:"v-show",value:t.isActive,expression:"isActive"}],staticClass:"img-box",attrs:{src:i("4c97")}})])]),t._m(4)])])},x=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"list-inline-item"},[i("a",{attrs:{href:"https://github.com/resetdao",target:"_blank"}},[i("i",{staticClass:"iconfont"},[t._v("")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"list-inline-item"},[i("a",{attrs:{href:"https://twitter.com/resetdao",target:"_blank"}},[i("i",{staticClass:"iconfont"},[t._v("")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"list-inline-item"},[i("a",{attrs:{href:"https://discord.com/invite/xW9rAR",target:"_blank"}},[i("i",{staticClass:"iconfont"},[t._v("")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a",[i("i",{staticClass:"iconfont"},[t._v("")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row mt-5"},[i("div",{staticClass:"col-12 text-muted text-center"})])}],O={name:"fooTer",data:function(){return{isActive:!1}},methods:{}},j=O,N=(i("af28"),Object(c["a"])(j,w,x,!1,null,null,null)),I=N.exports,M=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"sectionOne-warrper",attrs:{id:"home"}},[i("div",{staticClass:"container"},[i("div",{staticClass:"row vh-md-100"},[i("div",{staticClass:"col-md-8 mx-auto my-auto text-white text-center"},[i("h1",{staticClass:"text-white mt-4 mt-md-6 text-h1"},[t._v(" "+t._s(t.$t("sectionOne.title"))+" ")]),i("p",{directives:[{name:"show",rawName:"v-show",value:t.textShow,expression:"textShow"}],staticClass:"h5 text-white mb-5  font-weight-bold text-p"},[i("span",{staticClass:"tagline-skill"},[i("span",{staticClass:"tagline-skill_inner"},[t._v(" "+t._s(t.$t("sectionOne.textp1"))+" ")])])]),i("p",{directives:[{name:"show",rawName:"v-show",value:!t.textShow,expression:"!textShow"}],staticClass:"h5 text-white mb-5  font-weight-bold text-p"},[i("span",{staticClass:"tagline-skill"},[i("span",{staticClass:"tagline-skill_inner"},[t._v(" "+t._s(t.$t("sectionOne.textp2"))+" ")])])])])])])])},k=[],G={name:"navbar",data:function(){return{isActive:"gov",lanIsActive:"EN",textShow:!0,navList:[{id:"gov",title:" GOV",ref:""},{id:"projects",title:"PROJECTS",ref:""},{id:"community",title:"COMMUNITY",ref:""},{id:"Web3",title:"(Connect Web3)",ref:""}]}},created:function(){var t=this;setInterval((function(){t.textShow=!t.textShow}),4e3)}},y=G,C=(i("caa7"),Object(c["a"])(y,M,k,!1,null,null,null)),R=C.exports,E=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"sectionTwo-warrper"},[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-10 mx-auto text-center"},[i("h2",{staticClass:"text-primary text-title"},[t._v(t._s(t.$t("sectionTwo.title")))]),i("p",{staticClass:"text-muted lead "},[t._v(t._s(t.$t("sectionTwo.textp1")))]),i("p",{staticClass:"text-muted lead"},[t._v(t._s(t.$t("sectionTwo.textp2")))]),i("p",{staticClass:"text-muted lead"},[t._v(t._s(t.$t("sectionTwo.textp3")))])])])])])},T=[],Z={name:"sectionTwo"},Y=Z,U=(i("895c"),Object(c["a"])(Y,E,T,!1,null,null,null)),Q=U.exports,W=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"sectionThree-warrper bg-light",attrs:{id:"projects"}},[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-6 mx-auto text-center"},[i("h2",{staticClass:"text-primary text-title"},[t._v(" "+t._s(t.$t("sectionThree.title"))+" ")]),i("p",{staticClass:"text-muted lead"},[t._v(t._s(t.$t("sectionThree.text")))])])]),i("div",{staticClass:"row d-md-flex mt-4 text-center"},t._l(t.list,(function(e){return i("div",{key:e.id,staticClass:"col-md-3 mt-2"},[i("div",{staticClass:"card card-warrper"},[i("div",{staticClass:"card-body"},[i("h2",{staticClass:"card-title"},[t._v(t._s(e.title))]),i("img",{attrs:{src:e.img}}),i("p",{staticClass:"card-text"},[t._v(t._s(e.text))])])])])})),0)])])},P=[],S={name:"sectionTwo",data:function(){return{sectionTwo:{title:"Mission & Values"}}},computed:{list:{get:function(){return this.$t("sectionThree.list")}}}},z=S,F=(i("6be7"),Object(c["a"])(z,W,P,!1,null,null,null)),V=F.exports,J=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"sectionFour-warrper"},[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-6 mx-auto text-center"},[i("h2",{staticClass:"text-primary text-title"},[t._v(t._s(t.$t("sectionFour.title")))])])]),i("div",{staticClass:"row d-md-flex mt-4 text-center"},t._l(t.list,(function(e){return i("div",{key:e.id,staticClass:"col-md-4 mt-2"},[i("div",{staticClass:"card card-warrper"},[i("div",{staticClass:"card-body"},[i("h2",{staticClass:"card-title"},[t._v(t._s(e.title))]),i("p",{staticClass:"card-text"},[t._v(t._s(e.text))])])])])})),0)])])},B=[],L={name:"sectionFour",computed:{list:{get:function(){return this.$t("sectionFour.list")}}}},H=L,X=(i("e8e3"),Object(c["a"])(H,J,B,!1,null,null,null)),q=X.exports,K=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"sectionFive-warrper bg-light"},[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-10 mx-auto text-center"},[i("h2",{staticClass:"text-primary text-title"},[t._v(t._s(t.$t("sectionFive.title")))]),t._l(t.list,(function(e){return i("p",{key:e.id,staticClass:"text-muted lead"},[t._v(" "+t._s(e.text)+" ")])}))],2)])])])},_=[],$={name:"sectionFive",computed:{list:{get:function(){return this.$t("sectionFive.list")}}}},tt=$,et=(i("7140"),Object(c["a"])(tt,K,_,!1,null,null,null)),it=et.exports,nt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"sectionSix-warrper"},[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-6 mx-auto text-center"},[i("h2",{staticClass:"text-primary text-title"},[t._v(t._s(t.$t("sectionSix.title")))])])]),i("div",{staticClass:"row d-md-flex mt-4 text-center"},t._l(t.list,(function(t){return i("div",{key:t.id,staticClass:"col-md-3 mt-2 list"},[i("img",{staticClass:"list-img",attrs:{src:t.img}})])})),0)])])},at=[],st=(i("4160"),i("d3b7"),i("159b"),i("ddb0"),{name:"sectionSix",data:function(){return{list:[]}},methods:{getList:function(){var t=this,e=i("4ab6");e.keys().forEach((function(e,n){var a={id:n,img:i("9896")("./partners"+e.substr(1))};t.list.push(a)})),console.log(this.list)}},created:function(){this.getList()}}),ct=st,ot=(i("cbdb"),Object(c["a"])(ct,nt,at,!1,null,null,null)),rt=ot.exports,lt={name:"Home",components:{navBar:D,fooTer:I,sectionOne:R,sectionTwo:Q,sectionThree:V,sectionFour:q,sectionFive:it,sectionSix:rt}},dt=lt,ut=Object(c["a"])(dt,u,m,!1,null,null,null),mt=ut.exports;n["a"].use(d["a"]);var vt=[{path:"/",name:"Home",component:mt},{path:"*",name:"Home",component:mt}],ht=new d["a"]({routes:vt}),pt=ht,bt=i("2f62"),gt=i("5530"),At=i("a925"),ft={navBar:{list:[{id:"home",title:"HOME",ref:""},{id:"DAO",title:"DAO",ref:"https://xdai.aragonchina.xyz/#/reset/"},{id:"document",title:"DOCUMENT",ref:"https://resetdao.gitbook.io/reset-thedao"},{id:"community",title:"Join Our Community",ref:"https://t.me/ResetDAO  "}]},sectionOne:{title:"ResetDAO",textp1:"DAOs' matrix/Aggregator",textp2:"All due to swarm intelligence",btn1:"cast a vote",btn2:"Join Us"},sectionTwo:{title:"Mission & Values",textp1:"ResetDAO is a decentralized autonomous organization born in the community, we optimize the governance of DAOs and DeFi, we develop, assist and incubate DAO products and protocols",textp2:"This is a cooperative in the cryptoworld. We reject the control of the center and unfair distribution，We call for the encrypted world to be people-oriented again，We support the decentralization of power and benefits. resetDAO  members will form an organization in the form of partners, and distribute value fairly through mutual voting.",textp3:"People-oriented governance capabilities allow DAO to flexibly change, programmable currency, community capital, headless brands, mutual credit bonds, everything is possible."},sectionThree:{title:"Project",text:"We plan to fund and help early Dao organizations or businesses",btn1:"Play now",btn2:"Learn more",list:[{id:"0",title:"gov bento",img:i("10b4"),text:"Support governance token mining of DEX and DeFi, aggregate voting power in the liquid pool, and market it to obtain more revenue"},{id:"2",title:"gov bento V2.0",img:i("2bb3"),text:"Introduce the MakaerDAO to help DAO and DeFi derive credit, and aggregate more governance tokens to help expand governance"},{id:"3",title:"DAS",img:i("3e33"),text:"Achieve governance incentives through flexible supply of governance tokens similar to AMPL. DAS will be a complete set of governance structure."},{id:"4",title:"NASH Protocol",img:i("1c5e"),text:"Running complex games with hidden strategy on blockchain"}]},sectionFour:{title:"What can we do？",list:[{id:"0",title:"Community voice",text:"Reset.theDAO must be based on the community and cannot be separated from the community. The supply and distribution of Reset.theDAO tokens, project decisions, and control of public assets are all determined by community voting."},{id:"2",title:"Value aggregation",text:"In the future, all business will operate in the form of DAOs, Reset.theDAO will participate in early DAO project, holding governance tokens in the form of cooperatives. We can lower access, aggregate revenue and vote, and drive community members to benefit together."},{id:"3",title:"Fork us!",text:"We welcome everyone in the community to establish credible and efficient membership through Reset.theDAO, and to establish business and organization through Fork us! Reset.theDAO will become DAOs' matrix!"}]},sectionFive:{title:"Our philosophy",list:[{id:"0",text:"It’s all about people. Bet on people, have faith, back others, believe in people;"},{id:"1",text:"Everything we do is for the community and those around us;"},{id:"2",text:"Participate in other projects, collectively hold shares, share profits with the community, and aggregate votes;"},{id:"3",text:"Accept innovation, welcome diversified development and useful debates, and everyone can participation in project research;"},{id:"4",text:"Reset.theDAO is DAOs' matrix，Fork us! We encourage everyone to act quickly to verify their ideas;"},{id:"5",text:"Carry forward the spirit of The DAO, and develop more flexible 🌊🌊🌊"}]},sectionSix:{title:"Partners"},rogtoken:{title:"ROG token powers the Community Governance",text:"ROG is the ResetDAO native ERC20 token，ROG token holders have an economic claim to the ResetDAO´s revenue，it represents your contribution and rights in the organization, we will mine new ROG as an incentive for contributors."},fooTer:{title:"Join the community",text:"Reset.theDAO is a decentralized autonomous organization born in the community, as a booster for DAO entrepreneurship."}},Dt={navBar:{list:[{id:"home",title:"首页",ref:""},{id:"DAO",title:"DAO",ref:"https://xdai.aragonchina.xyz/#/reset/"},{id:"document",title:"文档",ref:"https://resetdao.gitbook.io/reset-thedao/"},{id:"community",title:"加入社区",ref:"https://t.me/ResetDAO"}]},sectionOne:{title:"ResetDAO",textp1:"DAOs 母体/聚合器",textp2:"一切归于群体智能",btn1:"投票",btn2:"加入我们"},sectionTwo:{title:"ResetDAO 宣言",textp1:"ResetDAO 是一个社区诞生的去中心化自治组织，将为 DAOs 与 DeFi 的治理提供优化，并持续开发、协助、孵化 DAO 的产品与协议。",textp2:"这是一个加密世界的合作社，我们拒绝中心的控制与不公平的分配，我们呼唤加密世界重新以人为本，我们拥护下放权力与收益。resetDAO 的成员将以合伙人的形式结成组织，并通过互相投票公平地分配组织产生的价值。",textp3:"以人为本的治理能力让 DAO 能灵活的变迁，可编程货币、社区资本、无头品牌、互信债券，一切皆有可能。"},sectionThree:{title:"项目",text:"我们计划为早期 DAO 组织或商业提供帮助",btn1:"使用",btn2:"学习更多",list:[{id:"0",title:"治理盒饭",img:i("10b4"),text:"聚合DEX DeFi 的治理代币挖矿，带流动池中聚合投票能力，并将其市场化获取更多收益"},{id:"2",title:"治理盒饭V2.0",img:i("2bb3"),text:"引入MakaerDAO机制帮助 DAO 与 DeFi 衍生信用，并聚合更多的治理代币，帮助其扩展治理"},{id:"3",title:"DAS",img:i("3e33"),text:"帮助DAO 与 DeFi 更好的实现治理，通过类似AMPL式弹性供应治理代币，实现治理激励"},{id:"4",title:"NASH Protocol",img:i("1c5e"),text:"在区块链上运行隐藏策略下运行复杂的博弈游戏"}]},sectionFour:{title:"我们能做些什么?",list:[{id:"0",title:"社区发声",text:"Reset.theDAO 必须基于社区，也无法脱离社区，Reset.theDAO 代币的供应与分配、项目的决策、公有资产的控制，全部由社区投票决定。"},{id:"2",title:"价值聚合",text:"未来的商业都会以 DAOs 的方式运行，Reset.theDAO 参与早期的 DAO 项目，以合作社形式持有治理代币，捕获项目价值。我们将大大降低 DAOs 的准入门槛，并聚合收益与社区投票，带动成员共同获利。"},{id:"3",title:"分叉项目",text:"我们欢迎社区的任何人通过 Reset.theDAO 建立可信、高效的关系，通过 Fork 我们的组织建立新的商业与组织！Reset.theDAO 将成为 DAOs 的母体！"}]},sectionFive:{title:"我们的理念",list:[{id:"0",text:"以人为本，相信你的伙伴，鉴定共同的信仰，提供援助之手；"},{id:"1",text:"我们是整体，一切为社区服务，一切归于群体智能；"},{id:"2",text:"参与早期项目，集体持有 share，与社区分享收益，汇总社区声音；"},{id:"3",text:"包容 DAO 创新，欢迎多元化的发展与有益的争吵，任何人都可以参与项目研究；"},{id:"4",text:"欢迎 Fork，Reset.theDAO 是母体，我们鼓励大家快速的去验证理念；"},{id:"5",text:"发扬 The DAO 的精神，但更灵活的发展🌊🌊🌊"}]},sectionSix:{title:"合作伙伴"},rogtoken:{title:"ROG 代币驱动社区治理",text:"ROG 是 ResetDAO 的原生ERC20代币，ROG 持有者具备 ResetDAO 中资产与收益的控制权。ROG 代表您在组织中的贡献和权利，我们将挖掘新的ROG作为对贡献者的激励。"},fooTer:{title:"联系我们",text:"Reset.theDAO 是一个社区诞生的去中心化自治组织，作为 dao 创业的助推火箭"}};n["a"].use(At["a"]);var wt={en:Object(gt["a"])({},ft),zh:Object(gt["a"])({},Dt)};function xt(){var t=b.a.get("language");return t||"en"}var Ot=new At["a"]({locale:xt(),messages:wt}),jt=Ot;n["a"].use(bt["a"]);var Nt=new bt["a"].Store({state:{language:xt()},mutations:{SET_LANGUAGE:function(t,e){t.language=e,b.a.set("language",e)}},actions:{setLanguage:function(t,e){var i=t.commit;i("SET_LANGUAGE",e)}}}),It=(i("ab8b"),i("8dc5"),i("8cb8"));n["a"].config.productionTip=!1,n["a"].use(At["a"],{i18n:function(t,e){return jt.t(t,e)}}),n["a"].use(It["default"]),new n["a"]({router:pt,store:Nt,i18n:jt,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,i){"use strict";var n=i("9c0c"),a=i.n(n);a.a},"67e6":function(t,e,i){},"6b8c":function(t,e,i){},"6be7":function(t,e,i){"use strict";var n=i("67e6"),a=i.n(n);a.a},7140:function(t,e,i){"use strict";var n=i("04fa"),a=i.n(n);a.a},"78ef":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL0AAABHCAIAAADdvNEYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3NpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjNWEwNDhkMi1kMjAwLTQxYzktYjEzMy0zZDdkYzg5NGVjMmUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDQxMDAyNzlFODQwMTFFQTk0M0JBQzcyRjRFOTU4NkYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDQxMDAyNzhFODQwMTFFQTk0M0JBQzcyRjRFOTU4NkYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YzVhMDQ4ZDItZDIwMC00MWM5LWIxMzMtM2Q3ZGM4OTRlYzJlIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmM1YTA0OGQyLWQyMDAtNDFjOS1iMTMzLTNkN2RjODk0ZWMyZSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrHSNw8AAAdfSURBVHja7J15SFVbFMbTbjZrZbOZDSapGTYpFVQS5TOI+iMasCKhTEsJhYoIokJECCsbwcY/gkqpsImCbLDBiDLKJEmtnJrQsslG7X25HovDudert150i+8HXdZeZ+9z9j3nu3utta+pS2VlZQtCHMSCf7179+aNIM3nzZs3rrwL5Aegbgh1Q6gbQt0Q6oYQ6oZQN4S6IdQNoW4IoW4IdUOoG0LdEOqGEOqGUDeEuiHUDaFuCKFuCHVDqBtC3RDqhhDn1k1BQUFCQsLAgQO3bdumztra2l27do0aNcrf37+urs40pL6+PjY2NiAgICoq6vPnz8280Lp16/5pIDs7m1JwjMrKym9OBsQhc/P09FTn6dOndc7Hjh0zDdm8ebMeXbt2bTMvNGzYMBmSlpb2jTSb169fO+N6ExERIUZ1dfX169fFHj58uMViEXvfvn2mIeXl5WqXlZU180J9+vQRw8PDgyvIHx+n4uPj1d67d68YPXr0mDFjhtgnT558+fKlcUhiYiKCFAxEt9WrV/9BD+D58+ejR4/Gp0LfHePUjxMWFibTc3d3V+f58+d12lu3brUeVVVV5dBVpk6dKmfbv3//73qn0I3MoWXLln9QnLI4p5oXLlx44cKFFg2/aiUrK2vatGmwIaZevXo9ffpUnnRcXJxxyPv37zt37vzu3bsOHTqg+eHDh2fPnsHo378/XvPy8tDs3r37yJEj7V/60aNHeP348eOrV6/GjBkDu7S0FJk4Yhnyrbdv3167ds3Pz8/Hxwd+3MQuXbp06tRJ03M4YcCDyVRUVCBJx0rZvn17JPu3bt1q06bN+PHj4dHL3b9/X4yePXvi0hilZwP5+fmYOW4ChoSGhuKiXG/s8eXLF9xrmWF4eLj6V6xYoTN/+PCh+p88eeLm5vY97rq6lpSUwLNq1SrplpSUBBXqKIgPHxfTepOeni6e6dOnm5a0mzdvSnPBggVXrlyBdOTQp0+fxA8tQhwyfPbs2eJE6YcmlhDYCEM6GdC2bdvk5GTpf+PGDdPj0Df7+PFjzfP+SylcXRctWgRpOsN646S6AfPnz9dbVlNTI8579+6pc/369dpZFgkBfeCJjo5u7KMya9Ysk25ycnLQxDOzjoPnzp3T4k6PLl++HIe6du0qzczMTDQxSe2AVQcLnp2P644dO0yRV/Dy8oIfSx0WHpsDx44dS93Y4+LFi3qzdu7cqf7AwEBx9u3bV52ooVxcXMRfWFgIT0JCgjQRtk6dOgUxzZw501Tei24wMCMjwxj10F/PfPnyZfXjVHjee/bsQQzFoZSUFF3D0NQUfvDgwWgWFxfrwCFDhiCXP378+NChQ9WJu4+oumbNGmki3qWlpZ05c8a4biGu4b3jVhgX2t27d1M39ujWrZvcqZCQEHVu2bJF7+DVq1eb1M3KlSu1j0YWWe1VN3pClGMIEMY5qG4sFgtWNeMhpC868OvXr6rLTZs24ejdu3eliZWjtrZWhiAJ05r/6NGj4pTmoEGDtE+rVq10x8F6ARaZcv+mUfROIQ9ANiO2fhYlO27yJPqcdB9Z94GsQZLUWO6JOr9fv36mmIJcVex58+Yh+xF77ty5ko6oFpHTiN2uXTtvb2+twPH64MED0/TwVJDeiT158mS93JQpU8RAFOP+jT1iYmLURnQQA4vQxIkTxT58+LB+XhsDlZEYmsmawHqDIAURSHWDkg1ZtnU3ffamuk+MgwcPyijMTfMezbfu3LkjNkqqoqIi1ZPN+eANImaJvXHjRmPKJYYqj7qxja+vb1BQkNgHDhxALBA7KipKDBSoSE1+8iqIWUuXLs3NzZUmynWExRcvXpi66dWNzJkzR2OKaW5G4aL4T2pg3LhxIt+OHTuiILc5HyyHepLU1FTUcRs2bJgwYQKCsjiXLFnCOrwJjB84RCtxolTRp4W7L1WrdkNiYcwG4uPjZVReXp5RK/CgQpbm9u3b0czKyjLeGfSH8+zZs9LEOmRzhprWgNatW2NuptIPTuvbjtNKt/z8fOt9P8Qp/e7Meg1mPdXc7VRUQCh9EdfVv3jxYvkmKzs7G83q6mqUKkgtUW0hXYUHyalfA7KVAsrLy3EUfSZNmiS6wUl8Gzhy5Ij0OXToEDrA4+7ujogDESCvQn0EZ2RkpM0ZalojCZn6VTcjRoxIT0/X3AjzPHHihHHnCdUWzo/3YjxtXV3dsmXLtDIA/v7+xrqSummCkpIS3alTsNob9/1+BVVVVbhKk910YxBcunTJWjdItNGEUm/fvl1QUODQHFBb4fw5OTlIvPg9g2MMGDDAZuEjXyD8OowbfXZAjNNvXpG+WHeQxAjZd3BwsKNzQP2F5Yrfh/9t1NTU6A91IJAZD+kPlzlD2fy/Y+Gz/xmQqaD8QYmOrNa4awCQuaNokm2ev++NuyC/4d+DIQ7BvwdDmN8Q6oZQN4S6IYS6IdQNoW4IdUOoG0KoG0LdEOqGUDeEuiGEuiHUDaFuCHVDqBtCqBtC3ZDfwPf/P2Xz13YQYod/BRgAUvLt4ZlE0IgAAAAASUVORK5CYII="},8115:function(t,e,i){t.exports=i.p+"img/1_odaily.9f8fb75b.png"},8118:function(t,e,i){},"895c":function(t,e,i){"use strict";var n=i("2bdb"),a=i.n(n);a.a},"8dc5":function(t,e,i){},9896:function(t,e,i){var n={"./partners/1_odaily.png":"8115","./partners/2_chainnews.png":"a1f2","./partners/3_winkrypto.png":"78ef","./partners/4_币乎.png":"c4c5"};function a(t){var e=s(t);return i(e)}function s(t){if(!i.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}a.keys=function(){return Object.keys(n)},a.resolve=s,t.exports=a,a.id="9896"},"9c0c":function(t,e,i){},a1f2:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL0AAABHCAIAAADdvNEYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3NpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjNWEwNDhkMi1kMjAwLTQxYzktYjEzMy0zZDdkYzg5NGVjMmUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTQ2Qjg1RTBFODQwMTFFQTk0M0JBQzcyRjRFOTU4NkYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTQ2Qjg1REZFODQwMTFFQTk0M0JBQzcyRjRFOTU4NkYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YzVhMDQ4ZDItZDIwMC00MWM5LWIxMzMtM2Q3ZGM4OTRlYzJlIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmM1YTA0OGQyLWQyMDAtNDFjOS1iMTMzLTNkN2RjODk0ZWMyZSIvPiA8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"},af28:function(t,e,i){"use strict";var n=i("c924"),a=i.n(n);a.a},c072:function(t,e,i){},c4c5:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL0AAABHCAIAAADdvNEYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3NpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjNWEwNDhkMi1kMjAwLTQxYzktYjEzMy0zZDdkYzg5NGVjMmUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDQxMDAyN0RFODQwMTFFQTk0M0JBQzcyRjRFOTU4NkYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDQxMDAyN0NFODQwMTFFQTk0M0JBQzcyRjRFOTU4NkYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YzVhMDQ4ZDItZDIwMC00MWM5LWIxMzMtM2Q3ZGM4OTRlYzJlIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmM1YTA0OGQyLWQyMDAtNDFjOS1iMTMzLTNkN2RjODk0ZWMyZSIvPiA8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"},c924:function(t,e,i){},caa7:function(t,e,i){"use strict";var n=i("8118"),a=i.n(n);a.a},cbdb:function(t,e,i){"use strict";var n=i("c072"),a=i.n(n);a.a},cf05:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE8AAABMCAYAAAAsoOooAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjE3NTVBM0Y5RTJFODExRUFCMDU5ODcyMzYyNTA2MjkxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjE3NTVBM0ZBRTJFODExRUFCMDU5ODcyMzYyNTA2MjkxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTc1NUEzRjdFMkU4MTFFQUIwNTk4NzIzNjI1MDYyOTEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MTc1NUEzRjhFMkU4MTFFQUIwNTk4NzIzNjI1MDYyOTEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz74nwLPAAAG8UlEQVR42uxcC2wV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"},e8e3:function(t,e,i){"use strict";var n=i("6b8c"),a=i.n(n);a.a}});
//# sourceMappingURL=app.5d24e183.js.map
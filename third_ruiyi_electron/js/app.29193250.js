(function(t){function e(e){for(var a,r,o=e[0],c=e[1],l=e[2],d=0,p=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&p.push(n[r][0]),n[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],a=!0,r=1;r<i.length;r++){var c=i[r];0!==n[c]&&(a=!1)}a&&(s.splice(e--,1),t=o(o.s=i[0]))}return t}var a={},n={app:0},s=[];function r(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"65c4c0fe"}[t]+".js"}function o(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.e=function(t){var e=[],i=n[t];if(0!==i)if(i)e.push(i[2]);else{var a=new Promise((function(e,a){i=n[t]=[e,a]}));e.push(i[2]=a);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=r(t);var l=new Error;s=function(e){c.onerror=c.onload=null,clearTimeout(d);var i=n[t];if(0!==i){if(i){var a=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+s+")",l.name="ChunkLoadError",l.type=a,l.request=s,i[1](l)}n[t]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:c})}),12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(e)},o.m=t,o.c=a,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(i,a,function(e){return t[e]}.bind(null,a));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var u=l;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"0424":function(t,e,i){},1:function(t,e){},2:function(t,e){},"294b":function(t,e,i){"use strict";i("0424")},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var a=i("2b0e"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[i("div",{staticClass:"d-flex align-center"},[i("h2",[t._v("睿易云")])]),i("v-spacer"),i("h3",{staticStyle:{cursor:"pointer","margin-right":"20px"},on:{click:t.about}},[t._v(" Steven Present ")]),i("v-btn",{attrs:{color:"success",fab:"",small:""},on:{click:t.back}},[i("v-icon",[t._v("mdi-home")])],1)],1),i("v-main",[i("router-view",{staticClass:"fill-height"})],1)],1)},s=[],r={name:"App",data:function(){return{item:1,items:[{text:"Real-Time",icon:"mdi-clock"},{text:"Audience",icon:"mdi-account"},{text:"Conversions",icon:"mdi-flag"}]}},methods:{back:function(){this.$router.back(-1)},about:function(){this.$router.push("/about")}}},o=r,c=i("2877"),l=i("6544"),d=i.n(l),u=i("7496"),p=i("40dc"),m=i("8336"),h=i("132d"),v=i("f6c4"),f=i("2fa4"),_=Object(c["a"])(o,n,s,!1,null,null,null),g=_.exports;d()(_,{VApp:u["a"],VAppBar:p["a"],VBtn:m["a"],VIcon:h["a"],VMain:v["a"],VSpacer:f["a"]});var w=i("9483");Object(w["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});i("d3b7"),i("3ca3"),i("ddb0");var b=i("8c4f"),x=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("hello-world")},y=[],S=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[i("v-row",{attrs:{align:"center",justify:"center"}},[i("v-col",{attrs:{cols:"12",sm:"10",md:"2"}},[i("v-card",{staticClass:"elevation-12"},[i("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[i("v-toolbar-title",[t._v("登录")])],1),i("v-card-text",[i("v-form",[i("v-text-field",{attrs:{label:"Username",name:"uid","prepend-icon":"mdi-account",type:"text"},model:{value:t.uid,callback:function(e){t.uid=e},expression:"uid"}}),i("input",{staticStyle:{display:"none"}})],1)],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"primary"},on:{click:t.login}},[t._v("确认")])],1)],1)],1)],1)],1)},k=[],C=(i("25f0"),i("b0c0"),i("bc3a")),V=i.n(C),q=i("4328"),T=i.n(q),j={name:"HelloWorld",data:function(){return{uid:""}},methods:{login:function(){var t=this,e=T.a.stringify({userName:this.uid.toString(),password:"m9rPL8ZJAVjI1hmN7ueCHF3pyNONTNIK2OudSsKZDYDoV+/PeTyl5IuJscjXgDzTbqmff3pgC5nc\nkqim8mZHoMM9JOcC3Ih4u49ew8IXSX1vSfEuFPyFOZT64YwkcEZGpErWXTeq5IAwK+tsQfyfEO8o\nt3UFT866TYxUOobJAEk=\n",passwordType:"1"}),i={method:"post",url:t.$api_base+"/Login/StudentLogin",headers:{"Content-Type":" application/x-www-form-urlencoded"},data:e};V()(i).then((function(e){if(200!=e.data.statusCode)return console.error("unknown error"),void t.$message.error("未知的用户");window.localStorage.setItem("token",e.data.data.tokenString),window.localStorage.setItem("guid",e.data.data.guid),window.localStorage.setItem("name",e.data.data.name),window.localStorage.setItem("gradeGuid",e.data.data.gradeGuid),t.$message.success("你好，"+e.data.data.name),t.$router.push("/lunch")})).catch((function(e){t.$message.warning("跨源异常 "+e)}))}}},$=j,A=i("b0af"),R=i("99d9"),I=i("62ad"),L=i("a523"),O=i("4bd4"),P=i("0fd9"),E=i("8654"),U=i("71d9"),M=i("2a7f"),N=Object(c["a"])($,S,k,!1,null,null,null),H=N.exports;d()(N,{VBtn:m["a"],VCard:A["a"],VCardActions:R["a"],VCardText:R["c"],VCol:I["a"],VContainer:L["a"],VForm:O["a"],VRow:P["a"],VSpacer:f["a"],VTextField:E["a"],VToolbar:U["a"],VToolbarTitle:M["a"]});var z={name:"Home",components:{HelloWorld:H}},B=z,D=Object(c["a"])(B,x,y,!1,null,null,null),G=D.exports,F=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-row",{attrs:{"no-gutters":""}},[i("v-navigation-drawer",{staticClass:"fill-height",style:"transition: all .25s;"+(t.clips?"":"width:56px"),attrs:{permanent:""}},[i("v-row",{staticClass:"fill-height",attrs:{"no-gutters":""}},[i("v-navigation-drawer",{attrs:{"mini-variant":"","mini-variant-width":"56",permanent:""}},[i("v-list-item",{staticClass:"px-2"},[i("v-list-item-avatar",[i("v-avatar",{staticStyle:{cursor:"pointer"},attrs:{color:"indigo",size:"36"},on:{click:function(e){t.clips=!t.clips}}},[i("span",{staticClass:"white--text"},[t._v(" "+t._s(t.name.substring(1,t.name.length))+" ")])])],1)],1),i("v-divider"),i("v-list",{attrs:{dense:"",nav:""}},[i("v-list-item-group",{attrs:{color:"primary"},model:{value:t.subject_id,callback:function(e){t.subject_id=e},expression:"subject_id"}},t._l(t.subject,(function(e){return i("v-list-item",{key:e.id,on:{click:function(i){return t.handle_switch_subject(e.id)}}},[i("v-list-item-content",[i("v-list-item-title",[i("h2",{staticStyle:{"margin-top":"2px","margin-left":"2px"}},[t._v(" "+t._s(e.text)+" ")])])],1)],1)})),1)],1)],1),i("v-col",[i("v-row",{directives:[{name:"show",rawName:"v-show",value:t.clips,expression:"clips"}],staticStyle:{"padding-top":"10px","padding-left":"30px","margin-bottom":"-8px"},attrs:{align:"center"}},[i("v-switch",{on:{click:t.switch_test},model:{value:t.show_test,callback:function(e){t.show_test=e},expression:"show_test"}}),i("span",[t._v("查看考试")])],1),i("v-divider",{directives:[{name:"show",rawName:"v-show",value:t.clips,expression:"clips"}]}),i("v-list",{directives:[{name:"show",rawName:"v-show",value:t.clips,expression:"clips"}],ref:"scrolling",staticClass:"grow fill-height",staticStyle:{transition:"all 0.25s","max-width":"200px","max-height":"calc(100vh - 121px)",overflow:"auto","padding-top":"0"},on:{scroll:function(e){return t.handle_scroll(e)}}},[i("v-list-item-group",{attrs:{color:"primary"},model:{value:t.sidebar_id,callback:function(e){t.sidebar_id=e},expression:"sidebar_id"}},t._l(t.items,(function(e,a){return i("v-list-item",{key:a,on:{click:function(i){return t.get_detail(e)}}},[i("v-list-item-title",{staticStyle:{"text-overflow":"ellipsis"},attrs:{title:e.title},domProps:{textContent:t._s(e.title)}})],1)})),1)],1)],1)],1)],1),i("v-main",{staticStyle:{margin:"0",padding:"0"}},[i("v-slider",{staticStyle:{margin:"14px 20px -12px 20px"},attrs:{min:"5",max:"100"},on:{click:t.set_limit,end:t.set_limit,mousedown:t.set_limit,mouseup:t.set_limit},model:{value:t.show_width,callback:function(e){t.show_width=e},expression:"show_width"}}),i("v-divider"),i("v-main",{ref:"main_view",style:"margin: 0; padding: 10px; max-width: calc(100vw - "+(t.clips?"280px":"73px")+"); max-height: calc(100vh - 138px); overflow: auto;"},[null!=t.current_assignment?i("assignment_detail",{key:t.current_assignment.guid,style:"max-width:"+t.show_width+"%;",attrs:{item_info:t.current_assignment,clip:t.clips,small:t.show_width<=20,is_exam:t.show_test}}):t._e()],1)],1)],1)},J=[],X=(i("99af"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",[i("v-card-title",[i("span",[t._v(t._s(t.item_info.title))]),i("v-spacer"),t.is_exam?i("v-btn",{staticStyle:{"margin-right":"10px"},attrs:{color:"primary",fab:"","x-small":""},on:{click:t.score_query}},[i("v-icon",[t._v("mdi-book-search")])],1):t._e(),i("v-btn",{attrs:{color:t.force_answer?"warning":"success",fab:"","x-small":""},on:{click:function(e){t.force_answer=!t.force_answer}}},[t.force_answer?i("v-icon",[t._v("mdi-eye-outline")]):i("v-icon",[t._v("mdi-eye")])],1)],1),i("v-card-subtitle",[t._v(t._s(t.item_info.teacherName))]),i("div",{attrs:{id:"card-body"}},[i("v-expansion-panels",{attrs:{accordion:""},model:{value:t.step_id,callback:function(e){t.step_id=e},expression:"step_id"}},t._l(t.steps,(function(e,a){return i("v-expansion-panel",{key:a},[i("v-expansion-panel-header",[i("h3",[t._v(t._s(e.stepName))])]),i("v-divider"),i("v-expansion-panel-content",{staticStyle:{"padding-top":"10px"}},t._l(e.step_detail,(function(e,n){return i("div",{key:e.contentIndex},[0===e.type?i("div",[e.content?i("div",{staticClass:"limit",domProps:{innerHTML:t._s(e.content)}}):t._e(),t._l(e.attachmentResources,(function(e){return i("div",{key:e.guid},[0!==e.resourceType?i("v-list-item",{on:{click:function(i){return t.open_file(e.extension,e.title,e.guid)}}},[i("v-list-item-avatar",[".mp4"===e.extension||".mov"===e.extension||".avi"===e.extension||".ts"===e.extension||".m4v"===e.extension||".flv"===e.extension||".mkv"===e.extension?i("v-icon",{staticClass:"amber white--text"},[t._v(" mdi-video ")]):".mp3"===e.extension||".wma"===e.extension||".wav"===e.extension||".ogg"===e.extension||".aac"===e.extension?i("v-icon",{staticClass:"light-green white--text"},[t._v(" mdi-music-box ")]):i("v-icon",{staticClass:"blue white--text"},[t._v("mdi-file")])],1),i("v-list-item-content",[i("v-list-item-title",{domProps:{innerHTML:t._s(e.title)}}),i("v-list-item-subtitle",{domProps:{innerHTML:t._s(e.extension)}})],1)],1):i("span",{staticClass:"limit",domProps:{innerHTML:t._s(e.title)}})],1)}))],2):t._e(),1===e.type?i("div",[i("v-card",{staticStyle:{margin:"30px 0",transition:"all 0.25s"}},[i("v-card-subtitle",[t._v(" "+t._s(e.contentIndex)+". "+t._s(e.question.questionType)+" ")]),i("div",{staticClass:"card-body",staticStyle:{padding:"20px"}},[i("div",{staticClass:"limit",staticStyle:{margin:"10px 0"},domProps:{innerHTML:t._s(e.question.content)}}),i("v-row",[t.force_answer?t._e():i("v-btn",{staticStyle:{transition:"all 0.25s","margin-bottom":"10px","margin-left":"5%"},attrs:{small:t.clip&&!t.is_small,"x-small":!t.clip||t.is_small,color:e.show_ans?"warning":"primary"},on:{click:function(e){return t.show_ans(a,n)}}},[t._v(t._s(e.show_ans?"关闭":"查看")+"答案 ")])],1),i("v-expand-transition",[i("v-card",{directives:[{name:"show",rawName:"v-show",value:e.show_ans||t.force_answer,expression:"detail.show_ans || force_answer"}],staticStyle:{"margin-top":"10px","margin-left":"10px","margin-right":"10px"}},[i("v-card-subtitle",{staticStyle:{"padding-top":"8px","padding-bottom":"8px"}},[t._v("答案 ")]),i("v-divider"),t._l(e.question.answer,(function(e,a){return i("div",{key:a,staticClass:"limit",staticStyle:{padding:"8px 8px 8px 15px"},domProps:{innerHTML:t._s(e)}})})),""===e.question.answer[0]?i("div",{staticStyle:{padding:"0 8px 8px 15px","margin-top":"-10px"}},[t._v(" 这里空空如也! ")]):t._e(),"<p><br></p>"!==e.question.analysis?i("v-divider"):t._e(),"<p><br></p>"!==e.question.analysis?i("v-card-subtitle",{staticStyle:{"padding-top":"8px","padding-bottom":"8px"}},[t._v("解析 ")]):t._e(),"<p><br></p>"!==e.question.analysis?i("v-divider"):t._e(),"<p><br></p>"!==e.question.analysis?i("div",{staticClass:"limit",staticStyle:{padding:"8px 8px 8px 15px"},domProps:{innerHTML:t._s(e.question.analysis)}}):t._e(),e.attachmentResources.length?i("v-divider"):t._e(),e.attachmentResources.length?i("v-card-subtitle",{staticStyle:{"padding-top":"8px","padding-bottom":"8px"}},[t._v("附件 ")]):t._e(),e.attachmentResources.length?i("v-divider"):t._e(),t._l(e.attachmentResources,(function(e){return i("div",{key:e.guid},[0!==e.resourceType?i("v-list-item",{on:{click:function(i){return t.open_file(e.extension,e.title,e.guid)}}},[i("v-list-item-avatar",[".mp4"===e.extension||".mov"===e.extension||".avi"===e.extension||".ts"===e.extension||".m4v"===e.extension||".flv"===e.extension||".mkv"===e.extension?i("v-icon",{staticClass:"amber white--text"},[t._v(" mdi-video ")]):".mp3"===e.extension||".wma"===e.extension||".wav"===e.extension||".ogg"===e.extension||".aac"===e.extension?i("v-icon",{staticClass:"light-green white--text"},[t._v(" mdi-music-box ")]):i("v-icon",{staticClass:"blue white--text"},[t._v("mdi-file ")])],1),i("v-list-item-content",[i("v-list-item-title",{domProps:{innerHTML:t._s(e.title)}}),i("v-list-item-subtitle",{domProps:{innerHTML:t._s(e.extension)}})],1)],1):i("span",{staticClass:"limit",domProps:{innerHTML:t._s(e.title)}})],1)}))],2)],1)],1)],1)],1):t._e()])})),0)],1)})),1)],1)],1)}),W=[],Z=i("1da1"),Y=(i("96cf"),{name:"assignment_detail",data:function(){return{force_answer:!1,steps:[],step_id:-1}},methods:{score_query:function(){var t=this.$router.resolve({path:"/grade",query:{guid:this.info.guid,name:this.item_info.title}});window.open(t.href,"_blank")},open_file:function(t,e,i){if(""!==t)if(".mp4"===t||".mov"===t||".avi"===t||".ts"===t||".m4v"===t||".flv"===t||".mkv"===t){var a=this.$router.resolve({path:"/video_viewer",query:{guid:i,name:e,ext:t}});window.open(a.href,"_blank")}else if(".mp3"===t||".wma"===t||".wav"===t||".ogg"===t||".aac"===t){var n=this.$api_base+"/ResourceCenter/Resource/ResourcContent/"+i+"."+t,s=this.$router.resolve({path:"/audio_viewer",query:{src:n,name:e,artist:this.item_info.teacherName}});window.open(s.href,"_blank")}else{var r=this.$api_base+"/ResourceCenter/Resource/ResourcContent/"+i+"."+t,o=this.$router.resolve({path:"/pdf_viewer",query:{src:r,name:e}});window.open(o.href,"_blank")}},show_ans:function(t,e){var i=this.steps[t];i.step_detail[e].show_ans=!i.step_detail[e].show_ans,a["default"].set(this.steps,t,i)}},props:["item_info","clip","is_small","is_exam"],mounted:function(){var t=Object(Z["a"])(regeneratorRuntime.mark((function t(){var e,i,a,n,s,r,o,c,l,d,u,p;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=this,this.info=this.item_info,this.token=window.localStorage.getItem("token"),i={method:"get",url:this.$api_base+"/SeniorThreeExercise/StudentSystem/TeacherAssignmentStep/"+this.item_info.guid+"?teacherAssignmentType=1",headers:{Authorization:"Bearer "+this.token}},t.prev=4,t.next=7,V()(i);case 7:e.steps=t.sent,e.steps=e.steps.data.data,a=0;case 10:if(!(a<e.steps.length)){t.next=46;break}n=e.steps[a],e.steps[a]["step_detail"]=[],s=1,r=10;case 15:if(!(r>=10)){t.next=43;break}return o='{"number":"10","page":"'+s+'","teacherAssignmentStepId":"'+n.id+'"}',c={method:"post",url:this.$api_base+"/SeniorThreeExercise/StudentSystem/GetGetLessonContent",headers:{Authorization:"Bearer "+e.token,"Content-Type":"application/json;charset=utf-8"},data:o},t.next=20,V()(c);case 20:l=t.sent,l=l.data.data,d=0;case 23:if(!(d<l.length)){t.next=38;break}l[d]["show_ans"]=!1,l[d].content&&(l[d].content=l[d].content.replaceAll('src="','src="https://bdfzres.lexuewang.cn:5002')),u=0;case 27:if(!(u<l[d].attachmentResources.length)){t.next=34;break}if(0===l[d].attachmentResources[u].resourceType){t.next=30;break}return t.abrupt("continue",31);case 30:l[d].attachmentResources[u].title=l[d].attachmentResources[u].title.replaceAll('src="','src="https://bdfzres.lexuewang.cn:5002');case 31:u++,t.next=27;break;case 34:if(null!=l[d]["question"])for(l[d]["question"].content=l[d]["question"].content.replaceAll('src="','src="https://bdfzres.lexuewang.cn:5002'),l[d]["question"].analysis=l[d]["question"].analysis.replaceAll('src="','src="https://bdfzres.lexuewang.cn:5002'),p=0;p<l[d]["question"].answer.length;p++)l[d]["question"].answer[p]=l[d]["question"].answer[p].replaceAll('src="','src="https://bdfzres.lexuewang.cn:5002');case 35:d++,t.next=23;break;case 38:e.steps[a]["step_detail"]=e.steps[a]["step_detail"].concat(l),s+=1,r=l.length,t.next=15;break;case 43:a++,t.next=10;break;case 46:console.log(e.steps),this.$forceUpdate(),t.next=53;break;case 50:t.prev=50,t.t0=t["catch"](4),console.error(t.t0);case 53:case"end":return t.stop()}}),t,this,[[4,50]])})));function e(){return t.apply(this,arguments)}return e}()}),K=Y,Q=(i("c2f3"),i("ce7e")),tt=i("0789"),et=i("cd55"),it=i("49e2"),at=i("c865"),nt=i("0393"),st=i("da13"),rt=i("8270"),ot=i("5d23"),ct=Object(c["a"])(K,X,W,!1,null,"6946e318",null),lt=ct.exports;d()(ct,{VBtn:m["a"],VCard:A["a"],VCardSubtitle:R["b"],VCardTitle:R["d"],VDivider:Q["a"],VExpandTransition:tt["a"],VExpansionPanel:et["a"],VExpansionPanelContent:it["a"],VExpansionPanelHeader:at["a"],VExpansionPanels:nt["a"],VIcon:h["a"],VListItem:st["a"],VListItemAvatar:rt["a"],VListItemContent:ot["a"],VListItemSubtitle:ot["b"],VListItemTitle:ot["c"],VRow:P["a"],VSpacer:f["a"]});var dt={name:"lunch",components:{assignment_detail:lt},data:function(){return{show_test:!1,show_width:100,clips:!0,name:"",current_assignment:null,is_end:!1,token:"",subject_id:-1,sidebar_id:10,max_id:1,subject:[{text:"语",id:"01"},{text:"数",id:"02"},{text:"英",id:"03"},{text:"物",id:"04"},{text:"化",id:"05"},{text:"生",id:"06"},{text:"史",id:"07"},{text:"地",id:"08"},{text:"政",id:"09"}],items:[]}},methods:{switch_test:function(){this.handle_switch_subject("0"+(this.subject_id+1).toString())},set_limit:function(){this.show_width=this.show_width>=25?this.show_width:25},d:function(){console.log("get")},load_more:function(){if(!this.is_end){var t="0"+(this.subject_id+1).toString();this.max_id+=1;var e=this,i={method:"get",url:this.$api_base+"/SeniorThreeExercise/StudentSystem/GetAssignmentBySubject?subjectId="+t+"&PageIndex="+e.max_id+"&PageNum=20&teacherAssignmentType="+(this.show_test?"2":"1"),headers:{Authorization:"Bearer "+this.token}};V()(i).then((function(t){t.data.data.length<20&&(e.is_end=!0),e.items=e.items.concat(t.data.data)})).catch((function(t){console.log(t)}))}},handle_switch_subject:function(t){this.$refs.scrolling.$el.scrollTo(0,0),this.is_end=!1,this.sidebar_id=0,this.max_id=1;var e=this,i={method:"get",url:this.$api_base+"/SeniorThreeExercise/StudentSystem/GetAssignmentBySubject?subjectId="+t+"&PageIndex="+e.max_id+"&PageNum=20&teacherAssignmentType="+(this.show_test?"2":"1"),headers:{Authorization:"Bearer "+this.token}};V()(i).then((function(t){e.items=t.data.data})).catch((function(t){console.log(t)}))},get_detail:function(t){this.current_assignment=t},handle_scroll:function(t){parseInt(t.target.scrollTop+t.target.clientHeight)===t.target.scrollHeight&&this.load_more()}},mounted:function(){this.$refs.scrolling.$el.addEventListener("scroll",this.handle_scroll),this.token=window.localStorage.getItem("token"),this.name=window.localStorage.getItem("name"),this.subject_id=-1,this.sidebar_id=-1}},ut=dt,pt=i("8212"),mt=i("8860"),ht=i("1baa"),vt=i("f774"),ft=i("ba0d"),_t=i("b73d"),gt=Object(c["a"])(ut,F,J,!1,null,null,null),wt=gt.exports;d()(gt,{VAvatar:pt["a"],VCol:I["a"],VDivider:Q["a"],VList:mt["a"],VListItem:st["a"],VListItemAvatar:rt["a"],VListItemContent:ot["a"],VListItemGroup:ht["a"],VListItemTitle:ot["c"],VMain:v["a"],VNavigationDrawer:vt["a"],VRow:P["a"],VSlider:ft["a"],VSwitch:_t["a"]});var bt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticStyle:{"flex-direction":"column"},attrs:{fluid:""}},[i("v-card",{staticStyle:{width:"60%","min-width":"400px",padding:"10px"}},[i("v-card-title",[i("span",[t._v("视频预览")]),i("v-spacer"),i("v-btn",{attrs:{small:"",fab:"",color:"primary"},on:{click:t.handle_download}},[i("v-icon",[t._v("mdi-download")])],1)],1),i("v-card-subtitle",[t._v(t._s(t.name))]),i("video-player",{ref:"video_player",staticClass:"vjs-custom-skin",staticStyle:{"border-radius":"4px",overflow:"hidden"},attrs:{playsinline:!0,options:t.play_options}})],1)],1)},xt=[],yt=(i("ac1f"),i("5319"),i("2b3d"),{name:"VideoViewer.vue",data:function(){return{name:"",guid:"",play_options:{playbackRates:[.5,.75,1,1.25,1.5,2],autoplay:!1,muted:!1,loop:!1,preload:"auto",language:"zh-CN",aspectRatio:"16:9",fluid:!0,sources:[{type:"video/mp4",src:"https://www.html5videoplayer.net/videos/madagascar3.mp4"}],poster:"",notSupportedMessage:"此视频暂无法播放，请稍后再试",controlBar:{timeDivider:!0,durationDisplay:!0,remainingTimeDisplay:!0,fullscreenToggle:!0}}}},methods:{handle_download:function(){var t=this.play_options.sources[0].src.replace("https://bdfzres.lexuewang.cn:5002",this.$api_base),e=this.name.replaceAll(" ","");fetch(t).then((function(t){return t.blob()})).then((function(t){var i=document.createElement("a"),a=window.URL.createObjectURL(t);i.download=e,i.href=a,i.click(),window.revokeObjectURL(a)}))}},mounted:function(){this.name=this.$route.query.name,this.guid=this.$route.query.guid,this.ext=this.$route.query.ext,this.play_options.sources[0].src="https://bdfzres.lexuewang.cn:5002/ResourceCenter/Resource/ResourcContent/"+this.guid+"."+this.ext,console.log(this.play_options),this.$forceUpdate()}}),St=yt,kt=Object(c["a"])(St,bt,xt,!1,null,null,null),Ct=kt.exports;d()(kt,{VBtn:m["a"],VCard:A["a"],VCardSubtitle:R["b"],VCardTitle:R["d"],VContainer:L["a"],VIcon:h["a"],VSpacer:f["a"]});var Vt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticStyle:{"flex-direction":"column"},attrs:{fluid:""}},[i("v-card",{staticStyle:{width:"100%",height:"100%"}},[i("v-col",{staticStyle:{height:"100%"}},[i("v-card-title",[i("span",[t._v("文件预览")]),i("v-spacer"),i("v-btn",{staticClass:"btn",attrs:{fab:"",small:"",color:"success"},on:{click:t.full_screen}},[i("v-icon",[t._v("mdi-fullscreen")])],1),i("v-btn",{staticClass:"btn",attrs:{fab:"",small:"",color:"primary"},on:{click:t.handle_download}},[i("v-icon",[t._v("mdi-download")])],1)],1),i("v-card-subtitle",[t._v(t._s(t.name))]),i("iframe",{staticStyle:{width:"100%",height:"calc(100% - 105px)"},attrs:{src:t.src,frameborder:"0"}})],1)],1)],1)},qt=[],Tt={name:"PDFViewer",components:{},data:function(){return{src:"",name:""}},methods:{full_screen:function(){window.open(this.src,"_blank")},handle_download:function(){var t=this.src.replace("https://bdfzres.lexuewang.cn:5002",this.$api_base),e=this.name.replaceAll(" ","")+".pdf";fetch(t).then((function(t){return t.blob()})).then((function(t){var i=document.createElement("a"),a=window.URL.createObjectURL(t);i.download=e,i.href=a,i.click(),window.revokeObjectURL(a)}))}},mounted:function(){this.name=this.$route.query.name,this.src=this.$route.query.src,this.$forceUpdate()}},jt=Tt,$t=(i("bbd9"),Object(c["a"])(jt,Vt,qt,!1,null,"96d727fe",null)),At=$t.exports;d()($t,{VBtn:m["a"],VCard:A["a"],VCardSubtitle:R["b"],VCardTitle:R["d"],VCol:I["a"],VContainer:L["a"],VIcon:h["a"],VSpacer:f["a"]});var Rt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticStyle:{"flex-direction":"column"},attrs:{fluid:""}},[i("v-card",{staticStyle:{width:"30%",padding:"10px","min-width":"400px","margin-top":"10px"}},[i("v-card-title",[i("span",[t._v("音频预览")]),i("v-spacer"),i("v-btn",{attrs:{small:"",fab:"",color:"primary"},on:{click:t.handle_download}},[i("v-icon",[t._v("mdi-download")])],1)],1),i("v-card-subtitle",[t._v(t._s(t.audio.name))]),i("aplayer",{attrs:{audio:t.audio,autoplay:"false",volume:"1",loop:"one"}})],1)],1)},It=[],Lt={name:"AudioViewer",data:function(){return{audio:{theme:"#1976d2",name:"加载中",artist:"未知",url:"http://music.163.com/song/media/outer/url?id=317151.mp3",cover:"https://source.unsplash.com/300x300/?music"}}},methods:{handle_download:function(){var t=this.audio.url.replace("https://bdfzres.lexuewang.cn:5002",this.$api_base),e=this.audio.name.replaceAll(" ","");fetch(t).then((function(t){return t.blob()})).then((function(t){var i=document.createElement("a"),a=window.URL.createObjectURL(t);i.download=e,i.href=a,i.click(),window.revokeObjectURL(a)}))}},mounted:function(){this.audio.name=this.$route.query.name,this.audio.url=this.$route.query.src,this.audio.artist=this.$route.query.artist}},Ot=Lt,Pt=Object(c["a"])(Ot,Rt,It,!1,null,"19f4b10a",null),Et=Pt.exports;d()(Pt,{VBtn:m["a"],VCard:A["a"],VCardSubtitle:R["b"],VCardTitle:R["d"],VContainer:L["a"],VIcon:h["a"],VSpacer:f["a"]});var Ut=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticStyle:{"flex-direction":"column"},attrs:{fluid:""}},[i("v-card",{staticStyle:{width:"70%","min-width":"400px",padding:"10px"}},[i("v-card-title",[i("span",[t._v("考试得分")])]),i("v-card-subtitle",[t._v(t._s(t.name))]),t.is_return?i("div",{staticStyle:{padding:"0 20px"}},[i("v-row",{staticStyle:{padding:"10px"}},[i("v-col",[i("div",{staticClass:"statistic"},[i("div",{staticClass:"statistic-title"},[t._v("我的分数")]),i("div",{staticClass:"statistic-content"},[t._v(" "+t._s(t.statistic.myScore)+" ")])])]),i("v-col",[i("div",{staticClass:"statistic"},[i("div",{staticClass:"statistic-title"},[t._v("平均分")]),i("div",{staticClass:"statistic-content"},[t._v(" "+t._s(t.average)+" ")])])]),i("v-col",[i("div",{staticClass:"statistic"},[i("div",{staticClass:"statistic-title"},[t._v("最高分")]),i("div",{staticClass:"statistic-content"},[t._v(" "+t._s(t.statistic.maxScore)+" ")])])])],1),i("div",{staticClass:"statistic statistic-title",staticStyle:{"margin-left":"10px"}},[t._v(" 得分详情 ")]),i("div",t._l(t.answer_detail,(function(e,a){return i("v-chip",{key:a,staticClass:"ma-1",attrs:{"text-color":"white",color:2===e.studentAnswerResult?"green":3===e.studentAnswerResult?"orange":"red"},on:{click:function(i){return i.stopPropagation(),t.open_detail(e.studentAnswerGuid)}}},[i("v-avatar",{class:2===e.studentAnswerResult?"green darken-3":3===e.studentAnswerResult?"orange darken-3":"red darken-3"},[t._v(" "+t._s(e.questionOrder)+" ")]),i("span",{staticStyle:{margin:"0 5px"}},[t._v(t._s(e.studentScore))])],1)})),1),i("v-divider",{staticStyle:{"margin-top":"10px"}}),i("div",[i("v-simple-table",[i("thead",[i("tr",[i("th",{staticClass:"text-left"},[t._v("排名")]),i("th",{staticClass:"text-left"},[t._v("姓名")]),i("th",{staticClass:"text-left"},[t._v("得分")])])]),i("tbody",t._l(t.rankings,(function(e){return i("tr",{key:e.studentName,class:e.isMine?"blue lighten-5":""},[i("td",[t._v(t._s(e.rankingNum))]),i("td",[t._v(t._s(e.studentName))]),i("td",[t._v(t._s(e.score))])])})),0)])],1),i("div",{staticClass:"statistic statistic-title",staticStyle:{"margin-left":"10px","margin-top":"10px"}},[t._v(" 评语 ")]),i("div",{staticStyle:{padding:"0 20px","margin-bottom":"20px"},domProps:{textContent:t._s(t.comment)}})],1):i("div",[i("v-img",{attrs:{src:"https://iconfont.alicdn.com/t/ceb97b38-32c1-4bd4-ba6a-2c7dadd1a45f.png","aspect-ratio":"1.7"}}),i("h2",{staticStyle:{"text-align":"center",color:"rgba(0, 0, 0, 0.6)","font-weight":"400"}},[t._v(" 老师未下发成绩结果 ")])],1)],1),i("v-dialog",{attrs:{width:"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",[i("v-card-title",{staticClass:"headline",attrs:{"primary-title":""}},[t._v(" 作答详情")]),i("div",{staticStyle:{padding:"10px 20px"}},[i("v-row",{staticStyle:{padding:"10px"}},[i("v-col",[i("div",{staticClass:"statistic"},[i("div",{staticClass:"statistic-title"},[t._v("我的分数")]),i("div",{staticClass:"statistic-content"},[t._v(" "+t._s(t.question_detail.studentScore)+" ")])])]),i("v-col",[i("div",{staticClass:"statistic"},[i("div",{staticClass:"statistic-title"},[t._v("试题状态")]),i("div",{staticClass:"statistic-content"},[2===t.question_detail.answerResult?i("span",[t._v("✔")]):4===t.question_detail.answerResult?i("span",[t._v("❌")]):i("h2",{staticClass:"orange--text"},[t._v("⍻")])])])]),""!==t.question_detail.answer?i("v-col",[i("div",{staticClass:"statistic"},[i("div",{staticClass:"statistic-title"},[t._v("我的选项")]),i("div",{staticClass:"statistic-content"},[t._v(" "+t._s(t.question_detail.answer)+" ")])])]):t._e()],1),null!==t.question_detail.answerUrl?i("div",[i("v-row",[i("v-col",{attrs:{cols:"3"}},[i("v-card",{attrs:{"max-width":"100px","max-height":"100px"},on:{click:function(e){return t.open_img(0)}}},[i("v-img",{attrs:{"aspect-ratio":"1",src:t.baseurl+t.question_detail.answerUrl}})],1)],1),i("v-col",{attrs:{cols:"3"}},[i("v-card",{attrs:{"max-width":"100px","max-height":"100px"},on:{click:function(e){return t.open_img(1)}}},[i("v-img",{attrs:{"aspect-ratio":"1",src:t.question_detail.answerUrl2?t.baseurl+t.question_detail.answerUrl2:"https://iconfont.alicdn.com/t/1bc2327b-a835-4efb-8528-c4aa3722dfe2.png"}})],1)],1),i("v-col",{attrs:{cols:"3"}},[i("v-card",{attrs:{"max-width":"100px","max-height":"100px"},on:{click:function(e){return t.open_img(2)}}},[i("v-img",{attrs:{"aspect-ratio":"1",src:t.question_detail.answerUrl3?t.baseurl+t.question_detail.answerUrl3:"https://iconfont.alicdn.com/t/1bc2327b-a835-4efb-8528-c4aa3722dfe2.png"}})],1)],1)],1)],1):t._e()],1),i("v-divider"),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"error"},on:{click:function(e){t.dialog=!1}}},[t._v(" 关闭")])],1)],1)],1)],1)},Mt=[],Nt=(i("b680"),i("0808"),i("6944")),Ht={name:"Grade.vue",data:function(){return{baseurl:"",guild:"",student_guid:"",token:"",is_return:!0,answer_detail:[],rankings:[],name:"",comment:"",statistic:{},dialog:!1,question_detail:{},total_detail:[]}},computed:{average:function(){return void 0===this.statistic.averageScore?"":this.statistic.averageScore.toFixed(2)},images:function(){var t=[];if(this.question_detail!=={})return null!==this.question_detail.answerUrl&&void 0!==this.question_detail.answerUrl&&t.push(this.baseurl+this.question_detail.answerUrl),null!==this.question_detail.answerUrl2&&void 0!==this.question_detail.answerUrl&&t.push(this.baseurl+this.question_detail.answerUrl2),null!==this.question_detail.answerUrl3&&void 0!==this.question_detail.answerUrl&&t.push(this.baseurl+this.question_detail.answerUrl3),t}},methods:{open_img:function(t){if(!(t>=this.images.length)){var e=Object(Nt["api"])({options:{loading:!0,focus:!1,initialViewIndex:t,button:!0},images:this.images});e.show()}},open_detail:function(t){if(0!==this.total_detail.length){for(var e in this.total_detail)if(this.total_detail[e].studentAnswerGuid===t){this.question_detail=this.total_detail[e];break}this.dialog=!0}}},mounted:function(){this.baseurl=this.$api_base,this.token=window.localStorage.getItem("token"),this.name=this.$route.query.name,this.guid=this.$route.query.guid;var t={method:"get",url:"".concat(this.$api_base,"/SeniorThreeExercise/StudentSystem/TestStudentAnswers/").concat(this.guid),headers:{Authorization:"Bearer ".concat(this.token)}},e=this;if(V()(t).then((function(t){500!==t.data.statusCode?(e.answer_detail=t.data.data.studentAnswersResultDetailOutputDtos,e.rankings=t.data.data.testRankings,e.comment=t.data.data.comment,e.statistic=t.data.data.scoreStatistic,e.$forceUpdate()):e.is_return=!1})).catch((function(t){console.error(t)})),this.is_return){this.student_guid=window.localStorage.getItem("guid");var i={method:"get",url:"".concat(this.$api_base,"/SeniorThreeExercise/StudentSystem/StudentAnswersBysceneGuid?studentGuid=").concat(this.student_guid,"&sceneGuid=").concat(this.guid,"&api-version=2"),headers:{Authorization:"Bearer ".concat(this.token)}};V()(i).then((function(t){e.total_detail=t.data.data})).catch((function(t){console.error(t)}))}}},zt=Ht,Bt=(i("294b"),i("cc20")),Dt=i("169a"),Gt=i("adda"),Ft=i("1f4f"),Jt=Object(c["a"])(zt,Ut,Mt,!1,null,"9aaa8022",null),Xt=Jt.exports;d()(Jt,{VAvatar:pt["a"],VBtn:m["a"],VCard:A["a"],VCardActions:R["a"],VCardSubtitle:R["b"],VCardTitle:R["d"],VChip:Bt["a"],VCol:I["a"],VContainer:L["a"],VDialog:Dt["a"],VDivider:Q["a"],VImg:Gt["a"],VRow:P["a"],VSimpleTable:Ft["a"],VSpacer:f["a"]}),a["default"].use(b["a"]);var Wt=[{path:"/",name:"Home",component:G},{path:"/lunch",name:"Lunch",component:wt},{path:"/grade",name:"Grade",component:Xt},{path:"/video_viewer",name:"VideoViewer",component:Ct},{path:"/audio_viewer",name:"AudioViewer",component:Et},{path:"/pdf_viewer",name:"PDFViewer",component:At},{path:"/about",name:"About",component:function(){return i.e("about").then(i.bind(null,"f820"))}}],Zt=new b["a"]({routes:Wt}),Yt=Zt,Kt=i("f309");a["default"].use(Kt["a"]);var Qt=new Kt["a"]({}),te=i("5c96"),ee=i.n(te),ie=(i("0fae"),i("d6d3")),ae=i.n(ie),ne=(i("fda2"),i("451f"),i("cf0d")),se=i.n(ne);a["default"].use(se.a,{defaultCover:"https://github.com/u3u.pnghttps://images.unsplash.com/photo-1460036521480-ff49c08c2781?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8bXVzaWN8fHx8fHwxNjQyMTg0ODIw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",productionTip:!0}),a["default"].use(ae.a),a["default"].use(ee.a),a["default"].config.productionTip=!1,a["default"].prototype.$axios=V.a,a["default"].prototype.$api_base="https://bdfzres.lexuewang.cn:5002",new a["default"]({router:Yt,axios:V.a,vuetify:Qt,render:function(t){return t(g)}}).$mount("#app")},"9d3f":function(t,e,i){},bbd9:function(t,e,i){"use strict";i("f5f3")},c2f3:function(t,e,i){"use strict";i("9d3f")},f5f3:function(t,e,i){}});
//# sourceMappingURL=app.29193250.js.map
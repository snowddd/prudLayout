(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1855852f"],{"151e":function(t,e,i){"use strict";var n=i("f46f"),o=i.n(n);o.a},"36bd":function(t,e,i){"use strict";var n=i("4bf8"),o=i("77f1"),a=i("9def");t.exports=function(t){var e=n(this),i=a(e.length),r=arguments.length,s=o(r>1?arguments[1]:void 0,i),l=r>2?arguments[2]:void 0,c=void 0===l?i:o(l,i);while(c>s)e[s++]=t;return e}},"3ee4":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"login-warpper"},[i("top"),i("el-main",{staticClass:"login-box"},[i("div",{staticClass:"flex-pos login-pos"},[i("div",{staticClass:"login-mask"}),i("el-row",[i("el-col",{attrs:{span:24}},[i("div",{staticClass:"login-title"},[t._v("申請加入會員")])]),i("el-col",{attrs:{span:24}},[i("el-form",{ref:"loginRule",staticClass:"login-form",attrs:{model:t.loginRule,rules:t.rules}},[i("el-form-item",{attrs:{prop:"id_number"}},[i("el-input",{attrs:{"prefix-icon":"el-icon-postcard",placeholder:"身分證字號",maxlength:10},model:{value:t.loginRule.id_number,callback:function(e){t.$set(t.loginRule,"id_number",e)},expression:"loginRule.id_number"}})],1),i("el-form-item",{attrs:{prop:"user_birth"}},[i("el-input",{attrs:{"prefix-icon":"el-icon-user",placeholder:"出生年月日",maxlength:12},model:{value:t.loginRule.user_birth,callback:function(e){t.$set(t.loginRule,"user_birth",e)},expression:"loginRule.user_birth"}})],1),i("div",{staticClass:"captcha-box flex-row"},[i("el-form-item",{attrs:{prop:"captcha"}},[i("el-input",{staticClass:"captcha-input",attrs:{placeholder:"驗證碼","prefix-icon":"el-icon-c-scale-to-original",maxlength:4},model:{value:t.loginRule.captcha,callback:function(e){t.$set(t.loginRule,"captcha",e)},expression:"loginRule.captcha"}})],1),i("div",{staticClass:"captcha-img"},[i("captcha",{attrs:{identifyCode:t.identifyCode}})],1),i("div",{staticClass:"reform",on:{click:function(e){return t.refreshCode()}}},[i("i",{staticClass:"el-icon-refresh-right"})])],1),i("div",{staticClass:"flex-box"},[i("div",{staticClass:"flex-pos"},[i("el-row",{staticClass:"btn-box"},[i("el-col",{attrs:{xs:24,sm:24,md:24,lg:24}},[i("div",{staticClass:"flex-row"},[i("el-button",{staticClass:"btn-white",on:{click:t.backLogin}},[t._v("取消")]),i("el-button",{staticClass:"btn-blue",on:{click:function(e){return t.submitForm("loginRule")}}},[t._v("送出")])],1)])],1)],1)])],1)],1)],1)],1)]),i("bottom")],1)},o=[],a=i("cebc"),r=i("e9c9"),s=i("8042"),l=i("e7f8"),c=i("2f62"),u={name:"signup2",components:{top:r["a"],bottom:s["a"],Captcha:l["a"]},data:function(){var t=this,e=function(e,i,n){setTimeout(function(){i!=t.identifyCode?n(new Error("驗證碼錯誤")):n()},1e3)};return{identifyCode:"1324",identifyCodes:"0123456789abcdwerwshdjeJKDHRJHKOOPLMKQ",rules:{id_number:[{required:!0,message:"請輸入身分證字號",trigger:"blur"}],user_birth:[{required:!0,message:"請輸入出生年月日",trigger:"blur"}],captcha:[{required:!0,message:"請輸入驗證碼",trigger:"blur"},{validator:e,trigger:"blur"}]},loginRule:{id_number:"",user_birth:"",captcha:""}}},methods:Object(a["a"])({},Object(c["b"])({setToken:"login/setToken",setDialogStatus:"modal/setDialogStatus"}),{submitForm:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return e.refreshCode(),!1;e.setDialogStatus({status:!0,type:2,routeWay:"signUp3"})})},backLogin:function(){this.$router.push("/login")},checkArticle:function(){this.$router.push("/signUp2")},refreshCode:function(){this.identifyCode="",this.makeCode(this.identifyCodes,4)},randomNum:function(t,e){return e+=1,Math.floor(Math.random()*(e-t)+t)},makeCode:function(t,e){if(t)for(var i=0;i<e;i++)this.identifyCode+=t[this.randomNum(0,t.length-1)]}}),created:function(){this.refreshCode()}},d=u,h=(i("151e"),i("2877")),f=Object(h["a"])(d,n,o,!1,null,"60e80c1d",null);e["default"]=f.exports},"6c7b":function(t,e,i){var n=i("5ca1");n(n.P,"Array",{fill:i("36bd")}),i("9c6c")("fill")},"7eae":function(t,e,i){},8042:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-footer",{staticClass:"footer",attrs:{height:"8vw"}},[i("el-row",[i("el-col",{attrs:{span:24}},[i("div",{staticClass:"phone-txt"},[t._v("\n        客服中心電話：0800-015000\n      ")])])],1)],1)},o=[],a={name:"bottom",props:{msg:String}},r=a,s=(i("c186"),i("2877")),l=Object(s["a"])(r,n,o,!1,null,"32874721",null);e["a"]=l.exports},9566:function(t,e,i){"use strict";var n=i("7eae"),o=i.n(n);o.a},c186:function(t,e,i){"use strict";var n=i("e143"),o=i.n(n);o.a},e143:function(t,e,i){},e7f8:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"s-canvas"},[i("canvas",{attrs:{id:"s-canvas",width:t.contentWidth,height:t.contentHeight},on:{click:function(e){return t.randomNum()}}})])},o=[],a=(i("6c7b"),i("c5f6"),{name:"captcha",props:{identifyCode:{type:String,default:"1234"},fontSizeMin:{type:Number,default:35},fontSizeMax:{type:Number,default:35},backgroundColorMin:{type:Number,default:180},backgroundColorMax:{type:Number,default:240},colorMin:{type:Number,default:50},colorMax:{type:Number,default:160},lineColorMin:{type:Number,default:100},lineColorMax:{type:Number,default:200},dotColorMin:{type:Number,default:0},dotColorMax:{type:Number,default:255},contentWidth:{type:Number,default:120},contentHeight:{type:Number,default:40}},methods:{randomNum:function(t,e){return Math.floor(Math.random()*(e-t)+t)},randomColor:function(t,e){var i=this.randomNum(t,e),n=this.randomNum(t,e),o=this.randomNum(t,e);return"rgb("+i+","+n+","+o+")"},transparent:function(){return"rgb(255,255,255)"},drawPic:function(){var t=document.getElementById("s-canvas"),e=t.getContext("2d");e.textBaseline="bottom",e.fillStyle=this.transparent(),e.fillRect(0,0,this.contentWidth,this.contentHeight);for(var i=0;i<this.identifyCode.length;i++)this.drawText(e,this.identifyCode[i],i)},drawText:function(t,e,i){t.fillStyle=this.randomColor(this.colorMin,this.colorMax),t.font=this.randomNum(this.fontSizeMin,this.fontSizeMax)+"px SimHei";var n=(i+1)*(this.contentWidth/(this.identifyCode.length+1)),o=this.randomNum(this.fontSizeMax,this.contentHeight-5),a=this.randomNum(-10,10);t.translate(n,o),t.rotate(a*Math.PI/180),t.fillText(e,0,0),t.rotate(-a*Math.PI/180),t.translate(-n,-o)},drawLine:function(t){for(var e=0;e<8;e++)t.strokeStyle=this.randomColor(this.lineColorMin,this.lineColorMax),t.beginPath(),t.moveTo(this.randomNum(0,this.contentWidth),this.randomNum(0,this.contentHeight)),t.lineTo(this.randomNum(0,this.contentWidth),this.randomNum(0,this.contentHeight)),t.stroke()},drawDot:function(t){for(var e=0;e<100;e++)t.fillStyle=this.randomColor(0,255),t.beginPath(),t.arc(this.randomNum(0,this.contentWidth),this.randomNum(0,this.contentHeight),1,0,2*Math.PI),t.fill()}},watch:{identifyCode:function(){this.drawPic()}},mounted:function(){this.drawPic()}}),r=a,s=i("2877"),l=Object(s["a"])(r,n,o,!1,null,null,null);e["a"]=l.exports},e9c9:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-header",{staticClass:"header"},[i("el-row",[i("el-col",{attrs:{span:24}},[i("div",{staticClass:"sm-top"})]),i("el-col",{attrs:{span:24}},[i("div",{staticClass:"logo-prudential"})])],1)],1)],1)},o=[],a={name:"top",props:{msg:String}},r=a,s=(i("9566"),i("2877")),l=Object(s["a"])(r,n,o,!1,null,"3bd64921",null);e["a"]=l.exports},f46f:function(t,e,i){}}]);
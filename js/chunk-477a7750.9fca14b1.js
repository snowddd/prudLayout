(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-477a7750"],{1171:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ChangePaymentMethod",staticStyle:{margin:"0 auto","margin-top":"3rem",width:"70%"}},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("首頁")]),a("el-breadcrumb-item",[a("a",{attrs:{href:"/"}},[t._v("保單內容變更")])]),a("el-breadcrumb-item",[t._v("繳費方式變更")])],1),a("el-steps",{staticStyle:{"margin-top":"1rem","margin-bottom":"1rem"},attrs:{active:t.active}},[a("el-step",{attrs:{title:"Step 1"}}),a("el-step",{attrs:{title:"Step 2"}}),a("el-step",{attrs:{title:"Step 3"}})],1),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.paymentData,border:""}},[a("el-table-column",{attrs:{prop:"policyNumber",label:"保單號碼"}}),a("el-table-column",{attrs:{prop:"insured",label:"主要保險人"}}),a("el-table-column",{attrs:{prop:"effectiveDate",label:"生效日"}}),a("el-table-column",{attrs:{prop:"mainContract",label:"主約險種"}}),a("el-table-column",{attrs:{prop:"currency",label:"幣別"}}),a("el-table-column",{attrs:{prop:"policyStatus",label:"保單狀況"}}),a("el-table-column",{attrs:{prop:"paymentMethod",label:"繳費方式"}}),a("el-table-column",{attrs:{prop:"singlePayment",label:"躉繳件"}})],1),a("el-row",{staticStyle:{"margin-top":"1.5rem"}},[a("el-col",{attrs:{span:12}},[t._v("變更後的繳費方式：")]),a("el-col",{staticStyle:{"text-align":"left"},attrs:{span:12}},[t._v("\n      "+t._s(t.paymentMethodString)+"\n    ")])],1),a("el-row",{staticStyle:{"margin-top":"1.5rem"}},[a("el-col",{staticStyle:{"text-align":"left"},attrs:{span:24}},[a("el-input",{attrs:{"show-password":"",placeholder:"請輸入確認密碼"},model:{value:t.passwordCheck,callback:function(e){t.passwordCheck=e},expression:"passwordCheck"}})],1)],1),a("el-row",{staticStyle:{"margin-top":"1.5rem"}},[a("el-col",{attrs:{span:8}},[a("el-button",{staticClass:"btn-blue",on:{click:function(e){return t.routerBack()}}},[t._v("上一步")])],1),a("el-col",{attrs:{span:8}},[a("el-button",{staticClass:"btn-blue",on:{click:function(e){return t.submit()}}},[t._v("確定送出")])],1),a("el-col",{attrs:{span:8}},[a("el-button",{staticClass:"btn-blue"},[t._v("取消，回首頁")])],1)],1)],1)},s=[],n=a("cebc"),l=a("2f62"),o=a("d5f8"),i={name:"ChangePaymentMethod3",data:function(){return{paymentData:[],paymentMethod:0,paymentMethodString:"",passwordCheck:"",sendData:{},active:2}},computed:Object(n["a"])({},Object(l["c"])("paymentMethod",{getPaymentData:"getPaymentData",getPaymentMethod:"getPaymentMethod"})),methods:Object(n["a"])({},Object(l["b"])({setCompleteChangeReturn:"paymentMethod/setCompleteChangeReturn"}),{routerBack:function(){this.$router.back()},submit:function(){this.passwordCheck===o.user.userPassword?this.$router.push("changePaymentMethod4"):this.$alert.alertDialog("密碼錯誤")}}),beforeMount:function(){this.getPaymentData.policyNumber||(alert("變更進行中請勿重新整理\n將導回功能首頁"),this.$router.push("changePaymentMethod")),this.paymentData[0]=this.getPaymentData,this.paymentMethod=this.getPaymentMethod,"1"===this.paymentMethod?this.paymentMethodString="自行繳納":"2"===this.paymentMethod&&(this.paymentMethodString="恢復原帳戶扣款")}},c=i,u=(a("9bee"),a("2877")),m=Object(u["a"])(c,r,s,!1,null,"0e0905ba",null);e["default"]=m.exports},"906e":function(t,e,a){},"9bee":function(t,e,a){"use strict";var r=a("906e"),s=a.n(r);s.a},d5f8:function(t){t.exports={user:{userNumber:"A123456789",userAccount:"P1911",userPassword:"DE.44"},login:{token:"",isOverThreeMonth:!1,hasEchangePermission:"y",userRole:"1",smsNumber:"",email:"",userName:"林左右"},ServerStatus:{status:!0,openTime:"14:25"},getOTP:{result:"true",msg:"327"},OTPValid:{result:"true",msg:"回應訊息"}}}}]);
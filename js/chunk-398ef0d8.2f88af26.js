(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-398ef0d8"],{"494b":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ChangePaymentMethod",staticStyle:{margin:"0 auto","margin-top":"3rem",width:"70%"}},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("首頁")]),a("el-breadcrumb-item",[a("a",{attrs:{href:"/"}},[t._v("保單內容變更")])]),a("el-breadcrumb-item",[t._v("繳費方式變更")])],1),a("el-steps",{staticStyle:{"margin-top":"1rem","margin-bottom":"1rem"},attrs:{active:t.active}},[a("el-step",{attrs:{title:"Step 1"}}),a("el-step",{attrs:{title:"Step 2"}}),a("el-step",{attrs:{title:"Step 3"}})],1),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.paymentData,border:""}},[a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("i",{staticClass:"el-icon-edit",staticStyle:{"font-size":"24px"},on:{click:function(a){return t.handleEdit(e.$index)}}})]}}])}),a("el-table-column",{attrs:{prop:"policyNumber",label:"保單號碼"}}),a("el-table-column",{attrs:{prop:"insured",label:"主要保險人"}}),a("el-table-column",{attrs:{prop:"effectiveDate",label:"生效日"}}),a("el-table-column",{attrs:{prop:"mainContract",label:"主約險種"}}),a("el-table-column",{attrs:{prop:"currency",label:"幣別"}}),a("el-table-column",{attrs:{prop:"policyStatus",label:"保單狀況"}}),a("el-table-column",{attrs:{prop:"paymentMethod",label:"繳費方式"}}),a("el-table-column",{attrs:{prop:"singlePayment",label:"躉繳件"}})],1)],1)},c=[],r=a("cebc"),i=a("f48b"),l=a("2f62"),o={name:"ChangePaymentMethod",data:function(){return{paymentData:"",active:0}},methods:Object(r["a"])({},Object(l["b"])({setPaymentData:"paymentMethod/setPaymentData"}),{changePaymentMethod:function(){},handleEdit:function(t){var e=this;this.setPaymentData(this.paymentData[t]).then(function(){e.$router.push("changePaymentMethod2")}).catch(function(){})}}),beforeMount:function(){this.paymentData=i.data}},s=o,u=(a("e27a"),a("2877")),m=Object(u["a"])(s,n,c,!1,null,"4c710b99",null);e["default"]=m.exports},c8cb:function(t,e,a){},e27a:function(t,e,a){"use strict";var n=a("c8cb"),c=a.n(n);c.a},f48b:function(t){t.exports={data:[{policyNumber:"5137001780",insured:"林左右",effectiveDate:"96/10/07",mainContract:"變額萬能壽險(VUL55N)",currency:"台幣",policyStatus:"有效付費中",paymentMethod:"銀行自動轉帳",singlePayment:"否"},{policyNumber:"5137001780",insured:"林左右",effectiveDate:"96/10/07",mainContract:"變額萬能壽險(VUL55N)",currency:"台幣",policyStatus:"有效付費中",paymentMethod:"銀行自動轉帳",singlePayment:"否"},{policyNumber:"5137001780",insured:"林左右",effectiveDate:"96/10/07",mainContract:"變額萬能壽險(VUL55N)",currency:"台幣",policyStatus:"有效付費中",paymentMethod:"銀行自動轉帳",singlePayment:"否"},{policyNumber:"5137001780",insured:"林左右",effectiveDate:"96/10/07",mainContract:"變額萬能壽險(VUL55N)",currency:"台幣",policyStatus:"有效付費中",paymentMethod:"銀行自動轉帳",singlePayment:"否"},{policyNumber:"5137001780",insured:"林左右",effectiveDate:"96/10/07",mainContract:"變額萬能壽險(VUL55N)",currency:"台幣",policyStatus:"有效付費中",paymentMethod:"銀行自動轉帳",singlePayment:"否"},{policyNumber:"5137001780",insured:"林左右",effectiveDate:"96/10/07",mainContract:"變額萬能壽險(VUL55N)",currency:"台幣",policyStatus:"有效付費中",paymentMethod:"銀行自動轉帳",singlePayment:"否"},{policyNumber:"5137001780",insured:"林左右",effectiveDate:"96/10/07",mainContract:"變額萬能壽險(VUL55N)",currency:"台幣",policyStatus:"有效付費中",paymentMethod:"銀行自動轉帳",singlePayment:"否"},{policyNumber:"5137001780",insured:"林左右",effectiveDate:"96/10/07",mainContract:"變額萬能壽險(VUL55N)",currency:"台幣",policyStatus:"有效付費中",paymentMethod:"銀行自動轉帳",singlePayment:"否"}],return:{oLSM_ID:"W20051812345",policyID:"F9N7262766",applicationTime:"2020/05/18 13:15:20",policyName:"林左右",changeDate:"2020/05/19",paymentMethod:"自行繳納"}}}}]);
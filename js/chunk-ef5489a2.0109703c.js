(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ef5489a2"],{"0cdb":function(e,t,a){},2229:function(e,t,a){},5512:function(e,t,a){"use strict";var s=a("9180"),n=a.n(s);n.a},5856:function(e,t,a){"use strict";var s=a("2229"),n=a.n(s);n.a},"59c4":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"transTr"},[e._t("default")],2)},n=[],l={name:"PodTr",components:{},data:function(){return{}},methods:{}},r=l,o=(a("5512"),a("2877")),i=Object(o["a"])(r,s,n,!1,null,"35da209a",null);t["a"]=i.exports},"5bb0":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"ChangePaymentMethod",staticStyle:{margin:"0 auto","margin-top":"3rem",width:"70%"}},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首頁")]),a("el-breadcrumb-item",[a("a",{attrs:{href:"/"}},[e._v("個人資料變更")])]),a("el-breadcrumb-item",[e._v("住所(通訊地址變更)")])],1),a("el-steps",{staticStyle:{"margin-top":"1rem","margin-bottom":"1rem"},attrs:{active:e.active}},[a("el-step",{attrs:{title:"Step 1"}}),a("el-step",{attrs:{title:"Step 2"}}),a("el-step",{attrs:{title:"Step 3"}})],1),a("potTable",[a("potTr",[a("potTd",{staticStyle:{"text-align":"left"}},[e._v("\n        目前的住所(通訊)地址\n      ")])],1),a("potTr",[a("potTd",{staticStyle:{"text-align":"left"}},[e._v("\n        "+e._s(e.address)+"\n      ")])],1)],1),a("potTable",{staticStyle:{"margin-top":"2rem"}},[a("potTr",[a("potTd",{staticStyle:{"border-bottom":"0.5px solid gainsboro","text-align":"left"}},[e._v("\n        變更後住所(通訊)地址\n      ")])],1),a("potTr",[e.foreignAddress?e._e():a("div",[a("el-row",[a("el-col",{attrs:{span:6}},[a("el-select",{attrs:{placeholder:"縣市",filterable:"",disabled:""},model:{value:e.cname,callback:function(t){e.cname=t},expression:"cname"}},e._l(e.city,function(e,t){return a("el-option",{key:t,attrs:{label:e.value,value:e.id}})}),1)],1),a("el-col",{staticStyle:{"margin-left":"0.5rem"},attrs:{span:6}},[a("el-select",{attrs:{placeholder:"鄉鎮市區",filterable:"",disabled:""},model:{value:e.aname,callback:function(t){e.aname=t},expression:"aname"}},e._l(e.area,function(e,t){return a("el-option",{key:t,attrs:{label:e.value,value:e.id}})}),1)],1)],1),a("el-row",{staticStyle:{"text-align":"left","margin-left":"2rem"}},[a("el-col",{attrs:{span:6}},[a("el-radio",{attrs:{label:"1",disabled:""},model:{value:e.addressRadio,callback:function(t){e.addressRadio=t},expression:"addressRadio"}},[a("el-select",{attrs:{placeholder:"街道名",filterable:"",disabled:""},model:{value:e.rname,callback:function(t){e.rname=t},expression:"rname"}},e._l(e.road,function(e,t){return a("el-option",{key:t,attrs:{label:e.value,value:e.id}})}),1)],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:3}},[a("el-input",{attrs:{disabled:""},model:{value:e.ln,callback:function(t){e.ln=t},expression:"ln"}})],1),a("el-col",{staticStyle:{"line-height":"2.5rem"},attrs:{span:1}},[e._v("巷")]),a("el-col",{attrs:{span:3}},[a("el-input",{attrs:{disabled:""},model:{value:e.aly,callback:function(t){e.aly=t},expression:"aly"}})],1),a("el-col",{staticStyle:{"line-height":"2.5rem"},attrs:{span:1}},[e._v("弄")]),a("el-col",{attrs:{span:2}},[a("el-input",{attrs:{disabled:""},model:{value:e.no,callback:function(t){e.no=t},expression:"no"}})],1),a("el-col",{staticStyle:{"line-height":"2.5rem"},attrs:{span:2}},[e._v("號之")]),a("el-col",{attrs:{span:2}},[a("el-input",{attrs:{disabled:""},model:{value:e.no_,callback:function(t){e.no_=t},expression:"no_"}})],1),a("el-col",{attrs:{span:2}},[a("el-input",{attrs:{disabled:""},model:{value:e.f,callback:function(t){e.f=t},expression:"f"}})],1),a("el-col",{staticStyle:{"line-height":"2.5rem"},attrs:{span:2}},[e._v("樓之")]),a("el-col",{attrs:{span:2}},[a("el-input",{attrs:{disabled:""},model:{value:e.f_,callback:function(t){e.f_=t},expression:"f_"}})],1)],1),a("el-row",{staticStyle:{"text-align":"left","margin-left":"2rem"}},[a("el-col",{attrs:{span:6}},[a("el-radio",{attrs:{label:"2",disabled:""},model:{value:e.addressRadio,callback:function(t){e.addressRadio=t},expression:"addressRadio"}},[a("el-select",{attrs:{placeholder:"街道名",filterable:"",disabled:""},model:{value:e.rname,callback:function(t){e.rname=t},expression:"rname"}})],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:22}},[a("el-input",{attrs:{disabled:""},model:{value:e.integrate,callback:function(t){e.integrate=t},expression:"integrate"}})],1)],1)],1),e.foreignAddress?a("div",[a("el-row",[a("el-col",{staticStyle:{"text-align":"left"},attrs:{span:6}},[a("el-select",{attrs:{placeholder:"國別",disabled:""},model:{value:e.foreignCountryAddress,callback:function(t){e.foreignCountryAddress=t},expression:"foreignCountryAddress"}},e._l(e.options,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1)],1),a("el-row",[a("el-col",{staticStyle:{"text-align":"left"},attrs:{span:22}},[a("el-col",{attrs:{span:22}},[a("el-input",{attrs:{disabled:""},model:{value:e.foreignCountrySecAddress,callback:function(t){e.foreignCountrySecAddress=t},expression:"foreignCountrySecAddress"}})],1)],1)],1)],1):e._e(),a("el-row",[a("el-col",{staticStyle:{"text-align":"left"},attrs:{span:22}},[a("el-checkbox",{attrs:{disabled:""},model:{value:e.foreignAddress,callback:function(t){e.foreignAddress=t},expression:"foreignAddress"}},[e._v("國外地址"),a("span",{staticStyle:{color:"red"}},[e._v("(不得變更為郵政信箱)")])])],1)],1),e.foreignAddress?a("div",[a("el-row",[a("el-col",{staticStyle:{"text-align":"left"},attrs:{span:22}},[a("el-collapse",{model:{value:e.activeNames,callback:function(t){e.activeNames=t},expression:"activeNames"}},[a("el-collapse-item",{attrs:{title:"自我證明暨同意書：個人",name:"1"}},[a("el-divider"),a("div",{staticStyle:{color:"blue"}},[e._v("自我證明簡介")]),a("div",{staticStyle:{"margin-top":"2rem"}},[a("span",{staticStyle:{color:"gray"}},[e._v("為遵守法令及因應國際趨勢，爰依我國「金融機構執行共同申報及盡職審查作業辦法(CRS)」及美國「外國帳戶稅收遵從法(FATCA)」等規定，請您據實回復下列詢問事項，並提供相關身分證明文件。"),a("br"),a("br")]),a("span",{staticStyle:{color:"#E5C49C"}},[e._v("※請注意本文件非稅務和法務建議，本文件檢附之附錄僅針對本文件使用之名詞為說明以供您參考，本公司亦無法提供稅務或法務之意見。如果您對本文件有任何稅務或法務上之問題，請諮詢稅務、法律或其他相關人士。")])]),a("div",{staticStyle:{"margin-top":"2rem",color:"#2C4368"}},[e._v("\n                  1-帳戶持有人基本資料(針對聯名帳戶或多人聯名帳戶，每位個人帳戶持有人須分別填寫一份表格)\n                ")]),a("div",{staticStyle:{"margin-top":"2rem",color:"gray"}},[e._v("\n                  *稅務居民身分\n                ")]),a("div",{staticStyle:{"margin-top":"1rem",color:"gray"}},[e._v("\n                  請勾(填)選聲明您為稅務居住者之國家或地區：\n                  (至少須勾選乙項，如您具有多個稅務居住國家或地區，請據實勾選並全部填載揭露(可複選)；其他未勾(填)選之選項，即代表聲明您非為該國家或地區之稅務居住者)\n                ")]),a("el-row",[a("el-checkbox-group",{attrs:{disabled:""},model:{value:e.taxResidenceStatus,callback:function(t){e.taxResidenceStatus=t},expression:"taxResidenceStatus"}},[a("el-col",[a("el-checkbox",{attrs:{label:"1"}},[e._v("具有美國稅務居民身分者。")])],1),a("el-col",[a("el-checkbox",{attrs:{label:"2"}},[e._v("具有中華民國稅務居民身分者。")])],1),a("el-col",[a("el-checkbox",{attrs:{label:"3"}},[e._v("具有其他國家或地區稅務居民身分者。")])],1)],1),a("el-col",{staticStyle:{color:"gray"}},[e._v("\n                    美國稅務居民具有包含下列三種:\n                    "),a("br"),e._v("\n                    1.美國公民\n                    "),a("br"),e._v("\n                    2.持有美國永久居民身分\n                    "),a("br"),e._v("\n                    3.通過拘留測試之美國稅務居民:係旨在美國工作/居住/求學，本年度在美國境內停留天數>31天，且具(本年在美國境內停留天數＊1+去年在美國停留天數＊1/3+前年在美國境內停留天數*1/6)≧183天者，即為美國\n                    稅務居民。\n                  ")])],1),a("div",{staticStyle:{"margin-top":"2rem",color:"gray"}},[e._v("\n                  勾選具有美國稅務居民身分者或具有其他國家或地區稅務居民身分者，請完成下列表格填寫您的稅務居住國家或地區及其稅及編號資料:\n                ")]),a("div",{staticStyle:{"margin-top":"2rem",color:"#E5C49C"}},[e._v("\n                  ※填寫時須列出除中華民國以外之稅務居住國家或地區，倘超過表格可填數量，請提供獨立的工作表格；倘沒有提供稅籍編號，須填寫合適的理由。\n                ")]),a("div",{staticStyle:{"margin-top":"2rem",color:"gray"}},[e._v("\n                  請提供以下「英文」資料：\n                ")]),a("el-row",[a("el-col",{staticStyle:{"text-align":"left"},attrs:{span:22}},[a("el-col",{staticStyle:{"text-align":"left","line-height":"2.5rem"},attrs:{span:4}},[e._v("\n                      英文姓名：\n                    ")]),a("el-col",{attrs:{span:8}},[a("el-input",{attrs:{disabled:""},model:{value:e.engInformation.engName,callback:function(t){e.$set(e.engInformation,"engName",t)},expression:"engInformation.engName"}})],1)],1)],1),a("el-row",[a("el-col",{staticStyle:{"text-align":"left"},attrs:{span:22}},[a("el-col",{staticStyle:{"text-align":"left","line-height":"2.5rem"},attrs:{span:8}},[e._v("\n                      英文現行居住國家或地區：\n                    ")]),a("el-col",{attrs:{span:8}},[a("el-select",{attrs:{placeholder:"請選擇",filterable:"",disabled:""},model:{value:e.engInformation.nowCountry,callback:function(t){e.$set(e.engInformation,"nowCountry",t)},expression:"engInformation.nowCountry"}},e._l(e.foreignCountry,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1)],1)],1),a("el-row",[a("el-col",{staticStyle:{"text-align":"left"},attrs:{span:22}},[a("el-col",{staticStyle:{"text-align":"left","line-height":"2.5rem"},attrs:{span:6}},[e._v("\n                      英文現行居住地址：\n                    ")]),a("el-col",{attrs:{span:16}},[a("el-input",{attrs:{disabled:""},model:{value:e.engInformation.nowAddress,callback:function(t){e.$set(e.engInformation,"nowAddress",t)},expression:"engInformation.nowAddress"}})],1)],1)],1),a("potTable",[a("potTr",[a("potTd",{staticStyle:{color:"blue"}},[e._v("\n                      理由\n                    ")])],1),a("potTr",[a("potTd",{staticStyle:{"text-align":"left",color:"gray"}},[a("el-row",{staticStyle:{margin:"1rem"}},[a("el-col",{attrs:{span:2}},[e._v("A")]),a("el-col",{attrs:{span:18}},[e._v("帳戶持有人為稅務居住之國家或地區未核發稅籍編號。")])],1),a("el-row",{staticStyle:{margin:"1rem"}},[a("el-col",{attrs:{span:2}},[e._v("B")]),a("el-col",{attrs:{span:18}},[e._v("帳戶持有人無法取得稅籍編號。(請說明帳戶持有人無法取得稅及編號原因)")])],1),a("el-row",{staticStyle:{margin:"1rem"}},[a("el-col",{attrs:{span:2}},[e._v("C")]),a("el-col",{attrs:{span:18}},[e._v("帳戶持有人毋須提供稅籍編號。(限於該帳戶持有人為稅務居住者之國家或地區國內法未要求蒐集稅籍編號)")])],1)],1)],1),a("potTr",[a("potTd",{staticStyle:{"border-top":"0.5px solid gainsboro"}},[a("el-row",{staticStyle:{margin:"1rem"}},[a("el-col",{attrs:{span:5}},[e._v("稅務居住者之國家/地區")]),a("el-col",{attrs:{span:6}},[e._v("稅籍編號"),a("br"),e._v("美國稅務居民必填")]),a("el-col",{attrs:{span:5}},[e._v("理由代碼")]),a("el-col",{attrs:{span:7}},[e._v("尚選取理由B，請說明理由")])],1)],1)],1),a("potTr",[a("potTd",{staticStyle:{"border-top":"0.5px solid gainsboro"}},[a("el-row",{staticStyle:{margin:"1rem"}},[a("el-col",{attrs:{span:5}},[a("el-select",{attrs:{placeholder:"請選擇",filterable:"",disabled:""},model:{value:e.taxResidence.country,callback:function(t){e.$set(e.taxResidence,"country",t)},expression:"taxResidence.country"}},e._l(e.foreignCountry,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),a("el-col",{attrs:{span:6}},[a("el-input",{attrs:{disabled:""},model:{value:e.taxResidence.taxId,callback:function(t){e.$set(e.taxResidence,"taxId",t)},expression:"taxResidence.taxId"}})],1),a("el-col",{attrs:{span:5}},[a("el-select",{attrs:{placeholder:"請選擇",filterable:"",disabled:""},model:{value:e.taxResidence.reason,callback:function(t){e.$set(e.taxResidence,"reason",t)},expression:"taxResidence.reason"}},e._l(e.reasonOptions,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),a("el-col",{attrs:{span:7}},[a("el-input",{attrs:{disabled:""},model:{value:e.taxResidence.subReason,callback:function(t){e.$set(e.taxResidence,"subReason",t)},expression:"taxResidence.subReason"}})],1)],1)],1)],1)],1),a("div",{staticStyle:{"margin-top":"2rem",color:"#2C4368"}},[e._v("\n                  2-聲明和簽署\n                ")]),a("div",{staticStyle:{"margin-top":"2rem",color:"gray"}},[e._v("\n                  *稅務居民身分\n                ")]),a("div",{staticStyle:{"margin-top":"1rem",color:"gray"}},[e._v("\n                  請勾(填)選聲明您為稅務居住者之國家或地區：\n                  (至少須勾選乙項，如您具有多個稅務居住國家或地區，請據實勾選並全部填載揭露(可複選)；其他未勾(填)選之選項，即代表聲明您非為該國家或地區之稅務居住者)\n                ")])],1)],1)],1)],1)],1):e._e()],1)],1),a("el-row",[a("el-col",{attrs:{span:6}},[a("span",{staticStyle:{color:"red","line-height":"2.5rem"}},[e._v("*")]),e._v("請輸入確認密碼\n    ")]),a("el-col",{staticStyle:{"text-align":"left"},attrs:{span:8}},[a("el-input",{attrs:{"show-password":""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)],1),a("el-row",{staticClass:"btn-box"},[a("el-col",{attrs:{span:4}},[a("el-button",{staticClass:"btn-blue",on:{click:e.previousStep}},[e._v("上一步")])],1),a("el-col",{staticStyle:{"margin-left":"8rem"},attrs:{span:5}},[a("el-button",{staticClass:"btn-blue",on:{click:e.submitCheckPwd}},[e._v("確定，下一步")])],1),a("el-col",{staticStyle:{"margin-left":"8rem"},attrs:{span:5}},[a("el-button",{staticClass:"btn-white",on:{click:e.backIndex}},[e._v("取消，回首頁")])],1)],1)],1)},n=[],l=a("cebc"),r=a("6366"),o=a("df69"),i=a("69ce"),c=a("59c4"),d=a("d5f8"),u=a("2f62"),p={name:"ChangeAddress",data:function(){return{address:"",active:2,addressRadio:0,input:"",password:"",value:"",cname:"",aname:"",rname:"",options:[],ln:"",aly:"",no:"",no_:"",f:"",f_:"",integrate:"",city:[],area:[],road:[],activeNames:["1"],checkList:[],foreignAddress:!1,taxResidenceStatus:[],foreignCountry:[{value:"USA",label:"USA"},{value:"Japan",label:"Japan"},{value:"Korea",label:"Korea"},{value:"Franch",label:"Franch"},{value:"Greece",label:"Greece"}],foreignCountryAddress:"",foreignCountrySecAddress:"",engInformation:{engName:"",nowCountry:"",nowAddress:""},taxResidence:{country:"",taxId:"",reason:"",subReason:""},reasonOptions:[{value:"A",label:"A"},{value:"B",label:"B"},{value:"C",label:"C"}]}},components:{potTable:o["a"],potTd:i["a"],potTr:c["a"]},methods:Object(l["a"])({},Object(u["b"])({setPaymentData:"paymentMethod/setPaymentData",setInitialization:"changeAddress/setInitialization"}),{previousStep:function(){this.$router.back()},submitCheckPwd:function(){this.password!=d.user.userPassword?this.$alert.alertDialog("密碼錯誤"):this.password===d.user.userPassword&&this.$router.push("changeAddress3")},backIndex:function(){var e=this;this.setInitialization().then(function(){e.$router.push("index")}).catch(function(){})}}),beforeMount:function(){!0===this.getForeignAddress&&(this.foreignAddress=this.getForeignAddress),!1===this.foreignAddress&&(this.address=r.data.address,this.cname=this.getCityAreaRoad.cname,this.aname=this.getCityAreaRoad.aname,this.rname=this.getCityAreaRoad.rname,this.addressRadio=this.getSecAddress.radio,this.getSecAddress.radio&&("1"===this.getSecAddress.radio?(this.ln=this.getSecAddress.ln,this.aly=this.getSecAddress.aly,this.no=this.getSecAddress.no,this.no_=this.getSecAddress.no_,this.f=this.getSecAddress.f,this.f_=this.getSecAddress.f_):"2"===this.getSecAddress.radio&&(this.integrate=this.getSecAddress.integrate))),!0===this.foreignAddress&&(this.foreignCountryAddress=this.getForeignCountryAddress.foreignCountryAddress,this.foreignCountrySecAddress=this.getForeignCountryAddress.foreignCountrySecAddress,this.engInformation.engName=this.getEngInformation.engName,this.engInformation.nowCountry=this.getEngInformation.nowCountry,this.engInformation.nowAddress=this.getEngInformation.nowAddress,this.taxResidence.country=this.getTaxResidence.country,this.taxResidence.taxId=this.getTaxResidence.taxId,this.taxResidence.reason=this.getTaxResidence.reason,this.taxResidence.subReason=this.getTaxResidence.subReason,this.taxResidenceStatus=this.getTaxResidenceStatus)},computed:Object(l["a"])({},Object(u["c"])({getForeignAddress:"changeAddress/getForeignAddress",getSecAddress:"changeAddress/getSecAddress",getCityAreaRoad:"changeAddress/getCityAreaRoad",getTaxResidenceStatus:"fatca/getTaxResidenceStatus",getForeignCountryAddress:"fatca/getForeignCountryAddress",getEngInformation:"fatca/getEngInformation",getTaxResidence:"fatca/getTaxResidence"}))},g=p,m=(a("5856"),a("2877")),f=Object(m["a"])(g,s,n,!1,null,"67ffd1e0",null);t["default"]=f.exports},6366:function(e){e.exports={data:{address:"住所(通訊)地址:  新北市200板橋區四川路2段245巷50號4樓",return:{oLSM_ID:"W20051813213",policyID:"F9N7262766",applicationTime:"2020/05/18 13:15:20",policyName:"林左右",changeDate:"2020/05/19"}}}},"69ce":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"transTd"},[e._t("default")],2)},n=[],l={name:"PodTd",components:{},data:function(){return{}},methods:{}},r=l,o=(a("ae28"),a("2877")),i=Object(o["a"])(r,s,n,!1,null,"384cc6e5",null);t["a"]=i.exports},"7ab7":function(e,t,a){},9180:function(e,t,a){},ae28:function(e,t,a){"use strict";var s=a("7ab7"),n=a.n(s);n.a},d5f8:function(e){e.exports={user:{userNumber:"A123456789",userAccount:"P1911",userPassword:"DE.44"},login:{token:"",isOverThreeMonth:!1,hasEchangePermission:"y",userRole:"1",smsNumber:"",email:"",userName:"林左右"},ServerStatus:{status:!0,openTime:"14:25"},getOTP:{result:"true",msg:"327"},OTPValid:{result:"true",msg:"回應訊息"}}},df69:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"transTable"},[e._t("default")],2)},n=[],l={name:"PodTable",components:{},data:function(){return{}},methods:{}},r=l,o=(a("ff80"),a("2877")),i=Object(o["a"])(r,s,n,!1,null,"5c8e2872",null);t["a"]=i.exports},ff80:function(e,t,a){"use strict";var s=a("0cdb"),n=a.n(s);n.a}}]);
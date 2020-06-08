/* eslint-disable prettier/prettier */
<template>
  <div
    class="ChangePaymentMethod"
    style="margin:0 auto;margin-top:3rem;width:70%;"
  >
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首頁</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">個人資料變更</a></el-breadcrumb-item>
      <el-breadcrumb-item>住所(通訊地址變更)</el-breadcrumb-item>
    </el-breadcrumb>
    <el-steps :active="active" style="margin-top:1rem;margin-bottom:1rem;">
      <el-step title="Step 1"></el-step>
      <el-step title="Step 2"></el-step>
      <el-step title="Step 3"></el-step>
    </el-steps>
    <!-- <el-table :data="address" style="width: 100%" border>
      <el-table-column
        label="目前的住所(通訊)地址"
        prop="address"
      ></el-table-column>
    </el-table> -->
    <potTable>
      <potTr>
        <potTd style="text-align:left">
          目前的住所(通訊)地址
        </potTd>
      </potTr>
      <potTr>
        <potTd style="text-align:left">
          {{ address }}
        </potTd>
      </potTr>
    </potTable>

    <potTable style="margin-top:2rem;">
      <potTr>
        <potTd style="border-bottom:0.5px solid gainsboro;text-align:left;">
          變更後住所(通訊)地址
        </potTd>
      </potTr>
      <potTr>
        <div v-if="!foreignAddress">
          <el-row>
            <el-col :span="6">
              <el-select v-model="cname" placeholder="縣市" filterable disabled>
                <el-option
                  v-for="(item, $index) in city"
                  :key="$index"
                  :label="item.value"
                  :value="item.id"
                >
                </el-option>
              </el-select>
            </el-col>
            <el-col :span="6" style="margin-left:0.5rem;">
              <el-select
                v-model="aname"
                placeholder="鄉鎮市區"
                filterable
                disabled
              >
                <el-option
                  v-for="(item, $index) in area"
                  :key="$index"
                  :label="item.value"
                  :value="item.id"
                >
                </el-option>
              </el-select>
            </el-col>
          </el-row>
          <el-row style="text-align: left;margin-left:2rem;">
            <el-col :span="6">
              <el-radio v-model="addressRadio" label="1" disabled>
                <el-select
                  v-model="rname"
                  placeholder="街道名"
                  filterable
                  disabled
                >
                  <el-option
                    v-for="(item, $index) in road"
                    :key="$index"
                    :label="item.value"
                    :value="item.id"
                  >
                  </el-option>
                </el-select>
              </el-radio>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="3"
              ><el-input v-model="ln" disabled></el-input
            ></el-col>
            <el-col :span="1" style="line-height:2.5rem">巷</el-col>
            <el-col :span="3"
              ><el-input v-model="aly" disabled></el-input
            ></el-col>
            <el-col :span="1" style="line-height:2.5rem">弄</el-col>
            <el-col :span="2"
              ><el-input v-model="no" disabled></el-input
            ></el-col>
            <el-col :span="2" style="line-height:2.5rem">號之</el-col>
            <el-col :span="2"
              ><el-input v-model="no_" disabled></el-input
            ></el-col>
            <el-col :span="2"
              ><el-input v-model="f" disabled></el-input
            ></el-col>
            <el-col :span="2" style="line-height:2.5rem">樓之</el-col>
            <el-col :span="2"
              ><el-input v-model="f_" disabled></el-input
            ></el-col>
          </el-row>
          <el-row style="text-align: left;margin-left:2rem;">
            <el-col :span="6">
              <el-radio v-model="addressRadio" label="2" disabled>
                <el-select
                  v-model="rname"
                  placeholder="街道名"
                  filterable
                  disabled
                >
                </el-select>
              </el-radio>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="22"
              ><el-input v-model="integrate" disabled></el-input
            ></el-col>
          </el-row>
        </div>
        <div v-if="foreignAddress">
          <el-row>
            <el-col :span="6" style="text-align:left">
              <el-select
                v-model="foreignCountryAddress"
                placeholder="國別"
                disabled
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="22" style="text-align:left">
              <el-col :span="22"
                ><el-input
                  v-model="foreignCountrySecAddress"
                  disabled
                ></el-input
              ></el-col>
            </el-col>
          </el-row>
        </div>
        <el-row>
          <el-col :span="22" style="text-align:left">
            <el-checkbox v-model="foreignAddress" disabled
              >國外地址<span style="color:red;"
                >(不得變更為郵政信箱)</span
              ></el-checkbox
            ></el-col
          >
        </el-row>
        <div v-if="foreignAddress">
          <el-row>
            <el-col :span="22" style="text-align:left">
              <el-collapse v-model="activeNames">
                <el-collapse-item title="自我證明暨同意書：個人" name="1">
                  <el-divider></el-divider>
                  <div style="color:blue">自我證明簡介</div>
                  <div style="margin-top:2rem;">
                    <span style="color:gray;"
                      >為遵守法令及因應國際趨勢，爰依我國「金融機構執行共同申報及盡職審查作業辦法(CRS)」及美國「外國帳戶稅收遵從法(FATCA)」等規定，請您據實回復下列詢問事項，並提供相關身分證明文件。<br /><br
                    /></span>
                    <span style="color:#E5C49C"
                      >※請注意本文件非稅務和法務建議，本文件檢附之附錄僅針對本文件使用之名詞為說明以供您參考，本公司亦無法提供稅務或法務之意見。如果您對本文件有任何稅務或法務上之問題，請諮詢稅務、法律或其他相關人士。</span
                    >
                  </div>
                  <div style="margin-top:2rem;color:#2C4368">
                    1-帳戶持有人基本資料(針對聯名帳戶或多人聯名帳戶，每位個人帳戶持有人須分別填寫一份表格)
                  </div>
                  <div style="margin-top:2rem;color:gray">
                    *稅務居民身分
                  </div>
                  <div style="margin-top:1rem;color:gray">
                    請勾(填)選聲明您為稅務居住者之國家或地區：
                    (至少須勾選乙項，如您具有多個稅務居住國家或地區，請據實勾選並全部填載揭露(可複選)；其他未勾(填)選之選項，即代表聲明您非為該國家或地區之稅務居住者)
                  </div>
                  <el-row>
                    <el-checkbox-group v-model="taxResidenceStatus" disabled>
                      <el-col>
                        <el-checkbox label="1"
                          >具有美國稅務居民身分者。</el-checkbox
                        >
                      </el-col>
                      <el-col>
                        <el-checkbox label="2"
                          >具有中華民國稅務居民身分者。</el-checkbox
                        >
                      </el-col>
                      <el-col>
                        <el-checkbox label="3"
                          >具有其他國家或地區稅務居民身分者。</el-checkbox
                        >
                      </el-col>
                    </el-checkbox-group>
                    <el-col style="color:gray">
                      美國稅務居民具有包含下列三種:
                      <br />
                      1.美國公民
                      <br />
                      2.持有美國永久居民身分
                      <br />
                      3.通過拘留測試之美國稅務居民:係旨在美國工作/居住/求學，本年度在美國境內停留天數>31天，且具(本年在美國境內停留天數＊1+去年在美國停留天數＊1/3+前年在美國境內停留天數*1/6)≧183天者，即為美國
                      稅務居民。
                    </el-col>
                  </el-row>
                  <div style="margin-top:2rem;color:gray">
                    勾選具有美國稅務居民身分者或具有其他國家或地區稅務居民身分者，請完成下列表格填寫您的稅務居住國家或地區及其稅及編號資料:
                  </div>
                  <div style="margin-top:2rem;color:#E5C49C">
                    ※填寫時須列出除中華民國以外之稅務居住國家或地區，倘超過表格可填數量，請提供獨立的工作表格；倘沒有提供稅籍編號，須填寫合適的理由。
                  </div>
                  <div style="margin-top:2rem;color:gray">
                    請提供以下「英文」資料：
                  </div>
                  <el-row>
                    <el-col :span="22" style="text-align:left">
                      <el-col
                        :span="4"
                        style="text-align:left;line-height:2.5rem"
                      >
                        英文姓名：
                      </el-col>
                      <el-col :span="8"
                        ><el-input
                          v-model="engInformation.engName"
                          disabled
                        ></el-input
                      ></el-col>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="22" style="text-align:left">
                      <el-col
                        :span="8"
                        style="text-align:left;line-height:2.5rem"
                      >
                        英文現行居住國家或地區：
                      </el-col>
                      <el-col :span="8">
                        <el-select
                          v-model="engInformation.nowCountry"
                          placeholder="請選擇"
                          filterable
                          disabled
                        >
                          <el-option
                            v-for="item in foreignCountry"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          >
                          </el-option> </el-select
                      ></el-col>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="22" style="text-align:left">
                      <el-col
                        :span="6"
                        style="text-align:left;line-height:2.5rem"
                      >
                        英文現行居住地址：
                      </el-col>
                      <el-col :span="16"
                        ><el-input
                          v-model="engInformation.nowAddress"
                          disabled
                        ></el-input
                      ></el-col>
                    </el-col>
                  </el-row>
                  <potTable>
                    <potTr>
                      <potTd style="color:blue">
                        理由
                      </potTd>
                    </potTr>
                    <potTr>
                      <potTd style="text-align:left;color:gray">
                        <el-row style="margin:1rem;">
                          <el-col :span="2">A</el-col>
                          <el-col :span="18"
                            >帳戶持有人為稅務居住之國家或地區未核發稅籍編號。</el-col
                          >
                        </el-row>
                        <el-row style="margin:1rem;">
                          <el-col :span="2">B</el-col>
                          <el-col :span="18"
                            >帳戶持有人無法取得稅籍編號。(請說明帳戶持有人無法取得稅及編號原因)</el-col
                          >
                        </el-row>
                        <el-row style="margin:1rem;">
                          <el-col :span="2">C</el-col>
                          <el-col :span="18"
                            >帳戶持有人毋須提供稅籍編號。(限於該帳戶持有人為稅務居住者之國家或地區國內法未要求蒐集稅籍編號)</el-col
                          >
                        </el-row>
                      </potTd>
                    </potTr>
                    <potTr>
                      <potTd style="border-top:0.5px solid gainsboro;">
                        <el-row style="margin:1rem;">
                          <el-col :span="5">稅務居住者之國家/地區</el-col>
                          <el-col :span="6"
                            >稅籍編號<br />美國稅務居民必填</el-col
                          >
                          <el-col :span="5">理由代碼</el-col>
                          <el-col :span="7">尚選取理由B，請說明理由</el-col>
                        </el-row>
                      </potTd>
                    </potTr>
                    <potTr>
                      <potTd style="border-top:0.5px solid gainsboro;">
                        <el-row style="margin:1rem;">
                          <el-col :span="5">
                            <el-select
                              v-model="taxResidence.country"
                              placeholder="請選擇"
                              filterable
                              disabled
                            >
                              <el-option
                                v-for="item in foreignCountry"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                              >
                              </el-option> </el-select
                          ></el-col>
                          <el-col :span="6">
                            <el-input
                              v-model="taxResidence.taxId"
                              disabled
                            ></el-input>
                          </el-col>
                          <el-col :span="5">
                            <el-select
                              v-model="taxResidence.reason"
                              placeholder="請選擇"
                              filterable
                              disabled
                            >
                              <el-option
                                v-for="item in reasonOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                              >
                              </el-option> </el-select
                          ></el-col>
                          <el-col :span="7"
                            ><el-input
                              v-model="taxResidence.subReason"
                              disabled
                            ></el-input
                          ></el-col>
                        </el-row>
                      </potTd>
                    </potTr>
                  </potTable>
                  <div style="margin-top:2rem;color:#2C4368">
                    2-聲明和簽署
                  </div>
                  <div style="margin-top:2rem;color:gray">
                    *稅務居民身分
                  </div>
                  <div style="margin-top:1rem;color:gray">
                    請勾(填)選聲明您為稅務居住者之國家或地區：
                    (至少須勾選乙項，如您具有多個稅務居住國家或地區，請據實勾選並全部填載揭露(可複選)；其他未勾(填)選之選項，即代表聲明您非為該國家或地區之稅務居住者)
                  </div>
                </el-collapse-item>
              </el-collapse>
            </el-col>
          </el-row>
        </div>
      </potTr>
    </potTable>
    <el-row>
      <el-col :span="6">
        <span style="color:red;line-height:2.5rem">*</span>請輸入確認密碼
      </el-col>
      <el-col :span="8" style="text-align:left">
        <el-input v-model="password" show-password></el-input>
      </el-col>
    </el-row>
    <el-row class="btn-box">
      <el-col :span="4">
        <el-button class="btn-blue" @click="previousStep">上一步</el-button>
      </el-col>
      <el-col :span="5" style="margin-left:8rem;">
        <el-button class="btn-blue" @click="submitCheckPwd"
          >確定，下一步</el-button
        >
      </el-col>
      <el-col :span="5" style="margin-left:8rem;">
        <el-button class="btn-white" @click="backIndex">取消，回首頁</el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import changeAddress from "../../mock/changeAddress";
import potTable from "../../components/PotTable";
import potTd from "../../components/PotTd";
import potTr from "../../components/PotTr";
import loginData from "../../mock/login";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "ChangeAddress",
  data() {
    return {
      address: "",
      active: 2,
      addressRadio: 0,
      input: "",
      password: "",
      value: "",
      cname: "",
      aname: "",
      rname: "",
      options: [],
      //巷
      ln: "",
      //弄
      aly: "",
      //號
      no: "",
      //號
      no_: "",
      //樓
      f: "",
      //樓之
      f_: "",
      integrate: "",
      city: [],
      area: [],
      road: [],
      activeNames: ["1"],
      checkList: [],
      foreignAddress: false,
      taxResidenceStatus: [],
      foreignCountry: [
        {
          value: "USA",
          label: "USA"
        },
        {
          value: "Japan",
          label: "Japan"
        },
        {
          value: "Korea",
          label: "Korea"
        },
        {
          value: "Franch",
          label: "Franch"
        },
        {
          value: "Greece",
          label: "Greece"
        }
      ],
      foreignCountryAddress: "",
      foreignCountrySecAddress: "",
      engInformation: {
        engName: "",
        nowCountry: "",
        nowAddress: ""
      },
      taxResidence: {
        country: "",
        taxId: "",
        reason: "",
        subReason: ""
      },
      reasonOptions: [
        {
          value: "A",
          label: "A"
        },
        {
          value: "B",
          label: "B"
        },
        {
          value: "C",
          label: "C"
        }
      ]
    };
  },
  components: { potTable, potTd, potTr },
  methods: {
    ...mapActions({
      setPaymentData: "paymentMethod/setPaymentData",
      setInitialization: "changeAddress/setInitialization"
    }),
    previousStep() {
      this.$router.back();
    },
    submitCheckPwd() {
      // console.log(this.getTaxResidenceStatus);
      // console.log(this.getEngInformation);
      if (this.password != loginData.user.userPassword) {
        this.$alert.alertDialog("密碼錯誤");
      } else if (this.password === loginData.user.userPassword) {
        this.$router.push("changeAddress3");
      }
    },
    backIndex() {
      this.setInitialization()
        .then(() => {
          this.$router.push("index");
        })
        .catch(() => {
          // console.log(`[ChangeAddress2][setInitialization]:${err}`);
        });
    }
  },
  beforeMount() {
    if (this.getForeignAddress === true) {
      this.foreignAddress = this.getForeignAddress;
    }
    if (this.foreignAddress === false) {
      this.address = changeAddress.data.address;
      this.cname = this.getCityAreaRoad.cname;
      this.aname = this.getCityAreaRoad.aname;
      this.rname = this.getCityAreaRoad.rname;
      this.addressRadio = this.getSecAddress.radio;

      if (this.getSecAddress.radio) {
        if (this.getSecAddress.radio === "1") {
          this.ln = this.getSecAddress.ln;
          this.aly = this.getSecAddress.aly;
          this.no = this.getSecAddress.no;
          this.no_ = this.getSecAddress.no_;
          this.f = this.getSecAddress.f;
          this.f_ = this.getSecAddress.f_;
        } else if (this.getSecAddress.radio === "2") {
          this.integrate = this.getSecAddress.integrate;
        }
      }
    }
    if (this.foreignAddress === true) {
      this.foreignCountryAddress = this.getForeignCountryAddress.foreignCountryAddress;
      this.foreignCountrySecAddress = this.getForeignCountryAddress.foreignCountrySecAddress;
      this.engInformation.engName = this.getEngInformation.engName;
      this.engInformation.nowCountry = this.getEngInformation.nowCountry;
      this.engInformation.nowAddress = this.getEngInformation.nowAddress;
      this.taxResidence.country = this.getTaxResidence.country;
      this.taxResidence.taxId = this.getTaxResidence.taxId;
      this.taxResidence.reason = this.getTaxResidence.reason;
      this.taxResidence.subReason = this.getTaxResidence.subReason;
      this.taxResidenceStatus = this.getTaxResidenceStatus;
    }
  },
  computed: {
    ...mapGetters({
      getForeignAddress: "changeAddress/getForeignAddress",
      getSecAddress: "changeAddress/getSecAddress",
      getCityAreaRoad: "changeAddress/getCityAreaRoad",
      getTaxResidenceStatus: "fatca/getTaxResidenceStatus",
      getForeignCountryAddress: "fatca/getForeignCountryAddress",
      getEngInformation: "fatca/getEngInformation",
      getTaxResidence: "fatca/getTaxResidence"
    })
    // foreignAddress() {
    //   return this.getForeignAddress;
    // }
  }
};
</script>
<style lang="scss" scoped>
.el-row {
  margin: 2rem;
}
.el-col {
  margin-right: 0.3rem;
}
</style>

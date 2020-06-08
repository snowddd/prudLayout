export default {
  "1": {
    title: "個人資料變更",
    child: {
      "1-1": {
        url: "ChangePhone",
        title: "手機變更"
      },
      "1-2": {
        url: "ChangeLocalCalls",
        title: "市話變更"
      },
      "1-3": {
        url: "ChangeMail",
        title: "電子信箱變更"
      },
      "1-4": {
        url: "ChangeAddress",
        title: "住所(通訊)地址變更"
      }
    }
  },
  "2": {
    title: "保單內容變更",
    child: {
      "2-1": {
        url: "changePaymentMethod",
        title: "繳法變更"
      },
      "2-2": {
        title: "繳費方式變更",
        url: "i",
        child: {
          "2-2-1": {
            url: "ChangeSelfpay",
            title: "變更為自行繳納"
          },
          "2-2-2": {
            url: "ChangeSelfpay",
            title: "列印授權書..."
          }
        }
      }
    }
  },
  "3": {
    title: "保單借款",
    child: {
      "3-1": {
        url: "PolicyLoan",
        title: "保單借款"
      }
    }
  },
  "4": {
    title: "其他查詢/變更項目",
    url: "PolicyLoan",
    child: {
      "4-1": {
        url: "ChangeNotice",
        title: "線上保單變更紀錄"
      },
      "4-2": {
        url: "ChangeNotice",
        title: "取消線上保單變更"
      },
      "4-3": {
        url: "changeNotice",
        title: "申請/取消電子通知單"
      }
    }
  },
  "5": {
    title: "帳戶管理",
    child: {
      "5-1": {
        url: "changeAccount",
        title: "修改密碼/使用者名稱"
      }
    }
  }
};

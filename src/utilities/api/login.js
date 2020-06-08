/**
 * login相關接口管理
 */

import apiConfig from "../../constant/development"; //調用接口地址統一設定
import axios from "../http"; // 引入創建好的實例

const login = {
  login(params) {
    return axios.post(`${apiConfig.bd}/login/getSystemStatus`, params);
  }
};

export default login;

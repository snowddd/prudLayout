/**
 * api接口統一出口
 */

// 登入
import login from "./login";
import paymentMethod from "./paymentMethod";

// 導出所有API
export default {
  login,
  paymentMethod
};

/**
 * axios封裝
 *
 */
import axios from "axios";
// import store from '../store/index';

// 創建axios實例
const instance = axios.create({
  //api超時設定
  timeout: 1000 * 12,
  //是否使用cookie
  withCredentials: true
});
// 設置post請求
instance.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
/**
 * 請求攔截器
 * 如果請求前存在token就使用
 */

instance.interceptors.request.use(
  config => {
    // 登錄流程式控制制中，根據本地是否存在token判斷用戶的登錄情況
    // 但是即使token存在，也有可能token是過期的，所以在每次的請求頭中攜帶token
    // 後台根據攜帶的token判斷用戶的登錄情況，並返回給我們對應的狀態碼
    // 而後我們可以在響應攔截器中，根據狀態碼進行一些統一的操作。

    // const token = store.getters['login/getToken']
    const token = localStorage.getItem("token");

    token && (config.headers.Authorization = token);
    return config;
  },
  error => Promise.error(error)
);

// // 響應攔截器
// instance.interceptors.response.use(
//     // 請求成功
//     res => res.status === 200 ? Promise.resolve(res) : Promise.reject(res),
//     // 請求失敗
//     error => {
//         const { response } = error;
//         if (response) {
//             // 請求已經發出,不再2xx範圍
//             return Promise.reject(response);
//         } else {
//             // 處理斷網狀態
//             // eg:請求超時或斷網時，更新state的network狀態
//             // network狀態在app.vue中控制著一個全局的斷網提示組件的顯示隱藏
//             // 關於斷網組件中的刷新重新獲取數據，會在斷網組件中說明
//             if (!window.navigator.onLine) {
//                store.commit('changeNetwork', false);
//             } else {
//                 return Promise.reject(error);
//             }
//         }
//     });

export default instance;

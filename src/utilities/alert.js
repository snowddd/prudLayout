/**
 * alert
 */
import store from "../stores/index";
const alert = {
  alertDialog(alertmsg, alertRouteWay) {
    store.dispatch("modal/setDialogStatus", {
      status: true,
      type: 1,
      msg: alertmsg,
      alertRouteWay: alertRouteWay
    });
  }
};

export default alert;

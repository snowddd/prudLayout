import Vue from "vue";
import {
  Button,
  Container,
  Header,
  Footer,
  Aside,
  Main,
  Row,
  Col,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Breadcrumb,
  BreadcrumbItem,
  Message,
  MessageBox,
  Table,
  TableColumn,
  Tabs,
  TabPane,
  Tooltip,
  Step,
  Steps,
  Dialog,
  Checkbox,
  Collapse,
  CollapseItem,
  Divider,
  CheckboxGroup,
  // Popover,
  Form,
  FormItem,
  Input,
  Select,
  Option,
  DatePicker,
  Switch,
  Radio,
  RadioGroup,
  Loading,
  Pagination
} from "element-ui";

Vue.use(Button);
Vue.use(Container);
Vue.use(Header);
Vue.use(Footer);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Row);
Vue.use(Col);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Tooltip);
Vue.use(Step);
Vue.use(Steps);
Vue.use(Dialog);
Vue.use(Checkbox);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Divider);
Vue.use(CheckboxGroup);
Vue.use(Tabs);
Vue.use(TabPane);
// Vue.use(Popover)
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Select);
Vue.use(Option);
Vue.use(DatePicker);
Vue.use(Switch);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Loading);
Vue.use(Pagination);
Vue.use(Loading.directive);

Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$message = Message;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$loading = Loading.service;

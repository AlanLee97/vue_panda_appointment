import Vue from 'vue';

//导入路由
import router from "@/router";

//导入状态管理vuex
import store from "@/store";

//导入axios（网络请求框架）
import axios from 'axios';
import Qs from 'qs';

// 引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';



// 引入element-ui
import {
    Pagination,
    Dialog,
    Autocomplete,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
    Input,
    InputNumber,
    Radio,
    RadioGroup,
    RadioButton,
    Checkbox,
    CheckboxButton,
    CheckboxGroup,
    Switch,
    Select,
    Option,
    OptionGroup,
    Button,
    ButtonGroup,
    Table,
    TableColumn,
    DatePicker,
    TimeSelect,
    TimePicker,
    Popover,
    Tooltip,
    Breadcrumb,
    BreadcrumbItem,
    Form,
    FormItem,
    Tabs,
    TabPane,
    Tag,
    Tree,
    Alert,
    Slider,
    Icon,
    Row,
    Col,
    Upload,
    Progress,
    Spinner,
    Badge,
    Card,
    Rate,
    Steps,
    Step,
    Carousel,
    CarouselItem,
    Collapse,
    CollapseItem,
    Cascader,
    ColorPicker,
    Transfer,
    Container,
    Header,
    Aside,
    Main,
    Footer,
    Timeline,
    TimelineItem,
    Link,
    Divider,
    Image,
    Calendar,
    Backtop,
    PageHeader,
    CascaderPanel,
    Loading,
    MessageBox,
    Message,
    Notification
} from 'element-ui';


import VueRouter from "vue-router";







Vue.config.productionTip = false;

let domain = '47.103.204.62';
// let domain = 'localhost';
let port = '8083';

// 生成url的函数
Vue.prototype.createUrl = function (url) {
    return 'http://' + domain + ':' + port + url;
}

Vue.prototype.gotoPage = function(pagePath){
    this.$router.push(pagePath);
}

axios.defaults.baseURL = 'http://' + domain + ':' + port;

//axios的get请求
Vue.prototype.requestGet = function(url, data){
    axios.get(url,data).then(res => {
        return res;
    })
}

//axios的get请求
Vue.prototype.requestPost = function(url, data){
    data = Qs.stringify(data);
    axios.post(url, data).then(res => {
        return res;
    })
}

Vue.prototype.qsParam = function(data){
    return Qs.stringify(data);
}



//axios通用请求
Vue.prototype.request = function(method, url, data, headers){
    axios({
        method : method,
        url : url,
        data : this.qsParam(data),
        headers : headers
    }).then(res => {
        console.log(res);
        this.res = res;
    })

    return this.res;
}


//全局函数：获取用户信息
Vue.prototype.getUserInfo = function() {
    return JSON.parse(sessionStorage.getItem("userinfo"));
}

Vue.prototype.isLogin = false;

Vue.use(ElementUI);
Vue.use(VueRouter);

new Vue({
    router:router,
    store:store,

    render: h => h(App),



}).$mount('#app')

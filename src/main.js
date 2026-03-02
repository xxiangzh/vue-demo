// 引入 Vue 核心库
import Vue from 'vue'
// 引入根组件 App
import App from './App.vue'
// 引入路由
import VueRouter from "vue-router";
import router from "@/router";
// 引入elm UI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(VueRouter);
Vue.use(ElementUI);

// 关闭 Vue 的生产提示（可选，让控制台更干净）
Vue.config.productionTip = false

// 创建 Vue 实例，挂载到 #app 容器
new Vue({
    // 挂载目标（对应 index.html 中的 #app）
    el: '#app',
    router,
    // 渲染 App 组件
    render: h => h(App)
})
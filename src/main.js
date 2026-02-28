// 引入 Vue 核心库
import Vue from 'vue'
// 引入根组件 App
import App from './App.vue'

// 关闭 Vue 的生产提示（可选，让控制台更干净）
Vue.config.productionTip = false

// 创建 Vue 实例，挂载到 #app 容器
new Vue({
    // 挂载目标（对应 index.html 中的 #app）
    el: '#app',
    // 渲染 App 组件
    render: h => h(App)
})
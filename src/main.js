// examples/main.js
import Vue from 'vue'
import App from './App.vue'

// 导入组件库
// import alui from 'al-ui'
// 注册组件库
// Vue.use(alui)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
import Vue from 'vue'
import App from './App.vue'

import 'babel-polyfill'

import * as antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.less'
import '../src/common_style/index.less'
import YIcon from './common_style/yIcon.vue'
Vue.component(YIcon.name,YIcon)

Vue.use(antd)
const req=require.context('./common_style/icons',false,/\.svg$/)
console.log('req',req,req.keys())
req.keys().map(req);// keys() 会获取所有svg 文件
new Vue({
  el: '#app',
  render: h => h(App)
})

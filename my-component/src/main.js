import Vue from 'vue'
import App from './App.vue'

import 'babel-polyfill'

import * as antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.less'
import '../src/common_style/index.less'
// require('./common_style/components/alert/index.js')
console.log(antd)

Vue.use(antd)

new Vue({
  el: '#app',
  render: h => h(App)
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {DatePicker, Table, TableColumn, Popover} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import {ReportBalance} from './packages/index'
Vue.use(ReportBalance);

Vue.use(DatePicker)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Popover)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

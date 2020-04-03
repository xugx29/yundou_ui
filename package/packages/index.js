import ReportBalance from './components/ReportBalance/index.js'
import Profits from './components/Profits/index.js'
const components = [
  ReportBalance,
  Profits
];
const install = function (Vue) {
  components.map((c) => {
    Vue.component(c.name, c);
  });
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
export default {
  install,
  ReportBalance,
  Profits
}
export {
  install,
  ReportBalance,
  Profits
}

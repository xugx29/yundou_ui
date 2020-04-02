import './styles/global.less';
import './styles/color.less';
import './styles/varibles.less';
import './styles/mixin.less';
import './styles/normalize.less';
import ReportBalance from './components/ReportBalance/index.js'
const components = [
  ReportBalance
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
  ReportBalance
}
export {
  install,
  ReportBalance
}

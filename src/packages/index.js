import './styles/global.scss'
import './styles/font.scss'
import MessageBox from './components/MessageBox/index.js'
import Message from './components/message/index'
const components = [
  MessageBox
];
const install = function (Vue) {
  components.map((c) => {
    console.log(c);
    Vue.component(c.name, c);
    Vue.prototype.$message = Message.service;
  });
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
export default {
  install,
  MessageBox,
  Message
}
export {
  install,
  MessageBox,
  Message
}

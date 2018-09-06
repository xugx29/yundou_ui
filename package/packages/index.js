import './styles/index.scss'
import 'font-awesome/css/font-awesome.css'
import NoticeMessage from './components/noticeMessage/index.js'
import Message from './components/message/index'
const components = [
  NoticeMessage
]
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
  NoticeMessage,
  Message
}
export {
  install,
  NoticeMessage,
  Message
}

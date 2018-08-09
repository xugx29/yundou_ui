import './styles/index.scss'

import NoticeMessage from './components/noticeMessage/index.js'

const components = [
  NoticeMessage
]
const install = function (Vue) {
  if (install.installed) return;
  components.map((c) => {
    Vue.component(c.name, c);
  });
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
export {
  install,
  NoticeMessage
}

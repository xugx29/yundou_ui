import service from './src/index';
export default {
  install (Vue) {
    Vue.prototype.$message = service;
  },
  service
};

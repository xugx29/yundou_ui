import Vue from 'vue';
import messageVue from './message';
import merge from '../../../../utils/merge'

const MessageConstructor = Vue.extend(messageVue);

const defaults = {
  message: '',
  center: true,
  type: 'normal',
  duration: 2500,
  body: true
};

const Message = (options = {}) => {
  if (Vue.prototype.$isServer) return;
  options = merge({}, defaults, options);
  if (typeof options === 'string') {
    options = {
      message: options
    };
  }
  let parent = options.body ? document.body : options.target;
  let instance = new MessageConstructor({
    el: document.createElement('div'),
    data: options
  });
  parent.appendChild(instance.$el);
  instance.vm = instance.$mount();
  instance.vm.visible = true;
  Vue.nextTick(() => {
    instance.visible = true;
  });
  return instance;
};

['success', 'warning', 'normal', 'error'].forEach(type => {
  Message[type] = options => {
    if (typeof options === 'string') {
      options = {
        message: options
      };
    }
    options.type = type;
    return Message(options);
  };
});

export default Message

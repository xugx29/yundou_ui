import Vue from 'vue'
import noticeMessage from '@/packages/components/noticeMessage/noticeMessage'

describe('noticeMessage textContent', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(noticeMessage)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.blue').textContent)
      .to.equal('Welcome to Your Vue.js App')
  })
  it('has a created hook', () => {
    expect(typeof noticeMessage.created).toBe('function')
  })
})

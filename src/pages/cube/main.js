/*
 * @Description :
 * @Date        : 2022-03-27 19:42:46 +0800
 * @Author      : JackChou
 * @LastEditTime: 2022-03-27 21:52:11 +0800
 * @LastEditors : JackChou
 */
import Alpine from 'alpinejs'
import alpinejsComponent from 'alpinejs-component'
import { test } from '@/utils'
window.Alpine = Alpine

function dropdown(show = false) {
  return {
    show,
    open() {
      console.log('open')
      this.show = !this.show
      console.log(this.show)
      // test('dropdown')
    },
    close(event) {
      const button = this.$el.querySelector('button')
      const target = event.target
      if (this.$el.contains(target) && !button.contains(target)) {
        this.show = false
      }
    },
    get isOpen() {
      return this.show === true
    },
    content: 'Default content',
    init() {
      // console.log(this.$el.parentElement)
      console.log('dropdown --- init')
    },
  }
}

Alpine.data('dropdown', dropdown) // 注册数据
Alpine.plugin(alpinejsComponent) // 注册组件
Alpine.start() // 启动组件

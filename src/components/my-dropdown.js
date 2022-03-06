/*
 * @Description :
 * @Date        : 2022-03-06 20:49:58 +0800
 * @Author      : JackChou
 * @LastEditTime: 2022-03-06 21:57:11 +0800
 * @LastEditors : JackChou
 */
// import Alpine from '../../node_modules/alpinejs/dist/module.esm'
const { default: Alpine } = await import('https://cdn.skypack.dev/alpinejs')
import { insertTemplate } from '../utils/index.js'
// export
const dropdownTemplate = /*html*/ `
  <div x-data="{ ...dropdown(), ...$el.parentElement.data()}" @click="close">
    <button x-on:click.prevent="open">Open</button>
    <div x-show="isOpen()" x-html="content">
    </div>
  </div>
`
function dropdown() {
  return {
    // return () => ({
    show: false,
    open() {
      this.show = !this.show
    },
    close(event) {
      const button = this.$el.querySelector('button')
      const target = event.target
      if (this.$el.contains(target) && !button.contains(target)) {
        this.show = false
      }
    },
    isOpen() {
      return this.show === true
    },
    content: 'Default content',
    init() {
      console.log(this.$el.parentElement)
      console.log('dropdown --- init')
    },
    // })
  }
}

function XDropdown() {
  insertTemplate(dropdownTemplate)
  Alpine.data('dropdown', dropdown) // 注册数据
}
export default XDropdown()

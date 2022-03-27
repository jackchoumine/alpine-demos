// import Alpine from 'alpinejs'
// import './assets/style.css'
// const { default: Alpine } = await import('alpinejs') // await import('https://cdn.skypack.dev/alpinejs')
import Alpine from 'alpinejs'
window.Alpine = Alpine

import { myInput, myInputHtml } from '/src/components/MyInput.js'
import '/src/components/my-dropdown.js'
// import { dropdownTemplate } from './components/my-dropdown'
// import { insertTemplate } from './utils'
// 注册组件到页面上
document.querySelector('#app').innerHTML = myInputHtml

// window.Alpine = Alpine
// @ts-ignore
Alpine.data('myInput', myInput) // 注册数据
// insertTemplate(dropdownTemplate)
// const myDropdown = document.createElement('')
queueMicrotask(async () => {
  // import plugins before alpine
  // import alpinejs
  // const { default: Alpine } = await import('alpinejs')
  // @ts-ignore
  Alpine.data('myInput', myInput) // 注册数据
  // this will add 'x-title' attributes to all components, must be imported after alpinejs.
  // NOTE 微任务，确保 Alpine 初始化时，所有的组件都已经注册到页面上
  Alpine.start()
})

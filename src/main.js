import Alpine from 'alpinejs'
import './assets/style.css'
import { myInput, myInputHtml } from './components/MyInput'

// 注册组件到页面上
document.querySelector('#app').innerHTML = myInputHtml

window.Alpine = Alpine
// @ts-ignore
Alpine.data('myInput', myInput) // 注册数据

queueMicrotask(() => {
  // NOTE 微任务，确保 Alpine 初始化时，所有的组件都已经注册到页面上
  Alpine.start()
})

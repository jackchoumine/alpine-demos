import Alpine from 'alpinejs'
import './assets/style.css'
import { myInput, myInputHtml } from './components/MyInput'

document.querySelector('#app').innerHTML = myInputHtml

window.Alpine = Alpine
// @ts-ignore
Alpine.data('myInput', myInput)

queueMicrotask(() => {
  Alpine.start()
})

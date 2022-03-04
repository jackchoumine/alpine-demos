/*
 * @Description :
 * @Date        : 2022-03-04 23:40:51 +0800
 * @Author      : JackChou
 * @LastEditTime: 2022-03-05 00:17:29 +0800
 * @LastEditors : JackChou
 */
export const myInputHtml = /*html*/ `
<div x-data="myInput('hello')" x-effect="changeValue">
  <input x-model="value"/>
  <span x-text="value"></span>
</div>
<div>
  <div x-data="myInput">
  <input x-model="value"/>
  <span x-text="value"></span>
</div>
`
export const myInput = (initValue = 100) => ({
  value: initValue,
  init() {
    console.log('myInput')
    this.$watch('value', (newValue, oldValue) => {
      console.log(oldValue, '--->', newValue)
    })
  },
  changeValue() {
    console.log(this.value)
  },
})

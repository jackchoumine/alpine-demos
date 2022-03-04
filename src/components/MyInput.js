/*
 * @Description :
 * @Date        : 2022-03-04 23:40:51 +0800
 * @Author      : JackChou
 * @LastEditTime: 2022-03-05 00:05:34 +0800
 * @LastEditors : JackChou
 */
export const myInputHtml = /*html*/ `
<div x-data="myInput('hello')">
  <input x-model="value"/>
  <span x-text="value"></span>
</div>
`
export const myInput = (initValue = 100) => ({
  value: initValue,
  init() {
    console.log('myInput')
    this.$watch('value', (newValue) => {
      console.log(newValue)
    })
  },
})

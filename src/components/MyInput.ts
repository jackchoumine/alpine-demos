/*
 * @Description :
 * @Date        : 2022-03-04 23:40:51 +0800
 * @Author      : JackChou
 * @LastEditTime: 2022-03-04 23:57:06 +0800
 * @LastEditors : JackChou
 */
export const myInputHtml = /*html*/ `
<div x-data="myInput('hello')">
  <input x-model="value"/>
  <span x-text="value"></span>
</div>
`
export const myInput = (initValue: string) => ({
  value: initValue,
})

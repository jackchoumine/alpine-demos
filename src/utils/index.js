/*
 * @Description :
 * @Date        : 2022-03-06 20:53:23 +0800
 * @Author      : JackChou
 * @LastEditTime: 2022-03-27 21:10:53 +0800
 * @LastEditors : JackChou
 */
// https://stackoverflow.com/questions/65710987/reusable-alpine-js-components
function createCustomElement() {
  document.querySelectorAll('[x-component]').forEach((component) => {
    // console.log(component.getAttribute('x-component'))
    // console.log(typeof component.innerHTML)
    // console.log(component.content)
    const componentName = `x-${component.getAttribute('x-component')}`
    class Component extends HTMLElement {
      connectedCallback() {
        this.append(component.content.cloneNode(true))
      }

      data() {
        const attributes = this.getAttributeNames()
        // console.log('attributes')
        // console.log(attributes)
        const data = {}
        attributes.forEach((attribute) => {
          const value = this.getAttribute(attribute)
          // console.log('value')
          // console.log(value)
          // console.log(value)
          data[attribute] = value
        })
        return data
      }
    }
    customElements.define(componentName, Component)
  })
}

export function insertTemplate(htmlStr) {
  const firstScript = document.body.querySelector('script')
  const template = document.createElement('template')
  template.setAttribute('x-component', 'dropdown')
  template.innerHTML = htmlStr
  document.body.insertBefore(template, firstScript)
  // queueMicrotask(() => {
  createCustomElement()
  // })
}
export function test(name) {
  console.log(name)
}

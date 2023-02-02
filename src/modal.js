import { body, container } from './main.js'

export const modal = {
  Container: document.querySelector('.container2'),
  closeButton: document.getElementById('close-modal'),
  IMCMessage: document.getElementById('imc'),

  show() {
    modal.Container.classList.remove('hide')
    container.classList.add('low-opacity')
    body.style.backgroundColor = '#02030a'
  },
  hide() {
    modal.Container.classList.add('hide')
    container.classList.remove('low-opacity')
    body.style.backgroundColor = '#040924'
  }
}
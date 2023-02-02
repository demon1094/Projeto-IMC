import { body, container } from './main.js'

export const modal = {
  container: document.querySelector('.container2'),
  closeButton: document.getElementById('close-modal'),
  IMCMessage: document.getElementById('imc'),

  show() {
    modal.container.classList.remove('hide')
    container.classList.add('low-opacity')
    body.style.backgroundColor = '#02030a'
  },
  hide() {
    modal.container.classList.add('hide')
    container.classList.remove('low-opacity')
    body.style.backgroundColor = '#040924'
  }
}
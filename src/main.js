import { modal } from "./modal.js"
import { errorMessage } from "./error.js"
import { calcIMC } from "./functions.js"

// Variables
export const body = document.querySelector('body')
export const container = document.querySelector('.container')

const inputWeight = document.getElementById('weight')
const inputHeight = document.getElementById('height')

const calcButton = document.getElementById('calcButton')

// Callback functions
function handleIMC(event) {
  event.preventDefault()

  if (inputWeight.value != '' && inputHeight.value != '') {
    let IMC = calcIMC(inputWeight.value, inputHeight.value)
    
    if (!isNaN(IMC)) {
      modal.IMCMessage.innerHTML = IMC
      modal.show()
    } else {
      errorMessage.show()
    }
  } else {
    errorMessage.show()
  }
}

// Events
calcButton.addEventListener('click', handleIMC)
modal.closeButton.addEventListener('click', modal.hide)
document.addEventListener('keydown', (event) => {
  if (event.key == 'Escape') {
    if (!modal.Container.classList.contains('hide')) {
      modal.hide()
    }
  }
})
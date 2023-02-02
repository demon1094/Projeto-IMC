import { modal } from "./modal.js"
import { errorMessage } from "./error.js"
import { calcIMC } from "./functions.js"

// Variables
export const body = document.querySelector('body')
export const container = document.querySelector('.container')

const inputs = {
  weight: document.getElementById('weight'),
  height: document.getElementById('height')
}

const calcButton = document.getElementById('calcButton')

// Callback functions
function handleIMC(event) {
  event.preventDefault()

  if (inputs.weight.value != '' && inputs.height.value != '') {
    let IMC = calcIMC(inputs.weight.value, inputs.height.value)
    
    if (!isNaN(IMC)) {
      modal.IMCMessage.innerHTML = IMC
      modal.show()
    } else {
      errorMessage.show()
      return
    }
  } else {
    errorMessage.show()
    return
  }
}

// Events
calcButton.addEventListener('click', handleIMC)
modal.closeButton.addEventListener('click', modal.hide)
document.addEventListener('keydown', (event) => {
  if (event.key == 'Escape') {
    if (!modal.container.classList.contains('hide')) {
      modal.hide()
    }
  }
})
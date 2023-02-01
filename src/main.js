// Variables
const body = document.querySelector('body')
const container = document.querySelector('.container')
const modal = document.querySelector('.container2')
const errorMessage = document.querySelector('.error')

const inputWeight = document.getElementById('weight')
const inputHeight = document.getElementById('height')

const IMCMessage = document.getElementById('imc')
const calcButton = document.getElementById('calcButton')
const closeModalButton = document.querySelector('#close-modal')

// Callback functions
function calcIMC(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}

function handleIMC(event) {
  event.preventDefault()

  if (inputWeight.value != '' && inputHeight.value != '') {
    let IMC = calcIMC(inputWeight.value, inputHeight.value)
    
    if (!isNaN(IMC)) {
      IMCMessage.innerHTML = IMC
      showModal()
    } else {
      showErrorMessage()
    }
  } else {
    showErrorMessage()
  }
}

function showModal() {
  modal.classList.remove('hide')
  container.classList.add('low-opacity')
  body.style.backgroundColor = '#02030a'
}

function hideModal() {
  modal.classList.add('hide')
  container.classList.remove('low-opacity')
  body.style.backgroundColor = '#040924'
}

function showErrorMessage() {
  errorMessage.classList.add('active')
  setTimeout(() => {
    errorMessage.classList.remove('active')
  }, 1500)
}

// Events
calcButton.addEventListener('click', handleIMC)
closeModalButton.addEventListener('click', hideModal)
document.addEventListener('keydown', (event) => {
  if (event.key == 'Escape') {
    if (!modal.classList.contains('hide')) {
      hideModal()
    }
  }
})
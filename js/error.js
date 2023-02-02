export const errorMessage = {
  message: document.querySelector('.error'),

  show() {
    errorMessage.message.classList.add('active')
    setTimeout(() => {
      errorMessage.message.classList.remove('active')
    }, 1500)
  }
}
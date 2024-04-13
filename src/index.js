const button = document.getElementById('change')
button.addEventListener('click', () => {
  window.location.href = './brazilianText.html'
})

const changeLanguage = (route = 'brazilianText') => {
  window.location.href = `./${route}.html`
}

const $form = document.querySelector('#form')
const $buttonMailto = document.querySelector('#trucazo')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
  event.preventDefault()
  const form = new FormData(this)
  $buttonMailto.setAttribute('href', `mailto:me@pericianos37@gmail.com?subject=Mi nombre: ${form.get('name')} Mi correo: ${form.get('email')}&body=${form.get('message')}`)
  $buttonMailto.click()
}
const btnStart = document.querySelector('#btnStart')
const btnEnd = document.querySelector('#btnEnd')
const iptTime = document.querySelector('#iptTime')
const show = document.querySelector('#show')
let timer
btnStart.addEventListener('click', setTime)

btnEnd.addEventListener('click', () => {
  clearInterval(timer)
  btnStart.disabled = false
})


function setTime() {
  let cou = iptTime.value
  show.innerText = `Clock: ${cou}`

  if (cou > 0) {
    btnStart.disabled = true
    timer = setInterval(() => {
      cou--
      if (cou < 1) {
        btnStart.disabled = false
        myapi.handleSend('end')
        clearInterval(timer)
      }
      show.innerText = `Clock: ${cou}`
    }, 1000);
  }
}
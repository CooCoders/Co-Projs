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
  let cou = iptTime.value * 60
  show.innerText = `距离结束还有: ${cou} 秒`

  if (cou > 0) {
    btnStart.disabled = true
    timer = setInterval(() => {
      cou--
      if (cou < 1) {
        btnStart.disabled = false
        myapi.handleSend('end')
        clearInterval(timer)
      }
      show.innerText = `距离结束还有: ${cou} 秒`
    }, 1000);
  }
  show.innerText = "😊"
}
const text = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
]

const container = document.querySelector('#quiz')
const quiz = document.querySelector('#quiz')
const question = document.querySelector('#question')
const answers = document.querySelectorAll('.answer')
const a_text = document.querySelector('#a_text')
const b_text = document.querySelector('#b_text')
const c_text = document.querySelector('#c_text')
const d_text = document.querySelector('#d_text')
const subBtn = document.querySelector('#submit')

let curIndex = 0
let score = 0
loadData()


function loadData() {
  question.innerText = text[curIndex].question
  a_text.innerText = text[curIndex].a
  b_text.innerText = text[curIndex].b
  c_text.innerText = text[curIndex].c
  d_text.innerText = text[curIndex].d
}

function delAnswers() {
  answers.forEach((item) => {
    item.checked = false
  })
}

function getSelected() {
  let result
  /*
    注意 forEach 方法会循环所有的 item（即使已经触发结束条件）
    并且 foEach 方法内部无法 return 因此要通过外部变量保存的方式返回
  */
  answers.forEach((item) => {
    if (item.checked) {
      result = item
    }
  })
  return result
}

subBtn.addEventListener('click', () => {
  const selectItem = getSelected()
  if (selectItem) {
    if (selectItem.id == text[curIndex].correct) {
      score++
    }
    curIndex++
    if (curIndex < text.length) {
      delAnswers()
      loadData()
    } else {
      container.innerHTML = `
      <h2>Your Score: ${score}</h2>
      <button onclick='location.reload()' id="submit">Reload</button>
      `
    }
  } else {
    alert('choose one')
  }
})
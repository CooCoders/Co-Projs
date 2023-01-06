const form = document.getElementById('form')
const input = document.getElementById('input')
const todoUl = document.getElementById('todos')

/*
  在 localStorage 中保存的 todos 形式为 string:
  [{"text":"123","completed":true},{"text":"13333","completed":false}]
  经 JSON.parse() 处理为数组
*/
const todos = JSON.parse(localStorage.getItem('todos'))


// 如果 localStorage 中的 todos 项目不为空 则添加到页面中
if (todos) {
  todos.forEach((item) => {
    addTodo(item)
  })
}

// form 中每次提交时 增加新 li
form.addEventListener('submit', (e) => {
  e.preventDefault()

  addTodo()
  input.value = ''
})

function addTodo(todo) {
  let todoText = input.value
  if (todo) {
    todoText = todo.text
  }
  if (todoText) {
    const todoLi = document.createElement('li')
    // 在页面初始化的时候如果localStorage 中的todos不为空并且标记为 completed
    // 则为 li 项添加 completed 类
    if (todo && todo.completed) {
      todoLi.classList.add('completed')
    }
    todoLi.innerText = todoText

    // 每次点击（改变 completed 或者 删除线 状态都要更新 localStorage 状态）
    todoLi.addEventListener('click', () => {
      todoLi.classList.toggle('completed')
      keepStorage()
    })
    todoLi.addEventListener('contextmenu', (e) => {
      e.preventDefault()
      todoLi.remove()
      keepStorage()
    })

    todoUl.appendChild(todoLi)
  }
}

/* 
  用于将当前页面的 li 内容以及是否添加 completed 样式保存至 localStorage 的 todos 项中
*/
function keepStorage() {
  let lis = document.querySelectorAll('li')
  const todos = []
  lis.forEach((item) => {
    todos.push({
      text: item.innerText,
      completed: item.classList.contains('completed')
    })
  })
  localStorage.setItem('todos', JSON.stringify(todos))
}
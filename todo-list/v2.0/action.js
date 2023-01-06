const form = document.getElementById('form')
const input = document.getElementById('input')
const todos = document.getElementById('todos')

if (todos) {

}

// form 默认 enter 键提交
form.addEventListener('submit', (e) => {
  // 阻止默认提交事件
  e.preventDefault()
  addTodo()
  input.value = ''
})

function addTodo() {
  let todoText = input.value
  if (todoText) {
    // 动态创建 li 元素
    const todoLi = document.createElement('li')
    todoLi.innerText = todoText
    todos.appendChild(todoLi)

    // 左键单击改变样式为删除线
    todoLi.addEventListener('click', () => {
      todoLi.classList.toggle('completed')
    })
    // 右键单击为删除
    todoLi.addEventListener('contextmenu', (e) => {
      // 首先阻止默认右键弹出菜单
      e.preventDefault()
      todoLi.remove()

    })
  }
}
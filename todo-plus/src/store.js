import { defineStore } from 'pinia'
import { tomorrow } from './getDate'

export const useTodoStore = defineStore('todos', {
  state() {
    return {
      currentIndex: 0,
      todos: [
        {
          icon: 'user',
          name: 'Personal',
          tasks: [
            {
              id: 1,
              title: 'Dating',
              date: new Date(),
              done: false,
              deleted: false
            }
          ],
          colors: ['#ff6262', '#ffa947']
        },
        {
          icon: 'suitcase',
          name: 'Work',
          tasks: [
            {
              id: 3,
              title: 'Design Sprint',
              date: new Date(),
              done: true,
              deleted: false
            },
            {
              id: 4,
              title: 'Icon Set Design for Mobile App',
              date: new Date(),
              done: false,
              deleted: false
            },
            {
              id: 5,
              title: 'HTML/CSS Study',
              date: new Date(),
              done: false,
              deleted: false
            },
            {
              id: 6,
              title: 'Weekly Report',
              date: new Date(),
              done: false,
              deleted: false
            },
            {
              id: 7,
              title: 'Design Meeting',
              date: new Date(),
              done: false,
              deleted: false
            },
            {
              title: 'Quick Prototyping',
              date: new Date('2019-09-16'),
              done: false,
              deleted: false
            },
            {
              id: 8,
              title: 'UX Conference',
              date: new Date('2019-09-16'),
              done: false,
              deleted: false
            }
          ],
          colors: ['#5b9df9', '#47bfff']
        },
        {
          icon: 'home',
          name: 'Home',
          tasks: [
            {
              id: 2,
              title: 'House Keeping',
              date: new Date(),
              done: true,
              deleted: false
            }
          ],
          colors: ['#2c7d59', '#3ba776']
        }
      ],
      selected: null,
      unselect: null,
      editing: null
    }
  },

  getters: {
    currentTodo() {
      return this.todos[this.currentIndex]
    },

    todayTasks() {
      const tasks = []
      this.todos.forEach((todo) => {
        todo.tasks.forEach((task) => {
          if (task.date <= tomorrow && !task.done && !task.deleted) {
            tasks.push(task)
          }
        })
      })
      return tasks
    }
  },

  actions: {
    selectTodo(selected) {
      this.unselect = null
      this.selected = selected
    },

    unselectTodo() {
      this.unselect = this.selected
      this.selected = null
    },

    nextTodo() {
      if (this.currentIndex < this.todos.length - 1) {
        this.currentIndex++
      }
    },

    prevTodo() {
      if (this.currentIndex > 0) {
        this.currentIndex--
      }
    },

    deleteTask({ task }) {
      task.deleted = true
    },

    toggleEditing() {
      if (this.editing && this.editing.text) {
        this.selected.todo.tasks.unshift({
          title: this.editing.text,
          date: new Date(),
          done: false,
          deleted: false
        })
      }
      this.editing = this.editing ? null : { text: '' }
    }
  }
})
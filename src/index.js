import React from 'react'
import ReactDOM from 'react-dom'
import "./styles/style.css"

import TodoApp from './components/TodoApp'
import TodoModel from './components/TodoModel'

const model = new TodoModel('react-todos')

function render() {
  ReactDOM.render(
    <TodoApp model={model} />,
    document.getElementById('root'),
  )
}

model.subscribe(render)
render()

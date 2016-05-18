import React from 'react'
import Footer from './Footer.jsx'
import AddTodo from '../../containers/Todo/AddTodo.jsx'
import VisibleTodoList from '../../containers/Todo/VisibleTodoList.jsx'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App

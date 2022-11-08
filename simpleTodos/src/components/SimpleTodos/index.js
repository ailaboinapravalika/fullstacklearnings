import {Component} from 'react'

import TodoItem from '../TodoItem'

import './index.css'

// Write your code here
class SimpleTodos extends Component {
  initialTodosList = [
    {
      id: 1,
      title: 'Book the ticket for today evening',
    },
    {
      id: 2,
      title: 'Rent the movie for tomorrow movie night',
    },
    {
      id: 3,
      title: 'Confirm the slot for the yoga session tomorrow morning',
    },
    {
      id: 4,
      title: 'Drop the parcel at Bloomingdale',
    },
    {
      id: 5,
      title: 'Order fruits on Big Basket',
    },
    {
      id: 6,
      title: 'Fix the production issue',
    },
    {
      id: 7,
      title: 'Confirm my slot for Saturday Night',
    },
    {
      id: 8,
      title: 'Get essentials for Sunday car wash',
    },
  ]

  state = {TodoList: this.initialTodosList}

  onDeleteItem = id => {
    const {TodoList} = this.state
    const newTodoList = TodoList.filter(todo => todo.id !== id)
    this.setState({TodoList: newTodoList})
  }

  render() {
    const {TodoList} = this.state

    return (
      <div className="bg-todos">
        <div className="card">
          <h1 className="heading">Simple Todos</h1>
          <ul>
            {TodoList.map(todo => (
              <TodoItem
                todo={todo}
                key={todo.id}
                onDeleteItem={this.onDeleteItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos

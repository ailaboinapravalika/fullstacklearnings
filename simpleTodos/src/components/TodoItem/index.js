// Write your code here
import './index.css'

const TodoItem = props => {
  const {todo, onDeleteItem} = props
  const {id, title} = todo
  const onDelete = () => {
    onDeleteItem(id)
  }
  return (
    <li className="list-item">
      <p className="title">{title}</p>
      <button className="btn" onClick={onDelete}>
        delete
      </button>
    </li>
  )
}
export default TodoItem

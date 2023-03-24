// Write your code here
import './index.css'

const TodosItem = props => {
  const {todosItems, onDeleteTodos} = props
  const {title, id} = todosItems
  const onDelete = () => {
    onDeleteTodos(id)
    console.log(id)
  }
  return (
    <li>
      <p>{title}</p>
      <button type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}
export default TodosItem

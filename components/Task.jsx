const Task = ({task, onRemove, onToggleTaskDone}) => {
  return (
    <li>
      <span onClick={onToggleTaskDone}
      style={{
        textDecoration: task.done ? "line-through" : "none", 
        color: task.done ? "red" : "black"
        }}>{task.text}</span>
      <button onClick={onRemove} className="btnRemove">Remover</button>
    </li>
  )
}

export default Task

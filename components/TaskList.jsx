import Task from './Task'

const TaskList = ({tasks, onRemoveTask, onToggleTaskDone}) => {
  return (
    <ul>
      {tasks.length==0 ? (<p>Nenhuma tarefa encontrada.</p>)
      :(tasks.map((task) => (
        <Task
        key={task.id}
        task={task}
        onRemove={()=>onRemoveTask(task.id)}
        onToggleTaskDone={()=>onToggleTaskDone(task.id)}
        />
      )))}
    </ul>
  )
}

export default TaskList

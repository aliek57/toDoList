import {useState, useEffect} from 'react'

import TaskInput from "../components/TaskInput"
import TaskList from "../components/TaskList"

function App() {

  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks') || []))

  useEffect(()=>{
    //salvar tarefas no local storage ao mudar o estado
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = (taskTitle) => {
    //id, title, done
    //adiciona nova tarefa ao estado
    const newTask = {id: Date.now(), text: taskTitle, done: false}
    setTasks([...tasks, newTask])
  }

  const removeTask = (taskId) => {
    //remove tarefa do estado
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  //mudar tarefa pra completa ou não
  const toggleTaskDone = (taskId) => {
    //busca a tarefa pelo id e troca seu estado
    setTasks(tasks.map((task) => task.id === taskId ? {...task, done: !task.done} : task))
  }


  return (
    <>
      <h1>Lista de Tarefas</h1>
      <TaskInput onAddTask={addTask}/>
      <TaskList tasks={tasks} onRemoveTask={removeTask} onToggleTaskDone={toggleTaskDone}/>
    </>
  )
}

export default App

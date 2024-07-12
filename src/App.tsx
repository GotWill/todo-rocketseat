import { FormEvent, useEffect, useState } from 'react'
import styles from './App.module.css'
import Header from './components/Header/Header'
import Empty from './components/Empty/Empty';
import { Task } from './types/List';
import List from './components/List/List';
import { PlusCircle } from 'lucide-react';



function App() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [taskInput, setTaskInput] = useState('')

  useEffect(() => {
    const items = localStorage.getItem('tasks')
    if(items){
      setTasks(JSON.parse(items));
    }
  },[])

  const taskIsComplete = tasks.filter((item) => item.status)

  const addTaks = (e: FormEvent) => {
    e.preventDefault()
    const newList = {
      id: tasks.length + 1,
      content: taskInput,
      status: false
    }
    setTasks([...tasks, newList])
    setTaskInput('')
    localStorage.setItem("tasks", JSON.stringify([...tasks, newList]))
  }

  const deleteTask = (id: number) => {
    const newList = tasks.filter((item) => item.id !== id)
    setTasks(newList)
    localStorage.setItem("tasks", JSON.stringify(newList))
    
  }

  const onChangeStatus = (id: number) => {
    const taskIndex = tasks.findIndex((task) => task.id === id)
    const tempTask = [...tasks]
    tempTask[taskIndex].status = !tempTask[taskIndex].status
    setTasks(tempTask)
    localStorage.setItem("tasks", JSON.stringify(tempTask))
  }

  return (
    <div>
      <Header />
      <div className={styles.content}>
        <form onSubmit={addTaks}>
          <input type="text" placeholder='Adicione uma nova tarefa' value={taskInput} onChange={(e) => setTaskInput(e.target.value)} required />
          <button disabled={!taskInput} type='submit'>Criar <PlusCircle/> </button>
        </form>

        <div className={styles.header_options}>
          <div>
            <p>Tarefas criadas</p>
            <span>{tasks.length}</span>
          </div>
          <div>
            <p>Concluídas</p>
            <p className={styles.badge}>
              {tasks.length > 0 ? (
                <>
                  {taskIsComplete.length} <span>de</span> <span>{tasks.length}</span>
                </>
              ) : (
                <span>0</span>
              )}
            </p>

          </div>
        </div>



        {
          tasks.length > 0 ? (
            <div className={styles.flex_list}>
              {tasks.map((task) => {
                return <List key={task.id} task={task} onChangeStatus={onChangeStatus} onDelete={deleteTask} />
              })}
            </div>
          ) :
            (
              <Empty />
            )
        }



      </div>
    </div>
  )
}

export default App

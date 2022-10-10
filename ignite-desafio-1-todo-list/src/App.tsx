import { Header } from './components/Header';
import { Task } from './components/Task';
import styles from './App.module.scss';
import uuid from 'react-uuid';

import './index.scss';
import { useState } from 'react';

export interface TaskI {
  id: string;
  title: string;
  isComplete: boolean
}

const tasks = [
  {
    id: '1212',
    title: 'Assistir ao Ignite Lab',
    isComplete: false
  },
  {
    id: '125454',
    title: 'Terminar Atividade Desafio 1',
    isComplete: false
  },
  {
    id: '444444',
    title: 'Fazer Encomendas Amigurumi',
    isComplete: true
  }
]

function App() {
  //const [tasks, setTasks] = useState<TaskI[]>([]);


  function onDeleteTask(id: string) {
  }

  function onToggleTask(id: string) {
  }

  return (
    <>
      <Header />
      <main className={styles.app}>
        { tasks.map((task) => (
          <Task
            task={task}
            key={task.id}
            deleteTask={onDeleteTask}
            doneTask={onToggleTask}
            />
        ))}
      </main>
    </>
  )
}

export default App

import { Header } from './components/Header';
import { Task } from './components/Task';
import { Input } from './components/Input';
import { useState } from 'react';

import styles from './App.module.scss';
import './index.scss';

export interface TaskI {
  id: string;
  title: string;
  isComplete: boolean
}

// const tasks = [
//   {
//     id: '1212',
//     title: 'Assistir ao Ignite Lab',
//     isComplete: false
//   },
//   {
//     id: '125454',
//     title: 'Terminar Atividade Desafio 1',
//     isComplete: false
//   },
//   {
//     id: '444444',
//     title: 'Fazer Encomendas Amigurumi',
//     isComplete: true
//   }
// ]

function App() {
  const [tasks, setTasks] = useState<TaskI[]>([]);
  const [taskDone, setTaskDone] = useState(0)
  const taskNumber = tasks.length;


  function onDeleteTask(id: string) {
    setTasks(newArray => newArray.filter(task => task.id !== id))
  }

  function onToggleTaskDone(id: string) {
    console.log('onToggleTaskDone', id);
    const newTasks = tasks.map((task) =>
      task.id === id ? { ...task, isComplete: !task.isComplete } : task
    );

    setTasks(newTasks);
    const done = newTasks.reduce((acc, task) => (task.isComplete ? acc + 1 : acc), 0);
    setTaskDone(done)
  }

  function onCreateNewTask(task: TaskI) {
    const newTasks = [task, ...tasks];
    setTasks(newTasks);
  }

  return (
    <>
      <Header />
      <main className={styles.app}>
        <Input
            createNewTask={onCreateNewTask}
          />
        <div className={styles.info}>
          <div>Tarefas Criadas <span>{taskNumber? taskNumber: 0}</span></div>
          <div>Concluidas <span>{taskDone} de {taskNumber? taskNumber: 0}</span></div>
        </div>
        { tasks.map((task) => (
          <Task
            task={task}
            key={task.id}
            deleteTask={onDeleteTask}
            doneTask={onToggleTaskDone}
            />
        ))}
      </main>
    </>
  )
}

export default App

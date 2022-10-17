import { Header } from './components/Header';
import { Task } from './components/Task';
import { Input } from './components/Input';
import { NoTasks } from './components/NoTasks';
import { useState } from 'react';

import styles from './App.module.scss';
import './index.scss';

export interface TaskI {
  id: string;
  title: string;
  isComplete: boolean
}

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


  function countTotal() {
    return tasks.reduce((acc, _task) => acc + 1, 0);
  }

  return (
    <>
      <Header />
      <main className={styles.app}>
        <Input
            createNewTask={onCreateNewTask}
          />
        <div className={styles.info}>
          <div className={styles.tasksnumber}>Tarefas Criadas <span>{countTotal()}</span></div>
          <div className={styles.tasksdone}>Concluidas <span>{taskDone? taskDone: 0} de {taskNumber? taskNumber: 0}</span></div>
        </div>
        <ul className={styles.tasklist}>
        {countTotal() > 0 ? (
           tasks.map((task) => (
          <Task
            task={task}
            key={task.id}
            deleteTask={onDeleteTask}
            doneTask={onToggleTaskDone}
            />
        )) ) : (
          <NoTasks />
        ) 
      }
      </ul>
      </main>
    </>
  )
}

export default App

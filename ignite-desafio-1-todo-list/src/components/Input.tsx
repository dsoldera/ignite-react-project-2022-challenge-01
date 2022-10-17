import styles  from './Input.module.scss'
import plus from '../assets/plus.svg';
import uuid from 'react-uuid';
import { TaskI } from '../App';
import { useState, FormEvent, ChangeEvent } from 'react';

interface InputProps {
  createNewTask: (task:TaskI) => void;
}

export function Input({createNewTask}: InputProps) {
  const [newTaskTitle, setNewTaskTitle] = useState('');
  
  function handleNewTask(event: FormEvent) {
    event.preventDefault();
    console.log('add new Task', newTaskTitle);

    const newTask: TaskI = {
      id: uuid(),
      isComplete: false,
      title: newTaskTitle
    };

    createNewTask(newTask);

    //const newTask = [newTask, ...tasks];
    setNewTaskTitle('');
  }
  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTaskTitle(event.target.value);
  }

  return (
    <div className={styles.input}>
      <form onSubmit={handleNewTask}>
        <input type="text" 
               value={newTaskTitle}
               onChange={handleNewTaskChange}
               placeholder='Adicione uma nova tarefa'
        />
        <button type="submit">
          <span>Criar</span>
          <img src={plus} />
        </button>
      </form>
    </div>
  );
}
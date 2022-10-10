import styles  from './Task.module.scss'
import { FiTrash, FiCheckSquare } from 'react-icons/fi'
import { TaskI } from '../App';

import trash from '../assets/trash.svg';
import checkbox from '../assets/checkbox.svg';
import checkboxDone from '../assets/checkbox-done.svg';

interface TaskProps {
  task: TaskI;
  doneTask: (id: string) => void;
  deleteTask: (id:string) => void;
}

export function Task({task, doneTask, deleteTask}: TaskProps) {

  return (
    <li className={styles.task}>
      <button className={styles.checkbox}>
        <img src={task.isComplete? checkboxDone : checkbox} />
      </button>
      <p>{task.title}</p>
      <button type="button" className={styles.addbutton}>
          {/* <FiTrash size={16}/> */}
          <img src={trash} />
      </button>
    </li>
  );
}
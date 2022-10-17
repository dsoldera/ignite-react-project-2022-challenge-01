import styles from "./NoTasks.module.scss";
import clipboardIcon from "../assets/clipboard.svg";

export function NoTasks() {
  return (
    <div className={styles.empty}>
      <img src={clipboardIcon} alt="Clipboard icon" />
      <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}
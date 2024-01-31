import Image from "next/image";
import styles from "./Task.module.css";
import TaskIcon from "../../../public/assets/TaskIcon.svg";
import TaskDoneIcon from "../../../public/assets/TaskDoneIcon.svg";
import TaskDeleteIcon from "../../../public/assets/TaskDeleteIcon.svg";
import { TaskProps } from "@/lib/data";

export default function Task({ task, onCompleteTask, onDeleteTask }: TaskProps) {
  return (
    <div className={styles.task}>
      <div className={styles.taskCheckboxAndText} onClick={() => onCompleteTask(task.id)}>
        <Image src={task.isCompleted ? TaskDoneIcon : TaskIcon} alt="" />
        <p className={styles.taskDescription}>Fazer o café</p>
      </div>
      <div className={styles.taskDeleteIcon} onClick={() => onDeleteTask(task.id)}>
        <Image src={TaskDeleteIcon} alt="" className={styles.buttonToCompleteTask} />
      </div>
    </div>
  );
}

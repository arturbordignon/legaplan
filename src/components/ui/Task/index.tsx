import Image from "next/image";
import styles from "./Task.module.css";
import TaskIcon from "../../../public/assets/TaskIcon.svg";
import TaskDoneIcon from "../../../public/assets/TaskDoneIcon.svg";
import TaskDeleteIcon from "../../../public/assets/TaskDeleteIcon.svg";
import { TaskProps } from "@/services/data";

export default function Task({ task, onCompleteTask, onDeleteTask }: TaskProps) {
  const taskDescriptionClass = task.isCompleted
    ? `${styles.taskDescription} ${styles.completedTaskDescription}`
    : styles.taskDescription;

  return (
    <div className={styles.task}>
      <div className={styles.taskCheckboxAndText}>
        <Image
          src={task.isCompleted ? TaskDoneIcon : TaskIcon}
          alt=""
          onClick={() => onCompleteTask(task.id)}
          width={24}
          height={24}
        />
        <p className={taskDescriptionClass}>{task.taskName}</p>
      </div>
      <div className={styles.taskDeleteIcon}>
        <Image
          src={TaskDeleteIcon}
          alt=""
          className={styles.buttonToCompleteTask}
          onClick={() => onDeleteTask(task.id)}
          width={24}
          height={24}
        />
      </div>
    </div>
  );
}

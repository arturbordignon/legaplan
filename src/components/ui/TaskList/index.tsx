"use client";

import useTasks from "@/hooks/useTasks";
import Task from "../Task";
import styles from "./TaskList.module.css";
import { useState } from "react";

export default function TaskList() {
  const { tasks, toggleUpdateTaskIsCompleted, deleteTask, addNewTask } = useTasks();
  const [newTaskName, setNewTaskName] = useState("");

  const handleAddNewTask = () => {
    addNewTask(newTaskName);
    setNewTaskName("");
  };

  const completedTasks = tasks.filter((task) => task.isCompleted);
  const incompleteTasks = tasks.filter((task) => !task.isCompleted);

  return (
    <div className={styles.taskListContainer}>
      <div className={styles.taskCard}>
        <p className={styles.titleOfTheTasks}>Suas tarefas de hoje</p>
        {incompleteTasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onCompleteTask={toggleUpdateTaskIsCompleted}
            onDeleteTask={deleteTask}
          />
        ))}

        <p className={styles.titleOfTheTasks}>Tarefas finalizadas</p>
        {completedTasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onCompleteTask={toggleUpdateTaskIsCompleted}
            onDeleteTask={deleteTask}
          />
        ))}
      </div>
      <div className={styles.buttonToAddTask}>
        <button className={styles.buttonToAddTask} onClick={() => handleAddNewTask()}>
          Adicionar nova tarefa
        </button>
      </div>
    </div>
  );
}

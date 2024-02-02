"use client";

import useTasks from "@/hooks/useTasks";
import Task from "../Task";
import styles from "./TaskList.module.css";
import { useState } from "react";
import Modal from "../Modal";
import Image from "next/image";
import EmptyTaskIcon from "../../../public/assets/Clipboard.png";

export default function TaskList() {
  const { tasks, toggleUpdateTaskIsCompleted, deleteTask, addNewTask } = useTasks();
  const [newTaskName, setNewTaskName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteTaskModal, setIsDeleteTaskModal] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState("");

  const handleAddNewTask = () => {
    addNewTask(newTaskName);
    closeModal();
  };

  const handleDeleteTaskConfirmation = () => {
    deleteTask(taskToDelete);
    closeModal();
  };

  const openAddNewTaskModal = () => {
    setIsDeleteTaskModal(false);
    setIsModalOpen(true);
  };

  const openDeleteTaskModal = (taskId: string) => {
    setTaskToDelete(taskId);
    setIsDeleteTaskModal(true);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsDeleteTaskModal(false);
    setNewTaskName("");
    setTaskToDelete("");
  };

  const completedTasks = tasks.filter((task) => task.isCompleted);
  const incompleteTasks = tasks.filter((task) => !task.isCompleted);

  return (
    <div className={styles.taskListContainer}>
      <div className={styles.taskCard}>
        <p className={styles.titleOfTheTasks}>Suas tarefas de hoje</p>
        <div className={styles.tasksGap}>
          {incompleteTasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onCompleteTask={toggleUpdateTaskIsCompleted}
              onDeleteTask={() => openDeleteTaskModal(task.id)}
            />
          ))}
        </div>

        <p className={styles.titleOfTheTasks}>Tarefas finalizadas</p>
        <div className={styles.tasksGap}>
          {completedTasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onCompleteTask={toggleUpdateTaskIsCompleted}
              onDeleteTask={() => openDeleteTaskModal(task.id)}
            />
          ))}
        </div>
      </div>
      <div className={styles.buttonToAddTask}>
        <button className={styles.buttonToAddTask} onClick={openAddNewTaskModal}>
          Adicionar nova tarefa
        </button>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={isDeleteTaskModal ? handleDeleteTaskConfirmation : handleAddNewTask}
        newTaskName={newTaskName}
        setNewTaskName={setNewTaskName}
        isDeleteTaskModal={isDeleteTaskModal}
      />
    </div>
  );
}

import { useState, useEffect } from "react";

import { Task, allTaskServices } from "@/lib/data";

const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    setTasks(allTaskServices.fetchTasksFromLocalStorage());
  }, []);

  const addNewTask = (taskName: string) => {
    const addingNewTask = allTaskServices.addTasksToLocalStorage(taskName);

    setTasks(addingNewTask);
  };

  const toggleUpdateTaskIsCompleted = (id: string) => {
    const completingTask = allTaskServices.toggleUpdateTaskIsCompleted(id);

    setTasks(completingTask);
  };

  const deleteTask = (id: string) => {
    const deletingTask = allTaskServices.deleteTaskFromLocalStorage(id);

    setTasks(deletingTask);
  };

  return { tasks, addNewTask, toggleUpdateTaskIsCompleted, deleteTask };
};

export default useTasks;

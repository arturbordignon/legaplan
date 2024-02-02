export interface Task {
  id: string;
  taskName: string;
  isCompleted: boolean;
}

export interface TaskProps {
  task: Task;
  onCompleteTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  newTaskName: string;
  setNewTaskName: (name: string) => void;
  isDeleteTaskModal: boolean;
}

const readTasksFromLocalStorage = (): Task[] => {
  const tasksJson = localStorage.getItem("tasks");
  return tasksJson ? JSON.parse(tasksJson) : [];
};

const sendTasksToLocalStorage = (tasks: Task[]) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

export const allTaskServices = {
  fetchTasksFromLocalStorage: (): Task[] => readTasksFromLocalStorage(),

  addTasksToLocalStorage: (taskName: string): Task[] => {
    const tasks = readTasksFromLocalStorage();
    const newTask: Task = {
      id: crypto.randomUUID(),
      taskName,
      isCompleted: false,
    };
    const updatedTasks = [...tasks, newTask];
    sendTasksToLocalStorage(updatedTasks);
    return updatedTasks;
  },

  toggleUpdateTaskIsCompleted: (id: string): Task[] => {
    const tasks = readTasksFromLocalStorage();
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );
    sendTasksToLocalStorage(updatedTasks);
    return updatedTasks;
  },

  deleteTaskFromLocalStorage: (id: string): Task[] => {
    const tasks = readTasksFromLocalStorage();
    const updatedTasks = tasks.filter((task) => task.id !== id);
    sendTasksToLocalStorage(updatedTasks);
    return updatedTasks;
  },
};

import { tasks } from "./database.js";


const getTasksDescriptions = (tasksList) => tasksList.map(task => task.description);


const filterTasksByPriority = (tasksList, priority) => tasksList.filter(task => task.priority === priority);


const findTaskById = (tasksList, id) => tasksList.find(task => task.id === id);


const removeTask = (tasksList, id) => {
    const taskIndex = tasksList.findIndex(task => task.id === id);
    if (taskIndex === -1) {
      return "Tarefa não encontrada.";
    }
    return [...tasksList.slice(0, taskIndex), ...tasksList.slice(taskIndex + 1)];
  };

  
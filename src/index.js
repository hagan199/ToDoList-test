// Importing CSS styles and modules
import './style.css';
import displayTask from './modules/displayTask.js';
import { updateTask, deleteTask, editTask } from './modules/statusUpdate.js';
import { completedTasks } from './modules/completedTasks.js';

// Selecting DOM elements
const myTaskList = document.querySelector('#myTaskList');
const inputTask = document.querySelector('.input');
const Form = document.querySelector('.form');
const btn = document.querySelector('.btn');

let taskList = [];

// Function to retrieve tasks from local storage
function getTasks() {
  if (localStorage.getItem('Tasks')) {
    taskList = JSON.parse(localStorage.getItem('Tasks'));
  }
}

getTasks();

// Function to add a task to the task list array
function addTaskToList(Task) {
  taskList.push(Task);
}

// Function to handle adding a task
function addTask() {
  Form.addEventListener('submit', (e) => {
    e.preventDefault();
    getTasks();
    // Creating a new task object and adding it to the task list
    addTaskToList({
      discription: inputTask.value,
      index: taskList.length !== 0 ? taskList[taskList.length - 1].index + 1 : 1,
      completed: false,
    });
    // Storing the updated task list in local storage
    localStorage.setItem('Tasks', JSON.stringify(taskList));
    getTasks();
    // Displaying the updated task list
    displayTask(taskList, myTaskList);
    // Updating task status
    updateTask(taskList, displayTask, myTaskList);
    inputTask.value = '';
  });
}

// Function to clear completed tasks from the task list
function clearCompleted(taskList) {
  const newK = taskList.filter((item) => !item.completed);
  for (let i = 0; i < newK.length; i += 1) {
    newK[i].index = i + 1;
  }

  return newK;
}

// Event listener for the button click to clear completed tasks
btn.addEventListener('click', () => {
  getTasks();
  // Clearing completed tasks and updating the task list in local storage
  taskList = clearCompleted(taskList);
  localStorage.setItem('Tasks', JSON.stringify(taskList));

  // Displaying the updated task list
  displayTask(taskList, myTaskList);
  // Updating task status
  updateTask(taskList, displayTask, myTaskList);
});

// Calling functions to initialize and display the task list
addTask();
displayTask(taskList, myTaskList);
updateTask(taskList, displayTask, myTaskList);

// Exporting functions for external use
export {
  addTaskToList, deleteTask, completedTasks, addTask, editTask,
};

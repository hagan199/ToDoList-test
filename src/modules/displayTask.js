export const displayTask = () => {
  const mytaskList = document.querySelector('.myTasksList');
  const taskArray = JSON.parse(localStorage.getItem('taskArray')) || [];
  taskArray.sort((a, b) => a.index - b.index);
  
  const fragment = document.createDocumentFragment();
  
  for (const task of taskArray) {
    const taskElement = document.createElement('div');
    taskElement.classList.add('addTask');
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('Input-checkbox');
    
    const inputText = document.createElement('input');
    inputText.type = 'text';
    inputText.classList.add('input-text');
    inputText.value = task.description;
    
    const deleteIcon = document.createElement('span');
    deleteIcon.classList.add('delete-task-icon');
    deleteIcon.textContent = '\u{1F5D1}';
    
    taskElement.appendChild(checkbox);
    taskElement.appendChild(inputText);
    taskElement.appendChild(deleteIcon);
    
    fragment.appendChild(taskElement);
  }
  
  mytaskList.innerHTML = '';
  mytaskList.appendChild(fragment);
};

export const addTasks = (addTask) => {
  const addTaskInput = document.querySelector('.addInput');
  
  if (addTask !== '') {
    const taskArray = JSON.parse(localStorage.getItem('taskArray')) || [];
    taskArray.push({ completed: false, description: addTask });
    
    for (let i = 1; i <= taskArray.length; i += 1) {
      taskArray[i - 1].index = i;
    }
    
    localStorage.setItem('taskArray', JSON.stringify(taskArray));
    addTaskInput.value = '';
    displayTask();
  }
};

export const deleteTask = (index) => {
  const taskArray = JSON.parse(localStorage.getItem('taskArray')) || [];
  taskArray.splice(index, 1);
  
  for (let i = 1; i <= taskArray.length; i += 1) {
    taskArray[i - 1].index = i;
  }
  
  localStorage.setItem('taskArray', JSON.stringify(taskArray));
  displayTask();
};

export const editTask = (index) => {
  const taskArray = JSON.parse(localStorage.getItem('taskArray')) || [];
  const textInputs = document.querySelectorAll('.input-text');
  
  const handleInputChange = (event) => {
    taskArray[index].description = event.target.value;
    localStorage.setItem('taskArray', JSON.stringify(taskArray));
  };

  textInputs[index].addEventListener('change', handleInputChange);
};

// Call the displayTask function when the page loads to show the tasks
window.addEventListener('DOMContentLoaded', displayTask);

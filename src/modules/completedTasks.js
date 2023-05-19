// Function to update the completion status of a task in the task list
function completedTasks(taskList, Task) {
  const newT = taskList.map((p) => {
    if (p.index === Task.index) {
      return {
        discription: p.discription,
        index: p.index,
        completed: !p.completed,
      };
    }
    return p;
  });

  return newT;
}

// Function to handle the status complete checkbox change event
const StatusComplete = (
  CompletedBox,
  taskList,
  myTaskList,
  displayTask,
  updateTask,
  Task
) => {
  CompletedBox.addEventListener('change', () => {
    // Updating the task list with the completion status change
    taskList = completedTasks(taskList, Task);
    // Storing the updated task list in local storage
    localStorage.setItem('Tasks', JSON.stringify(taskList));

    // Displaying the updated task list
    displayTask(taskList, myTaskList);

    // Updating task status
    updateTask(taskList, displayTask, myTaskList);
  });
};

// Exporting functions for external use
export { StatusComplete, completedTasks };

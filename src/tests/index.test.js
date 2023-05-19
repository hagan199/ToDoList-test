jest.mock('../index');

const { addTaskToList, deleteTask } = require('../index.js');

describe('Todo List Operations', () => {
  test('should add an item to the list', () => {
    const taskToAdd = {
      description: 'test description',
      index: 1,
      completed: false,
    };

    const expectedListAfterAddition = [taskToAdd];
    const actualListAfterAddition = addTaskToList(taskToAdd);

    expect(actualListAfterAddition).toEqual(expectedListAfterAddition);
  });

  test('should delete an item from the list', () => {
    const taskToDelete = {
      description: 'test description',
      index: 1,
      completed: false,
    };

    const initialList = [taskToDelete];
    const expectedListAfterDeletion = [];
    const actualListAfterDeletion = deleteTask(taskToDelete);

    expect(actualListAfterDeletion).toEqual(expectedListAfterDeletion);
  });
});

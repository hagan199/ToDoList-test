jest.mock('../index');

const { editTask } = require('../index.js');

describe('Edit Task', () => {
  test('should edit a task', () => {
    const taskList = [
      {
        description: 'testing description 1',
        index: 1,
        completed: false,
      },
      {
        description: 'testing 2',
        index: 2,
        completed: false,
      },
    ];

    const updatedTask = {
      description: 'test description updated',
      index: 1,
      completed: false,
    };

    const expectedUpdatedList = [
      updatedTask,
      taskList[1],
    ];

    const actualUpdatedList = editTask(taskList, 'test description updated');

    expect(actualUpdatedList).toEqual(expectedUpdatedList);
  });
});

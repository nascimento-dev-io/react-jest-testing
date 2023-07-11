/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import Todos from '../../../src/components/Todos';
import { TodoContext } from '../../../src/contexts/TodoContext';

describe('Todos Component test', () => {
  const handleRemoveTask = jest.fn();
  const handleToggleTaskDone = jest.fn();

  it("should render You don't have any tasks text when there are no tasks created", () => {
    render(
      <TodoContext.Provider
        value={{ todos: [], handleRemoveTask, handleToggleTaskDone }}
      >
        <Todos />
      </TodoContext.Provider>
    );

    const noTasks = screen.getByText(/You don't have any tasks/i);

    expect(noTasks).toBeInTheDocument();
  });

  it('should be render tasks with props todos', () => {
    const todos = [
      {
        id: '1',
        description: 'description',
        done: false,
      },
      {
        id: '2',
        description: 'description2',
        done: true,
      },
    ];

    render(
      <TodoContext.Provider
        value={{ todos, handleRemoveTask, handleToggleTaskDone }}
      >
        <Todos />
      </TodoContext.Provider>
    );

    const descriptionTask = screen.getByText(todos[0].description);
    const descriptionTask2 = screen.getByText(todos[1].description);

    expect(descriptionTask).toBeInTheDocument();
    expect(descriptionTask2).toBeInTheDocument();
  });

  it('should be checkbox checked when task done and not checked when done is false', async () => {
    const todos = [
      { id: '1', description: 'description', done: false },
      { id: '2', description: 'description2', done: true },
    ];

    render(
      <TodoContext.Provider
        value={{ todos, handleRemoveTask, handleToggleTaskDone }}
      >
        <Todos />
      </TodoContext.Provider>
    );

    const checkTask1 = screen.getByTestId('check-done-task-1');
    expect(checkTask1).not.toBeChecked();

    const checkTask2 = screen.getByTestId('check-done-task-2');
    expect(checkTask2).toBeChecked();
  });
});

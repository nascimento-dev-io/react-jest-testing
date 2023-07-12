import { render, screen } from '@testing-library/react';

import Task from '../../../src/components/Task';
import TodoProvider from '../../../src/contexts/TodoContext';

describe('Task Component test', () => {
  const todo = {
    id: '1',
    description: 'test',
    done: false,
  };
  it('should be render correctly', () => {
    render(
      <TodoProvider>
        <Task todo={todo} />
      </TodoProvider>
    );

    expect(screen.getByText(todo.description)).toBeInTheDocument();
  });

  it('should be render correctly when task done', () => {
    render(
      <TodoProvider>
        <Task todo={{ ...todo, done: true }} />
      </TodoProvider>
    );

    const description = screen.getByText(todo.description);

    expect(description).toHaveClass('line-through');
  });
});

import PropTypes from 'prop-types';
import React, { useCallback, useEffect } from 'react';

export const TodoContext = React.createContext({});

function TodoProvider({ children }) {
  const [todos, setTodos] = React.useState(() => {
    const localTodos = localStorage.getItem('todos');

    if (localTodos) {
      return JSON.parse(localTodos);
    }

    return [];
  });

  const handleToggleTaskDone = useCallback(
    (id) => {
      const updatedTodos = todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      });
      setTodos(updatedTodos);
    },
    [todos]
  );

  const handleCreateTodo = useCallback((taskDescription) => {
    const todo = {
      id: (Math.random() * 100).toString(),
      description: taskDescription,
      done: false,
    };
    setTodos((prevState) => [...prevState, todo]);
  }, []);

  const handleRemoveTask = useCallback(
    (id) => {
      const updatedTodos = todos.filter((todo) => todo.id !== id);
      setTodos(updatedTodos);
    },
    [todos]
  );

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContext.Provider
      value={{
        todos,
        handleToggleTaskDone,
        handleCreateTodo,
        handleRemoveTask,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

TodoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TodoProvider;

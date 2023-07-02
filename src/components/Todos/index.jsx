/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';

function Todos({ todos, setTodos }) {
  function handleCheckDone(id) {
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
  }
  return (
    <ul className="flex flex-col gap-y-4">
      {todos.length > 0
        ? todos.map((todo) => (
          <li key={todo.id} className="bg-zinc-50 rounded-lg p-5 shadow-md animate-fade-up animate-once animate-duration-300 animate-delay-100">
            <label htmlFor={`checkTask-${todo.id}`} className="flex items-center h-6 gap-x-4">
              <input id={`checkTask-${todo.id}`} type="checkbox" className="w-4 h-4 border-zinc-100 accent-green-300" onChange={() => handleCheckDone(todo.id)} checked={todo.done} />
              <p className={`text-sm break-all ${todo.done && 'line-through'}`}>{todo.description}</p>
            </label>
          </li>
        ))

        : <li className="text-md text-center text-zinc-400">You don&apos;t have any tasks</li>}
    </ul>
  );
}

Todos.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.number,
      description: PropTypes.string,
      done: PropTypes.bool,
    },
  )).isRequired,
  setTodos: PropTypes.func.isRequired,
};

export default Todos;

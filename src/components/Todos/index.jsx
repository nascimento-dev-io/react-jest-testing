import { useContext } from 'react';
import { TodoContext } from '../../contexts/TodoContext';
import Task from '../Task';

function Todos() {
  const { todos } = useContext(TodoContext);

  return (
    <ul className="flex flex-col gap-y-4">
      {todos?.length > 0 ? (
        todos.map((todo) => <Task key={todo.id} todo={todo} />)
      ) : (
        <li className="text-md text-center text-zinc-400">
          You don&apos;t have any tasks
        </li>
      )}
    </ul>
  );
}

export default Todos;

import PropTypes from 'prop-types';
import { useContext } from 'react';
import { TodoContext } from '../../contexts/TodoContext';
import Button from '../commom/Button';
import CheckBox from '../commom/CheckBox';

function Task({ todo }) {
  const { handleToggleTaskDone, handleRemoveTask } = useContext(TodoContext);
  return (
    <li className="flex justify-between items-center  gap-4  text-zinc-800 bg-zinc-50 rounded-lg p-5 shadow-md animate-fade-up animate-once animate-duration-300 animate-delay-100">
      <CheckBox todo={todo} onClick={handleToggleTaskDone} />

      <p className={`text-sm break-all ${todo.done ? 'line-through' : ''}`}>
        {todo.description}
      </p>

      <Button todoId={todo.id} onClick={handleRemoveTask} />
    </li>
  );
}

Task.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string,
    description: PropTypes.string,
    done: PropTypes.bool,
  }).isRequired,
};

export default Task;

import PropTypes from 'prop-types';

function CheckBox({ onClick, todo }) {
  return (
    <label
      htmlFor={`checkTask-${todo.id}`}
      data-testid="label-done-task"
      className={`block w-5 h-5 border-2 border-zinc-300 rounded-sm cursor-pointer flex-shrink-0 ${
        todo.done && 'bg-gradient-to-r from-orange-400 to-orange-300'
      }`}
    >
      <input
        id={`checkTask-${todo.id}`}
        type="checkbox"
        data-testid={`check-done-task-${todo.id}`}
        className="invisible"
        onChange={() => onClick(todo.id)}
        checked={todo.done}
      />
    </label>
  );
}

CheckBox.propTypes = {
  onClick: PropTypes.func.isRequired,
  todo: PropTypes.shape({
    id: PropTypes.string,
    description: PropTypes.string,
    done: PropTypes.bool,
  }).isRequired,
};

export default CheckBox;

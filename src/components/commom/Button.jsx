import { XCircle } from 'lucide-react';
import PropTypes from 'prop-types';

function Button({ onClick, todoId }) {
  return (
    <button
      type="button"
      data-testid="button-cancel-task"
      onClick={() => onClick(todoId)}
      className="flex items-center justify-center cursor-pointer"
    >
      <XCircle
        size={25}
        className="text-zinc-300 cursor-pointer transition hover:text-orange-200 flex-shrink-0"
      />
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  todoId: PropTypes.string.isRequired,
};

export default Button;

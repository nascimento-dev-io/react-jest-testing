import CheckBox from '../../../src/components/commom/CheckBox';

const { render, screen, fireEvent } = require('@testing-library/react');

describe('Checkbox Component test', () => {
  it('should be render the checkbox', () => {
    const todo = {
      id: '1',
      description: 'test',
      done: false,
    };

    render(<CheckBox todo={todo} />);

    const checkbox = screen.getByTestId('label-done-task');

    expect(checkbox).toBeInTheDocument();
  });

  it('should be render checkbox with checked if the todo is done', () => {
    const todo = {
      id: '1',
      description: 'test',
      done: true,
    };

    render(<CheckBox todo={todo} />);

    const checkbox = screen.getByTestId('check-done-task-1');

    expect(checkbox).toBeChecked();
  });

  it('should be render checkbox with not checked if the todo is not done', () => {
    const todo = {
      id: '1',
      description: 'test',
      done: false,
    };

    render(<CheckBox todo={todo} />);

    const checkbox = screen.getByTestId('check-done-task-1');

    expect(checkbox).not.toBeChecked();
  });

  it('should be render checkbox with not checked if the todo is not done', () => {
    const todo = {
      id: '1',
      description: 'test',
      done: false,
    };

    const onToggleTaskDone = jest.fn();

    render(<CheckBox todo={todo} onClick={onToggleTaskDone} />);

    const checkbox = screen.getByTestId('check-done-task-1');

    fireEvent.click(checkbox);
    expect(onToggleTaskDone).toBeCalled();
  });
});

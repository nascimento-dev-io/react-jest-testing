import { fireEvent, render, screen } from '@testing-library/react';
import Button from '../../../src/components/commom/Button';

describe('Button Component test', () => {
  const onRemoveTask = jest.fn();
  const todoId = '1';
  it('should be render correctly', () => {
    render(<Button todoId={todoId} onClick={onRemoveTask} />);
    const button = screen.getByTestId('button-cancel-task');

    expect(button).toBeInTheDocument();
  });

  it('should be call onRemoveTask when clicked with argument 1', () => {
    render(<Button todoId={todoId} onClick={onRemoveTask} />);

    const button = screen.getByTestId('button-cancel-task');

    fireEvent.click(button);
    expect(onRemoveTask).toBeCalledWith('1');
  });
});

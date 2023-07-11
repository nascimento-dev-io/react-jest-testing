/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../src/App';
import TodoProvider from '../src/contexts/TodoContext';

function renderComponent() {
  render(
    <TodoProvider>
      <App />
    </TodoProvider>
  );
}

describe('App Component test', () => {
  it('should be render initial state correctly', () => {
    renderComponent();

    const headingWelcome = screen.getByText(/Welcome back,/i);
    const pendingTaskInfo = screen.getByText(
      /You've got 0 tasks coming up in next days./
    );
    const inputElement = screen.getByPlaceholderText('Add a new task...');
    const devInfo = screen.getByText('Developed by');
    const devInfoName = screen.getByText('Jorge Nascimento');

    expect(headingWelcome).toBeInTheDocument();
    expect(pendingTaskInfo).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
    expect(devInfo).toBeInTheDocument();
    expect(devInfoName).toBeInTheDocument();
  });

  it('should be create a new task', async () => {
    renderComponent();

    const inputTaskDescription =
      screen.getByPlaceholderText('Add a new task...');

    await userEvent.type(inputTaskDescription, 'test');
    await userEvent.keyboard('{enter}');

    expect(inputTaskDescription).toHaveValue('');
    expect(screen.getByText('test')).toBeInTheDocument();
  });
});

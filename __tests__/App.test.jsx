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
  it('should render Welcome back, user text', () => {
    const user = 'Jorge';
    renderComponent();

    const headingWelcome = screen.getByText(`Welcome back, ${user}`);

    expect(headingWelcome).toBeInTheDocument();
  });

  it("should render You've got 0 tasks coming up in next days. text", () => {
    renderComponent();

    const pendingTaskInfo = screen.getByText(
      /You've got 0 tasks coming up in next days./
    );

    expect(pendingTaskInfo).toBeInTheDocument();
  });

  it('should render an input with placeholder Add a new task...', () => {
    renderComponent();

    const inputElement = screen.getByPlaceholderText('Add a new task...');

    expect(inputElement).toBeInTheDocument();
  });

  it('should render Developed by Jorge Nascimento text', () => {
    renderComponent();

    const devInfo = screen.getByText('Developed by');
    const devInfoName = screen.getByText('Jorge Nascimento');

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

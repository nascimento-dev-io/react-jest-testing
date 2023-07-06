import { useContext, useMemo, useState } from 'react';
import Todos from './components/Todos';
import { TodoContext } from './contexts/TodoContext';

function App() {
  const [taskDescription, setTaskDescription] = useState('');

  const { handleCreateTodo, todos } = useContext(TodoContext);

  function handleSubmit(e) {
    e.preventDefault();

    if (taskDescription.trim() === '') {
      return;
    }

    handleCreateTodo(taskDescription);
    setTaskDescription('');
  }

  const pendingTasks = useMemo(() => {
    return todos.filter((todo) => !todo.done).length;
  }, [todos]);

  return (
    <main className="w-full max-w-4xl h-max bg-zinc-100 rounded-3xl p-16 pb-2 mx-16 selection:bg-orange-200">
      <header className="mb-11">
        <h1 className="font-normal text-3xl">Welcome back, Jorge</h1>
        <p className="text-base text-slate-400 mt-2">
          You&apos;ve got {pendingTasks} tasks coming up in next days.
        </p>
      </header>

      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-x-4 h-6 my-4 p-5 border border-orange-100 rounded-md"
      >
        <input
          type="text"
          name="todo"
          onChange={(e) => setTaskDescription(e.target.value)}
          value={taskDescription}
          placeholder="Add a new task..."
          className=" w-full text-sm text-zinc-500 bg-transparent outline-none "
        />
      </form>

      <Todos />

      <footer className="mt-6">
        <p className="text-sm text-zinc-400 text-center">
          Developed by{' '}
          <a
            href="https://www.github.com/nascimento-dev-io"
            className="italic text-orange-300"
            target="blank"
          >
            Jorge Nascimento
          </a>{' '}
        </p>
      </footer>
    </main>
  );
}

export default App;

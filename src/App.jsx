import { useEffect, useState } from 'react';
import Todos from './components/Todos';

let index = localStorage.getItem('todos')?.length || 0;

function App() {
  const [task, setTask] = useState('');
  const [taskDone, setTaskDone] = useState(false);
  const [todos, setTodos] = useState(() => {
    const localTodos = localStorage.getItem('todos');

    if (localTodos) {
      return JSON.parse(localTodos);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  });

  const pendingTasks = todos.filter((todo) => !todo.done).length;

  function handleCreateTodo(event) {
    event.preventDefault();

    const todo = {
      id: index += 1,
      description: task,
      done: taskDone,
    };
    setTodos((prevState) => ([...prevState, todo]));
    setTask('');
  }

  function handleChangeTaskCheck(event) {
    setTaskDone(event.target.checked);
  }

  return (
    <main className="w-full max-w-4xl h-max bg-zinc-100 rounded-3xl p-16 mx-16">
      <header className="mb-11">
        <h1 className="font-normal text-3xl">Welcome back, Jorge</h1>
        <p className="text-base text-slate-400 mt-2">
          You&apos;ve got
          {' '}
          {pendingTasks}
          {' '}
          tasks coming up in next days.
        </p>
      </header>

      <form onSubmit={handleCreateTodo} className="flex items-center gap-x-4 h-6 my-4 p-5">
        <input type="checkbox" checked={taskDone} onChange={handleChangeTaskCheck} />
        <input type="text" name="todo" onChange={(e) => setTask(e.target.value)} value={task} placeholder="Add a new task..." className=" w-full text-sm text-zinc-500 bg-transparent outline-0 " />
      </form>

      <Todos todos={todos} setTodos={setTodos} onRemoveTask={() => {}} />
    </main>
  );
}

export default App;

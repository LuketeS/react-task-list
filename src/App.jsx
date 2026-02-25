import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar React",
      descripition:
        "Ler a documentação oficial do React e fazer exercícios práticos.",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar Inglês",
      descripition:
        "Ler a documentação oficial do React e fazer exercícios práticos.",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Estudar Concurso",
      descripition:
        "Ler a documentação oficial do React e fazer exercícios práticos.",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => {
      if (task.id !== taskId) {
        return task;
      }
    });
    setTasks(newTasks);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;

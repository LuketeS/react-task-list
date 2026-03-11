import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [],
  );

  // {
  //   id: 1,
  //   title: "Estudar React",
  //   description:
  //     "Ler a documentação oficial do React e fazer exercícios práticos.",
  //   isCompleted: false,
  // },
  // {
  //   id: 2,
  //   title: "Estudar Inglês",
  //   description:
  //     "Ler a documentação oficial do React e fazer exercícios práticos.",
  //   isCompleted: false,
  // },
  // {
  //   id: 3,
  //   title: "Estudar Concurso",
  //   description:
  //     "Ler a documentação oficial do React e fazer exercícios práticos.",
  //   isCompleted: false,
  // },

  // Executa a função da esquerda, sempre que algum valor da lista é alterado.
  // Irei usar essa funcionalidade para sempre alterar o LocalStorager ao mesmo
  // tempo que o State das Tasks for alterado
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

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

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title: title,
      description: description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
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

import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="flex flex-wrap flex-col content-center mt-28 w-full h-screen">
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;

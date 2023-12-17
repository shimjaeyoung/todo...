import "./App.css";
import { useState } from "react";

function App() {
  const [toDo, setTodo] = useState("");
  const [toDos, setTodos] = useState([]);
  const onSubmit = (e) => {
    e.preventDefault();
    if (toDo === "") {
      return;
    }
    setTodos((currentArray) => [toDo, ...currentArray]);
    setTodo("");
  };
  const onChange = (e) => {
    setTodo(e.target.value);
  };
  return (
    <div>
      <h1>todolist</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="입력해주세요"
          onChange={onChange}
          value={toDo}
        />
        <button>등록해주세요</button>
      </form>
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

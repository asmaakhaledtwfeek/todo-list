import TodoList from "./views/TodoList";
import Header from "./components/Header";
import React from "react";

function App() {
  return (
    <div className="App">
      <Header/>
      <TodoList/>
    </div>
  );
}

export default App;

import React from 'react';
import Todos from '../components/todos/Todos';
import TodosForm from '../components/todos/TodosForm';

const TodoList = () => {
  return (<div className='container'>
      <div className='todos'>
          <Todos/>
          <TodosForm/>
      </div>
  </div>);
};

export default TodoList;

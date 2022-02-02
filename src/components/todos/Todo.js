import React from 'react';

const Todo = () => {
  return (<div className='todos-todo'>
      <div className='todos-todo-icon'></div>
      <div className='todos-todo-text'>مهمة 1</div>
      <div className='todos-todo-cta'>
          <div className='todos-todo-cta-edit'></div>
          <div className='todos-todo-cta-delete'></div>
      </div>
  </div>);
};

export default Todo;

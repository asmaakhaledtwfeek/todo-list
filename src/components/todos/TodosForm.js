import React from 'react';

const TodosForm = () => {
  return (<div className='todos-form'>
      <div className='todos-form-icon'></div>
      <div className='todos-form-form'>
          <input type="text" placeholder="اضافة مهمة جديدة ......"/>
      </div>
      <div className='todos-form-sumit'>
          <button className='btn'>اضافة</button>
      </div>
  </div>);
};

export default TodosForm;

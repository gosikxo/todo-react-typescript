import React, { FC, useState, ChangeEvent } from 'react';
import './App.css';

const App: FC = () => {
  const [task, setTask] = useState<string>('')
  const [deadline, setDeadline] = useState<number>(0)
  const [todo, setTodoList] = useState([])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value)
  }

  return (
    <div className='App'>
      <div className='header'>
        <div className='inputContainer'>
          <input
            type='text'
            placeholder='Task...'
            name='task'
            onChange={handleChange}
          />
          <input
            type='number'
            placeholder='Deadline (in days)...'
            name='deadline'
            onChange={handleChange}
          />
        </div>
        <button>Add Task</button>
      </div>
      <div className='todolist'>

      </div>
    </div>
  );
}

export default App;

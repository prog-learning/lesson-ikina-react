import { useState } from 'react';
import List from './List';

const App = () => {
  const [title, setTitle] = useState("JUST DO IT.");

  const todoList = [
    'プログラミングを勉強する',
    '運動をして生産性を上げる',
    '宝くじを当てる',
  ];

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={() => setTitle('TO DO LIST.')}>change title</button>
      <div>
        <h3>Create new todo</h3>
        <input type="text" />
        <button>create</button>
      </div>
      <List todoList={todoList} />
    </div>
  );
};

export default App;

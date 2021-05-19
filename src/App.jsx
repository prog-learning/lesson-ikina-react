import { useState } from 'react';
import List from './List';
import Form from './Form';

const App = () => {
  const [title, setTitle] = useState("JUST DO IT.");
  const [todoList, setTodoList] = useState([
    'プログラミングを勉強する',
    '運動をして生産性を上げる',
    '宝くじを当てる',
  ]);

  const addTodo = (content) => {
    if (content) {
      setTodoList([...todoList, content]);
    } else {
      alert('入力してください！');
    }
  };

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={() => setTitle('TO DO LIST.')}>change title</button>
      <Form addTodo={addTodo} />
      <List todoList={todoList} />
    </div>
  );
};

export default App;

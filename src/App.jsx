import { useState } from 'react';
import List from './List';

const App = () => {
  const [title, setTitle] = useState("JUST DO IT.");
  const [inputText, setInputText] = useState("");
  const [todoList, setTodoList] = useState([
    'プログラミングを勉強する',
    '運動をして生産性を上げる',
    '宝くじを当てる',
  ]);

  const addTodo = () => {
    if (inputText) {
      setTodoList([...todoList, inputText]);
      setInputText('');
    } else {
      alert('入力してください！');
    }
  };

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={() => setTitle('TO DO LIST.')}>change title</button>
      <div>
        <h3>Create new todo</h3>
        <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} />
        <button onClick={addTodo}>create</button>
      </div>
      <List todoList={todoList} />
    </div>
  );
};

export default App;

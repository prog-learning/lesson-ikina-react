import { useState } from 'react';
import List from './List';

const App = () => {
  const [title, setTitle] = useState("JUST DO IT.");
  const [todoList, setTodoList] = useState([
    'プログラミングを勉強する',
    '運動をして生産性を上げる',
    '宝くじを当てる',
  ]);
  const [inputText, setInputText] = useState("");

  /* 追加するときの処理をまとめる関数の定義 */
  const addTodo = () => {
    if (inputText) { // inputTextの中身があるとき
      setTodoList([...todoList, inputText]);
      setInputText('');
    } else { // nputTextの中身がないとき
      alert('入力してください！'); // アラートを表示
    }
  };

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={() => setTitle('TO DO LIST.')}>change title</button>
      <div>
        <h3>Create new todo</h3>
        <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} />
        <button onClick={addTodo}>create</button> {/* 引数がなく,関数を実行するときは渡すように書ける */}
      </div>
      <List todoList={todoList} />
    </div>
  );
};

export default App;

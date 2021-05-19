import { useState } from 'react';
import List from './List';

const App = () => {
  const [title, setTitle] = useState("JUST DO IT.");
  const [todoList, setTodoList] = useState([
    'プログラミングを勉強する',
    '運動をして生産性を上げる',
    '宝くじを当てる',
  ]);
  const [inputText, setInputText] = useState(""); // inputの中身を管理する変数を新たに追加

  console.log(inputText); // 入力値が変更する度にsetInputTextでinputTextが変更されていることをConsoleで確認

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={() => setTitle('TO DO LIST.')}>change title</button>
      <div>
        <h3>Create new todo</h3>
        <input type="text" onChange={(e) => setInputText(e.target.value)} /> {/* onChangeイベントで入力に変更がある度にinputTextを変更 */}
        <button onClick={() => setTodoList([...todoList, inputText])}>create</button> {/* スプレッド構文で,「今の配列の要素+新たに追加するtodo」に変更 */}
      </div>
      <List todoList={todoList} />
    </div>
  );
};

export default App;

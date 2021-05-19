import { useState } from 'react'; // useStateはreactからimportして使用する
import List from './List';

const App = () => {
  const [title, setTitle] = useState("JUST DO IT.");
  /* const [変数名, 変更するための関数名] = useState(変数の初期値) となる */

  const todoList = [
    'プログラミングを勉強する',
    '運動をして生産性を上げる',
    '宝くじを当てる',
  ];

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={() => setTitle('TO DO LIST.')}>change title</button>
      {/* 変更するための関数の使い方は, setTitle(変更したい値) */}
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

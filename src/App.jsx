import { useState } from 'react';
import List from './List';
import Form from './Form';

const App = () => {
  const [todoList, setTodoList] = useState([
    'プログラミングを勉強する',
    '運動をして生産性を上げる',
    '宝くじを当てる',
  ]);

  /* contentという名前で引数を設定 */
  const addTodo = (content) => {
    /* このcontentは関数の中だけで使用可能 */
    if (content) {
      setTodoList([...todoList, content]);
    } else {
      alert('入力してください！');
    }
    /* setInputText('') はここには書けない */
  };

  return (
    <div>
      <h1>TO DO LIST.</h1>
      <Form addTodo={addTodo} />
      <List todoList={todoList} />
    </div>
  );
};

export default App;

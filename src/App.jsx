import List from './List';

const App = () => {

  const todoList = [
    'プログラミングを勉強する',
    '運動をして生産性を上げる',
    '宝くじを当てる',
  ];

  return (
    <div>
      <h1>JUST DO IT.</h1>
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

import Item from './Item';

const App = () => {

  return (
    <div>
      <h1>JUST DO IT.</h1>
      <div>
        <h3>Create nex todo</h3>
        <input type="text" />
        <button>create</button>
      </div>
      <ul style={{ listStyle: 'none' }}>
        <Item content='プログラミングを勉強する' />
        <Item content='運動をして生産性を上げる' />
        <Item content='宝くじを当てる' />
      </ul>
    </div>
  );
};

export default App;

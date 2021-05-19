

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
        <List content='プログラミングを勉強する' />
        <List content='運動をして生産性を上げる' />
        <List content='宝くじを当てる' />
      </ul>
    </div>
  );
};

export default App;

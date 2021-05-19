const App = () => {
  return (
    <div>
      <h1>JUST DO IT.</h1>
      <div>
        <h3>Create nex todo</h3>
        <input type="text" />
        <button>create</button>
      </div>
      <ul>
        <li>
          <input type="checkbox" />
          <span>皿洗い</span>
        </li>
        <li>
          <input type="checkbox" />
          <span>筋トレ</span>
        </li>
        <li>
          <input type="checkbox" />
          <span></span>
        </li>
      </ul>
    </div>
  );
};

export default App;

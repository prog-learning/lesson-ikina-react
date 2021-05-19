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
          <span>プログラミングを勉強する</span>
        </li>
        <li>
          <input type="checkbox" />
          <span>運動をして生産性を上げる</span>
        </li>
        <li>
          <input type="checkbox" />
          <span>宝くじを当てる</span>
        </li>
      </ul>
    </div>
  );
};

export default App;

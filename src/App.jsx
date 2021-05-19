const App = () => {

  return (
    <div>
      <h1>JUST DO IT.</h1> {/* タイトルは好きに変更 */}
      <div>
        <h3>Create new todo</h3>
        <input type="text" />
        <button>create</button>
      </div>
      <ul>
        <li>
          <input type="checkbox" /> {/* input のtype属性には他にも項目があるので調べておくと良い */}
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

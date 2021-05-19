import Item from './Item'; // import文はファイルの最初にまとめて書く

const App = () => {

  return (
    <div>
      <h1>JUST DO IT.</h1>
      <div>
        <h3>Create nex todo</h3>
        <input type="text" />
        <button>create</button>
      </div>
      <ul style={{ listStyle: 'none' }}> {/* ここでは1,2つだけの簡単なスタイルの当て方を採用 他の方法は別のLessonにて */}
        <Item content='プログラミングを勉強する' />
        <Item content='運動をして生産性を上げる' />
        <Item content='宝くじを当てる' />
        {/* 同じコンポーネントはこのように,表示する内容だけ変えて再利用することが可能 */}
      </ul>
    </div>
  );
};

export default App;

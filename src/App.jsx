import { useState } from 'react';
import Item from './Item';

const App = () => {
  const [title, setTitle] = useState("JUST DO IT.");

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={() => setTitle('TO DO LIST.')}>change title</button>
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

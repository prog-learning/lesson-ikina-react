import { useState } from 'react';

const Form = ({ addTodo }) => {
  const [inputText, setInputText] = useState('');

  const addTodoAndReset = () => {
    addTodo(inputText);
    setInputText('');
  };

  return (
    <div>
      <h3>Create new todo</h3>
      <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} />
      <button onClick={addTodoAndReset}>create</button>
    </div>
  );
};

export default Form;

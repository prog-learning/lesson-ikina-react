import Item from './Item';

const List = ({ todoList }) => {
  return (
    <ul style={{ listStyle: 'none' }}>
      {todoList.map((todo, index) => { // JSX内でJavaScriptを書く際は{ }を忘れずに
        return <Item key={index} content={todo} />; // keyはReactのエラーを解消するためのもの
      })}
      {/* このmapメソッドは最初は難しく感じるので,無理して理解しなくてもOK */}
    </ul>
  );
};

export default List;

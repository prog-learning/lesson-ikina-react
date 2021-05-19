import Item from './Item';

const List = ({ todoList }) => {
  return (
    <ul style={{ listStyle: 'none' }}>
      {todoList.map((todo, index) => {
        return <Item key={index} content={todo} />;
      })}
    </ul>
  );
};

export default List;

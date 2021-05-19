import Item from './Item';

const List = ({ todoList }) => {
  return (
    <ul style={{ listStyle: 'none' }}>
      {todoList.map((todo) => {
        return <Item content={todo} />;
      })}
    </ul>
  );
};

export default List;

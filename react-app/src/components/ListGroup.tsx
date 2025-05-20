function ListGroup() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const getMessage = () => {
    return items.length === 0 ? <p>No item found</p> : null;
  };
  return (
    <>
      <h1>List Group</h1>
      {getMessage}
      <ul className="list-group">
        {items.map((item) => (
          <li
            className="list-group-item"
            key={item}
            onClick={() => console.log(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

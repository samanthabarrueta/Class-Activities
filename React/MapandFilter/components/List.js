import React from "react";

const List = (props) => {
  let purchased = props.groceries.filter(item => (item.purchased === true))

  return (
    <ul className="list-group">
      {purchased.map(item => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
}

export default List;

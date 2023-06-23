import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";

const LineItems = ({ item, deleteBtn, changeEvent }) => {
  return (
    <ListGroup.Item
      as="li"
      variant="Secondary"
      className="listGroup px-3 py-3"
      key={item.id}
    >
      <input
        type="checkbox"
        checked={item.checked}
        onChange={() => changeEvent(item.id)}
      />
      <label
        style={item.checked ? { textDecoration: "line-through" } : null}
        onDoubleClick={() => changeEvent(item.id)}
      >
        {item.item}
      </label>
      <Button
        className="todoDelBtn"
        onClick={() => deleteBtn(item.id)}
        variant="outline-danger"
      >
        Delete
        <FaTrashAlt className="todoIcons" role="button" tabIndex="0" aria-label={`Delete ${item.item}`} />
      </Button>
    </ListGroup.Item>
  );
};

export default LineItems;

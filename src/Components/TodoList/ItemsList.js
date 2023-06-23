import React from "react";
import { ListGroup } from "react-bootstrap";

import LineItems from "./LineItems";

// Props Drillings

const ItemsList = ({ items, deleteBtn, changeEvent }) => {
  return (
    <ListGroup className="ulElement text-left px-md-5 mx-md-5" as="ol">
      {items.map((item) => (
        <LineItems
          item={item}
          key = {item.id}
          deleteBtn={deleteBtn}
          changeEvent={changeEvent}
        />
      ))}
    </ListGroup>
  );
};

export default ItemsList;

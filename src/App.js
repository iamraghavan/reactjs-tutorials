import React from "react";
import "./App.css";
import { useState } from "react";
import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import Hook from "./Components/UseState/Hook";
import TodoList from "./Components/TodoList/TodoList";
import Props from "./Components/Props/Props";
import AddItem from "./Components/AddItem/AddItem";

function App() {
  const [newItem, setNewItem] = useState("");
  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addNewItem = { id, checked: false, item };

    const listItems = [...items, addNewItem];
    setItems(listItems);
    localStorage.setItem("todo_List", JSON.stringify(listItems));
  };

  const [items, setItems] = useState(JSON.parse(localStorage.getItem("todo_List")));

  let changeEvent = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("todo_List", JSON.stringify(listItems));
  };

  let deleteBtn = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("todo_List", JSON.stringify(listItems));
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    console.log(newItem);

    addItem(newItem);

    // Add Item to the list of items
    setNewItem("");
  };

  return (
    <div>
      <Header />
      <Content />
      <Hook />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <TodoList items={items} deleteBtn={deleteBtn} changeEvent={changeEvent} />
      <Props length={items.length} />
    </div>
  );
}
// pugazharasan@guvi.in
export default App;

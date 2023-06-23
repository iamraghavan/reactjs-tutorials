import React from "react";
import "./TodoList.css";
import ItemsList from "./ItemsList";


const TodoList = ({items, deleteBtn, changeEvent}) => {
  
  
  return (

    <section className="">
      <div className="mx-5">
        <h5 className="border border-success text-center pt-2 pb-2 contentPara">
          Todo List
        </h5>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 contentParaColumn text-center my-4">
            {(items.length) ? (
              <ItemsList items={items} deleteBtn={deleteBtn} changeEvent={changeEvent} />
            ) : (
              <div className="text-danger">
                <p>Your Todo List is Empty</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>

  );
};

TodoList.defaultProps = {
  items: []
};
export default TodoList;

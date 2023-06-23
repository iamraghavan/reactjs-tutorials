import React from "react";
import "./AddItem.css";
import { Button, Form } from "react-bootstrap";
import { MdOutlineAddTask } from "react-icons/md";
import { VscTasklist } from "react-icons/vsc";
import SearchItem from "../SearchItem/SearchItem";

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  return (
    <div className="">
      <h5 className="mx-5 border border-success text-center pt-2 pb-2 contentParaProps">
        Controled Components Inputs in React
      </h5>

      <div className="container pt-4">
        <div className="row">
          <div className="col-lg-6 my-4">
            <Form onSubmit={handleSubmit}>
              <Form.Group
                className="mb-3 field"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>
                  Add Tasks / Works <VscTasklist />
                </Form.Label>
                <Form.Control
                  type="text"
                  autoFocus
                  placeholder="Add Todo Task"
                  value={newItem}
                  onChange={(e) => setNewItem(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Button variant="outline-success" type="submit">
                  Add Task <MdOutlineAddTask />
                </Button>
              </Form.Group>
            </Form>
          </div>
          <div className="col-lg-6 my-4">
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddItem;

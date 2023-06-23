import React from "react";
import { Form } from "react-bootstrap";
import { VscSearch } from "react-icons/vsc";

const SearchItem = ({ search, setSearch }) => {
  return (
    <section className="">
      <div className="mx-5">
        <h5 className="border border-success text-center pt-2 pb-2 contentPara">
          Search Your TODO LIST
        </h5>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 contentParaColumn text-center my-4">
            <Form onSubmit={(e) => e.preventDefault()}>
              <Form.Group
                className="mb-3 field"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>
                  Search Your Task <VscSearch />
                </Form.Label>
                <Form.Control
                  type="text"
                  autoFocus
                  placeholder="Search Your Task"
                  value={search}
                  required
                  onChange={(e) => setSearch(e.target.value)}
                />
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchItem;

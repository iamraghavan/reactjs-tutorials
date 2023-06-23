import React from 'react'
import {Form } from "react-bootstrap";
import { VscSearch } from "react-icons/vsc";


const SearchItem = () => {
  return (
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
        required
      />
    </Form.Group>
  </Form>
  )
}

export default SearchItem
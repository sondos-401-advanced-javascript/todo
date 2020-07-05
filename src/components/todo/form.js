import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';


function TodoForm(props) {
  const [item, setItem] = useState({});



  const _handleInputChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  }

  const _handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    props.handleSubmit(item);
    item && setItem({ ...item, item });
  };
  return (
    <>
      <Form onSubmit={_handleSubmit} >
        <Form.Group controlId="formBasicEmail" >
          <h3>Add Item</h3>
          <Form.Label>To Do Item</Form.Label>
          <Form.Control type="text" name="text" placeholder="Add To Do List Item"
            onChange={_handleInputChange} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Assigned To</Form.Label>
          <Form.Control type="text" name="assignee" placeholder="Assigned To" onChange={_handleInputChange} />
        </Form.Group>
        <Form.Group controlId="formBasicRange">
          <Form.Label>Range</Form.Label>
          <Form.Control defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={_handleInputChange} />
        </Form.Group>
        <Button variant="primary" type="submit" style={
          {
            width: '50%'
          }
        }>
          Add Item
  </Button>
      </Form>
    </>
  );
}


export default TodoForm;

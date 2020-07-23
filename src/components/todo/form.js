import React, { useState ,useContext} from 'react';
import { Form, Button } from 'react-bootstrap';
import useForm from '../hooks/form';
import {FilterContext} from '../context/items';
function TodoForm(props) {
  const [item, setItem] = useState({});
  const [handelSubmit,handelChange] = useForm(addItem);
  const context = useContext(FilterContext);
  function addItem(obj){
    context.add(obj);
    setItem({...item,obj});
  }

  return (
    <>
      <Form onSubmit={handelSubmit} className="float-left">
        <Form.Group controlId="formBasicEmail" >
          <h3>Add Item</h3>
          <Form.Label>To Do Item</Form.Label>
          <Form.Control type="text" name="item" placeholder="Add To Do List Item"
            onChange={handelChange} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Assigned To</Form.Label>
          <Form.Control type="text" name="assignee" placeholder="Assigned To" onChange={handelChange} />
        </Form.Group>
        <Form.Group controlId="formBasicRange">
          <Form.Label>Range</Form.Label>
          <Form.Control defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handelChange} />
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

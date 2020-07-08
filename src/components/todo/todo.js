import React, { useState, useEffect } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import { Navbar, Container } from 'react-bootstrap';
import useAjax from '../hooks/ajax';

import './todo.scss';

function ToDo() {
  let [list, setList] = useState([]);
  const [count, setCount] = useState(0);
  const [addNewItem, updateItem,  deleteItem] = useAjax(addItem);

  function addItem(lists) {
    setList(lists);
  }

  useEffect(() => {
    setCount(list.filter(item => !item.complete).length);
    document.title = `There are ${count} Items To Complete`;
  }, [count, list]);

  return (
    <>

      <Container>
        <Navbar bg="dark" variant="dark" style={{ marginTop: 2 + 'em' }}>
          <Navbar.Brand >There are {count} Items To Complete</Navbar.Brand>

        </Navbar>

        <section className="todo">

          <div className="form-border">
            <TodoForm handleSubmit={addNewItem} />
          </div>

          <div className="list-group">
            <TodoList list={list} handelDelete={deleteItem} handleComplete={updateItem} />
          </div>
        </section>
      </Container>



    </>
  );
}



export default ToDo;

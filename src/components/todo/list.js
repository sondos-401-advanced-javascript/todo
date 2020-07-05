import React from 'react';
import { ListGroup } from 'react-bootstrap';

const TodoList = (props) => {

  const _getItem = (props) => {

    return props.list.map(item => {
      let stat;
      !item.complete ? stat = 'success' : stat = 'danger';
      return <ListGroup.Item as="li"
        className={`complete-${item.complete.toString()}`}
        key={item._id} onClick={() => props.handleComplete(item._id)}
        variant={`${stat}`}
      >
        {item.text}

      </ListGroup.Item>
    })
  }

  return (
    <ListGroup>
      {_getItem(props)}

    </ListGroup>

  );
}



export default TodoList;

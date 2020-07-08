import React from 'react';
import { ListGroup,Button,Toast,ToastHeader } from 'react-bootstrap';

const TodoList = (props) => {
  

  const _getItem = (props) => {
    return props.list.map(item => {
      let stat;
      !item.complete ? stat = 'success' : stat = 'danger';
      let word;
      !item.complete ? word = 'Pending' : word = 'Complete';
      
     return <Toast key={item._id} >
      <ToastHeader closeButton={false} >
      <Button className='complete' onClick={() => props.handleComplete(item,item._id)}
        variant={`${stat}`}>{word}</Button>{' '}
        <strong className="mr-auto assign" >{item.assignee}</strong>
        <Button className='closedel' variant="outline-dark" onClick={() => props.handelDelete(item._id)}>X</Button>
      </ToastHeader>
      <Toast.Body className='assign'>{item.item}</Toast.Body>
      <small className='difficult'>Difficulty: {item.difficulty}</small>
    </Toast>
    
    })
  }

  return (
    <>

    <ListGroup>
      {_getItem(props)}

    </ListGroup>
</>
  );
}



export default TodoList;

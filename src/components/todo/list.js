import React, { useContext } from 'react';
import { ListGroup, Button, Toast, ToastHeader } from 'react-bootstrap';
import { FilterContext } from '../context/items';
import { IfRenderer, Then, Else } from '../if/if';

function TodoList() {

  const context = useContext(FilterContext);
  let arrays = context.list.sort((a, b) => a.difficulty - b.difficulty);
  let first = context.list.filter((val) => val.complete === false);
  first.sort((a, b) => a.difficulty - b.difficulty);

  const _filter = () => {
    if (context.toggle === 'Go to All') {
      context.funToggle('Go Incomplete');
    }
    else {
      context.funToggle('Go to All');
    }
  }

  const _buttons = (num) => {
    let array = [];
    for (let i = 0; i < num; i++) {
      array.push(<Button key={i} onClick={() => context.funButton(i)}>{i + 1}</Button>);
    }
    return array;
  }

  const _getItem = (array) => {
    return array.map(item => {
      let stat;
      !item.complete ? stat = 'success' : stat = 'danger';
      let word;
      !item.complete ? word = 'Pending' : word = 'Complete';
      return <Toast key={item._id} >
        <ToastHeader closeButton={false} >
          <Button className='complete' onClick={() => context.update(item, item._id)}
            variant={`${stat}`}>{word}</Button>{' '}
          <strong className="mr-auto assign" >{item.assignee}</strong>
          <Button className='closedel' variant="outline-dark" onClick={() => context.delete(item._id)}>X</Button>
        </ToastHeader>
        <Toast.Body className='assign'>{item.item}</Toast.Body>
        <small className='difficult'>Difficulty: {item.difficulty}</small>
      </Toast>
    });
  };

  const _render = (array)=>{
    if(array.length>3){
      const result = new Array(Math.ceil(array.length / 3))
      .fill()
      .map(() => array.splice(0, 3));
      
         return [_getItem(result[context.buttons]),_buttons(result.length)]
    }
    else{
      
      return [_getItem(array),_buttons(0)]
    }
   
  }


  return (
    <>
      <IfRenderer condition={context.toggle === 'Go to All'} >
        <Then>
          <ListGroup>
            {_render(first)}
          </ListGroup>

        </Then>
        <Else>
          <ListGroup>
            {_render(arrays)}
          </ListGroup>
        </Else>
      </IfRenderer>
      <Button className='filter-bt' onClick={() => _filter()}>{context.toggle}</Button>
    </>
  )
}





export default TodoList;

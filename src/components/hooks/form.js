import {useState} from 'react';

function useForm(callback){
const [todo,setTodo] = useState({});

const handelSubmit = (e) =>{
    e.preventDefault();
    todo.complete = false;
    callback(todo);
}
const handelChange = (e) =>{
    e.persist();
    setTodo({...todo,[e.target.name]: e.target.value});
}

return [handelSubmit,handelChange,todo];
}

export default useForm;
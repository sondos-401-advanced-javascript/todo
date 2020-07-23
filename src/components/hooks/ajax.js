import {useState, useEffect} from 'react';
import axios from 'axios';

 function useAjax(callback){
    const [items,setItems] = useState([]);

    const addNewItem = async (obj) =>{
        obj.complete = false;
        let config = {
            headers: { 'Content-Type': 'application/json' },
            mode: 'cors', 
        };
        let url = 'https://api401-todo.herokuapp.com/todo';
        let data = {
            item: obj.item,
            difficulty: obj.difficulty,
            complete: obj.complete,
            assignee: obj.assignee
        };
        await axios.post(url,data,config);
        let response = await getAllItems();
        setItems([response]);
    }

    const updateItem = async (obj,_id) =>{
        let config = {
            headers: { 'Content-Type': 'application/json' },
            mode: 'cors', 
        };
        let url = `https://api401-todo.herokuapp.com/todo/${_id}`;
        let data = {
            item: obj.item,
            difficulty: obj.difficulty,
            complete: !obj.complete,
            assignee: obj.assignee
        };
        await axios.put(url,data,config);
    let response = await getAllItems();
        setItems([response]);
    }

    const deleteItem = async (id) =>{
        let config = {
            headers: { 'Content-Type': 'application/json' },
            mode: 'cors'
        };
        let url = `https://api401-todo.herokuapp.com/todo/${id}`;
       await axios.delete(url,config);
        let response = await getAllItems();
        setItems([response]);
    }

    const getAllItems = async () =>{
        let config = {
            headers: { 'Content-Type': 'application/json' },
            mode: 'cors'
        }
        let url = 'https://api401-todo.herokuapp.com/todo';
        let response = await axios.get(url,config);
        
        callback(response.data);
    }

    useEffect(()=>{
        getAllItems();
    });

return [addNewItem, updateItem,  deleteItem,items];
}

export default useAjax;
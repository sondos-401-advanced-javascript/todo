import React,{useState,useEffect} from 'react';
import useAjax from '../hooks/ajax';
export const FilterContext = React.createContext();

function FilterProvider(props){
    let [list, setList] = useState([]);
    let [toggle,setToggle] = useState('Go to All');
    const [buttons,setButtons] = useState(0);
  const [count, setCount] = useState(0);
    const [addNewItem, updateItem, deleteItem,getAllItems] = useAjax(addItem);
  
    
    function addItem(lists) {
      setList(lists);
    }
    useEffect(()=>{
      getAllItems();  
    });

    let state = {
        list,
        add: addNewItem,
        update: updateItem,
        delete: deleteItem,
        funList: setList,
        toggle,
        funToggle: setToggle,
        buttons,
        funButton: setButtons,
        count,
        funCount : setCount,
    }

    return (
        <FilterContext.Provider value={state}>
          {props.children}
        </FilterContext.Provider>
      );
}

export default FilterProvider;
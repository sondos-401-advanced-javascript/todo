import React,{useState} from 'react';
import useAjax from '../hooks/ajax';
export const FilterContext = React.createContext();

function FilterProvider(props){
    let [list, setList] = useState([]);
    let [toggle,setToggle] = useState('Go to All');
    const [buttons,setButtons] = useState(1);
    const [addNewItem, updateItem, deleteItem] = useAjax(addItem);
  
    function addItem(lists) {
      setList(lists);
    }
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
    }

    return (
        <FilterContext.Provider value={state}>
          {props.children}
        </FilterContext.Provider>
      );
}

export default FilterProvider;
import React, { useContext } from 'react';
import { Navbar ,Container} from 'react-bootstrap';
import ToDo from './components/todo/todo.js';
import FilterContext  from './components/context/items';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './components/todo/list';
import TodoForm from './components/todo/form';
import './components/todo/todo.scss';

const App = () => {
  useContext(FilterContext);
  return (
    <>
      <header>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand >Home</Navbar.Brand>
        </Navbar>
      </header>
      <main>
      <Container>
      <FilterContext>
        <ToDo/>
        <section className="todo">
          <div className="form-border">
            <TodoForm/>
          </div>
          <div className="list-group">
              <TodoList />
            </div>
        </section>
        </FilterContext>
      </Container>
        
      </main>
    </>
  );

};

export default App;

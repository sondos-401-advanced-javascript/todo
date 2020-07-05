
import React from 'react';

import { Navbar } from 'react-bootstrap';
import ToDo from './components/todo/todo.js';

import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {

  return (
    <>
      <header>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand >Home</Navbar.Brand>

        </Navbar>
      </header>

      <main>
        <ToDo />
      </main>


    </>
  );

};
export default App;

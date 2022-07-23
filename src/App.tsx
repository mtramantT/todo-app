import React from 'react';
import styled from 'styled-components';
import SidebarContainer from './components/sidebar/SidebarContainer';
import TodoContainer from './components/todo/TodoContainer';
import TodoForm from './components/todo/TodoForm';

import 'bootstrap/dist/css/bootstrap.css';

const leftCol = styled.div``;
const rightCol = styled.div``;

function App() {
  return (
    <div className='container'>
      <div className='row text-center'>
        <div className='col'>
          <h1>Todo App</h1>
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-4'>
          <SidebarContainer />
        </div>
        <div className='col-sm-8'>
          <TodoForm />
          <TodoContainer />
        </div>
      </div>
    </div>
  );
}

export default App;

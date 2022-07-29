import React from 'react';
import styled from 'styled-components';
import TodoItem from '../Components/TodoItem';

const Todos = () => {
  return (
    <TodoListBody>
      <div>
        <h2>Working... 😊</h2>
        <TodoItem />
      </div>
      <div>
        <h2>done... 😜</h2>
      </div>
    </TodoListBody>
  );
};

export default Todos;

const TodoListBody = styled.section`
  margin: 0 atuo;
  height: 67vh;
  padding: 10px;
  .div {
    display: block;
  }
`;

import React from 'react';
import styled from 'styled-components';
import TodoItem from '../Components/TodoItem';

const Todos = ({ todos, onToggle, onRemove }) => {
  return (
    <TodoListBody>
      <div>
        <h2>Working... 😊</h2>
        <Working>
          {todos.map((item) => {
            if (item.done === false) {
              return (
                <TodoItem
                  item={item}
                  key={item.id}
                  onToggle={onToggle}
                  onRemove={onRemove}
                />
              );
            } else {
              return null;
            }
          })}
        </Working>
      </div>
      <div>
        <h2>done... 😜</h2>
        <Done>
          {todos.map((item) => {
            if (item.done === true) {
              return (
                <TodoItem
                  item={item}
                  key={item.id}
                  onToggle={onToggle}
                  onRemove={onRemove}
                />
              );
            } else {
              return null;
            }
          })}
        </Done>
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

const Working = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const Done = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

import React from 'react';
import Header from '../Components/Header';
import Form from '../Components/Form';
import Todos from '../Components/Todos';
import TodoItem from '../Components/TodoItem';
import styled from 'styled-components';

const TodosContainer = () => {
  return (
    <TdContainer>
      <Header />
      <Form />
      <Todos>
        <TodoItem />
      </Todos>
    </TdContainer>
  );
};

export default TodosContainer;

const TdContainer = styled.section`
  max-width: 1400px;
  margin: 0 auto;
  min-width: 800px;
  height: 100vh;
`;

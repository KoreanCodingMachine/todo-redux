import React, { useCallback } from 'react';
import Header from '../Components/Header';
import Form from '../Components/Form';
import Todos from '../Components/Todos';
import styled from 'styled-components';
import { changeInput, addData, remove, toggle } from '../Modules/todos';
import { useSelector, useDispatch } from 'react-redux';

const TodosContainer = () => {
  const input = useSelector((state) => state.todos.input);
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  const onChangeInput = useCallback(
    (input) => {
      dispatch(changeInput(input));
    },
    [dispatch]
  );

  const onInsert = useCallback(
    (title, text) => {
      dispatch(addData(title, text));
    },
    [dispatch]
  );
  const onRemove = useCallback(
    (payload) => {
      dispatch(remove(payload));
    },
    [dispatch]
  );
  const onToggle = useCallback(
    (payload) => {
      dispatch(toggle(payload));
    },
    [dispatch]
  );
  return (
    <TdContainer>
      <Header />
      <Form
        todos={todos}
        input={input}
        onChangeInput={onChangeInput}
        onInsert={onInsert}
      />
      <Todos todos={todos} onRemove={onRemove} onToggle={onToggle} />
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

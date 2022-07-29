import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <TodoHeader>
      <h1>My TodoList</h1>
      <h3>React</h3>
    </TodoHeader>
  );
};

export default Header;

const TodoHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10vh;
  background: beige;
  padding: 0px 20px;
  margin-bottom: 24px;
  border-radius: 20px;
  margin-top: 1rem;
`;

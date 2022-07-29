import React from 'react';
import styled from 'styled-components';

const TodoItem = () => {
  return (
    <Border>
      <a>상세보기</a>
      <h2>리액트</h2>
      <p>리액트를 배워봅시다</p>
      <TodosFooter>
        <button className='delete'>삭제하기</button>
        <button className='complete'>완료</button>
      </TodosFooter>
    </Border>
  );
};

export default TodoItem;

const Border = styled.div`
  border: 4px solid teal;
  width: 270px;
  border-radius: 12px;
  padding: 12px 12px 24px;
  min-height: 150px;
  a {
    cursor: pointer;
  }

  h2 {
    display: block;
    font-size: 1rem;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  }
`;

const TodosFooter = styled.footer`
  display: flex;
  justify-content: end;
  padding: 12px;
  gap: 12px;

  .complete {
    border: 1px solid green;
    height: 40px;
    width: 120px;
    border-radius: 12px;
    cursor: pointer;
  }
  .delete {
    border: 1px solid red;
    height: 40px;
    width: 120px;
    border-radius: 12px;
    cursor: pointer;
  }
`;

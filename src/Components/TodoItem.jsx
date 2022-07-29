import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const TodoItem = ({ item, onToggle, onRemove }) => {
  console.log(item);
  return (
    <Border>
      <Link to={`/detail/${item.id}`} state={{ item: item }} className='link'>
        상세보기
      </Link>
      <h2>{item.title}</h2>
      <p>{item.text}</p>
      <TodosFooter>
        <button
          className='delete'
          onClick={() => {
            onRemove(item.id);
          }}
        >
          삭제하기
        </button>
        {item.done === false ? (
          <button
            className='complete'
            onClick={() => {
              onToggle(item.id);
            }}
          >
            완료
          </button>
        ) : (
          <button
            className='complete'
            onClick={() => {
              onToggle(item.id);
            }}
          >
            취소
          </button>
        )}
      </TodosFooter>
    </Border>
  );
};

export default TodoItem;

const Border = styled.div`
  border: 4px solid teal;
  width: 20%;
  border-radius: 12px;
  padding: 12px 12px 24px;
  min-height: 150px;

  .link {
    text-decoration: none;
    color: blue;
  }

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

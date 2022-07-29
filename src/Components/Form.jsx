import React, { useState } from 'react';
import styled from 'styled-components';

const Form = ({ onInsert, onChangeInput }) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    onInsert(title, text);
    onChangeInput(setTitle(''));
    onChangeInput(setText(''));
  };
  const onChangeTitle = (e) => onChangeInput(setTitle(e.target.value));
  const onChangeText = (e) => onChangeInput(setText(e.target.value));
  return (
    <TdForm onSubmit={onSubmit}>
      <TdInput>
        <TdLabel htmlFor='title'>
          제목:
          <TdInputText id='title' value={title} onChange={onChangeTitle} />
        </TdLabel>
        <TdLabel htmlFor='text'>
          내용:
          <TdInputText id='text' value={text} onChange={onChangeText} />
        </TdLabel>
      </TdInput>
      <div>
        <TdButton>추가하기</TdButton>
      </div>
    </TdForm>
  );
};

export default Form;

const TdForm = styled.form`
  background-color: rgb(238, 238, 238);
  border-radius: 20px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
`;

const TdInput = styled.div`
  display: flex;
  gap: 20px;
`;

const TdLabel = styled.div`
  font-size: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
`;

const TdInputText = styled.input`
  border: none;
  outline: none;
  padding: 10px;
  border-radius: 20px;
  font-size: 20px;
`;

const TdButton = styled.button`
  border: none;
  padding: 10px;
  border-radius: 20px;
  font-size: 20px;
  background-color: teal;
  color: rgb(255, 255, 255);
  font-weight: 700;
  width: 15rem;
  text-align: center;
  cursor: pointer;
`;

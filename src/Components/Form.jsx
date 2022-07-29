import React from 'react';
import styled from 'styled-components';

const Form = () => {
  return (
    <TdForm>
      <TdInput>
        <TdLabel>
          제목:
          <TdInputText />
        </TdLabel>
        <TdLabel>
          내용:
          <TdInputText />
        </TdLabel>
      </TdInput>
      <TdButton>추가하기</TdButton>
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

const TdButton = styled.div`
  border: none;
  padding: 10px;
  border-radius: 20px;
  font-size: 20px;
  background-color: teal;
  color: rgb(255, 255, 255);
  font-weight: 700;
  width: 200px;
  text-align: center;
  cursor: pointer;
`;

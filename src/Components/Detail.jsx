import React from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';

const Detail = ({ item }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const data = location.state.item;
  const { id, title, text } = data;
  return (
    <DetailWrapper>
      <div>
        <div>상세페이지:{id}</div>
        <button
          onClick={() => {
            navigate('/');
          }}
        >
          이전으로
        </button>
      </div>
      <section>
        <h1>{title}</h1>
        <h3>{text}</h3>
      </section>
    </DetailWrapper>
  );
};

export default Detail;

const DetailWrapper = styled.div`
  width: 800px;
  margin: 0 auto;
  margin-top: 10rem;

  div {
    display: flex;
    flex: 1;
    margin-left: 2rem;
    margin-right: 2rem;
    align-items: center;
  }

  button {
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
  }
  text-align: center;
`;

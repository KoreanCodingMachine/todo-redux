import React from 'react';
import { useNavigate } from 'react-router-dom';

const Detail = ({ item }) => {
  const navigate = useNavigate();
  return (
    <header>
      <div>{item.id}</div>
      <button
        onClick={() => {
          navigate('/');
        }}
      >
        이전으로
      </button>
    </header>
  );
};

export default Detail;

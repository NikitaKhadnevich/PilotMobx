/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { observer } from 'mobx-react-lite';

const Counter = observer(({ store }) => {
  const { count, handleDecrement, handleIncrement } = store;

  return (
    <div>
      Counter
      <h1>{count}</h1>
      <button onClick={handleDecrement}>-1</button>
      <button onClick={handleIncrement}>+1</button>
    </div>
  );
});

export default Counter;

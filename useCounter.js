import { useState } from 'react';

export const useCounter = (initialCounter = 0) => {
  const [counter, setCounter] = useState(initialCounter);

  const increment = (factor = 1) => setCounter(counter + factor);
  const decrement = (factor = 1) => setCounter(counter - factor);
  const reset = () => setCounter(initialCounter);

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};

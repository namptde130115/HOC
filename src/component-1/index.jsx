import React, { useState } from 'react';
import styles from './styles.module.css';

export function Component1() {
  const [data, setData] = useState(0);

  const Increment = () => {
    setData(data + 1);
  };

  const Decrement = () => {
    setData(data - 1);
  };

  const checkData = (data) => {
    if (data < 0) {
      setData(0);
    }
    return data;
  };

  return (
    <div>
      <button onClick={Decrement} className={styles.pointer}>
        {`decrement(-)`}
      </button>
      <div>{checkData(data)}</div>
      <button onClick={Increment} className={styles.pointer}>
        {`increment(+)`}
      </button>
    </div>
  );
}

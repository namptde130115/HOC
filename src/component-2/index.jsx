import React, { useState } from 'react';
import { Hoc } from '../hoc';
import styles from './styles.module.css';

const Component2 = ({
  CounterNumber,
  handleIncrement,
  handleDecrement,
  handleCheckData,
}) => {
  return (
    <div className={styles.row}>
      <button onClick={handleDecrement} className={styles.pointer}>
        {`decrement(-)`}
      </button>
      <div>{handleCheckData(CounterNumber)}</div>
      <button onClick={handleIncrement} className={styles.pointer}>
        {`increment(+)`}
      </button>
    </div>
  );
};

export const EnhancedComponent2 = Hoc(Component2, 5);

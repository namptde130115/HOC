import React, { useState } from 'react';

export function Hoc(Component, dataHoc) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: dataHoc,
      };
      // this.increment = this.increment.bind(this);
      // this.decrement = this.decrement.bind(this);
      // this.checkData = this.checkData.bind(this);
    }

    increment = () => {
      this.setState((state) => ({
        data: state.data + 1,
      }));
    };

    decrement = () => {
      this.setState((state) => ({
        data: state.data - 1,
      }));
    };

    checkData = (data) => {
      if (data < 0) {
        this.setState({
          data: 0,
        });
      }
      return data;
    };

    render() {
      return (
        <Component
          CounterNumber={this.state.data}
          handleIncrement={this.increment}
          handleDecrement={this.decrement}
          handleCheckData={this.checkData}
        />
      );
    }
  };
}

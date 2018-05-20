import React, { Component } from 'react';

class Button extends Component {
  render() {
    return(
      <button
        onClick={() => {
          this.props.calc_run(this.props.btn)
        }}
      >
        {this.props.value}
      </button>
    );
  }
}

export default Button;

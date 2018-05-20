import React, { Component } from 'react';

class Output extends Component {
  render() {
    return (
      <div id="outputs">
        <div id="output">{this.props.output}</div>
        <div id="clear" onClick={()=>{this.props.clear()}}>C</div>
      </div>
    );
  }
}

export default Output;

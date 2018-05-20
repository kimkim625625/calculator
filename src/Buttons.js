import React, { Component } from 'react'
import Button from './Button'
import Equal from './Equal'

class Buttons extends Component {
  render() {
    return (
      <div id="buttons">
        <div className="row">
          <Button value="7" btn="7" calc_run={this.props.calc_run}/>
          <Button value="8" btn="8" calc_run={this.props.calc_run}/>
          <Button value="9" btn="9" calc_run={this.props.calc_run}/>
          <Button value="÷" btn="/" calc_run={this.props.calc_run}/>
        </div>
        <div className="row">
          <Button value="4" btn="4" calc_run={this.props.calc_run}/>
          <Button value="5" btn="5" calc_run={this.props.calc_run}/>
          <Button value="6" btn="6" calc_run={this.props.calc_run}/>
          <Button value="x" btn="*" calc_run={this.props.calc_run}/>
        </div>
        <div className="row">
          <Button value="1" btn="1" calc_run={this.props.calc_run}/>
          <Button value="2" btn="2" calc_run={this.props.calc_run}/>
          <Button value="3" btn="3" calc_run={this.props.calc_run}/>
          <Button value="-" btn="-" calc_run={this.props.calc_run}/>
        </div>
        <div className="row">
          <Button value="0" btn="0" calc_run={this.props.calc_run}/>
          <Button value="." btn="." calc_run={this.props.calc_run}/>
          <Equal value="=" calc_equal={this.props.calc_equal}/>
          <Button value="+" btn="+" calc_run={this.props.calc_run}/>
        </div>
      </div>
    );
  }
}

export default Buttons;

import React, { Component } from 'react';
import './App.css';
import Output from './Output'
import Buttons from './Buttons'

class Calculator extends Component {
  constructor(props){
    super(props);

    this.state = {
      output: 'no',
    };
    this.calc_run = this.calc_run.bind(this)
    this.calc_equal = this.calc_equal.bind(this)
    this.clear = this.clear.bind(this)
  }

  calc_run(btn) {
    if(!isNaN(btn)){
      if(this.state.output == 'no'){
        var new_output =  btn
        this.setState({
          output: new_output
        });
      }else{
        var new_output = this.state.output + btn
        this.setState({
          output: new_output
        });
      }
    }else{
      var new_output = this.state.output + btn
      this.setState({
        output: new_output
      });
    }
  }

  calc_equal(){
    var output = this.state.output
    var ans = eval(output)
    document.getElementById('output').innerHTML = ans
    this.setState({
      output: ans
    });
  }

  clear(){
    this.setState({
      output: "no"
    });
  }

  render() {
    return (
      <div className="Calculator">
        <Output output={this.state.output} clear={this.clear}/>
        <Buttons calc_run={this.calc_run} calc_equal={this.calc_equal}/>
      </div>
    );
  }
}

export default Calculator;

import React, {Component} from 'react'

class Equal extends Component {
  render() {
    return(
      <button
        onClick={() => {
          this.props.calc_equal()
        }}
      >
        {this.props.value}
      </button>
    );
  }
}

export default Equal

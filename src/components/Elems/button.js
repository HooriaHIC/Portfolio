import React from 'react';
import './elems.css';

class Button extends React.Component {
  render() {
    return (
        <button style={this.props.styles}>{this.props.text}</button>
    );
  }
}
  
export default Button;
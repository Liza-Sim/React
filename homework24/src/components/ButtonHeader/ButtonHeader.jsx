import React, { Component } from "react";
import './ButtonHeader.css';



class ButtonHeader extends Component {
  render() {
    return (
        <button type="button" className="button" onClick={this.props.callback}>{this.props.value}</button>
    )
  }
}

export default ButtonHeader;

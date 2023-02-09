import React, { Component } from "react";
import "./ButtonNavigator.css"


class ButtonNavigator extends Component {
  showContent = function () {
    console.log('information')
  }
  render() {
    return (
      <button type="button" data-index={this.props.id} className="buttonNav" onClick={this.showContent}>{ this.props.value} </button>
    )
  }
}

export default ButtonNavigator;
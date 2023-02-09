import React, { Component } from "react";
import './Content.css'
import disney from '../../img/disney.png'


class Content extends Component {
  render() {
      return (
          <div className="content">
          <p className="text">The Walt Disney Company</p>
          <img src={disney} alt="#" className="img"/>
        </div> 
    )
  }
}
export default Content;
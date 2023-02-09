import React, { Component } from "react";
import "./Button.css"

class Button extends Component {
    
    render() {
        return (
            <button type="button"
                id={this.props.id}
                value={this.props.value}
                onClick={this.props.callback}
                className={this.props.className}
            >{this.props.value}</button>
        )
    }
}

export default Button;
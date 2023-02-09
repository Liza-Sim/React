import React,  { Component } from "react";
import './Navigation.css';
import ButtonNavigation from '../ButtonNavigator/ButtonNavigator';

class Navigation extends Component {
  showParticipants = () => {
    return this.props.participants.map(participant => (
      <ButtonNavigation
        value={participant.value}
        id={participant.id}
        key={participant.id}
        onClick={this.ShowContent}/>
    ))
  } 
  render() {
    return (
      <div className="navigation">
        <p className="textNav">The most popular:</p>
        {this.showParticipants()}
      </div>
    )
  }
}

export default Navigation;
import React,  { Component } from "react";
import './Header.css';
import ButtonHeader from '../ButtonHeader/ButtonHeader';

class Header extends Component {
  hendleClickMain = function () {
    console.log('Welcome to the main page');
  }
  hendleClickAllProducts = function () {
    console.log('Welcome to the All cartoons page');
  }
  hendleClickCategory = function () {
    console.log('Welcome to the categories page');
  }
  hendleClickAbout = function () {
    console.log('Welcome to the about page');
  }
  hendleClickContacts = function () {
    console.log('Welcome to the contacts page');
  }
  render() {
    return (
      < div className="header" >
        <ButtonHeader value='Main' callback={this.hendleClickMain}/> 
        <ButtonHeader value='All cartoons' callback={this.hendleClickAllProducts}/> 
        <ButtonHeader value='Categories' callback={this.hendleClickCategory}/> 
        <ButtonHeader value='About' callback={this.hendleClickAbout}/> 
        <ButtonHeader value='Contacts' callback={this.hendleClickContacts}/> 
      </div >
    )
  }
}

export default Header;
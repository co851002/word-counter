import React, { Component } from 'react';
import logo from './../logo.svg';

class Header extends Component {

  render() {
    return (
      <div className=" header col-xs-12">
        <img className="logo" src={logo} alt="logo"/>
        <h3>React Word Counter</h3>
        <p className="intro col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3">
          <span>Type a sentence of 5 words or more to get started.</span>
        </p>
      </div>
    )
  }

}
module.exports = Header;

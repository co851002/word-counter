import React, { Component } from 'react';
import Header from './components/header';
import TextInput from './components/text-input';
import Footer from './components/footer';
import './App.css';

class App extends Component {

  render() {

    return (
      <div className="app row">
        <Header />
        <TextInput />
        <Footer />
      </div>
    );
  }
}


export default App;

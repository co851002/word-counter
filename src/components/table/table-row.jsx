import React, { Component } from 'react';
//import TextInput from './text-input';

class TableRow extends React.Component {
  render() {
    const {wordList} = this.state;
    
    const row = Object.keys(wordList).map((index, value) =>
      <td key={index}>{wordList[value]}</td>
    );
    return (
      <tr>{row}</tr>
    );
  }
}

module.exports = TableRow;

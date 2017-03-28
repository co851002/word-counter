import React, { Component } from 'react';
import TextInput from './text-input';


class TableHeaderRow extends React.Component {
  render() {
    const {tableHeader} = this.state;

    const headerRow = tableHeader.map((tableHeader) =>
      <td key={tableHeader}>{tableHeader}</td>
    );
    return (
      <tr>{headerRow}</tr>
    );
  }
}

module.exports = TableHeaderRow;

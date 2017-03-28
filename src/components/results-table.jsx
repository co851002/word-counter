import React from 'react';

class ResultsTable extends React.Component {

  render() {

    var wordList = this.props.wordList;
    var tableHeader = this.props.tableHeader;

    return(
      <div id="myTable" className="table-responsive">
        <table id="word-table" className="table table-bordered">
            <thead id="thead">
              {tableHeader.map((tableHeader) =>
                <td key={tableHeader}>{tableHeader}</td>
              )}
            </thead>
            <tbody id="tbody">
              {Object.keys(wordList).map((index, value) =>
                <td key={index}>{wordList[value]}</td>
              )}
            </tbody>
        </table>
      </div>
    );
  }
}

module.exports = ResultsTable;

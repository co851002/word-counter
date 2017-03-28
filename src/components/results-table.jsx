import React from 'react';

class ResultsTable extends React.Component {

  render() {

    var wordList = this.props.wordList;
    var tableHeader = this.props.tableHeader;

    return(
      <div id="myTable" className="table-responsive">
        <table id="word-table" className="table table-bordered">
            <thead id="thead">
              <tr>
                {tableHeader.map((tableHeader) =>
                <td key={tableHeader}>{tableHeader}</td>
              )}
            </tr>
            </thead>
            <tbody id="tbody">
              <tr>
                {Object.keys(wordList).map((index, value) =>
                  <td key={index}>{wordList[value]}</td>
                )}
              </tr>
            </tbody>
        </table>
      </div>
    );
  }
}

module.exports = ResultsTable;

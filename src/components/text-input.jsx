import React, { Component } from 'react';
import ResultsTable from './results-table';

class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      words: 0,
      commas: 0,
      fullstops: 0,
      minWords: 'Minimum of 5 words required',
      maxWords: 'No more that 500 words allowed',
      numberErr: 'No numbers allowed',
      noErr:'',
      warning:'',
      inputValue:[],
      wordArray:[],
      wordList:[],
      tableHeader:[],
      tableRow:[]
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.clearInput = this.clearInput.bind(this);
    this.restrictions = this.restrictions.bind(this);
    this.storeInput = this.storeInput.bind(this);
    this.counter = this.counter.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
      warning: this.restrictions(),
      wordList: this.state.wordArray
    });
    return (
      this.restrictions(),
      this.counter()
    );
  }
<<<<<<< HEAD

=======
>>>>>>> e8b1d0dff3f0d10a5d73a94014753e32152d9505
  counter(event) {
    //Get fullstop & comma count with regex and set state
    var fullstopRegex = /\./g;
    var commaRegex = /,/g;
    var wordRegex = /[^a-z\d\s]+/gi;
    var fullstopCounter = (this.state.value.match(fullstopRegex) || []).length;
    var commaCounter = (this.state.value.match(commaRegex) || []).length;
    //Get word count without special chars and spaces using regex and set state of 'words'
    var wordCounter = (this.state.value.trim()//remove whitespace
                      .replace(/[\W]+/g, ' ')
                      .replace(/([a-z]+)\b[.,]/g, '')//remove commas & fullstops
                      .replace(wordRegex, '')
                      .split(' ')// split words into array elements
                      .filter(function(x){// remove empty array eements
                        return x !== '';
                      }) || []);
<<<<<<< HEAD

=======
    console.log(wordCounter);
>>>>>>> e8b1d0dff3f0d10a5d73a94014753e32152d9505
    //Set state of counter elements
    this.setState({
      fullstops : fullstopCounter,
      commas : commaCounter,
      words : wordCounter.length
    });
<<<<<<< HEAD
  }

  restrictions() {
    var number = !isNaN(this.state.value);
    if (number) {
      //If number detected warn user
      this.setState({warning : this.state.numberErr});
    }
    else{
      //Clear warning if none of the above
      this.setState({warning : this.state.noErr});
    }
  }
=======
  }

  restrictions() {
    var number = !isNaN(this.state.value);
    if (number) {
      //If number detected war user
      console.log('Numbers');
      this.setState({warning : this.state.numberErr});
    }
    else{
      console.log('no errors');
      //Clear warning if none of the above
      this.setState({warning : this.state.noErr});
    }
  }


>>>>>>> e8b1d0dff3f0d10a5d73a94014753e32152d9505

  storeInput() {
    //Replace special chars with a space
    var inputValue = this.state.value.replace(/[\W]+/g, ' ');
<<<<<<< HEAD

=======
    //console.log('Clean String: '+ inputValue);
>>>>>>> e8b1d0dff3f0d10a5d73a94014753e32152d9505
    //Convert string to lowercase, split into array, sort alphabetically and remove empty values
    var wordArray = inputValue.toLowerCase().split(' ').sort().filter(
      function(x){
        return x !== '';
      });
    this.setState({wordList: wordArray});
<<<<<<< HEAD
=======
    // console.log('Cleaned Word Array: '+ wordArray);
    // console.log('Word List: '+ this.state.wordList);
>>>>>>> e8b1d0dff3f0d10a5d73a94014753e32152d9505

    var length = wordArray.length;

    var wordLists = {};

    //Group by First Character
		for (var i = 0; i < length; i ++ ){
			var item = wordArray[i];
			var firstLetter = item.charAt(0);
			wordLists[ firstLetter ] = wordLists[ firstLetter ] || [];
			wordLists[ firstLetter ].push( item );
		}
<<<<<<< HEAD


    //Add table Header
    var thead = Object.keys(wordLists);

    this.setState({
      tableHeader: thead
    });
=======
    // console.log('First charachter:');
    // console.table(wordLists);

    //Add table Header
    // var thead = document.getElementById('thead');
    // var tr = document.createElement('tr');
    // thead.appendChild(tr);
		for( var x = 0; x < Object.keys(wordLists).length; x++){
			//var th = document.createElement('th');
      //Convert first letter to uppercase
			//th.innerHTML = Object.keys(wordLists)[x].toUpperCase();
			//tr.appendChild(th);
      var thead = Object.keys(wordLists)[x];
      console.log(thead);
      // var y = [];
      // var th1 = y.push(thead);
      // console.log(y);
      // console.log(th1);
      // var theadLettter = thead.map(function(thead, index){
      //
      // })

		}
    //thead.appendChild(tr);
>>>>>>> e8b1d0dff3f0d10a5d73a94014753e32152d9505

    //Find object with most largest group of words
    var LargestGroup = 0;
    for (var index in wordLists) {
      if(wordLists[index].length > LargestGroup){
        LargestGroup = wordLists[index].length;
      }
    }
		for(var L = 0; L < LargestGroup+1; L++){
<<<<<<< HEAD
    //Create rows with cells , size largest group
    // TODO:
    //Add in cells and content, if array is less than largest, add empty cell and nobreak space
    // var tableRow = '';
    //   for ( index in wordLists) {
    //     if(!wordLists[index][L]){
    //       tableRow = '';
    //     }else{
    //       tableRow = wordLists[index][L];
    //     }
    //   }
=======
		//Create rows with cells , size largest group
    // var tbody = document.getElementById('tbody');
		// tbody.appendChild(tr);
		// 	tr = document.createElement('tr');
			//Add in cells and content, if array is less than largest, add empty cell and nobreak space
			for ( index in wordLists) {
				//var td = document.createElement('td');
				if(!wordLists[index][L]){
					//td.innerHTML = " ";
				}else{
					//td.innerHTML = wordLists[index][L];
				}
        //tr.appendChild(td);
			}
>>>>>>> e8b1d0dff3f0d10a5d73a94014753e32152d9505
		}
  }

  handleClick(event) {
    //Execute when handleClick is called on an element (button)
    event.preventDefault();
<<<<<<< HEAD
    var words = this.state.value
    var number = words.match(/\d+/g)

    if ((number === null) && (this.state.words < 5)){
=======

    if  (this.state.words < 5){
>>>>>>> e8b1d0dff3f0d10a5d73a94014753e32152d9505
      //If wordcount is less than 5 warn user
      console.log('Less than 5'+this.state.words);
      return this.setState({warning : this.state.minWords});
    }
<<<<<<< HEAD
    if ((number === null) && (this.state.words > 500)) {
=======
    if (this.state.words > 500) {
>>>>>>> e8b1d0dff3f0d10a5d73a94014753e32152d9505
      //If wordcount is greater than 500 warn user
      console.log('500+');
      return this.setState({warning : this.state.maxWords});
    }
<<<<<<< HEAD
    if (number !== null) {
      //If number detected warn user
      this.setState({warning : this.state.numberErr});
    }

=======
>>>>>>> e8b1d0dff3f0d10a5d73a94014753e32152d9505
    else{
      var storeInputArr = this.storeInput();
      return (
        this.counter(),
        storeInputArr
      );
    }


  }

  clearInput(event) {
    //Clear counters and table
    event.preventDefault();
    this.setState({
      value: '',
      words: 0,
      commas: 0,
      fullstops: 0,
      warning:'',
      wordArray:'',
      tableHeader:[],
      wordList:[]
    });
  }

  render() {

    var wordList = this.state.wordList;
    var tableHeader = this.state.tableHeader;

    return (
      <div className=" input-box col-xs-12 col-sm-6 col-sm-offset-3">
<<<<<<< HEAD
=======
        <div>
          <code>My girl! wove six dozen plaid jackets, before she quit. .</code>
        </div>
>>>>>>> e8b1d0dff3f0d10a5d73a94014753e32152d9505
        <div className="warning">
          <span>{this.state.warning}</span>
        </div>
        <form className="form-input-box">
          <textarea id="text-input-box"
            className="form-control"
            ref="inputBox"
            name="textarea"
            rows="5"
            cols="30"
            onChange={this.handleChange}
            type="text"
            value={this.state.value}
            placeholder="Type a sentence of 5 words or more to get started... ">
          </textarea>
        </form>

        <a onClick={this.handleClick} className="btn" >
          List words
        </a>

        <a onClick={this.clearInput} className="btn" >
          Clear
        </a>

        <div className="counter-results">
          <div>Words: <span>{this.state.words}, </span></div>
          <div>Commas: <span>{this.state.commas}, </span></div>
          <div>Fullstops: <span>{this.state.fullstops}, </span></div>
        </div>

        <ResultsTable wordList={wordList}
          tableHeader={tableHeader}/>

      </div>
    )
  }
}
module.exports = TextInput;

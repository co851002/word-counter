import React, { Component } from 'react';

class Footer extends Component {

  render() {
    return (
      <div className=" footer col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3">
        <footer>
          <span><a href="https://co851002.github.io/COCV/" rel="author" target="_blank">Designed &amp; developed by Christo Oosthuizen</a> </span>
          <span><a href="https://github.com/co851002/word-counter" title="View Github Repo" target="_blank"><i className="fa fa-github" aria-hidden="true"></i> View Code</a></span>
        </footer>
      </div>
    )
  }
}
module.exports = Footer;

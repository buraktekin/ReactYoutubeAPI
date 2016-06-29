import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  handleInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  render() {
    return (
      <div className="search-bar">
        <input
          className="form-control"
          onChange={event => this.handleInputChange(event.target.value)} placeholder="Type something..."/>
      </div>
    );
  }
}

export default SearchBar;

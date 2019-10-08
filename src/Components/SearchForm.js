import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class SearchForm extends Component {

  state = {
    value: ''
  }

  // change state of input value as user types it
  handleChangeValue = (e) => {
    this.setState({
      value: e.target.value
    });
  }

  // on form submit, create and push dynamic url path 
  onSubmit = (e) => {
    e.preventDefault();
    const userInput = this.state.value;
    let path = `/search/${userInput}`;
    this.props.history.push(path);
  }

  render () {

    return (
      <form className="search-form" onSubmit={this.onSubmit}>
        <input id="search" type="search" name="search" placeholder="Search" onChange={this.handleChangeValue} required/>
      </form>
    );
  }
}

export default withRouter(SearchForm);
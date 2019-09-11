import React, { Component } from 'react';
import './index.css';
import axios from 'axios';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import SearchForm from './SearchForm';
import Navigation from './Navigation';
import PhotoContainer from './PhotoContainer';
import NoResults from './NoResults';
import apiKey from './config';

class App extends Component {

  state = {
    photos: []
  }

  getResults = (tag) => {
    const key = apiKey;
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=${tag}&per_page=4&format=json&nojsoncallback=1`)
      .then(response => { 
        this.setState( { photos: response.data.photos.photo }); 
      })
  }

  render() {

    return (
      <BrowserRouter>
        <div className="container">
          <SearchForm getResults={this.getResults} />
          <Navigation />
          <Switch>
            <Route path="/:tag" render={ () => <PhotoContainer data={this.state.photos} getResults={this.getResults} /> } />
            <Route exact path="/" render={ () => <Redirect to="/random" /> } />
            <Route render={ () => <NoResults /> } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
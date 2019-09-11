import React, { Component } from 'react';
import './index.css';
import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SearchForm from './SearchForm';
import Navigation from './Navigation';
import PhotoContainer from './PhotoContainer';
import NoResults from './NoResults';
import apiKey from './config';

class App extends Component {

  state = {
    photos: []
  }

  componentDidMount() {
    const key = apiKey;
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=cats&per_page=24&format=json&nojsoncallback=1`)
      .then(response => { 
        this.setState( { photos: response.data.photos.photo }); 
      })
  }

  render() {

    console.log(this.props); 

    return (
      <BrowserRouter>
        <div className="container">
          <SearchForm />
          <Navigation />
          <Switch>
            <Route exact path="/:tag?" render={ () => <PhotoContainer data={this.state.photos}/> } />
            <Route render={ () => <NoResults /> } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
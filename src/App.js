import React, { Component } from 'react';
import './index.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';
import apiKey from './config';

import SearchForm from './SearchForm';
import Navigation from './Navigation';
import PhotoContainer from './PhotoContainer';
import PageNotFound from './PageNotFound';

class App extends Component {

  state = {
    photos: [],
    value: '',
    isLoaded: false
  }

  // removes photos with a duplicate 'owner' value from data response
  removeDuplicateOwnerPhotos = (data) => {
    const obj = {};
    let filteredArray = [];

    for (let i in data) {
      obj[data[i].owner] = data[i];
    }
    for (let i in obj) {
      filteredArray.push(obj[i]);
    }
    
    return filteredArray;
  }

  getData = (value) => {
      if (value !== this.state.value) {
              this.setState( prevState => {
                return {
                  value: prevState.value = value,
                  isLoaded: prevState.isLoaded = false
                }
            }, () => {
                  axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${this.state.value}&per_page=500&safe_search=1&format=json&nojsoncallback=1`)
                  .then(response => { 
                    this.setState( prevState => {
                      return {
                        photos: this.removeDuplicateOwnerPhotos(response.data.photos.photo),
                        isLoaded: prevState.isLoaded = true
                      }
                    });
                  })
            });
      }
  }

  render() {
    return (
      <BrowserRouter>
          <div className="container">
              <SearchForm getData={this.getData} />
              <Navigation />
              <Switch>
                <Route exact path="/search/:tag" 
                  render={ () => 
                    <PhotoContainer 
                      data={this.state.photos}
                      value={this.state.value} 
                      isLoaded={this.state.isLoaded}
                      getData={this.getData}
                    /> } 
                  />
                <Route exact path="/:link" render={ () => 
                  <PhotoContainer 
                    data={this.state.photos}
                    value={this.state.value} 
                    isLoaded={this.state.isLoaded}
                    getData={this.getData}
                  /> } 
                />
                <Route exact path="/" render={ () => <Redirect exact to="/space" /> } />
                <Route render={ () => <PageNotFound /> } />
              </Switch>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
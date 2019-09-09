import React, { Component } from 'react';
import './index.css';
import Axios from 'axios';

import SearchForm from './SearchForm';
import Navigation from './Navigation';
import PicContainer from './PicContainer';
import apiKey from './config';

class App extends Component {

  state = {
    uploads: []
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    const key = apiKey;
    Axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&user_id=&tags=sunset&bbox=&per_page=5&format=json&nojsoncallback=1`)
      .then(response => console.log(response.data.photos.photo));
  }

  render() {
    return(
      <div className="container">
        <SearchForm />
        <Navigation />
        <PicContainer />
      </div>
    );
  }
}

export default App;
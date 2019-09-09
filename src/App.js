import React from 'react';
import './index.css';

import SearchForm from './SearchForm';
import Navigation from './Navigation';
import PicContainer from './PicContainer';

function App() {

  return (
    <div className="container">
      <SearchForm />
      <Navigation />
      <PicContainer />
    </div>
  );
}

export default App;
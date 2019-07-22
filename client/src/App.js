import React, { useState } from 'react';
import {BrowserRouter , Route } from 'react-router-dom';
import MovieList from '../src/Movies/MovieList';
import Movie from '../src/Movies/Movie';

import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] ); 

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div> 
      <Route exact path = "/" component = {MovieList} />
      <Route path = "/movies/:id" component = {Movie} />
      <SavedList list={savedList} />
      <div>Replace this Div with your Routes</div> 
    </div>
  );
};

export default App;

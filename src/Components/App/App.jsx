import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage';
import MoviesPage from '../../pages/MoviesPage/MoviesPage';
import MovieDetailsPage from '../../pages/MovieDetailsPage/MovieDetailsPage';
import Nav from '../Nav/Nav';
import '../../styles/style.scss';
import '../../styles/normilize.css';

const App = () => (
  <>
    <Nav />
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/movies/:movieId" component={MovieDetailsPage} />
      <Route path="/movies" component={MoviesPage} />
      <Redirect to="/" />
    </Switch>
  </>
);

export default App;

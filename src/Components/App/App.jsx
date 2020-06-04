import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Nav from '../Nav/Nav';
import '../../styles/style.scss';
import '../../styles/normilize.css';

const HomePage = lazy(() =>
  import('../../pages/HomePage/HomePage' /* webpackChunkName: 'HomePage' */),
);
const MoviesPage = lazy(() =>
  import(
    '../../pages/MoviesPage/MoviesPage' /* webpackChunkName: "MoviesPage" */
  ),
);
const MovieDetailsPage = lazy(() =>
  import(
    '../../pages/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */
  ),
);

const App = () => (
  <>
    <Nav />
    <Suspense fallback={<h1>Loading...</h1>}>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
        <Route path="/movies" component={MoviesPage} />
        <Redirect to="/" />
      </Switch>
    </Suspense>
  </>
);

export default App;

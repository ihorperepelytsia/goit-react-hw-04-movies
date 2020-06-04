import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { NavLink, Route, Switch, withRouter } from 'react-router-dom';
import './movieDetails.scss';

const CastPage = lazy(() =>
  import(
    '../../pages/MovieDetailsPage/CastPage/CastPage' /* webpackChunkName: "CastPage" */
  ),
);
const ReviewsPage = lazy(() =>
  import(
    '../../pages/MovieDetailsPage/ReviewsPage/ReviewsPage' /* webpackChunkName: "ReviewsPage" */
  ),
);

const MovieDetails = ({
  original_title,
  genres,
  vote_average,
  overview,
  poster_path,
  title,
  release_date,
  match,
  onGoback,
  location,
}) => (
  <>
    <button type="button" onClick={onGoback}>
      Back
    </button>
    <div className="movie-details">
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${poster_path}`}
          alt={title}
        />
      </div>
      <div className="movie-details__description">
        <h2>
          {original_title} ({release_date.substring(0, 4)})
        </h2>
        <p>User score: {vote_average * 10}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h4>Genres</h4>
        <ul>
          {!!genres.length
            ? genres.map(({ id, name }) => <li key={id}>{name}</li>)
            : 'No genres'}
        </ul>
      </div>
    </div>
    <div className="information">
      <h5>Additional information</h5>
      <ul>
        <li>
          <NavLink
            to={
              location.pathname !== `${match.url}/cast`
                ? `${match.url}/cast`
                : match.url
            }
            activeClassName={'active-link'}
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            to={
              location.pathname !== `${match.url}/reviews`
                ? `${match.url}/reviews`
                : match.url
            }
            activeClassName={'active-link'}
          >
            Reviews
          </NavLink>
        </li>
      </ul>
    </div>
    <Suspense fallback={<h1>Loading...</h1>}>
      <Switch>
        <Route path={`${match.path}/cast`} component={CastPage} />
        <Route path={`${match.path}/reviews`} component={ReviewsPage} />
      </Switch>
    </Suspense>
  </>
);

MovieDetails.propTypes = {
  onGoback: PropTypes.func.isRequired,
  title: PropTypes.string,
  poster_path: PropTypes.string,
  original_title: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  overview: PropTypes.string,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
    }).isRequired,
  ).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(MovieDetails);

import React from 'react';
import './movieDetails.scss';
import { NavLink, Route, Switch, withRouter } from 'react-router-dom';
import CastPage from '../../pages/MovieDetailsPage/CastPage/CastPage';
import ReviewsPage from '../../pages/MovieDetailsPage/ReviewsPage/ReviewsPage';

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
    <Switch>
      <Route path={`${match.path}/cast`} component={CastPage} />
      {/* <Route
        path={`${match.path}/cast`}
        render={props => <CastPage {...props} extraPropName={isLoading} />}
      /> */}

      <Route path={`${match.path}/reviews`} component={ReviewsPage} />
    </Switch>
  </>
);

export default withRouter(MovieDetails);

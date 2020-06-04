import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

const Movies = ({ searchMovies, location }) => (
  <>
    <ul>
      {searchMovies.map(({ id, title }) => (
        <li key={id}>
          <Link
            to={{
              pathname: `/movies/${id}`,
              state: { from: location },
            }}
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  </>
);

Movies.propTypes = {
  searchMovies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  location: PropTypes.object.isRequired,
};

export default withRouter(Movies);

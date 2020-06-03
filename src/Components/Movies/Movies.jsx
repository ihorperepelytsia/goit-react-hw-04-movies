import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Movies = ({ searchMovies, location }) => (
  <>
    <ul>
      {searchMovies.map(({ id, title }) => (
        <li key={id}>
          <Link to={`/movies/${id}`}>{title}</Link>
          {/* <Link
            to={{
              pathname: `/movies/${id}`,
              state: { from: location },
            }}
          >
            {title}
          </Link> */}
        </li>
      ))}
    </ul>
  </>
);

export default withRouter(Movies);

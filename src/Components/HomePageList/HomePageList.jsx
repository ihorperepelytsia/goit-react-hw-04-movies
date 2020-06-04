import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const HomePageList = ({ movies }) => (
  <>
    <ul>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <Link to={`/movies/${id}`}>{title}</Link>
        </li>
      ))}
    </ul>
  </>
);

HomePageList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default HomePageList;

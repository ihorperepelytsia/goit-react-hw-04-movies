import React from 'react';
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

export default HomePageList;

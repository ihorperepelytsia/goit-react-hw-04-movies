import React from 'react';
import PropTypes from 'prop-types';
import './reviews.scss';

const Reviews = ({ review }) => (
  <>
    <ul className="reviews-list">
      {review.map(({ id, author, content }) => (
        <li key={id}>
          <p className="reviews-list__author">Author: {author}</p>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  </>
);

Reviews.propTypes = {
  review: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string,
      content: PropTypes.string,
    }).isRequired,
  ).isRequired,
};

export default Reviews;

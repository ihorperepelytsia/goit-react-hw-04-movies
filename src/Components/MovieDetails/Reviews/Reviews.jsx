import React from 'react';
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

export default Reviews;

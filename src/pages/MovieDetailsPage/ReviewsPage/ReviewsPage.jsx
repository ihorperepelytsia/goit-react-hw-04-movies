import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Reviews from '../../../Components/MovieDetails/Reviews/Reviews';
import { fetchMovieReviews } from '../../../servises/api';

export default class ReviewsPage extends Component {
  state = {
    review: [],
  };

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        movieId: PropTypes.string.isRequired,
      }),
    }).isRequired,
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;

    fetchMovieReviews(movieId)
      .then(({ data }) => this.setState({ review: data.results }))
      .catch(error => console.error(error));
  }
  render() {
    const { review } = this.state;
    return (
      <>
        {!!review.length ? (
          <Reviews review={review} />
        ) : (
          <p className="no-reviews">No reviews</p>
        )}
      </>
    );
  }
}

import React, { Component } from 'react';
import Reviews from '../../../Components/MovieDetails/Reviews/Reviews';
import { fetchMovieReviews } from '../../../servises/api';

export default class ReviewsPage extends Component {
  state = {
    review: [],
  };
  componentDidMount() {
    fetchMovieReviews(this.props.match.params.movieId).then(({ data }) =>
      this.setState({ review: data.results }),
    );
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

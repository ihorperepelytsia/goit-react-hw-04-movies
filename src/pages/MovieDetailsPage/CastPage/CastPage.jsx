import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchMovieCast } from '../../../servises/api';
import Cast from '../../../Components/MovieDetails/Cast/Cast';

export default class CastPage extends Component {
  state = {
    actors: [],
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

    fetchMovieCast(movieId).then(({ data }) =>
      this.setState({ actors: data.cast }),
    );
  }

  render() {
    const { actors } = this.state;

    return (
      <>
        {!!actors.length ? (
          <Cast actors={actors} />
        ) : (
          <p className="no-reviews">No actors</p>
        )}{' '}
      </>
    );
  }
}

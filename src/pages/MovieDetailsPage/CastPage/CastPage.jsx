import React, { Component } from 'react';
import { fetchMovieCast } from '../../../servises/api';
import Cast from '../../../Components/MovieDetails/Cast/Cast';

export default class CastPage extends Component {
  state = {
    actors: [],
  };
  componentDidMount() {
    fetchMovieCast(this.props.match.params.movieId).then(({ data }) =>
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

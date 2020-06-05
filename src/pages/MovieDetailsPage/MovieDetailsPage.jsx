import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchMovieID } from '../../servises/api';
import MovieDetails from '../../Components/MovieDetails/MovieDetails';

export default class MovieDetailsPage extends Component {
  state = { movie: null, prevSearch: '' };

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        movieId: PropTypes.string.isRequired,
      }),
    }).isRequired,
    location: PropTypes.shape({
      state: PropTypes.object,
    }).isRequired,
    history: PropTypes.object,
  };

  componentDidMount() {
    const {
      match: { params },
      location: { state },
    } = this.props;

    if (state) {
      this.setState({ prevSearch: state.from });
    }

    fetchMovieID(params.movieId)
      .then(({ data }) => this.setState({ movie: data }))
      .catch(error => console.error(error));
  }

  handleGoback = () => {
    const { history } = this.props;
    const { prevSearch } = this.state;

    if (prevSearch.length !== 0) {
      return history.push(prevSearch);
    }

    history.push('/');
  };

  render() {
    const { movie } = this.state;
    return (
      <>{movie && <MovieDetails {...movie} onGoback={this.handleGoback} />}</>
    );
  }
}

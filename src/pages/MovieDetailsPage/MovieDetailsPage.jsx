import React, { Component } from 'react';
import { fetchMovieID } from '../../servises/api';
import MovieDetails from '../../Components/MovieDetails/MovieDetails';

export default class MovieDetailsPage extends Component {
  state = { movie: null };

  componentDidMount() {
    fetchMovieID(this.props.match.params.movieId).then(({ data }) =>
      this.setState({ movie: data }),
    );
  }

  handleGoback = () => {
    const { history, location } = this.props;

    if (location.state) {
      return history.push(location.state.from);
    }

    history.push('/movies');
  };

  render() {
    const { movie } = this.state;
    // const { path, url } = this.props.match;
    console.log(this.props);
    return (
      <>{movie && <MovieDetails {...movie} onGoback={this.handleGoback} />}</>
    );
  }
}

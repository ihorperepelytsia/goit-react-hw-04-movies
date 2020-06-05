import React, { Component } from 'react';
import { fetchMoviesTrending } from '../../servises/api';
import HomePageList from '../../Components/HomePageList/HomePageList';

export default class HomePage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetchMoviesTrending()
      .then(({ data }) => this.setState({ movies: data.results }))
      .catch(error => console.error(error));
  }

  render() {
    const { movies } = this.state;
    return <HomePageList movies={movies} />;
  }
}

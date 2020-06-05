import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchMoviesSearch } from '../../servises/api';
import Movies from '../../Components/Movies/Movies';
import './moviesPage.scss';

export default class MoviesPage extends Component {
  state = {
    query: '',
    searchMovies: [],
  };

  static propTypes = {
    location: PropTypes.shape({
      search: PropTypes.string.isRequired,
    }).isRequired,
  };

  fetch(query) {
    fetchMoviesSearch(query)
      .then(({ data }) => this.setState({ searchMovies: data.results }))
      .catch(error => console.error(error));
  }

  componentDidMount() {
    const { search } = this.props.location;

    if (search) {
      this.fetch(search.slice(7));
    }
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { query } = this.state;
    const { history } = this.props;
    const { pathname, state } = this.props.history.location;

    history.push(`${pathname}?query=${query}`, state);
    this.fetch(query);
    this.setState({ query: '' });
  };

  render() {
    const { query, searchMovies } = this.state;

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            name="query"
            value={query}
            onChange={this.handleChange}
            placeholder="Search movies"
          />
          <button type="submit">Search</button>
        </form>

        {!!searchMovies && <Movies searchMovies={searchMovies} />}
      </>
    );
  }
}

import React, { Component } from 'react';
import { fetchMoviesSearch } from '../../servises/api';
import Movies from '../../Components/Movies/Movies';
import './moviesPage.scss';
// import queryString from 'query-string';

// const getCategoryWithValue = (allCategories, value) =>
//   allCategories.find(c => c.value === value);

// const getCategoryFromLocation = location =>
//   queryString.parse(location.search).category;

export default class MoviesPage extends Component {
  state = {
    query: '',
    searchMovies: [],
  };

  // componentDidMount() {
  //   const { state } = this.props.location;

  //   if (state) {
  //     fetch(state.query).then(({ data }) =>
  //       this.setState({ movies: data.results }),
  //     );
  //   }
  // }

  fetch(query) {
    fetchMoviesSearch(query).then(({ data }) =>
      this.setState({ searchMovies: data.results }),
    );
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  componentDidUpdate(prevProps, prevState) {
    // const prevCategory = getCategoryFromLocation(prevProps.location);
    // const nextCategory = getCategoryFromLocation(this.props.location);

    // console.log('prevCategory: ', prevCategory);
    // console.log('nextCategory: ', nextCategory);
    console.log(prevState);
    console.log(prevProps);
    // if (prevProps.location.search !== this.props.location.search) {
    //   fetchMoviesSearch(prevState.query).then(({ data }) =>
    //     this.setState({ searchMovies: data.results }),
    //   );
    // }
  }

  handleSubmit = e => {
    e.preventDefault();
    const { query } = this.state;
    // if (this.state.query.length <= 1) {
    //   console.log('erorr');
    //   return;
    // }
    this.fetch(this.state.query);

    if (query) {
      return this.props.history.push({
        ...this.props.location,
        search: `search=${query}`,
      });
    }

    this.props.history.push({
      ...this.props.location,
      search: '',
    });
    this.setState({ query: '' });
  };

  render() {
    const { query, searchMovies } = this.state;
    // console.log(this.props);
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

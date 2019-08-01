import React,  {Component} from 'react';
import HeaderMovie from './HeaderMovie/HeaderMovie.component';
import SearchMovie from '../MoviesContainer/SearchMovie/SearchMovie.component';
import { api_movie } from '../../constant/api_url';
import { setMovies } from '../../actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MovieList from './MovieList/MovieList.component';

class MovieContainer extends Component {
  constructor() {
    super();
    this.state = { movies: []};      
  }

  componentDidMount() {
    this.updateData();
  }

  componentDidUpdate() {
    console.log('componentDidMount');
  }

  getData = movieData => {
    const { groups } = movieData;
    return groups;
  }

  updateData = () => {
    fetch(api_movie).then ( resolve => {
      return resolve.json();
    }).then(data => {
      const dataMovies = this.getData(data.response);
      this.setState({
        data: dataMovies
      });
      // this.props.setMovies(dataMovies);
    });
  }
  
  render() {      
    const { data } = this.state;
    return (
      <div>
        <HeaderMovie></HeaderMovie>
        <SearchMovie></SearchMovie>
        <MovieList data={data}></MovieList> 
      </div>
    );
  }
}

MovieContainer.propTypes = {
  setMovies: PropTypes.func.isRequired,
}

const mapDistpatchToPropsActions = dispatch => ({
  setMovies: value => dispatch(setMovies(value))
});

export default connect (null, mapDistpatchToPropsActions)(MovieContainer);
  

import React, {Component} from 'react';
import '../../../App.css';
import './SearchMovie.component.css';
import MovieList from '../MovieList/MovieList.component';
import search from '../../../img/search-solid.svg';
import { setMovies } from '../../../actions';
import { connect } from 'react-redux';

class SearchMovie extends Component {

  constructor() {
    super();
    this.state = { moviesWrite: ''};      
  }

  handleMovieWrite = (e) => {  
    this.setState({moviesWrite: e.target.value});
    this.props.setMovies(this.state.moviesWrite);
  }

  // handleReduxState = () => {
    
  // }

  // componentDidUpdate() {
    
  // }
  
    render() {
        return (
          <form>
            <div className='search-Input'>
              <span className='text-Search' >Buscar</span>              
              <input type="text" onChange={this.handleMovieWrite} className='SearchMovie-input' />
              
            </div>  
          </form>      
        );
    }
}


const mapDistpatchToPropsActions = dispatch => ({
  setMovies: value => dispatch(setMovies(value))
});

export default connect (null, mapDistpatchToPropsActions)(SearchMovie);
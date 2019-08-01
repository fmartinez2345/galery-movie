import React, { Component } from 'react';
import MovieDataDetail from '../MovieDataDetail/MovieDataDetail.component';
import '../../../../App.css';


class MovieData extends Component {
  constructor() {
    super();
    this.state = {
      showPopup: false
    };
  }
  togglePopup() {

    this.setState({
      showPopup: !this.state.showPopup
    });
  }
  render() {
    return (
      <div className='display-Movie'>
      <img onClick={this.togglePopup.bind(this)} src={this.props.img.url_imagen_t2}></img>       
      {
        this.state.showPopup ? 
        <MovieDataDetail
          data={this.props.img}
          closePopup={this.togglePopup.bind(this)}
        />
        : null
      }
      </div>
    );
  }
}

export default MovieData;
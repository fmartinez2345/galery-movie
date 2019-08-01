
import React from 'react';
import MovieData from './MovieData/MovieData.component';

const strToComponent = data => (
  data.map( movie => <MovieData img = {movie} key={movie} />)
);

const MovieList = ({data}) => {	
  if(data !== undefined) {
    return (
      <div className='img-conteiner'> 
        {strToComponent(data)}
      </div>
      );
   } else {
    return (<div></div>)
   }

};

export default MovieList;
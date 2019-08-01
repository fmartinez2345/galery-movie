import React from 'react';
import '../../../../App.css';
import logo from '../../../../img/flecha-atras-w.png';
import './MovieDataDetail.component.css';

class MovieDataDEtail extends React.Component {
  render() {
    const {image_base_vertical,title,description, image_background} = this.props.data;

    return (
      <div className='popup'>
        <div className='popup_inner'>
          <div className='movie-Detail'>
            <div className="Detail">
              <div className="Detail__card">
                <div className="Detail__column Detail__column_img">           
                  <img src={image_base_vertical} alt={title} className="single-image"/>
                </div>
                <div className="Detail__column Detail__description">
                  <h2 className="Detail__title title">{title}</h2>
                  <div className="Detail__description">
                    {description}
                  </div>
                  <div className="Detail__footer">
                  <img src={logo} onClick={this.props.closePopup} className='return'></img>
                  </div>
                </div>
              </div>
            </div>
          </div>                 
        </div>
      </div>
    );
  }
}

export default MovieDataDEtail;
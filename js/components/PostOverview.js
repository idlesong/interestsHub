import React, { Component } from 'react';

import '../../css/bootstrap/css/bootstrap.css';
import '../../css/bootstrap-material/css/material.css';


export default class PostOverview extends Component {
  render() {
    return(
      <div>
        <div className="list-group-item">
            <div className="row-picture">
                <img className="circle" src="http://lorempixel.com/56/56/people/1" alt="icon" />
            </div>
            <div className="row-content">
                <h4 className="list-group-item-heading">{this.props.author}</h4>
                <p className="list-group-item-text">{this.props.overview}</p>
            </div>
        </div>
        <div className="list-group-separator"></div>
      </div>
    );
  }
}

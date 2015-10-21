import React, { Component } from 'react';

import '../../css/bootstrap/css/bootstrap.css';
import '../../css/bootstrap-material/css/material.css';

import PostOverview from './PostOverview.js';

export default class PostsList extends Component {
  render(){
    return(
      <div className="list-group">
        {this.props.posts.map((post) => {
          return(
            <PostOverview {...post} />
          );})
        }
      </div>
    );
  }
}

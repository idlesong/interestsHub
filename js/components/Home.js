import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as HomeActions from '../actions/HomeActions';
import styles from '../../css/app.css';

import '../../css/bootstrap/css/bootstrap.css';
import '../../css/bootstrap-material/css/material.css';

import PostsList from './PostsList.js';
import PostNew from './PostNew.js';

class Home extends Component {
  render() {
    const {title, dispatch} = this.props;
    const actions = bindActionCreators(HomeActions, dispatch);
    return (
      <main className="mobile_block well">
        <div className="navbar navbar-default">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-responsive-collapse">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="javascript:void(0)">InterestsHub</a>
            </div>
            <div className="navbar-collapse collapse navbar-responsive-collapse">
                <ul className="nav navbar-nav">
                    <li className="active"><a href="javascript:void(0)">Posts</a></li>
                    <li><a href="javascript:void(0)">Dashboard</a></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li><a href="javascript:void(0)">Signup</a></li>
                </ul>
            </div>
        </div>

        <PostNew />

        <PostsList posts={
            [{
              author: 'idlesong',
              overview: 'writing some awesome apps use redux webpack react bootstrap material theme \
                #tech #react #frontend'
            },{
              author: 'idlesong',
              overview: 'writing some awesome apps use redux webpack react bootstrap material theme \
                #tech #rails #ruby'
            },{
              author: 'idlesong',
              overview: 'writing some awesome apps use redux webpack react bootstrap material theme \
                #tech #google #chrome'
            },{
              author: 'idlesong',
              overview: 'writing some awesome apps use redux webpack react bootstrap material theme \
                #tech #zeronet'
            }]
          }/>

      </main>
    );
  }
}

export default connect(state => state.Sample)(Home)

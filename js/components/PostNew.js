import React, { Component } from 'react';

import '../../css/bootstrap/css/bootstrap.css';
import '../../css/bootstrap-material/css/material.css';


export default class PostNew extends Component {
  render() {
    return(
      <div>
        <div className="alert alert-dismissable alert-primary">
          <a href="javascript:void(0)" className="btn btn-primary btn-raised">Editor</a>
          <button className="btn btn-xs" data-original-title="Bold - Ctrl+B"><i className="mdi-editor-format-bold"></i></button>
          <button className="btn btn-xs" data-original-title="Italic - Ctrl+I"><i className="mdi-editor-format-italic"></i></button>
          <button className="btn btn-xs" data-original-title="List"><i className="mdi-editor-format-list-bulleted"></i></button>
          <button className="btn btn-xs" data-original-title="Img"><i className="mdi-editor-insert-photo"></i></button>
          <button className="btn btn-xs" data-original-title="URL"><i className="mdi-editor-insert-link"></i></button>
          <a href="javascript:void(0)" className="btn btn-primary btn-raised btn-xs">Preview</a>
          <a href="javascript:void(0)" className="btn btn-primary btn-raised btn-xs">Save</a>
        </div>

        <div className="form-group">
           <textarea className="form-control" rows="9" placeholder="Write *markdown* text" required></textarea>
        </div>
        <button className="btn btn-primary">save</button>
      </div>
    );
  }
}

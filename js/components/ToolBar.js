import React from 'react';

export default class ToolBar extends React.Component {

  render() {

    return(
      <div className="form-group tool-bar">
        <span className="btn btn-default"><i className="icon fa fa-sort-alpha-asc"></i> Sort by name</span>
        <span className="btn btn-default"><i className="icon fa fa-sort-numeric-desc"></i> Sort by age</span>
      </div>
    );
  }
}

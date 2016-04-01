import React from 'react';

export default class SearchBar extends React.Component {

  render() {

    return(
      <div className="form-group">
        <input className="form-control" type="text" placeholder="Search by name..." />
      </div>
    );
  }
}

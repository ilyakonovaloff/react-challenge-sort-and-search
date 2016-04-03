import React from 'react';

export default class SearchBar extends React.Component {

  updateState(e) {
    let searchText = e.target.value.toLowerCase();
    let users = this.props.initUsers;
    users = users.filter(function(user) {
      return user.name.toLowerCase().includes(searchText)
    });
    let activeUser = {};
    if (users.length) {
      activeUser = users[0]
    }

    this.props.updateState({
        searchText,
        users,
        activeUser
    });
  }

  render() {

    return(
      <div className="form-group">
        <input className="form-control" type="text" placeholder="Search by name..."
               value={this.props.searchText}
               onChange={this.updateState.bind(this)}
        />
      </div>
    );
  }
}

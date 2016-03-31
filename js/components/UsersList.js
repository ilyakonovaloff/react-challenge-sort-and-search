import React from 'react';

import UserData from './UserData';

export default class UsersList extends React.Component {

  render() {
    var rowsUsers = [];
    this.props.users.forEach(function(user) {
      rowsUsers.push(<UserData user={user} key={user.name}/>);
    });
    return(
      <div>{rowsUsers}</div>
    );
  }
}

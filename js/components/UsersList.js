import React from 'react';

import UserData from './UserData';

export default class UsersList extends React.Component {

  render() {
    let rowsUsers = [];
    this.props.users.forEach(function(user) {
      rowsUsers.push(<UserData user={user} key={user.name}/>);
    });
    return(
      <div>
        <table className="table table-striped">
          <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Age</th>
            <th>Phone</th>
          </tr>
          </thead>
          <tbody>
            {rowsUsers}
          </tbody>
        </table>
      </div>
    );
  }
}

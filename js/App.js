import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };

    this.loadUsersFromServer = this.loadUsersFromServer.bind(this);
  }

  loadUsersFromServer() {
    httpGet(this.props.source)
        .then(
            response => {
              this.setState({users: JSON.parse(response)});
            },
            error => alert(`Rejected: ${error}`)
        );
  }

  componentDidMount() {
    this.loadUsersFromServer();
  }

  render() {
    var rowsUsers = [];
    this.state.users.forEach(function(user) {
      rowsUsers.push(<div key={user.name}>{user.name}</div>);
    });

    return (
      <div className="container app">
        {rowsUsers}
      </div>
    );
  }
}


function httpGet(url) {

  return new Promise(function(resolve, reject) {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function() {
      if (this.status == 200) {
        resolve(this.response);
      } else {
        var error = new Error(this.statusText);
        error.code = this.status;
        reject(error);
      }
    };

    xhr.onerror = function() {
      reject(new Error("Network Error"));
    };

    xhr.send();
  });

}

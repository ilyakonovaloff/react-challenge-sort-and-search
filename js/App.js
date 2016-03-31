import React from 'react';

import ActiveUser from './components/ActiveUser';
import SearchBar from './components/SearchBar';
import ToolBar from './components/ToolBar';
import UsersList from './components/UsersList';


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
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
    return (
      <div className="app container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <SearchBar/>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <ToolBar/>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4 col-md-3 col-lg-2">
            <ActiveUser/>
          </div>
          <div className="col-sm-8 col-md-9 col-lg-10">
            <UsersList users={this.state.users}/>
          </div>
        </div>
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

import React from 'react';

export default class ToolBar extends React.Component {

  constructor(props) {
    super(props);

    this.sortFileds = {
      name: true,
      age: true
    };
  }

  sortUsers(field) {
    let prefix = this.sortFileds[field] ? '' : '-';
    let users = this.props.users.sort(dynamicSort(prefix + field));
    let activeUser = {};
    if (users.length) {
        activeUser = users[0]
    }

    this.props.updateState({
        users,
        activeUser
    });

    this.sortFileds[field] = !this.sortFileds[field];
  }

  render() {

    return(
      <div className="form-group tool-bar">
        <span onClick={this.sortUsers.bind(this, 'name')} className="btn btn-default"><i className="icon fa fa-sort-alpha-asc"></i> Sort by name</span>
        <span onClick={this.sortUsers.bind(this, 'age')} className="btn btn-default"><i className="icon fa fa-sort-numeric-desc"></i> Sort by age</span>
      </div>
    );
  }
}

function dynamicSort(property) {
    let sortOrder = 1;
    if (property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        let result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}

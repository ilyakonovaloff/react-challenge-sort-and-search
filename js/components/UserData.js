import React from 'react';

export default class UserData extends React.Component {

  handleClickItem() {
    this.props.updateState({
        activeUser: this.props.user
    });
  }

  render() {

    return(
      <tr onClick={this.handleClickItem.bind(this)}>
        <td><img className="avatar" src={'images/' + this.props.user.image + '.svg'} /></td>
        <td>{this.props.user.name}</td>
        <td>{this.props.user.age}</td>
        <td>{this.props.user.phone}</td>
      </tr>
    );
  }
}

import React from 'react';

export default class UserData extends React.Component {

  render() {

    return(
      <div>
        <div>{this.props.user.name}</div>
        <div>{this.props.user.phrase}</div>
      </div>
    );
  }
}

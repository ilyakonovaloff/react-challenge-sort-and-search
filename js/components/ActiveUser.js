import React from 'react';

export default class ActiveUser extends React.Component {

  render() {

    return(
      <div>
        <div className="panel panel-default">
          <div className="panel-body">
            <div className="row">
              <div className="col-sm-12 col-md-12">
                <img src={'images/' + this.props.user.image + '.svg'} />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-12">
                <h2>{this.props.user.name}</h2>
                <table className="table">
                  <tbody>
                    <tr>
                      <th>Age</th>
                      <td>{this.props.user.age}</td>
                    </tr>
                    <tr>
                      <th>Phone</th>
                      <td>{this.props.user.phone}</td>
                    </tr>
                    <tr>
                      <th>Animal</th>
                      <td>{this.props.user.image}</td>
                    </tr>
                  </tbody>
                </table>
                <p>
                  <strong>Favorite phrase: </strong>
                  {this.props.user.phrase}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

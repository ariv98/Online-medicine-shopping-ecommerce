import React, { Component } from "react";
import UserService from "../../services/UserService";

class ViewUserComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      user: {},
    };
  }

  componentDidMount() {
    UserService.getUserById(this.state.id).then((res) => {
      this.setState({ user: res.data });
      console.log(res.data);
    });
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="card col-md-6 offset-md-3">
          <h3 className="text-center"> View User Details</h3>
          <div className="card-body">
            <div className="row">
              <label> User First Name: </label>
              <div> {this.state.user.firstName}</div>
            </div>
            <div className="row">
              <label> User Last Name: </label>
              <div> {this.state.user.lastName}</div>
            </div>
            <div className="row">
              <label> User Email ID: </label>
              <div> {this.state.user.emailId}</div>
            </div>
            <div className="row">
              <label> User age: </label>
              <div> {this.state.user.userAge}</div>
            </div>
            <div className="row">
              <label> User gender: </label>
              <div> {this.state.user.userGender}</div>
            </div>
            <div className="row">
              <label> User phone number: </label>
              <div> {this.state.user.userPhoneNumber}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewUserComponent;

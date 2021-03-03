import React, { Component } from "react";
import UserService from "../../services/UserService";

class UpdateUserComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      firstName: "",
      lastName: "",
      emailId: "",
      userPhoneNumber: "",
      userAge: "",
      userGender: "",
    };
    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
    this.changeUserPhoneNumberHandler = this.changeUserPhoneNumberHandler.bind(
      this
    );
    this.changeUserAgeHandler = this.changeUserAgeHandler.bind(this);
    this.changeUserGenderHandler = this.changeUserGenderHandler.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  componentDidMount() {
    UserService.getUserById(this.state.id).then((res) => {
      let user = res.data;
      this.setState({
        firstName: user.firstName,
        lastName: user.lastName,
        emailId: user.emailId,
        userPhoneNumber: user.userPhoneNumber,
        userAge: user.userAge,
        userGender: user.userGender,
      });
    });
  }

  updateUser = (e) => {
    e.preventDefault();
    let user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emailId: this.state.emailId,
      userPhoneNumber: this.state.userPhoneNumber,
      userAge: this.state.userAge,
      userGender: this.state.userGender,
    };
    console.log("employee => " + JSON.stringify(user));
    console.log("id => " + JSON.stringify(this.state.id));
    UserService.updateUser(user, this.state.id).then((res) => {
      this.props.history.push("/user");
    });
  };

  changeFirstNameHandler = (event) => {
    this.setState({ firstName: event.target.value });
  };

  changeLastNameHandler = (event) => {
    this.setState({ lastName: event.target.value });
  };

  changeEmailIdHandler = (event) => {
    this.setState({ emailId: event.target.value });
  };
  changeUserPhoneNumberHandler = (event) => {
    this.setState({ userPhoneNumber: event.target.value });
  };

  changeUserAgeHandler = (event) => {
    this.setState({ userAge: event.target.value });
  };

  changeUserGenderHandler = (event) => {
    this.setState({ userGender: event.target.value });
  };
  cancel() {
    this.props.history.push("/user");
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Update user</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> First Name: </label>
                    <input
                      placeholder="First Name"
                      name="firstName"
                      className="form-control"
                      value={this.state.firstName}
                      onChange={this.changeFirstNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Last Name: </label>
                    <input
                      placeholder="Last Name"
                      name="lastName"
                      className="form-control"
                      value={this.state.lastName}
                      onChange={this.changeLastNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Email Id: </label>
                    <input
                      placeholder="Email Address"
                      name="emailId"
                      className="form-control"
                      value={this.state.emailId}
                      onChange={this.changeEmailIdHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Age: </label>
                    <input
                      placeholder="Email Address"
                      name="emailId"
                      className="form-control"
                      value={this.state.userAge}
                      onChange={this.changeUserAgeHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Phone number: </label>
                    <input
                      placeholder="Email Address"
                      name="emailId"
                      className="form-control"
                      value={this.state.userPhoneNumber}
                      onChange={this.changeUserPhoneNumberHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Gender: </label>
                    <input
                      placeholder="Email Address"
                      name="emailId"
                      className="form-control"
                      value={this.state.userGender}
                      onChange={this.changeUserGenderHandler}
                    />
                  </div>
                  <button
                    className="btn btn-success"
                    onClick={this.updateEmployee}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateUserComponent;

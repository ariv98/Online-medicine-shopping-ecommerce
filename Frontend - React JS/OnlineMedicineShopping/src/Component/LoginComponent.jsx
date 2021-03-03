import React, { Component } from "react";
import UserService from "../services/UserService";
import "bootstrap/dist/css/bootstrap.min.css";
import "./signupLogin.css";
import "./script";
import { EnvelopeFill, HeartFill, LockFill } from "react-bootstrap-icons";
import medeasy from "../images/medeasy.png";
import onl from "../images/onl.png";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { connect } from "react-redux";
import { Login } from "./LoginRedux/Action/LoginAction";

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.match.params.userId,
      emailId: "",
      userPassword: "",
    };
    this.verifyLogin = this.verifyLogin.bind(this);
  }

  componentDidMount() {
    document.title = "LOGIN : MEDEASY";
  }

  verifyLogin = (e) => {
    e.preventDefault();
    let userCred = {
      emailId: this.state.emailId,
      userPassword: this.state.userPassword,
    };
    console.log("User => " + JSON.stringify(userCred));
    UserService.getUserByEmailId(this.state.emailId);
    UserService.getUserByEmailId(this.state.emailId).then((res) => {
      this.setState({ dbuser: res.data });

      if (
        res.data.emailId === this.state.emailId &&
        res.data.userPassword === this.state.userPassword
      ) {
        alert("Welcome to MEDEASY");
        this.props.Login(res.data);
        this.props.history.push("/");
      } else {
        alert("Wrong Credentials!!! please try again");
      }
    });
  };

  changeEmailHandler = (event) => {
    this.setState({ emailId: event.target.value });
  };
  changeUserPasswordHandler = (event) => {
    this.setState({ userPassword: event.target.value });
  };

  render() {
    return (
      <div className="backgroun">
        <NavBar />
        <div className="container">
          <div className="row py-5 mt-4 align-items-center">
            <div className="col-md-5 pr-lg-5 mb-5 mb-md-0">
              <img
                src={onl}
                alt=""
                className="img-fluid mb-3 d-none d-md-block"
              />
              <h2>
                Guarding your right for Competent Pharmacy Care – MedEAsy Your
                Quick Stop Pharmacy
              </h2>
              <p className="font-italic mb-0" style={{ fontWeight: "bolder" }}>
                We care for your Health <HeartFill style={{ color: "red" }} />
              </p>
            </div>
            <div className="col-md-7 col-lg-6 ml-auto">
              <form action="#">
                <div id="head">
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <a href="#" id="heading">
                      <span id="medhead">MedEasy</span>{" "}
                      <img
                        src={medeasy}
                        id="medlogo"
                        alt="MedEasy"
                        className="vert-move"
                      />
                    </a>
                  </Link>
                </div>
                <div className="row">
                  <div className="input-group col-lg-12 mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white px-4 border-md border-right-0">
                        <EnvelopeFill />
                      </span>
                    </div>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      className="form-control bg-white border-left-0 border-md"
                      value={this.state.emailId}
                      onChange={this.changeEmailHandler}
                      required
                    />
                  </div>

                  <div className="input-group col-lg-12 mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white px-4 border-md border-right-0">
                        <i className="fa fa-lock text-muted">
                          <LockFill />
                        </i>
                      </span>
                    </div>
                    <input
                      id="password"
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="form-control bg-white border-left-0 border-md"
                      value={this.state.userPassword}
                      onChange={this.changeUserPasswordHandler}
                    />
                  </div>

                  <div className="form-group col-lg-12 mx-auto mb-0">
                    <button
                      className="btn btn-primary btn-block py-2 acc"
                      onClick={this.verifyLogin}
                    >
                      <span className="font-weight-bold">LOGIN</span>
                    </button>
                    <div className="la">
                      Don't have an account?{" "}
                      <Link to="/sign-up/_add">SignUp</Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    Login: (user) => {
      dispatch(Login(user));
    },
  };
};

export default connect(null, mapDispatchToProps)(LoginComponent);

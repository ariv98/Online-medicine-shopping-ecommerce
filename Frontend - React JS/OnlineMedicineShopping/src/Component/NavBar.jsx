import React from "react";
import {
  Cart,
  HeartFill,
  PersonCircle,
  Search,
} from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import medeasy from "../images/medeasy.png";
import { Logout } from "./LoginRedux/Action/LoginAction";

class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.logoutHandle = this.logoutHandle.bind(this);
  }
  logoutHandle = () => {
    // console.log("CALLED");
    this.props.Logout();
  };
  render() {
    console.log(this.props.items.lastName);
    let lName = this.props.items.lastName;
    console.log(typeof lName);
    console.log(this.props.items.lastName);
    console.log(typeof this.props.items.lastName);

    if (typeof this.props.items.lastName === "string") {
      return (
        <div>
          <header class="section-header hh">
            <section class="header-main border-bottom sec">
              <div class="container-fluid">
                <div class="row align-items-center box">
                  <div class="col-lg-3 col-sm-4 col-md-4 col-5">
                    {" "}
                    <Link to="/" style={{ textDecoration: "none" }}>
                      <a
                        href="#"
                        class="brand-wrap headANDlogo"
                        data-abc="true"
                      >
                        <div className="slogan">
                          <span class="logo medtitle">MedEasy</span>{" "}
                          <span id="slo">
                            We care for your health{" "}
                            <HeartFill style={{ color: "red" }} />
                          </span>
                        </div>
                        <img
                          src={medeasy}
                          id="meddlogo"
                          className="vert-move"
                          alt="MedEasy"
                        />
                      </a>{" "}
                    </Link>
                  </div>
                  <div class="col-lg-4 col-xl-5 col-sm-8 col-md-4 d-none d-md-block">
                    <form action="#" class="search-wrap">
                      <div class="input-group w-100 sear">
                        {" "}
                        <input
                          type="text"
                          class="form-control search-form "
                          style={{ width: "55%;" }}
                          placeholder="Search"
                        />
                        <div class="input-group-append">
                          {" "}
                          <button
                            class="btn btn-primary search-button"
                            type="submit"
                          >
                            {" "}
                            {/* <i class="fa fa-search"> */}
                            <Search />
                            {/* </i>{" "} */}
                          </button>{" "}
                        </div>
                      </div>
                    </form>
                  </div>

                  <div class="col-lg-5 col-xl-4 col-sm-8 col-md-4 col-7">
                    <div class="d-flex justify-content-end">
                      <Link to="/covid">
                        <button class="btt">
                          {" "}
                          <div class="blink_me">COVID-19 SALES</div>
                        </button>
                      </Link>
                      <div class="dropdown drop">
                        <button
                          class="btn dropdown-toggle dropp"
                          type="button"
                          id="dropdownMenu2"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          More
                        </button>
                        <div
                          class="dropdown-menu"
                          aria-labelledby="dropdownMenu2"
                        >
                          <button class="dropdown-item indrop" type="button">
                            Sell on MedEasy
                          </button>
                          <button class="dropdown-item indrop" type="button">
                            24x7 Customer Care
                          </button>
                          <button class="dropdown-item indrop" type="button">
                            Our Services
                          </button>
                        </div>
                      </div>
                      <Link to="/cart" style={{ textDecoration: "none" }}>
                        <a
                          class="nav-link nav-user-img cartLog"
                          href="#"
                          data-toggle="modal"
                          data-target="#login-modal"
                          data-abc="true"
                        >
                          <span class="login">
                            <Cart />
                            &nbsp; CART
                          </span>
                        </a>
                      </Link>
                      {/* <span class="vl"></span>{" "} */}
                      {/* <Link to="/login/_add" style={{ textDecoration: "none" }}> */}
                      <a
                        class="nav-link nav-user-img cartLog"
                        href="#"
                        data-toggle="modal"
                        data-target="#login-modal"
                        data-abc="true"
                        style={{
                          padding: "0px",
                          margin: "0px",
                          fontSize: "13px",
                        }}
                      >
                        <div class="dropdown drop">
                          <button
                            class="btn dropdown-toggle dropp"
                            type="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            // style={{fontSize:"15px"}}
                          >
                            {/* <span class="login"> */}
                            <PersonCircle />
                            &nbsp;{this.props.items.lastName}
                            {/* </span> */}
                          </button>
                          <div
                            class="dropdown-menu"
                            aria-labelledby="dropdownMenu2"
                          >
                            {/* <Link to="/"> */}
                            <button
                              class="dropdown-item indrop"
                              type="button"
                              onClick={this.logoutHandle}
                            >
                              Logout
                            </button>
                           
                          </div>
                        </div>
                      </a>
                      {/* </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </header>
        </div>
      );
    } else {
      return (
        <header class="section-header hh">
          <section class="header-main border-bottom sec">
            <div class="container-fluid">
              <div class="row align-items-center box">
                <div class="col-lg-3 col-sm-4 col-md-4 col-5">
                  {" "}
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <a href="#" class="brand-wrap headANDlogo" data-abc="true">
                      <div className="slogan">
                        <span class="logo medtitle">MedEasy</span>{" "}
                        <span id="slo">
                          We care for your health{" "}
                          <HeartFill style={{ color: "red" }} />
                        </span>
                      </div>
                      <img
                        src={medeasy}
                        id="meddlogo"
                        className="vert-move"
                        alt="MedEasy"
                      />
                    </a>{" "}
                  </Link>
                </div>
                <div class="col-lg-4 col-xl-5 col-sm-8 col-md-4 d-none d-md-block">
                  <form action="#" class="search-wrap">
                    <div class="input-group w-100 sear">
                      {" "}
                      <input
                        type="text"
                        class="form-control search-form "
                        style={{ width: "55%;" }}
                        placeholder="Search"
                      />
                      <div class="input-group-append">
                        {" "}
                        <button
                          class="btn btn-primary search-button"
                          type="submit"
                        >
                          {" "}
                          {/* <i class="fa fa-search"> */}
                          <Search />
                          {/* </i>{" "} */}
                        </button>{" "}
                      </div>
                    </div>
                  </form>
                </div>

                <div class="col-lg-5 col-xl-4 col-sm-8 col-md-4 col-7">
                  <div class="d-flex justify-content-end">
                    <Link to="/covid">
                      <button class="btt">
                        {" "}
                        <div class="blink_me">COVID-19 SALES</div>
                      </button>
                    </Link>
                    <div class="dropdown drop">
                      <button
                        class="btn dropdown-toggle dropp"
                        type="button"
                        id="dropdownMenu2"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        More
                      </button>
                      <div
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenu2"
                      >
                        <button class="dropdown-item indrop" type="button">
                          Sell on MedEasy
                        </button>
                        <button class="dropdown-item indrop" type="button">
                          24x7 Customer Care
                        </button>
                        <button class="dropdown-item indrop" type="button">
                          Our Services
                        </button>
                      </div>
                    </div>
                    <Link to="/cart" style={{ textDecoration: "none" }}>
                      <a
                        class="nav-link nav-user-img cartLog"
                        href="#"
                        data-toggle="modal"
                        data-target="#login-modal"
                        data-abc="true"
                      >
                        <span class="login">
                          <Cart />
                          &nbsp; CART
                        </span>
                      </a>
                    </Link>
                    {/* <span class="vl"></span>{" "} */}
                    <Link to="/login/_add" style={{ textDecoration: "none" }}>
                      <a
                        class="nav-link nav-user-img cartLog"
                        href="#"
                        data-toggle="modal"
                        data-target="#login-modal"
                        data-abc="true"
                      >
                        {/*{this.props.items.map((item) => {
                      <div>{item.userName}</div>
                    })}*/}
                        <span class="login">
                          <PersonCircle />
                          &nbsp; LOGIN
                        </span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </header>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.loggedUser,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    Logout: () => {
      dispatch(Logout());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);

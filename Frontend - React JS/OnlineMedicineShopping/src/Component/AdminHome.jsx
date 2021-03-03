import { Link } from "react-router-dom";
import React from "react";
import "./adminhome.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Person, PlusCircle, Wallet, Cart } from "react-bootstrap-icons";

class AdminHome extends React.Component {
  render() {
    return (
      <div>
        <div class="sidebar-container sid">
          <div class="sidebar-logo">
            <h3>MedEasy</h3>
          </div>
          <ul class="sidebar-navigation">
            <li class="header" style={{ paddingLeft: "0px" }}>
              <h6>OPERATIONS</h6>
            </li>
            <li>
              <Link to="/viewuser">
                <Person /> Make operations on USERS
              </Link>
            </li>
            <li>
              <Link to="/adminmedview">
                <PlusCircle /> Make operations on MEDICINES
              </Link>
            </li>
            <li>
              <Link to="/adminvieworder">
                <Wallet /> VIEW ORDERS
              </Link>
            </li>
            <li>
              <Link to="/adminviewcart">
                <Cart /> VIEW CARTS
              </Link>
            </li>
          </ul>
        </div>

        <div class="content-container">
          <div class="container-fluid">
            <div class="jumbotron jj">
              <h1>ADMIN PANEL</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
                quibusdam dolores aperiam eaque porro odit maxime mollitia illum
                voluptate. Accusamus placeat alias vitae esse fugit ipsam quas,
                sit nobis quaerat!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
                quas dicta voluptas molestiae repudiandae dolorem. Dolor facere
                optio esse dolores consectetur dolore, velit eaque, repudiandae
                voluptatibus odio animi vel consequuntur!
              </p>
              <p>
                <Link
                  to="/"
                  class="btn btn-lg btn-primary"
                  // href="../../components/#navbar"
                  role="button"
                >
                  VIEW CLIENT-PAGE &raquo;
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminHome;

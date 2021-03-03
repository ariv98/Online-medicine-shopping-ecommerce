import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { EmojiFrown } from "react-bootstrap-icons";
class CovidSales extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div style={{ margin: "80px 80px" }}>
          <h1>
            NO STOCKS AVAILABLE!!! We are sorry for the inconvenience &nbsp;
            <EmojiFrown/>
          </h1>
          <br>
          </br>
          <p>
            Due to this pandemic situation the hot sales of COVID items are
            totally OUT OF STOCK right now.
          </p>
          <p>
            We are looking forward to solve this situation. Meanwhile you can
            purchase other items <Link to="/">here</Link>
          </p>
        </div>
        <Footer />
      </div>
    );
  }
}

export default CovidSales;

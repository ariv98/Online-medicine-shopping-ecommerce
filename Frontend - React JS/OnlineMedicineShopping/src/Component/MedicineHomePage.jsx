import React, { Component } from "react";
import MedicineService from "../services/MedicineService";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "../CustomCSS/homepage.css";
import { HeartFill, HeartHalf } from "react-bootstrap-icons";
import viewUser from "./UserComponent/viewUser";
import ReactPaginate from "react-paginate";
import "./pagination.css"
export default class MedicineHomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      medicines: [],
      offset: 0,
      tableData: [],
      orgtableData: [],
      perPage: 10,
      currentPage: 0,
    };
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState(
      {
        currentPage: selectedPage,
        offset: offset,
      },
      () => {
        this.loadMoreData();
      }
    );
  };

  loadMoreData() {
    const data = this.state.orgtableData;

    const slice = data.slice(
      this.state.offset,
      this.state.offset + this.state.perPage
    );
    this.setState({
      pageCount: Math.ceil(data.length / this.state.perPage),
      tableData: slice,
    });
  }

  viewMedicine(id) {
    console.log(id);
    this.props.history.push(`/show-medicine/${id}`);
  }

  componentDidMount() {
    document.title =
      "Welcome to Medicart.com || You'll get all types of medicine here";
    MedicineService.getMedicines().then((res) => {
      this.setState({ medicines: res.data });

      var tdata = res.data;
      console.log("data-->" + JSON.stringify(tdata));
      var slice = tdata.slice(
        this.state.offset,
        this.state.offset + this.state.perPage
      );
      this.setState({
        pageCount: Math.ceil(tdata.length / this.state.perPage),
        orgtableData: tdata,
        tableData: slice,
      });
    });
  }

  render() {
    return (
      <div>
        <NavBar />
        <h1>
          <viewUser />
        </h1>
        <div class="heading">
          <header class="text-center mb-5">
            <h1 class="display-4 font-weight-bold">
              Welcome to your online medicine store
            </h1>
            <p class="font-italic text-muted mb-0">
              An awesome and easy place to buy your medicines with ease.
            </p>
            <p class="font-italic text-muted">
              Cared by{" "}
              <a href="https://bootstrapious.com" class="text-muted">
                <u>
                  MedEasy family <HeartFill style={{ color: "red" }} />
                </u>
              </a>
            </p>
          </header>
          <div className="txt">
            <h2 class="font-weight-bold mb-2">From the Best Sellers</h2>
            <p class="font-italic text-muted mb-9 ">
              We offer you the best selling products of this pandemic situation.
            </p>
          </div>
        </div>
        <div className="homecontainer container-fluid home">
          <br />
          <div className="row container-fluid col-12 back">
            {this.state.tableData.map((medicine) => (
              <div
                key={medicine.id}
                className="col-5 col-sm-5 col-offset-2 col-md-offset-2 each-card"
              >
                <div className="whole">
                  <button
                    className="btn hover-zoom "
                    onClick={() => this.viewMedicine(medicine.medicineId)}
                  >
                    <center>
                      <img src={medicine.imageDir} className="img" />
                    </center>
                    <div></div>
                  </button>
                  <div className="medtag">
                    <h5>
                      <b> {medicine.medicineName}</b>
                      <br />
                    </h5>
                    <strong style={{ color: "red" }}>
                      <b>Price : ₹ {medicine.medicinePrice} </b>
                    </strong>
                    <strong>
                      <b>
                        Actual Price:{" "}
                        <strike>
                          {" "}
                          ₹{" "}
                          {medicine.medicinePrice +
                            medicine.medicinePrice * 0.1}
                        </strike>
                      </b>
                    </strong>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="page" style={{textAlign:"center"}}> */}
          <ReactPaginate
            className="page"
            previousLabel={"prev"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={this.state.pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
        </div>
        {/* </div> */}
        <Footer />
      </div>
    );
  }
}

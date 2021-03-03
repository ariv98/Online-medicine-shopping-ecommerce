import React, { Component } from "react";
import MedicineService from "../../services/MedicineService";
import ReactPaginate from "react-paginate";
import "../../Component/pagination.css"
import "./med.css"

class ListMedicineComponent extends Component {
  constructor(props) {
    // alert(1)
    super(props);

    this.state = {
      medicines: [],
      offset: 0,
      tableData: [],
      orgtableData: [],
      perPage: 5,
      currentPage: 0,
    };
    this.handlePageClick = this.handlePageClick.bind(this);
    this.addMedicine = this.addMedicine.bind(this);
    this.editMedicine = this.editMedicine.bind(this);
    this.deleteMedicine = this.deleteMedicine.bind(this);
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
  deleteMedicine(id) {
    console.log(id);
    MedicineService.deleteMedicine(id).then((res) => {
      this.setState({
        medicines: this.state.medicines.filter(
          (medicine) => medicine.medicineId !== id
        ),
      });
    });
    window.location.reload();
  }
  viewMedicine(id) {
    this.props.history.push(`/view-medicine/${id}`);
  }
  editMedicine(id) {
    this.props.history.push(`/add-medicine/${id}`);
  }

  componentDidMount() {
    MedicineService.getMedicines().then((res) => {
      this.setState({ medicines: res.data });
      // console.log(this.state.medicines[0])
      var data = res.data;

      var slice = data.slice(
        this.state.offset,
        this.state.offset + this.state.perPage
      );

      this.setState({
        pageCount: Math.ceil(data.length / this.state.perPage),
        orgtableData: res.data,
        tableData: slice,
      });
    });
  }

  addMedicine() {
    this.props.history.push("/add-medicine/_add");
  }

  render() {
    return (
      <div class="lis">
        <h2 className="text-center">Medicines List</h2>
        <div className="row">
          &nbsp;&nbsp;{" "}
          <button className="btn btn-primary" onClick={this.addMedicine}>
            {" "}
            Add Medicine
          </button>
        </div>
        <br></br>
        <div className="k">
        <div className="row rt">
          <table className="table table-striped table-bordered tb">
            <thead>
              <tr>
                <th> Medicine Name</th>
                <th> Medicine Category</th>
                <th> Medicine Description</th>
                <th> Medicine Price</th>
                <th> Medicine Manufacturer Name</th>
                <th> Medicine Manufacturer Date</th>
                <th> Medicine Expiry Date</th>
                <th> Medicine Quantity </th>
                <th> ImageDir </th>
                <th> Actions</th>
              </tr>
            </thead>
            <tbody className="tbbo">
              {this.state.tableData.map((medicine) => (
                <tr key={medicine.medicineId}>
                  <td> {medicine.medicineName} </td>
                  <td> {medicine.medicineCategory} </td>
                  <td> {medicine.medicineDescription} </td>
                  <td> {medicine.medicinePrice} </td>
                  <td> {medicine.medicineManfacturerName} </td>
                  <td> {medicine.medicineManufacturerDate} </td>
                  <td> {medicine.medicineExpiryDate} </td>
                  <td> {medicine.medicineQuantity} </td>
                  <td>
                    {" "}
                    <img src={medicine.imageDir} width="290px" />{" "}
                  </td>
                  <td>
                    {/* <button
                      style={{ marginLeft: "10px", width: "90px" }}
                      onClick={() => this.editMedicine(medicine.medicineId)}
                      className="btn btn-info"
                    >
                      Update
                    </button> */}
                    <br></br>
                    <button
                      style={{ marginLeft: "10px", width: "90px" }}
                      onClick={() => this.deleteMedicine(medicine.medicineId)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                    <br></br>
                    <button
                      style={{ marginLeft: "10px", width: "90px" }}
                      onClick={() => this.viewMedicine(medicine.medicineId)}
                      className="btn btn-info"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <ReactPaginate
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
        </div>
      </div>
    );
  }
}

export default ListMedicineComponent;

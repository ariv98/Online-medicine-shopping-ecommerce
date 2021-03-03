import React, { Component } from "react";
import MedicineService from "../../services/MedicineService";

class ViewMedicineComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      medicine: {},
    };
  }

  componentDidMount() {
    // console.log(this.props.match.params.medicineId)
    // console.log(this.state.id)
    MedicineService.getMedicineById(this.state.id).then((res) => {
      this.setState({ medicine: res.data });
    });
  }

  render() {
    return (
      <div >
        <br></br>
        <div className="card col-md-6 offset-md-3">
          <h3 className="text-center"> View Medicine Details</h3>
          <div className="card-body">
            <div className="row">
              <label> Medicine Name: </label>
              <div> {this.state.medicine.medicineName}</div>
            </div>
            <div className="row">
              <label> Medicine Category: </label>
              <div> {this.state.medicine.medicineCategory}</div>
            </div>
            <div className="row">
              <label> Medicine Description: </label>
              <div> {this.state.medicine.medicineDescription}</div>
            </div>
            <div className="row">
              <label> Medicine Price: </label>
              <div> {this.state.medicine.medicinePrice}</div>
            </div>
            <div className="row">
              <label> Medicine Manufacturer Name: </label>
              <div> {this.state.medicine.medicineManufacturerName}</div>
            </div>
            <div className="row">
              <label> Medicine Manufacturer Date: </label>
              <div> {this.state.medicine.medicineManufacturerDate}</div>
            </div>
            <div className="row">
              <label> Medicine Expiry Date: </label>
              <div> {this.state.medicine.medicineExpiryDate}</div>
            </div>

            <div className="row">
              <label> Medicine Quantity: </label>
              <div> {this.state.medicine.medicineQuantity}</div>
            </div>
            <div className="row">
              <label> Image Dir: </label>
              <div>
                <img src={this.state.medicine.imageDir} width="300px" />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewMedicineComponent;

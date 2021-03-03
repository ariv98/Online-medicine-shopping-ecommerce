import React, { Component } from "react";
import MedicineService from "../../services/MedicineService";

class CreateMedicineComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      medicineName: "",
      medicineCategory: "",
      medicineDescription: "",
      medicinePrice: "",
      medicineManufacturerName: "",
      medicineManufacturerDate: "",
      medicineExpiryDate: "",
      medicineQuantity: "",
      imageDir: "",
    };
    this.changeMedicineNameHandler = this.changeMedicineNameHandler.bind(this);
    this.changeMedicineCategoryHandler = this.changeMedicineCategoryHandler.bind(
      this
    );
    this.changeMedicineDescriptionHandler = this.changeMedicineDescriptionHandler.bind(
      this
    );
    this.changeMedicinePriceHandler = this.changeMedicinePriceHandler.bind(
      this
    );
    this.changeMedicineManufacturerNameHandler = this.changeMedicineManufacturerNameHandler.bind(
      this
    );
    this.changeMedicineManufacturerDateHandler = this.changeMedicineManufacturerDateHandler.bind(
      this
    );
    this.changeMedicineExpiryDateHandler = this.changeMedicineExpiryDateHandler.bind(
      this
    );
    this.changeMedicineQuantityHandler = this.changeMedicineQuantityHandler.bind(
      this
    );
    this.changeImageDirHandler = this.changeImageDirHandler.bind(this);
    this.saveMedicine = this.saveMedicine.bind(this);
  }

  componentDidMount() {
    if (this.state.id === "_add") {
      return;
    } else {
      MedicineService.getMedicineById(this.state.id).then((res) => {
        let medicine = res.data;
        this.setState({
          medicineName: medicine.medicineName,
          medicineCategory: medicine.medicineCategory,
          medicineDescription: medicine.medicineDescription,
          medicinePrice: medicine.medicinePrice,
          medicineManufacturerName: medicine.medicineManufacturerName,
          medicineManufacturerDate: medicine.medicineManufacturerDate,
          medicineExpiryDate: medicine.medicineExpiryDate,
          medicineQuantity: medicine.medicineQuantity,
          imageDir: medicine.imageDir,
        });
      });
    }
  }
  saveMedicine = (e) => {
    e.preventDefault();
    let medicine = {
      medicineName: this.state.medicineName,
      medicineCategory: this.state.medicineCategory,
      medicineDescription: this.state.medicineDescription,
      medicinePrice: this.state.medicinePrice,
      medicineManufacturerName: this.state.medicineManufacturerName,
      medicineManufacturerDate: this.state.medicineManufacturerDate,
      medicineExpiryDate: this.state.medicineExpiryDate,
      medicineQuantity: this.state.medicineQuantity,
      imageDir: this.state.imageDir,
    };

    if (this.state.id === "_add") {
      console.log(medicine);
      MedicineService.createMedicine(medicine).then((res) => {
        this.props.history.push("/adminmedview");
      });
    } else {
      MedicineService.updateMedicine(medicine, this.state.id).then((res) => {
        this.props.history.push("/adminmedview");
      });
    }
  };

  changeMedicineNameHandler = (event) => {
    this.setState({ medicineName: event.target.value });
  };

  changeMedicineCategoryHandler = (event) => {
    this.setState({ medicineCategory: event.target.value });
  };

  changeMedicineDescriptionHandler = (event) => {
    this.setState({ medicineDescription: event.target.value });
  };

  changeMedicinePriceHandler = (event) => {
    this.setState({ medicinePrice: event.target.value });
  };

  changeMedicineManufacturerNameHandler = (event) => {
    this.setState({ medicineManufacturerName: event.target.value });
  };
  changeMedicineManufacturerDateHandler = (event) => {
    this.setState({ medicineManufacturerDate: event.target.value });
  };
  changeMedicineExpiryDateHandler = (event) => {
    this.setState({ medicineExpiryDate: event.target.value });
  };
  changeMedicineQuantityHandler = (event) => {
    this.setState({ medicineQuantity: event.target.value });
  };
  changeImageDirHandler = (event) => {
    this.setState({ imageDir: event.target.value });
  };
  cancel() {
    this.props.history.push("/adminmedview");
  }

  getTitle() {
    if (this.state.id === "_add") {
      return <h3 className="text-center">Add Medicine</h3>;
    } else {
      return <h3 className="text-center">Update Medicine</h3>;
    }
  }
  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              {this.getTitle()}
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> Medicine Name: </label>
                    <input
                      placeholder="Medicine Name"
                      name="medicineName"
                      className="form-control"
                      value={this.state.medicineName}
                      onChange={this.changeMedicineNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Medicine Category: </label>
                    <input
                      placeholder="Medicine Category"
                      name="medicineCategory"
                      className="form-control"
                      value={this.state.medicineCategory}
                      onChange={this.changeMedicineCategoryHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Medicine Description: </label>
                    <input
                      placeholder="Medicine Description"
                      name="medicineDescription"
                      className="form-control"
                      value={this.state.medicineDescription}
                      onChange={this.changeMedicineDescriptionHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Medicine Price: </label>
                    <input
                      placeholder="Medicine Price"
                      name="medicinePrice"
                      className="form-control"
                      value={this.state.medicinePrice}
                      onChange={this.changeMedicinePriceHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Medicine Manufacturer Name: </label>
                    <input
                      placeholder="Medicine Manufacturer Name"
                      name="medicineManufacturerName"
                      className="form-control"
                      value={this.state.medicineManufacturerName}
                      onChange={this.changeMedicineManufacturerNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Medicine Manufacturer Date: </label>
                    <input
                      placeholder="Medicine Manufacturer Date"
                      name="medicineManufacturerDate"
                      className="form-control"
                      value={this.state.medicineManufacturerDate}
                      onChange={this.changeMedicineManufacturerDateHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Medicine Expiry Date: </label>
                    <input
                      placeholder="Medicine Expiry Date"
                      name="medicineExpiryDate"
                      className="form-control"
                      value={this.state.medicineExpiryDate}
                      onChange={this.changeMedicineExpiryDateHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Medicine Quantity: </label>
                    <input
                      placeholder="Medicine Quantity"
                      name="medicineQuantity"
                      className="form-control"
                      value={this.state.medicineQuantity}
                      onChange={this.changeMedicineQuantityHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Image Dir: </label>
                    <input
                      placeholder="Image Dir"
                      name="imageDir"
                      className="form-control"
                      value={this.state.imageDir}
                      onChange={this.changeImageDirHandler}
                    />
                  </div>

                  <button
                    className="btn btn-success"
                    onClick={this.saveMedicine}
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

export default CreateMedicineComponent;

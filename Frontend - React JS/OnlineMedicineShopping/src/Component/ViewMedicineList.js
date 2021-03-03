import React, { Component } from "react";
import MedicineService from "../services/MedicineService";
// import Header from './Header';
import { connect } from "react-redux";
import { addToCart } from "./Cart/actions/cartActions";
import CartService from "../services/CartService";
import OrderService from "../services/OrderService";
import OrderMedicineService from "../services/OrderMedicineService";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Eye, Heart } from "react-bootstrap-icons";
import "./medlist.css"

let medicinedata = {};
class ViewMedicineList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      medicine: {},
    };
  }

  componentDidMount() {
    MedicineService.getMedicineById(this.state.id).then((res) => {
      this.setState({ medicine: res.data });
      //console.log(res.data);
      document.title = res.data.medicineName;
      medicinedata = this.state.medicine;
    });
  }

  buyNowHandle = (medicine) => {
    console.log("called", medicine);
    let cart = {
      quantity: 1,
      costPerPrice: medicine.medicinePrice,
      medicineList: {
        medicineId: medicine.medicineId,
      },
    };
    CartService.createCart(cart);
    console.log("Saved to Cart");
    let orderobj = {
      orderShippingAddress: "ABC nagar SIPCOT CHENNAI 600021",
      user: {
        userId: 2,
      },
      cart: {
        cartId: 35,
      },
    };
    OrderService.addToOrder(orderobj);
    console.log("saved to Order");

    let orderMedicineObj = {
      order: {
        orderId: 1,
      },
      price: medicine.medicinePrice,
      medicineList: {
        medicineId: medicine.medicineId,
      },
      quantity: 1,
    };
    OrderMedicineService.addToOrderMedicine(orderMedicineObj);
    console.log("Saved to OrderMedicineService");
    this.props.history.push("/makepayment");
  };

  addToCartClick = (medicine) => {
    alert(medicine.medicineName + " : is added to cart");
    this.props.addToCart(medicine);
  };

  render() {
    const clrchange = {
      backgroundColor: "red",
    };
    return (
      <div className="backgroun">
        <NavBar />
        <div className="container-fluid">
          <br />

          <div className="row" style={{ marginTop: "100px" }}>
            <div className="col-5  float-left imgg">
              <div className="wishlist">
                <button className="btn" onClick={(e) => {}}>
                  <Heart onClick={clrchange} />
                </button>
              </div>
              <center>
                <img
                  src={this.state.medicine.imageDir}
                  id="medimg"
                  // width="100%"
                  // height="100%"
                  data-zoom-image={this.state.medicine.imageDir}
                  className="ig"
                />
              </center>
            </div>
            <div className="col-6 order-2 mr-5 txtt">
              <h1>{this.state.medicine.medicineName}</h1>
              <br />
              <div>
                <b>Medicine Category : </b>
                <strong> {this.state.medicine.medicineCategory}</strong>
              </div>
              <br />
              <div>
                <b>Manufactured By :</b>
                <strong>{this.state.medicine.medicineManfacturerName}</strong>
              </div>
              <br />
              <div>
                <b>Medicine Description :</b>
                <p>{this.state.medicine.medicineDescription}</p>
              </div>
              <div>
                <strong>
                  <b>Price : ₹ {this.state.medicine.medicinePrice} </b>
                </strong>
                <br />
                <strong>
                  <b>
                    Actual Price:{" "}
                    <strike>
                      {" "}
                      ₹{" "}
                      {this.state.medicine.medicinePrice +
                        this.state.medicine.medicinePrice * 0.1}
                    </strike>
                  </b>
                </strong>
              </div>
              <br />
              <br />
              <button
                className="btn btn-primary"
                onClick={() => {
                  this.addToCartClick(this.state.medicine);
                }}
              >
                Add to Cart
              </button>
              &nbsp;&nbsp;
              <button
                className="btn btn-danger"
                onClick={() => this.buyNowHandle(this.state.medicine)}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: medicinedata,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (medicine) => {
      dispatch(addToCart(medicine));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewMedicineList);

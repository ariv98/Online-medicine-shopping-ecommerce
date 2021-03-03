import React, { Component } from "react";
import { connect } from "react-redux";
import CartService from "../../services/CartService";
import OrderService from "../../services/OrderService";
import { clearCart, removeItem } from "./actions/cartActions";
import OrderMedicineService from "../../services/OrderMedicineService";
import NavBar from "../NavBar";
import Footer from "../Footer";
import { XCircle } from "react-bootstrap-icons";
import "./cart.css";
class CartComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: 0,
      costPerPrice: 0,
      medicineList: [],
      orderShippingAddress: "",
      user: {},
      cart: {},
      price: 0,
    };
    this.storeToCart = this.storeToCart.bind(this);
  }

  componentDidMount() {
    document.title = "CART";
  }

  storeToCart = (e) => {
    //alert("add to cart called")
    e.preventDefault();
    let cart = {
      quantity: this.props.totalqty,
      costPerPrice: this.props.totalPrice,
      medicineList: this.props.itemIds,
      user: { userId: 9 },
    };
    //console.log("cart items "+JSON.stringify(cart))
    //alert(JSON.stringify(cart))
    /* 
        EmployeeService.createEmployee(employee).then(res =>{
            this.props.history.push('/employees'); */
    CartService.createCart(cart);
    alert("THANKS FOR SHOPPING");

    let orderobj = {
      orderShippingAddress: "ABC nagar SIPCOT CHENNAI 600021",
      user: {
        userId: 9,
      },
      cart: {
        cartId: 1,
      },
    };

    OrderService.addToOrder(orderobj);
    alert("Order Placed");
    console.log("OrderPlaced");

    let orderMedicineObj = {
      order: {
        orderId: 1,
      },
      price: this.props.totalPrice,
      medicineList: this.props.itemIds,
      quantity: this.props.totalqty,
    };
    OrderMedicineService.addToOrderMedicine(orderMedicineObj);
    this.props.clearCart();
    this.props.history.push("/makepayment");
  };

  clearCartHandle = () => {
    console.log("CALLED");
    this.props.clearCart();
  };

  removeItemHandle = (medicine) => {
    //console.log(medicine)
    this.props.removeItem(medicine);
  };

  render() {
    return (
      <div>
        <NavBar />
        <div
          className="container cart-container"
          style={{ marginTop: "100px" }}
        >
          <div>
            <h3>
              Total Items in cart: <strong>{this.props.totalqty}</strong>
            </h3>
          </div>

          {this.props.items.map((medicine) => (
            // eslint-disable-next-line

            <div key={medicine.medicineId} className="brd">
              <div
                className="row rbr"
                style={{
                  borderRadius: "30px",
                  backgroundColor: "cyan",
                  width: "900px",
                  marginLeft: "120px",
                }}
              >
                <div className="col-5 col-md-5  float-left">
                  <center>
                    <img src={medicine.imageDir} className="cmimg" />
                  </center>
                </div>

                <div className="col-5 col-md-5 justify-content-center btnn">
                  <button
                    className="xbtn"
                    onClick={() => this.removeItemHandle(medicine)}
                    style={{
                      position: "relative",
                      margin: "0px",
                      border: "0px",
                      background: "none",
                      marginLeft: "130%",
                    }}
                  >
                    <h3>
                      <XCircle />
                    </h3>
                  </button>
                  <h2>
                    <b> {medicine.medicineName}</b>
                  </h2>
                  <br />
                  <strong>
                    <b>Price : ₹ {medicine.medicinePrice} </b>
                  </strong>
                  <br />
                  <strong>
                    <b>
                      Actual Price:{" "}
                      <strike>
                        {" "}
                        ₹{" "}
                        {medicine.medicinePrice + medicine.medicinePrice * 0.1}
                      </strike>
                    </b>
                  </strong>
                </div>
              </div>

              <br />
              <br />
            </div>
          ))}
          <h3>Total Cart Price </h3>
          <br />
          <div>
            <input
              type="text"
              className="inpt"
              style={{
                width: "100%",
                heigth: "30px",
                fontSize: "25px",
                textAlign: "center",
                fontWeight: "bold",
              }}
              value={this.props.totalPrice}
              readOnly
            />
          </div>
        </div>
        <br />
        <center>
          <div className="btnn">
            <button className="btn btn-success" onClick={this.storeToCart}>
              CHECK OUT
            </button>
            <button
              className="btn btn-danger"
              style={{ marginLeft: "20px" }}
              onClick={() => {
                this.clearCartHandle();
              }}
            >
              Clear Cart
            </button>
          </div>
        </center>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.addedMedicines,
    itemIds: state.medicineIds,
    totalqty: state.totalItems,
    totalPrice: state.totalPrice,
    //addedItems: state.addedItems
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    clearCart: () => {
      dispatch(clearCart());
    },
    removeItem: (medicine) => {
      dispatch(removeItem(medicine));
    },
    // clearCart: ()=> {dispatch(clearCart())}
    //  removeItem: (id)=>{dispatch(removeItem(id))},
    //addQuantity: (id)=>{dispatch(addQuantity(id))},
    //subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartComponent);

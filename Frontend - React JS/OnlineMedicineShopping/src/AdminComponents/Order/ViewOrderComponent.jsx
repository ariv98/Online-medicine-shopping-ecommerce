import React, { Component } from "react";
import OrderService from "../../services/OrderService";

class viewOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      order: {},
    };
  }

  componentDidMount() {
    // console.log(this.props.match.params.medicineId)
    // console.log(this.state.id)
    OrderService.getOrderById(this.state.id).then((res) => {
      this.setState({ order: res.data });
    });
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="card col-md-6 offset-md-3">
          <h3 className="text-center"> View Order Details</h3>
          <div className="card-body">
            <div className="row">
              <label> User: </label>
              <div> {this.state.order.user}</div>
            </div>
            <div className="row">
              <label> Cart: </label>
              <div> {this.state.order.cart}</div>
            </div>
            <div className="row">
              <label> OrderDate: </label>
              <div> {this.state.order.orderDate}</div>
            </div>

            <div className="row">
              <label> Shipping Address: </label>
              <div> {this.state.order.orderShippingAddress}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default viewOrder;

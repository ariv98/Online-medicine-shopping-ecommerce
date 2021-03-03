import React, { Component } from "react";
import CartService from "../../services/CartService";
import ReactPaginate from "react-paginate";

class ListAllCartComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [
        {
          user: {
            userId: "999999",
            emailId: "medeasybot@medeasybot.com",
          },
          medicineList: [
            {
              medicineName: "",
              medicinePrice: 0,
            },
          ],
          quantity: 0,
          costPerPrice: 0.0,
        },
      ],
      offset: 0,
      tableData: [],
      orgtableData: [],
      perPage: 5,
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

  componentDidMount() {
    CartService.getAllCarts().then((res) => {
      this.setState({ cart: res.data });
      console.log(res.data);
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

  render() {
    return (
      <div>
        <h2 className="text-center">Cart List</h2>
        <div></div>
        <br></br>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th> Cart ID</th>
                <th> User ID & Email</th>
                <th> Medicine List</th>
                <th> Quantity </th>
                <th> Total Price </th>
              </tr>
            </thead>
            <tbody>
              {this.state.cart
                .filter((items) => items.user !== null && items)
                .map((cart) => (
                  <tr key={cart.cartId}>
                    <td>{cart.cartId}</td>
                    <td>
                      {" "}
                      {
                        <ul key={cart.user.userId}>
                          <li style={{ listStyle: "none" }}>
                            {cart.user.userId}
                          </li>
                          <li style={{ listStyle: "none" }}>
                            {cart.user.emailId}
                          </li>
                        </ul>
                      }
                    </td>
                    <td>
                      {" "}
                      {cart.medicineList
                        .filter(
                          (list) =>
                            list.medicineName != null &&
                            list.medicinePrice != null
                        )
                        .map((medlist) => (
                          <ul key={cart.medicineList.medicineId}>
                            <li style={{ listStyle: "none" }}>
                              MEDICINE NAME :{" "}
                              <strong>{medlist.medicineName}</strong>
                            </li>
                            <li style={{ listStyle: "none" }}>
                              Medicine Price : ₹
                              <strong> {medlist.medicinePrice} </strong>
                            </li>
                          </ul>
                        ))}
                    </td>
                    <td> {cart.quantity}</td>
                    <td> {cart.costPerPrice}</td>
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
    );
  }
}

export default ListAllCartComponent;

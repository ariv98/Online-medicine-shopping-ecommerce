import React, { Component } from 'react'
import OrderService from '../../services/OrderService'
import ReactPaginate from "react-paginate";
import "../../Component/pagination.css"

class ListOrderComponent extends Component {
    constructor(props) {
        // alert(1)
        super(props)

        this.state = {
            orders: [],
            offset: 0,
            tableData: [],
            orgtableData: [],
            perPage: 5,
            currentPage: 0,
        };
        this.handlePageClick = this.handlePageClick.bind(this);
        this.addOrder = this.addOrder.bind(this);
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

    viewOrder(id){
        this.props.history.push(`/view-order/${id}`);
    }
  
    componentDidMount(){
        OrderService.getOrders().then((res) => {
            this.setState({ orders: res.data});

            // console.log(this.state.orders[0])
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

    addOrder(){
        this.props.history.push('/add-order/_add');
    }

    render() {
        return (
            <div class="lis1">
                 <h2 className="text-center">Orders List</h2>
                 <div className = "row">
                 &nbsp;&nbsp; <button className="btn btn-primary" onClick={this.addOrder}> Add Order</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> User </th>
                                    <th> Order Date </th>
                                    <th> Cart </th>
                                    <th> Shipping Address </th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.orders.map(
                                        order => 
                                        <tr key = {order.orderId}>
                                             <td> { order.user} </td>
                                             <td> { order.cart} </td>
                                             <td> { order.orderDate} </td>
                                             <td> { order.shippingAddress} </td>
                                             <td>
                                                 
                                                 <button style={{marginLeft: "10px",width:"90px"}} onClick={ () => this.viewOrder(order.orderId)} className="btn btn-info">View Order</button>
                                             </td>
                                        </tr>
                                    )
                                }
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
        )
    }
}

export default ListOrderComponent

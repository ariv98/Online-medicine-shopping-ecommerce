import React, { Component } from 'react'
import OrderService from '../../services/OrderService';

class CreateOrderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            user: '',
            cart: '',
            orderDate: '',
            shippingAddress: '',
        }
        this.changeUserHandler = this.changeUserHandler.bind(this);
        this.changeCartHandler = this.changeCartHandler.bind(this);
        this.changeOrderDateHandler = this.changeOrderDateHandler.bind(this);
        this.changeShippingAddressHandler =  this.changeShippingAddressHandler.bind(this);
    
        this.saveOrder = this.saveOrder.bind(this);
    }

    // step 3
    componentDidMount(){
        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            OrderService.getOrderById(this.state.id).then( (res) =>{
                let order = res.data;
                this.setState({user: order.user,
                    cart: order.cart,
                    orderDate: order.order,
                    shippingAddress: order.shippingAddress,
                   
                });
            });
        }        
    }
    saveOrder = (e) => {
        e.preventDefault();
        let order = {user: this.state.user,cart: this.state.cart, orderDate: this.state.orderDate, shippingAddress: this.state.shippingAddress};
        // console.log('medicine => ' + JSON.stringify(medicine));

        // step 5
        if(this.state.id === '_add'){
            console.log(order)
            OrderService.createOrder(order).then(res =>{
                this.props.history.push('/order');
            });
        }//else{
            //MedicineService.updateMedicine(medicine, this.state.id).then( res => {
              //  this.props.history.push('/medicine');
           // });
       // }
    }
    
    changeUserHandler= (event) => {
        this.setState({user: event.target.value});
    }

    changeCartHandler= (event) => {
        this.setState({cart: event.target.value});
    }
    changeOrderDateHandler= (event) => {
        this.setState({orderDate: event.target.value});
    }

    changeShippingAddressHandler= (event) => {
        this.setState({shippingAddress: event.target.value});
    }

    cancel(){
        this.props.history.push('/order');
    }

    getTitle(){
        if(this.state.id === '_add')
        {
            return <h3 className="text-center">Add Order</h3>
        }
      //  else
       // {
         //   return <h3 className="text-center">Update Medicine</h3>
       // }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> User: </label>
                                            <input placeholder="User" name="user" className="form-control" 
                                                value={this.state.user} onChange={this.changeUserHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Cart: </label>
                                            <input placeholder="Cart" name="cart" className="form-control" 
                                                value={this.state.cart} onChange={this.changeCartHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Order Date: </label>
                                            <input placeholder="Order Date" name="orderDate" className="form-control" 
                                                value={this.state.orderDate} onChange={this.changeOrderDateHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Shipping Address: </label>
                                            <input placeholder="Shipping Address" name="shippingAddress" className="form-control" 
                                                value={this.state.shippingAddress} onChange={this.changeShippingAddressHandler}/>
                                        </div>
                                      
                                        <button className="btn btn-success" onClick={this.saveOrder}>Save Order</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel Order</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateOrderComponent

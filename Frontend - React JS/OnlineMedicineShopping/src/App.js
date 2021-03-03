// import "./App.css";
// import NavBar from "./Component/NavBar";
import SignUpComponent from "./Component/SignUpComponent";
import LoginComponent from "./Component/LoginComponent";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CartComponent from "./Component/Cart/CartComponent";
import ListMedicineComponent from "./AdminComponents/Medicine/ListMedicineComponent";
import AdminHome from "./Component/AdminHome";
import ListOrderComponent from "./AdminComponents/Order/ListOrderComponent";
import ListUserComponent from "./AdminComponents/User/ListUserComponent";
import CreateUserComponent from "./AdminComponents/User/CreateUserComponent";
import CreateMedicineComponent from "./AdminComponents/Medicine/CreateMedicineComponent";
import CreateOrderComponent from "./AdminComponents/Order/CreateOrderComponent";
import ViewMedicineComponent from "./AdminComponents/Medicine/ViewMedicineComponent";
import ViewUserComponent from "./AdminComponents/User/ViewUserComponent";
import ViewOrderComponent from "./AdminComponents/Order/ViewOrderComponent";
import UpdateMedicineComponent from "./AdminComponents/Medicine/UpdateMedicineComponent";
import UpdateUserComponent from "./AdminComponents/User/UpdateUserComponent";
// import UpdateOrderComponent from "./AdminComponents/Order/UpdateOrderComponent";
import ViewMedicineList from "./Component/ViewMedicineList";

import MedicineHomePage from "./Component/MedicineHomePage";

import ErrorPage from "./ErrorPage";

import Payment from "./Component/Payment";
import ListAllCartComponent from "./AdminComponents/Cart/ListAllCartComponent";
import CovidSales from "./Component/CovidSales";
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/adminhome" component={AdminHome}></Route>
            <Route path="/viewuser" component={ListUserComponent}></Route>

            <Route
              path="/adminmedview"
              component={ListMedicineComponent}
            ></Route>
            <Route
              path="/adminviewcart"
              component={ListAllCartComponent}
            ></Route>
            <Route
              path="/adminvieworder"
              component={ListOrderComponent}
            ></Route>
            <Route
              path="/add-user/_add/:user"
              component={CreateUserComponent}
            ></Route>
            <Route
              path="/add-medicine/:id"
              component={CreateMedicineComponent}
            ></Route>
            <Route
              path="/add-order/_add"
              component={CreateOrderComponent}
            ></Route>

            <Route path="/view-user/:id" component={ViewUserComponent}></Route>
            <Route
              path="/view-medicine/:id"
              component={ViewMedicineComponent}
            ></Route>
            <Route
              path="/view-order/:id"
              component={ViewOrderComponent}
            ></Route>
            <Route path="/add-user/:id" component={UpdateUserComponent}></Route>
            <Route
              path="/add-medicine/:id"
              component={UpdateMedicineComponent}
            ></Route>
            <Route
              path="/show-medicine/:id"
              component={ViewMedicineList}
            ></Route>
            {/* <Route
              path="/add-ordr/:id"
              component={UpdateOrderComponent}
            ></Route> */}
            <Route path="/makepayment" component={Payment}></Route>
            <Route path="/cart" component={CartComponent}></Route>

            {/* <Route exact path="/" component={NavBar}></Route> */}
            <Route path="/" exact component={MedicineHomePage}></Route>
            <Route path="/home" component={MedicineHomePage}></Route>
            <Route path="/login/:emailId" component={LoginComponent} />
            <Route path="/sign-up/:userId" component={SignUpComponent}></Route>
            <Route path="/covid" component={CovidSales}></Route>
            <Route component={ErrorPage}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

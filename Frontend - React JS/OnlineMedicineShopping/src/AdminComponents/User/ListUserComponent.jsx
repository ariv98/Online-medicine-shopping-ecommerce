import React, { Component } from "react";
import UserService from "../../services/UserService";
import ReactPaginate from "react-paginate";

class ListUserComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      offset: 0,
      tableData: [],
      orgtableData: [],
      perPage: 5,
      currentPage: 0,
    };
    this.handlePageClick = this.handlePageClick.bind(this);
    this.addUser = this.addUser.bind(this);
    this.editUser = this.editUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
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

  deleteUser(id) {
    UserService.deleteUser(id).then((res) => {
      this.setState({
        User: this.state.user.filter((User) => User.userId !== id),
      });
    });
    window.location.reload();
  }
  viewUser(id) {
    this.props.history.push(`/view-user/${id}`);
  }
  editUser(id) {
    this.props.history.push(`/add-user/${id}`);
  }

  componentDidMount() {
    UserService.getUsers().then((res) => {
      this.setState({ user: res.data });
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

  addUser() {
    this.props.history.push("/add-user/_add");
  }

  render() {
    return (
      <div>
        <h2 className="text-center">User List</h2>
        <div className="row">
          {/* <button className="btn btn-primary" onClick={this.addUser}>
            {" "}
            Add User
          </button> */}
        </div>
        <br></br>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th> User First Name</th>
                <th> User Last Name</th>
                <th> User Email Id</th>
                <th> User age</th>
                <th> User gender</th>
                <th> User phone number</th>
                <th> Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.tableData.map((user) => (
                <tr key={user.id}>
                  <td> {user.firstName} </td>
                  <td> {user.lastName}</td>
                  <td> {user.emailId}</td>
                  <td> {user.userAge}</td>
                  <td> {user.userGender}</td>
                  <td> {user.userPhoneNumber}</td>
                  <td>
                    {/* <button
                      onClick={() => this.editUser(user.userId)}
                      className="btn btn-info"
                    >
                      Update{" "}
                    </button> */}
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.deleteUser(user.userId)}
                      className="btn btn-danger"
                    >
                      Delete{" "}
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.viewUser(user.userId)}
                      className="btn btn-info"
                    >
                      View{" "}
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
    );
  }
}

export default ListUserComponent;

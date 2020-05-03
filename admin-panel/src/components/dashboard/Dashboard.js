import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
// import { truckDetail } from '../../actions/authActions';
import axios from 'axios';
import { Button } from 'react-bootstrap';

import './Dashboard.css';

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  state = {
    vehicle: []
  };

  componentDidMount()
  {
    axios.get(`http://localhost:5000/api/trucks/truck`)
      .then(res => {
        this.setState({vehicle: res.data});
        console.log(res);
      }).catch(err => console.log('cannot access',err));
  }

  

  render() {
    const { user } = this.props.auth;

    return (
      <div  style={{width: "100%"}}>

      {/* NAVBAR */}
      <nav className="navbar fixed-top bg-dark flex-md-nowrap">
        <a className="navbar-brand col-md-2" href="/" style={{fontWeight: 'bold', fontSize: 22}}>
          Rental Shifters
        </a>
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
            <a className="btn btn-medium waves-effect waves-light hoverable blue accent-3"
                onClick={this.onLogoutClick}
            >
              Log Out
            </a>
          </li>
        </ul>
      </nav>

      {/* SIDENAV */}
      <div className="container-fluid">
        <div className="row">
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
            <div className="sidebar-sticky">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link active" href="/">
                    <span data-feather="home"></span>
                    Customer <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span data-feather="file"></span>
                    Orders
                  </a>
                </li>
              </ul>

              <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                <span>Extras</span>
                <a className="d-flex align-items-center text-muted" href="#" aria-label="Add a new report">
                  <span data-feather="plus-circle"></span>
                </a>
              </h6>
              <ul className="nav flex-column mb-2">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span data-feather="file-text"></span>
                    Notification
                  </a>
                </li>
              </ul>
              <ul className="nav flex-column mb-2">
                <li className="nav-item">
                <a className="nav-link" href="/register">
                    <span data-feather="file-text"></span>
                    Register
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          {/* BODY */}
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4" style={{width: "100%"}}>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Customer Requests</h1>
              <div className="btn-toolbar mb-2 mb-md-0">
                <div className="btn-group mr-2">
                </div>
                <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
                  <span data-feather="calendar"></span>
                  This week
                </button>
              </div>
            </div>
            {/* TABLE */}
          <h3>Details</h3>
          <div className="table-responsive">
            <table className="table table-striped table-sm">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Name</th>
                  <th>Contact</th>
                  <th>Address From</th>
                  <th>Address To</th>
                  <th>Truck Size</th>
                  <th>Description</th>
                  <th>Weight</th>
                  <th>Truck Space</th>
                  <th>Capacity Furniture</th>
                  <th>Capacity Box</th>
                  <th>Worker</th>
                  <th>Boxes</th>
                  <th>Extra</th>
                  <th>Accept</th>
                  <th>Decline</th>
                </tr>
              </thead>
              <tbody>
                {this.state.vehicle.map( (vehicle, i) => 
                <tr key= {i}>
                  <td>{++i}</td>
                  <td>{vehicle.name}</td>
                  <td>{vehicle.contact}</td>
                  <td>{vehicle.address_from}</td>
                  <td>{vehicle.address_to}</td>
                  <td>{vehicle.truck_size}</td>
                  <td>{vehicle.description}</td>
                  <td>{vehicle.weight}</td>
                  <td>{vehicle.truck_space}</td>
                  <td>{vehicle.capacity_furniture}</td>
                  <td>{vehicle.capacity_box}</td>
                  <td>{vehicle.worker}</td>
                  <td>{vehicle.boxes}</td>
                  <td>{vehicle.extra}</td>
                  <td>
                    <Button className="green" variant="success">Accept</Button>
                  </td>
                  <td>
                    <Button className="red" variant="danger">Reject</Button>
                  </td>
                </tr>
                  )}
              </tbody>
            </table>
          </div>
          </main>
        </div>
      </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);

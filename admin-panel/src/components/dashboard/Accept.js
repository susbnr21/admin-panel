import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import axios from 'axios';

class Accept extends Component {
    state = {
        accept: [],
      };
    
      componentDidMount()
      {
        axios.get(`http://localhost:5000/accept`)
          .then(res => {
            this.setState({accept: res.data});
            console.log(res);
          }).catch(err => console.log('cannot access',err));
      }
    render() {
        return(
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
                    <a className="nav-link" href="/dashboard">
                        <span data-feather="home"></span>
                        Requests <span className="sr-only">(current)</span>
                    </a>
                    <a className="nav-link active" href="/accept">
                        <span data-feather="home"></span>
                        Accept <span className="sr-only">(current)</span>
                    </a>
                    <a className="nav-link" href="/decline">
                        <span data-feather="home"></span>
                        Decline <span className="sr-only">(current)</span>
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
                    <a className="nav-link" href="/register">
                        <span data-feather="file-text"></span>
                        Register
                    </a>
                    </li>
                </ul>
                </div>
            </nav>

            {/* BODY */}
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4 center" style={{width: "100%"}}>
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Accepted Requests</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group mr-2">
                    </div>
                </div>
                </div>

                {/* TABLE */}
            <div className="table-responsive">
                <table className="table centered table-striped highlight responsive-table table-sm" style={{width: 2300, height: 500}}>
                <thead>
                    <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Email</th>
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
                    </tr>
                </thead>
                <tbody>
                {this.state.accept.map( (accept, i) => 
                <tr key= {i}>
                  <td>{++i}</td>
                  <td>{accept.name}</td>
                  <td>{accept.email}</td>
                  <td>{accept.contact}</td>
                  <td>{accept.address_from}</td>
                  <td>{accept.address_to}</td>
                  <td>{accept.truck_size}</td>
                  <td>{accept.description}</td>
                  <td>{accept.weight}</td>
                  <td>{accept.truck_space}</td>
                  <td>{accept.capacity_furniture}</td>
                  <td>{accept.capacity_box}</td>
                  <td>{accept.worker}</td>
                  <td>{accept.boxes}</td>
                  <td>{accept.extra}</td>
                </tr>
                  )}
              </tbody>
                </table>
            </div>
            </main>
            </div>
        </div>
        </div>
        )
    }
}

Accept.propTypes = {
logoutUser: PropTypes.func.isRequired,
auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser },
)(Accept);


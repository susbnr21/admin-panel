import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginAdmin } from "../../actions/authActions";
import classnames from "classnames";
import logo from '../../assets/Logo.png'

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const adminData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginAdmin(adminData);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="container"> 
        <div style={{ marginTop: "4rem" }} className="line">
          <div className="col s8 offset-s2" style={{padding: 100}}>
            <div className="center">
              <logo className='logo' style={{display: 'block'}}>
                  <img src={logo} alt="Logo" height='120' width='120'/>
              </logo>
            </div>
            <div className="col s12 center red-text" style={{ paddingLeft: "11.250px" }}>
              <h6 style={{fontWeight: 'bold'}}>(Admin Panel)</h6>
            </div>
            <div className="col s12 center" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Login</b> below
              </h4>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames("", {
                    invalid: errors.email || errors.emailnotfound
                  })}
                />
                <label htmlFor="email">Email</label>
                <span className="red-text">
                  {errors.email}
                  {errors.emailnotfound}
                </span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password || errors.passwordincorrect
                  })}
                />
                <label htmlFor="password">Password</label>
                <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
              </div>
              <div className="col s12 center" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginAdmin: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginAdmin }
)(Login);

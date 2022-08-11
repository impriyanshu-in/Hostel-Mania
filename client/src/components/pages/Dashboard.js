import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentUser } from "../../actions/authActions";


// const clean = require("../../img/cleaning.jpg");
const student = require("../../img/student.jpg");
const staff = require("../../img/mess.png");
const cleaning = require("../../img/cleaning.jpg");

class Dashboard extends Component {

  componentDidMount() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  
  render() {
    const { user } = this.props.auth;
    return (
      <div className="mid container">
        <div className="text-center" style={{ fontSize: "25px" }}>
          Welcome {user.name}!
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>


          <div>
            <a href="/student">
            <div className="card hoverable" style={{ width: "18rem", hover: '', height: '22rem' }}>
              <img src={student} className="card-img-top" alt="Cleaning" />
                <div className="card-body" style={{ height: '10rem' }}>
                <h5 className="card-title">Student</h5>
              <span className="card-text">
                Add New Student and Room allotment
              </span>
            </div>
          </div>
          </a>
          </div>

        <div>
          <a href="/hostel">
          <div className="card" style={{ width: "18rem", hover: '', height: '22rem' }}>
            <img src={cleaning} className="card-img-top" alt="Cleaning" />
            <div className="card-body">
              <h5 className="card-title">Room Repair/Cleaning Status</h5>
              <span>
                Add Room Repair/Cleaning
              </span>
            </div>
            
          </div>
          </a>
        </div>

      <div>
        <a href="/staff">
          <div className="card" style={{ width: "18rem", hover: '', height: '22rem' }}>
            <img src={staff} className="card-img-top" alt="Cleaning" />
            <div className="card-body">
              <h5 className="card-title">Staff Info</h5>
              <span>
                Add more Staff or Check their info
              </span>
            </div>
          </div>
          </a>
        </div>
      </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  // getCurrentUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps
  ,
  { getCurrentUser }
)(Dashboard);

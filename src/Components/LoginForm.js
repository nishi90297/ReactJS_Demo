import React from 'react';
import Login from './Login';
import Jumbotron from 'react-bootstrap/Jumbotron'; 
import csp_img from '../images/csp1.png';
import 'bootstrap/dist/css/bootstrap.min.css';

class LoginForm extends React.Component {
  render() {
    return (
      <div>
        <div>
          <a href="/" style={{ "paddingLeft": "15px" }}><img width="auto" height="75px"  src={csp_img} alt="csp1" /></a>
        </div>
        <Jumbotron style={{ "opacity": "0.85" }}>
          <div className="container">
            <h1>Customer Service Portal</h1>
            <p>Your one point contact for issues related to the purchased products.</p>
          </div>
        </Jumbotron>
        <div className={"container"} id="wrap">
          <div className={"row bgClass"} style={{ "marginTop": "15px", "marginBottom": "45px" }}>
            <div className={"col-lg-5 offset-lg-7"}>
              <Login/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginForm;

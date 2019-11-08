import React from 'react';
import Action from '../Actions/Action.js';
import ApplicationStore from '../Stores/ApplicationStore';
import { Button, Row, Form, Col } from 'react-bootstrap';
import { withRouter } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/login.css' 

class Login extends React.Component {
  constructor() {
    super();
    this.state = { username: "", password: "", phone: "", authenticated: ApplicationStore.isAuthenticated() };
  }
  
  handleUsernameChange = (e) => {
    this.setState({ username: e.target.value });
  }
  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  }
  
  //Implement the below method to capture the phone details and do the required binding of the method
  /* handlePhoneChange(e) {
    
  }
   */
  handleSubmit = (event) => {
    event.preventDefault();
    let user = {
      'username': this.state.username,
      'password': this.state.password
    };
    Action.Login(user);
    console.log("from login compoennt", this.props);
    if (this.state.authenticated && sessionStorage.getItem('role') === "customer") {
      this.props.history.push('/purchasedItems');
    }
  }
   componentDidMount() {
    document.body.className='backgroundStyling'
  }
  render() {

    return (
      <div className="form-layout">
        <div className="panel-heading">
          <div className="panel-heading-left">
            <h3>Sign up now</h3>
            <p>Get access to your orders and chat for support.</p>
          </div>
          {/* <div className="panel-heading-right">
            <span className="glyphicon glyphicon-pencil"></span>
          </div> */}
        </div>
        <div id="divLogin" className={"bgImage panel-body"}>
          <Form className="form-horizontal" onSubmit={this.handleSubmit}>
            <Form.Group controlId="formHorizontalUsername">
              <Col md="12">
                <Form.Control  className="form-control1" size="lg" value={this.state.username} name="username"
                  onChange={this.handleUsernameChange} ref="username" type="text" placeholder="Enter Username" required/>
              </Col>
            </Form.Group>

            <Form.Group controlId="formHorizontalPassword">
              <Col md="12">
                <Form.Control className="form-control1" size="lg" value={this.state.password} name="password"
                  onChange={this.handlePasswordChange} ref="password" type="password" placeholder="Password" required />
              </Col>
            </Form.Group>
			
			{/* Add the form control for capturing phone details */}
			 
            <Form.Group>
              <Row style={{'marginLeft':'0px'}}>
              <Col md="4">
                <Button id="btn-lg" variant="success" size="lg" block type="submit">
                  Sign in
                </Button>
              </Col>
              <Col md="8">
                <Button  variant="link" size="sm" block onClick={this.toBeImplemented}>
                  Terms and Conditions
              </Button>
              </Col>
              </Row>
            </Form.Group>
          </Form>
        </div>
      </div>
    );
  }
}
export default withRouter(Login);

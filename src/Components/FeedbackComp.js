import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import Col from 'react-bootstrap/Col';
import Rater from './Rater';
import 'bootstrap/dist/css/bootstrap.min.css';

class FeedbackComp extends React.Component {
  constructor() {
    super();
    this.state = {
      latestFeedback: "",
      rating: '5'
    };
  }
  //Implement the below method for making text area interactive and do the required binding of the same method:
 /*  handleFeedbackChange(e) {

  } */

  handleClick = (rating) => {
    this.setState({ rating: rating });
  }
  feedbackSubmitHandler = () => {
    console.log('from submit feedback', this.state.rating, this.state.latestFeedback);
    this.props.onFeedback(this.state.rating, this.state.latestFeedback);
    this.setState({ latestFeedback: "", rating: "5" });
  }
  render() {
    var items = [];
    this.props.feedbacks.forEach(function (fb, index) {
      items.push(<div key={index}><a href="#"><h4>{fb.user}</h4></a><Rater value={fb.rating} maxlength="6" />&nbsp;&nbsp;<span style={{ "fontSize": "9px" }}>{fb.rating}/5</span><br /><div style={{ 'paddingBottom': '10px' }}>{fb.body}</div></div>)
    });
    return (
      <div className="offset-md-1">
        {items}
        {this.props.status ? null : <Form className={""}>
          <div className={"form-group"}>
            <textarea className={"form-control"} rows="5" cols="12" value={this.state.latestFeedback} name="username" ref="username" ></textarea>
          </div>
          <div><Rater value={this.state.rating} maxlength="6" onSelected={this.handleClick} />&nbsp;&nbsp;
        <span style={{ "fontSize": "9px" }}>{this.state.rating}/5</span></div><br />
          <FormGroup>
            <Col sm={8}>
              <Button variant="primary" onClick={this.feedbackSubmitHandler} >
                Submit Feedback
              </Button>
            </Col>
          </FormGroup>
        </Form>}
      </div>
    );
  }
}

export default FeedbackComp;

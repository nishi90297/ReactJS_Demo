import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer" id="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-4">
              <address>
                <strong>Contact Us</strong><br />
                email: reactcasestudy@infy.com<br />
                Fax Number:91-1-1234567890<br />
              </address>
            </div>
            <div className="col-sm-4">
              <center><p className="text-muted credit">React JS casestudy Copyright @ infy.com</p></center>
            </div>
            <div className="col-sm-4" style={{ "textAlign": 'right' }}>
              <address>
                <strong>Infosys Ltd</strong><br />
                Bantwal Taluk<br />
                Dakshina Kannada Dist<br />
                Phone: (123) 456-7890
                </address>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;

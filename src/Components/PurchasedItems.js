import React from 'react';
import Product from './Product';
import Navigation from './Navigation';
import Footer from './Footer';
import AppStore from '../Stores/ApplicationStore.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/login.css' 

class PurchasedItems extends React.Component {
  constructor() {
    super();
    this.state = {
      products: []
    };
    AppStore.LoadInitialData();
  }
  componentDidMount() {
    document.body.className = 'backgroundNoStyling';
    this.setState({
      products: AppStore.FetchPurchasedItems()
    });
    AppStore.addChangeListener(() => {
      this.setState({
        products: AppStore.FetchPurchasedItems()
      });
    });
  }
  render() {
    console.log("inside render")
    console.log(this.state.products)
    var items = [];
    this.state.products ? this.state.products.forEach((item, index) => {
       items.push(<div key={index} className="col-4">
        <Product pid={item.pdtCode} price={item.pdtPrice} name={item.pdtName} desc={item.pdtDescription} img={item.pdtImg} rating={item.avgFeedback} status={item.isDiscontinued} />
      </div>);
      }):items.push(null)
      
    return (
      <div>
        <Navigation />
        <div className="container">
          <div className="row" >
            {/* <div className="col-md-12"> */}
              {items.length > 0 ? items : null}
            {/* </div> */}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default PurchasedItems;

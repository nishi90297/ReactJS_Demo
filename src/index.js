import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import LoginForm from "./Components/LoginForm";
import PurchasedItems from "./Components/PurchasedItems";
import ProductDetails from "./Components/ProductDetails";
import './css/index.css';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<BrowserRouter>
    <React.Fragment>
      <Route path='/' component={LoginForm} exact />
      <Route path='/purchasedItems' component={PurchasedItems} />
      <Route path='/productDetails/:id' component={ProductDetails} />
    </React.Fragment>
  </BrowserRouter>, document.getElementById('root'));

serviceWorker.unregister();

import axios from 'axios';

var Dispatcher = require('./../Dispatcher/dispatcher.js').AppDispatcher;
var EventEmitter = require('events').EventEmitter;
var IssueConstants = require('./../Constants/IssueConstants');

var CHANGE_EVENT = "change";

class AppStore extends EventEmitter {
  constructor() {
    super();
    this._purchasedItems = [];
    this._productDetails = {};
    this._feedbackDetails = [];
    this.state = {
      error:null
    }
  }

  ValidateCreds(cred) {
    sessionStorage.setItem("username", cred.username);
    sessionStorage.setItem("role", 'customer');
    console.log("inside validatecreds");
    this.isAuthenticated();
    this.emitChange();
  }

  LoadInitialData() {
    axios.get('http://localhost:3000/products')
    .then(result => {
      this._purchasedItems = result.data
      this.emitChange()
    })
    .catch(error => console.log(error));
  }

  FetchPurchasedItems() {
    return this._purchasedItems;
  }

  FetchFeedbackById(pdtId) {
    axios.get(`http://localhost:3000/feedbackDetails?pdtCode=${pdtId}`)
    .then(result => {
      this._feedbackDetails = result.data
      this.emitChange()
    })
    .catch(error => console.log(error)
    );
  }

  FetchFeedback() {
    return this._feedbackDetails;
  }

  AddFeedback(feedbackDetails) {
    console.log('from addfeedback', feedbackDetails);
    var newFb = {
      "pdtCode": feedbackDetails.productId,
      "user": sessionStorage.getItem('username'),
      "body": feedbackDetails.feedback,
      "rating": feedbackDetails.rating
    };
    axios.post('http://localhost:3000/feedbackDetails',newFb)
    .then(response => {
      this.FetchFeedbackById(feedbackDetails.productId);
    })
    .catch(error => console.log("error"));
  }

  emitChange() {
    console.log('inside change event store');
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener() {
    this.removeListener(CHANGE_EVENT);
  }

  isAuthenticated() {
    if (sessionStorage.getItem('username')) {
      console.log('isAuthenticated is true');
      return true;
    }
    return false;
  }

  handleActions(payload) {
    var action = payload.action;
    switch (action.actionType) {

      case IssueConstants.LOGIN:
        this.ValidateCreds(payload.action.data);
        this.emit('change');
        break;

      case IssueConstants.PURCHASED_ITEMS:
        this.FetchPurchasedItems(payload.action.data);
        this.emit('change');
        break;

      case IssueConstants.SUBMIT_FEEDBACK:
        this.AddFeedback(payload.action.data);
        this.emit('change');
        break;

      case IssueConstants.FB_ID:
        this.FetchFeedbackById(payload.action.data);
        this.emitChange();
        break;

      default:
        return true;
    }
  }

}

var appStore = new AppStore();

Dispatcher.register(appStore.handleActions.bind(appStore));

export default appStore;

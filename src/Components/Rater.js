import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Rater extends React.Component {
  render() {
    var items = [];
    for (var i = 1; i < this.props.maxlength; i++) {
      var clickHandler = this.props.onSelected && this.props.onSelected.bind(null, i);
      items.push(<li key={i} className={i <= this.props.value ? 'filled' : ''} onClick={clickHandler}>{'\u2605'}</li>)
    }
    return (
      <ul className="rating">{items}</ul>
    )
  }
}


export default Rater;

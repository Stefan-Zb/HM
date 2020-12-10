import React, {Component} from 'react';

class Car extends Component {
  render() {
    let {item} = this.props;
    return (
      <div>
        <h3>
          {item.model} - {item.madeYear} - {item.power} - {item.color}
        </h3>
      </div>
    );
  }
}

export default Car;

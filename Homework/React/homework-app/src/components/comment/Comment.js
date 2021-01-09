import React, {Component} from 'react';

import {Link, withRouter} from "react-router-dom";

class Comment extends Component {
  render() {
    let {item, match: {url}} = this.props;
    return (
      <div>
        {item.id} <br/> {item.body} <br/> <Link to={url + '/' + item.id}>More</Link>
        <hr/>
        <hr/>
      </div>
    );
  }
}

export default withRouter(Comment);

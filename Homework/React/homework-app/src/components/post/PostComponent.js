import React, {Component} from 'react';

class PostComponent extends Component {



  render() {
    let {item, selectPost, showBatton, showBody} = this.props;
    return (
      <div>
        {item.id}
        <br/>
        {item.title}
        <br/>
        {showBody && item.body}
        {showBatton &&
        <button onClick={() => selectPost(item.id)}>Klick</button>}
        <hr/>
      </div>
    );
  }
}

export default PostComponent;

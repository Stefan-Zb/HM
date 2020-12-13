import React, {Component} from 'react';

class PostComponent extends Component {



  render() {
    let {item, selectPost} = this.props;
    return (
      <div>
        {item.id}-{item.title}
        <br/>
        <button onClick={() => selectPost(item.id)}>Klick</button>
      </div>
    );
  }
}

export default PostComponent;

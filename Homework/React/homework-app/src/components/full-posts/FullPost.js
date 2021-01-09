import React, {Component} from 'react';
import PostService from "../../services/PostService";

class FullPost extends Component {

  state = {post: null};
  postService = new PostService();

  async componentDidMount() {
    let {match: {params: {id}}} = this.props;
    let post = await this.postService.post(id);
    this.setState({post});
  }

  render() {
    let {post} = this.state;
    return (
      <div>
        {post && <div>{post.id} <br/> {post.title} <br/> {post.body}
          <hr/>
        </div>}
      </div>
    );
  }
}

export default FullPost;

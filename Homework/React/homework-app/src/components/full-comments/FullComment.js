import React, {Component} from 'react';
import CommentService from "../../services/CommentService";

class FullComment extends Component {

  state = {comment: null};
  commentService = new CommentService();

  async componentDidMount() {
    let {match: {params: {id}}} = this.props;
    let comment = await this.commentService.comment(id);
    this.setState({comment});
  }

  render() {
    let {comment} = this.state;
    return (
      <div>
        {comment && <div>{comment.id} <br/> {comment.name} <br/> {comment.email} <br/> {comment.body}
          <hr/>
        </div>}
      </div>
    );
  }
}

export default FullComment;

import React, {Component} from 'react';
import CommentService from "../../services/CommentService";
import Comment from "../comment/Comment";
import {Route, Switch, withRouter} from "react-router-dom";
import FullComment from "../full-comments/FullComment";

class AllComments extends Component {

  commentService = new CommentService()
  state = {comments: []};

  async componentDidMount() {
    let comments = await this.commentService.comments();
    this.setState({comments});
  }

  render() {
    let {comments} = this.state;
    let {match: {url}} = this.props;
    return (
      <div>
        <div className={'left'}>
          {
            comments.map(value => <Comment item={value} key={value.id}/>)
          }
          <hr/>
        </div>
        <div>
          <Switch>
            <Route path={url + '/:id'} render={(props) => {
              let {match: {params: {id}}} = props;
              return <FullComment {...props} key={id}/>;
            }}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(AllComments);

import React, {Component} from 'react';
import PostService from "../../services/PostService";
import Post from "../post/Post";
import {Route, Switch, withRouter} from "react-router-dom";
import FullPost from "../full-posts/FullPost";

class AllPosts extends Component {

  postService = new PostService()
  state = {posts: []};

  async componentDidMount() {
    let posts = await this.postService.posts();
    this.setState({posts});
  }

  render() {
    let {posts} = this.state;
    let {match: {url}} = this.props;
    return (
      <div>
        <div className={'left'}>
          {
            posts.map(value => <Post item={value} key={value.id}/>)
          }
          <hr/>
        </div>
        <div>
          <Switch>
            <Route path={url + '/:id'} render={(props) => {
              let {match: {params: {id}}} = props;
              return <FullPost {...props} key={id}/>;
            }}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(AllPosts);

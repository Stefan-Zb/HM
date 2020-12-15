import React, {Component} from 'react';
import PostComponent from "../post/PostComponent";
import './allPosts.css'

class AllPostsComponent extends Component {

state = {posts: [], comment: null};

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(value => value.json())
      .then(usersFromAPI => {
        this.setState({posts: usersFromAPI});

      })
  }

  selectPost = (id) => {
    let comment = this.state.posts.find(value => value.id===id);
    this.setState({comment});
  }

  render() {
    let {posts, comment} = this.state;
    return (
      <div>
        <div className={'one'}>
        {
          posts.map(value => <PostComponent
            item={value}
            key={value.id}
            selectPost = {this.selectPost}
            showBatton = {true}
            showBody = {false}/>)
        }
        </div>

      <div className={'two'}>
        {
          comment && <h2><PostComponent item = {comment} showBatton = {false} showBody = {true}/></h2>
        }
      </div>
      </div>
    );
  }
}

export default AllPostsComponent;

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
            selectPost = {this.selectPost}/>)
        }
        </div>

      <div className={'two'}>
        {
          comment && <PostComponent item={comment}/>
        }
      </div>
      </div>
    );
  }
}

export default AllPostsComponent;

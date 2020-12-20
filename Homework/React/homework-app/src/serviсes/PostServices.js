class PostServices {
  url = 'https://jsonplaceholder.typicode.com/posts';
  getOllPosts () {

    return fetch(this.url)
      .then(value => value.json())
      .then(usersFromAPI => usersFromAPI);

  }

  getPostID (id) {
    return fetch(`${this.url}/${id}`).then(value => value.json()).then(usersFromAPI => usersFromAPI);
  }

}

export default PostServices;

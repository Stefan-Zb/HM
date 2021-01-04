export class PostService {

  url = 'https://jsonplaceholder.typicode.com/posts';

  async getOllPost () {

    return await fetch(this.url)
      .then(value => value.json());


  }

}

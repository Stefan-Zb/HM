export class UserService {

  url = 'https://jsonplaceholder.typicode.com/users';

  async getOllUsers() {
    return await fetch(this.url)
      .then(value => value.json());

  }

}

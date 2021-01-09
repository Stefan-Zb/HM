import React, {Component} from 'react';
import UserService from "../../services/UserService";

class FullUser extends Component {

  state = {user: null};
  userService = new UserService();

  async componentDidMount() {
    let {match: {params: {id}}} = this.props;
    let user = await this.userService.user(id);
    this.setState({user});
  }

  render() {
    let {user} = this.state;
    return (
      <div>
        {user && <div>{user.id} <br/> {user.name} <br/> {user.username} <br/> {user.email}
          <hr/>
        </div>}
      </div>
    );
  }
}

export default FullUser;

import React, {Component} from 'react';

import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import AllUsers from "./components/all-users/AllUsers";
import AllPosts from "./components/all-posts/AllPosts";
import AllComments from "./components/all-commets/AllComments";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <ul>
              <li>
                <Link to={'/users'}>Всі користувачі</Link>
              </li>
              <li>
                <Link to={'/posts'}>Всі пости</Link>
              </li>
              <li>
                <Link to={'/comments'}>Всі коментарі</Link>
              </li>
            </ul>
            <hr/>
          </div>
          <div>
            <Switch>
              <Route path={'/users'} render={() => <AllUsers/>}/>
              <Route path={'/posts'} render={() => <AllPosts/>}/>
              <Route path={'/comments'} render={() => <AllComments/>}/>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import Search from "./pages/search";
import Saved from "./pages/saved";
import Nav from "./components/Nav";

class App extends Component {
  

  render() {
    return (
        <div>
          <Nav  />
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/saved" component={Saved} />
          </Switch>
        </div>
    );
  }
};

export default withRouter(App);
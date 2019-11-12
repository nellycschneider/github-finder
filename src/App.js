import React, { Fragment, Component } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";

import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null
  };

  // async componentDidMount() {
  //   this.setState({
  //     loading: true
  //   });

  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   // console.log(res.data);

  //   this.setState({
  //     users: res.data,
  //     loading: false
  //   });
  // }

  //Search Github users with props from Search.js component
  searchUsers = async text => {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );

    this.setState({
      users: res.data.items,
      loading: false
    });
  };

  //Clear users from state
  clearUsers = () => {
    this.setState({
      users: [],
      loading: false
    });
  };

  //Set alert
  setAlert = (message, type) => {
    this.setState({
      alert: {
        message: message,
        type: type
      }
    });

    //alert disappears after five seconds
    setTimeout(() => this.setState({ alert: null }), 5000);
  };

  render() {
    const { users, loading, alert } = this.state;

    return (
      <Fragment>
        <Navbar title="Github Finder" icon="fab fa-github" />
        <div className="container">
          <Alert alert={alert} />
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Fragment>
                  <Search
                    searchUsers={this.searchUsers}
                    clearUsers={this.clearUsers}
                    showClear={users.length > 0 ? true : false}
                    setAlert={this.setAlert}
                  />
                  <Users loading={loading} users={users} />
                </Fragment>
              )}
            />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </Fragment>
    );
  }
}

export default App;

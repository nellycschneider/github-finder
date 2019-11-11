import React, { Fragment, Component } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    users: [],
    loading: false
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
    {
      this.setState({
        users: [],
        loading: false
      });
    }
  };

  render() {
    return (
      <Fragment>
        <Navbar title="Github Finder" icon="fab fa-github" />
        <div className="container">
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={this.state.users.length > 0 ? true : false}
          />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </Fragment>
    );
  }
}

export default App;

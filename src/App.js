import React from 'react';
import './App.css';
import Navbar from './modules/Navbar'
import SignUp from './modules/signup'
import PostList from './modules/PostList'
import NewPost from './modules/NewPost'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <Switch>
          <Route path="/login" component={SignUp}></Route>
          <Route path="/postlist" component={PostList}></Route>
          <Route path="/newpost" component={NewPost}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

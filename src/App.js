import React from 'react';
import './App.css';
import Navbar from './modules/Navbar'
import SignUp from './modules/signup'
import PostList from './modules/PostList'
import NewPost from './modules/NewPost'
import AboutUs from './modules/AboutUs'
import Home from './Home' 
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <Switch className="contentWrap">
          <Route path="/login" component={SignUp}></Route>
          <Route path="/postlist" component={PostList}></Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/newpost" component={NewPost}></Route>
          <Route path="/aboutus" component={AboutUs}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

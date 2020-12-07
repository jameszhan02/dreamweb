import React from "react";
import "./App.css";
import Navbar from "./modules/Navbar";
import Post from "./modules/Post";
import SignUp from "./modules/signup";
import SignIn from "./modules/signin";
import PostList from "./modules/PostList";
import NewPost from "./modules/NewPost";
import AboutUs from "./modules/AboutUs";
import Home from "./modules/Home";
import About from './modules/about';
import Policy from './modules/policy';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <Switch className="contentWrap">
          <Route path="/signup" component={SignUp}></Route>
          <Route path="/login" component={SignIn}></Route>
          <Route path="/postlist" component={PostList}></Route>
          <Route path="/viewpost/:id" component={Post}></Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/newpost" component={NewPost}></Route>
          <Route path="/aboutus" component={AboutUs}></Route>          
          <Route path="/about" component={About}></Route>
          <Route path="/policy" component={Policy}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;

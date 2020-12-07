import React, { Component } from "react";
import "./Navbar.css";
import {logout, loginUser } from '../cookieHelper';

let currentUser = loginUser();
let isUserLogin = false;
if(currentUser){
  console.log(currentUser);
  isUserLogin = true;
}

const curUserLogout = () =>{
  logout();
}

const MenuItems = [
  {
    title: "Home",
    url: "home",
    cName: "nav-links",
  },
  {
    title: "Posts",
    url: "postlist",
    cName: "nav-links",
  },
  {
    title: "Store",
    url: "#",
    cName: "nav-links",
  },
  {
    title: "About Us",
    url: "aboutus",
    cName: "nav-links",
  },
  {
    title: "Login",
    url: "login",
    cName: "nav-links",
  },
];
class Navbar extends Component {
  render() {
    return (
      <nav className="NavbarItems">
        <h1>Chinese Gang</h1>
        <ul className="nav-menu">
          {MenuItems.map((item, index) => {
            return (
              <li className="nav-links" key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="iconBorder">
        {isUserLogin
        ? <img className="personIcon" src={currentUser.data.piclink} alt="piclink" onClick={curUserLogout}/>
        : <img className="personIcon" src="https://user-images.githubusercontent.com/45243472/101384466-7be14280-3888-11eb-9e05-4efe863e4072.jpg" alt="defaultPic"/>
        }
        </div>
      </nav>
    );
  }
}
export default Navbar;

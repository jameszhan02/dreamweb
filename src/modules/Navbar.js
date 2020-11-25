import React, { Component } from "react";
import "./Navbar.css";
import Search from "./search";

const MenuItems = [
  {
    title: "Home",
    url: "#",
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
    url: "#",
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
        <Search />
      </nav>
    );
  }
}
export default Navbar;

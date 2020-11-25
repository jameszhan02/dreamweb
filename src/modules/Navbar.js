import React, { Component } from "react";
import "./Navbar.css";
const MenuItems = [
  {
    title: "Home",
    url: "#",
    cName: "nav-links",
  },
  {
    title: "Login",
    url: "#",
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
      </nav>
    );
  }
}
export default Navbar;

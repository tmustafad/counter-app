import React, { Component } from "react";

//stateless functional component
const NavBar = ({ totalCounters }) => {
  console.log("Nav-Bar rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;

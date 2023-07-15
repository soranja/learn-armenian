import React from "react";
import "./SideBar.css";
import Button from "react-bootstrap/esm/Button";

import { NavLink } from "react-router-dom";

function SideBar() {
  return (
    <div className="p-3 bg-warning">
      <NavLink to="/">
        <Button style={{ marginRight: 10 }}>PICTURE DICTIONARY</Button>
      </NavLink>
      <NavLink to="/about">
        <Button style={{ marginRight: 10 }}>ABOUT</Button>
      </NavLink>
    </div>
  );
}

export default SideBar;

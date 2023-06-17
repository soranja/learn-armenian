import React from "react";
import "./SideBar.css";
import Button from "react-bootstrap/esm/Button";

import { NavLink } from "react-router-dom";

function SideBar() {
  return (
    <div className="p-3 mb-2 bg-warning bg-gradient text-white">
      <NavLink to="/">
        <Button style={{ marginRight: 10 }}>HOME</Button>
      </NavLink>
      {/* <NavLink to="/vocabulary">
        <Button style={{ marginRight: 10 }}>VOCABULARY</Button>
      </NavLink>
      <NavLink to="/phrasebook">
        <Button style={{ marginRight: 10 }}>PHRASEBOOK</Button>
      </NavLink> */}
      <NavLink to="/picture-dict">
        <Button style={{ marginRight: 10 }}>PICTURE DICTIONARY</Button>
      </NavLink>
    </div>
  );
}

export default SideBar;

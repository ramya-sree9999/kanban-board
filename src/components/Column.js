import React from "react";
import threeDotsIcon from "../assests/icons/3 dot menu.svg";
import addIcon from "../assests/icons/add.svg";
import displayIcon from "../assests/icons/Display.svg";
import downIcon from "../assests/icons/down.svg";

const Header = ({ onGroupingChange, onSortingChange }) => {
  return (
    <div className="header">
      <div className="header-left">
        <img src={threeDotsIcon} alt="Menu" className="menu-icon" />
        <img src={addIcon} alt="Add" className="add-icon" />
        <img src={displayIcon} alt="Display" className="display-icon" />
      </div>
      <div className="header-right">
        <label>
          Group By:
          <select onChange={(e) => onGroupingChange(e.target.value)}>
            <option value="status">Status</option>
            <option value="user">User</option>
            <option value="priority">Priority</option>
          </select>
          <img src={downIcon} alt="Dropdown" className="dropdown-icon" />
        </label>
        <label>
          Sort By:
          <select onChange={(e) => onSortingChange(e.target.value)}>
            <option value="priority">Priority</option>
            <option value="title">Title</option>
          </select>
          <img src={downIcon} alt="Dropdown" className="dropdown-icon" />
        </label>
      </div>
    </div>
  );
};

export default Header;
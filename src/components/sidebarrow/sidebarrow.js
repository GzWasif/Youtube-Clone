import React from "react";
import "./sidebarrow.css";

const Sidebarrow = ({ Icon, title, selected }) => {
  return (
    <div className={`sidebar_row ${selected && "selected"}`}>
      <Icon className="sidebarrow_icon" />
      <h2 className="sidebarrow_title">{title}</h2>
    </div>
  );
};

export default Sidebarrow;

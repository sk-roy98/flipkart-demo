// import React from 'react'
import Select from "react-select";
import "./sidebar.css";
import { useState } from "react";

const Sidebar = () => {
  const [selectedOption, setSelectedOption] = useState();

  const sortOption = [
    { value: "lowtohigh", label: "Sort: Low to High" },
    { value: "hightolow", label: "Sort: High to Low" },
  ];
  const handleChange = (e) => {
    setSelectedOption(e);
    console.log(e);
  };

  return (
    <div className="sidebar">
      <h2 className= "sidebar-label">Sort and Filter</h2>
      <h4 className="sidebar-label">Sort by: </h4>
      <div className="sidebar-options">
        <Select
          classname="inputFields"
          value={selectedOption}
          onChange={handleChange}
          options={sortOption}
        />
      </div>
      <h4 className="sidebar-label">Filter by Brand: </h4>
      <div className="sidebar-options">
        <Select
          classname="inputFields"
          value={selectedOption}
          onChange={handleChange}
          options={sortOption}
        />
      </div>
      <h4 className="sidebar-label">Filter by Gender: </h4>
      <div className="sidebar-options">
        <Select
          classname="inputFields"
          value={selectedOption}
          onChange={handleChange}
          options={sortOption}
        />
      </div>
      <h4 className="sidebar-label">Filter by size: </h4>
      <div className="sidebar-options">
        <Select
          classname="inputFields"
          value={selectedOption}
          onChange={handleChange}
          options={sortOption}
        />
      </div>
      <button>Clear All</button>
    </div>
  );
};

export default Sidebar;

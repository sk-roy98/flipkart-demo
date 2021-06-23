import React, { useState, useEffect } from "react";
import "./sidebar.css";
import Select from "react-select";
import Checkbox from "react-custom-checkbox";

const sortOptions = [
  { value: "lowtohigh", label: " low to high" },
  { value: "hightolow", label: " high to low" },
];
const genderOptions = [
  { value: "both", label: "Both" },
  { value: "men", label: " Men" },
  { value: "women", label: " Women" },
];

const Sidebar = ({ products, setProducts }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [sortedList, setSortedList] = useState(null);
  const [allProducts, setAllProducts] = useState(() => products);

  const handleChange = (option) => {
    setSelectedOption(option);
    console.log(selectedOption)
  };

  useEffect(() => {
    const handleSort = (option) => {
      if (option.value === "lowtohigh") {
        const sorted = [...products].sort((a, b) => {
          return a.price - b.price;
        });
        setSortedList(sorted);
      }

      if (option.value === "hightolow") {
        const sorted = [...products].sort((a, b) => {
          return b.price - a.price;
        });
        setSortedList(sorted);
      }

      if (option.value === "men") {
        const filtered = [...products].filter((item) => {
          return item.gender === "M";
        });
        setSortedList(filtered);
      }

      if (option.value === "women") {
        const filtered = [...products].filter((item) => {
          return item.gender === "F";
        });
        setSortedList(filtered);
      }

      if (option.value === "both") {
        setSortedList(allProducts);
      }
    };
    // const brandFilter=(e)=>{

    // }
    if (selectedOption) {
      // console.log(selectedOption)
      handleSort(selectedOption);
    }
  }, [selectedOption]);

  useEffect(() => {
    if (sortedList) {
      setProducts(sortedList);
    }
  }, [sortedList, setProducts]);

  return (
    <div className="sidebar-container">
      <h2>Sort and Filter</h2>
      <div className="">
        <h3 className="filterLabel">Sort by Price:</h3>
        <Select onChange={handleChange} options={sortOptions} />
        <h3 className="filterLabel">Filter by Gender:</h3>
        <Select onChange={handleChange} options={genderOptions} />
        <h3 className="filterLabel">Filter by Brand:</h3>
        <Checkbox 
          checked={false}
          icon= { 
          <div
            style={{
              display: "flex",
              flex: 1,
              backgroundColor: "#2874f0",
              alignSelf: "stretch",
            }}
          >
          </div>}
          onChange={handleChange}
          borderColor="#3084D9"
          borderVisibility="none"
          style={{ cursor: "pointer" }}
          labelStyle={{ marginLeft: 5, userSelect: "none" }}
          label="Calvin Klein"
        />
        <Checkbox 
          checked={false}
          icon= { 
          <div
            style={{
              display: "flex",
              flex: 1,
              backgroundColor: "#2874f0",
              alignSelf: "stretch",
            }}
          >
          </div>}
          onChange={handleChange}
          borderColor="#3084D9"
          borderVisibility="none"
          style={{ cursor: "pointer" }}
          labelStyle={{ marginLeft: 5, userSelect: "none" }}
          label="Allen Solly"
        />
        
        <Checkbox 
          checked={false}
          icon= { 
          <div
            style={{
              display: "flex",
              flex: 1,
              backgroundColor: "#2874f0",
              alignSelf: "stretch",
            }}
          >
          </div>}
          onChange={handleChange}
          borderColor="#3084D9"
          borderVisibility="none"
          style={{ cursor: "pointer" }}
          labelStyle={{ marginLeft: 5, userSelect: "none" }}
          label="Flying Machine"
        />
      </div>
    </div>
  );
};

export default Sidebar;

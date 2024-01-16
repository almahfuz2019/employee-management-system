import axios from "axios";
import { useState } from "react";
import EmployeeContext from "./EmployeeContext";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import React from 'react';
const EmployeeState = (props) => {
  const [loading, setLoading] = useState(false);
  const [employeeData, setEmployeeData] = useState([]);
  const [singleEmployeeData, setSingleEmployeeData] = useState({});
  const [getId, setGetId] = useState("");
  const [count, setCount] = useState([]);
  console.log(count);
  const [keywords, setKeywords] = useState("");
  // search data
  const getSearchData = async () => {
    try {
      if (keywords !== "") {
        const response = await fetch(
          `http://localhost:5000/search-by-lastName?lastName=${keywords}`
        );
        const data = await response.json();
        setEmployeeData(data);
        console.log(data);
        setCount(data.length);
      } else if (keywords === "") {
        loadEmployeeData();
      }
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  //   get all employee Data
  const loadEmployeeData = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:5000/allemployees");
      const allData = response?.data;
      setEmployeeData(allData);
      setLoading(false);
    } catch (error) {
      console.error("Error loading categories:", error);
    }
  };
  //   get employee by id
  const loadSingleEmployeeData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:5000/${getId}`);
      const allData = response?.data;
      setSingleEmployeeData(allData);
      setLoading(false);
    } catch (error) {
      console.error("Error loading categories:", error);
    }
  };
  //  get employee length
  const countLength = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/collection-length"
      );
      const data = response?.data;
      setCount(data);
    } catch (error) {
      console.error("Error loading categories:", error);
    }
  };
  //   delete an employee
  const handleDataDelete = async (id) => {
    try {
      const proceed = window.confirm("Are you sure you want to delete?");
      
      if (proceed) {
        const response = await axios.delete(`http://localhost:5000/${id}`);
        
        if (response.status === 200) {
          setLoading(true);
          const remaining = employeeData.filter((item) => item._id !== id);
          setEmployeeData(remaining);
          setLoading(false);
  
          toast.success("Deleted successfully", {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      }
    } catch (error) {
      console.error("Error deleting data:", error.message);
      // Handle the error as needed, such as showing an error message to the user
      toast.error("Error deleting data", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  

  return (
    <EmployeeContext.Provider
      value={{
        employeeData,
        loadEmployeeData,
        countLength,
        count,
        handleDataDelete,
        setEmployeeData,
        loadSingleEmployeeData,
        singleEmployeeData,
        setGetId,
        loading,
        getId,
        keywords,
        setKeywords,
        getSearchData,
      }}
    >
      {props.children}
    </EmployeeContext.Provider>
  );
};
EmployeeState.propTypes = {
  children: PropTypes.array.isRequired,
};
export default EmployeeState;

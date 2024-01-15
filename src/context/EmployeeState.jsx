import axios from "axios";
import { useState } from "react";
import EmployeeContext from "./EmployeeContext";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import React from 'react';
const EmployeeState = (props) => {
  const [loading, setLoading] = useState(true);
  const [employeeData, setEmployeeData] = useState([]);
  const [singleEmployeeData, setSingleEmployeeData] = useState({});
  const [getId, setGetId] = useState("");
  const [count, setCount] = useState([]);
  //   get all employee Data
  const loadEmployeeData = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:5000/alldata");
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
    const proceed = window.confirm("Are you sure you want to delete?");
    if (proceed) {
      await axios.delete(`http://localhost:5000/${id}`).then((response) => {
        if (response.status == 200) {
          setLoading(true);
          const remaining = employeeData.filter((item) => item._id !== id);
          setEmployeeData(remaining);
          setLoading(false);

          toast.success("deleted successfully", {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
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

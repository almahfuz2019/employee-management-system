import axios from "axios";
import { useState } from "react";
import EmployeeContext from "./EmployeeContext";
import PropTypes from "prop-types";
import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const EmployeeState = (props) => {
  const [loading, setLoading] = useState(true);
  const [employeeData, setEmployeeData] = useState([]);
  const [count, setCount] = useState([]);
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
      } else if (keywords === "") {
        loadEmployeeData();
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  //   get all employees Data
  const loadEmployeeData = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:5000/allemployees");
      const allData = response?.data;
      setEmployeeData(allData);
      setLoading(false);
    } catch (error) {
      toast.error(`Error: ${error.message}`, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
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
      toast.error(`Error: ${error.message}`, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
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
        loading,
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

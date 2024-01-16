// useSingleEmployee.js
import axios from "axios";
import { useCallback, useState } from "react";
import { Bounce, toast } from "react-toastify";
const useSingleEmployee = (id) => {
  const [loading, setLoading] = useState(true);
  const [singleEmployeeData, setSingleEmployeeData] = useState({});
  const [value, setValue] = useState(id);
  const loadSingleEmployeeData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:5000/${value}`);
      const allData = response?.data;
      setSingleEmployeeData(allData);
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
  }, [id]);
  return {
    value,
    setValue,
    loading,
    singleEmployeeData,
    loadSingleEmployeeData,
  };
};

export default useSingleEmployee;

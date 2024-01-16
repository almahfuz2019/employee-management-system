import { useCallback, useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import EmployeeContext from "../../context/EmployeeContext";
import Loading from "../../Component/Shared/Loading/Loading";
import axios from "axios";

const SingleEmployee = () => {
  const { id } = useParams();
  // const data = useContext(EmployeeContext);
  // const { loadSingleEmployeeData, singleEmployeeData, setGetId, loading,getId } =data;
  //   setGetId(id);
  //   useEffect(() => {
  //        loadSingleEmployeeData();
  // }, [getId]);
  const [loading, setLoading] = useState(false);
  const [singleEmployeeData, setSingleEmployeeData] = useState({});
  const loadSingleEmployeeData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:5000/${id}`);
      const allData = response?.data;
      setSingleEmployeeData(allData);
      setLoading(false);
    } catch (error) {
      console.error("Error loading employee data:", error);
      // setLoading(false);
    }
  }, [id]);
  useEffect(() => {
    loadSingleEmployeeData();
  }, [loadSingleEmployeeData]);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex justify-center mt-20">
          <div className="card border  w-96 bg-base-100 shadow">
            <div className="card-body">
              <h2 className="card-title text-primary text-2x">Name: {`${singleEmployeeData?.firstName} ${singleEmployeeData?.lastName}`}</h2>
              <p>Position: {singleEmployeeData?.position}</p>
              <p>Salary: {singleEmployeeData?.salary}TK</p>
              <div className="card-actions justify-end">
                <Link to="/employees" className=" underline underline-offset-4 ">See another empliyee details</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default SingleEmployee;

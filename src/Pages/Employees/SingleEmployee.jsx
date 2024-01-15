import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import EmployeeContext from "../../context/EmployeeContext";
import Loading from "../../Component/Shared/Loading/Loading";

const SingleEmployee = () => {
  const { id } = useParams();
  const data = useContext(EmployeeContext);
  const { loadSingleEmployeeData, singleEmployeeData, setGetId, loading,getId } =
    data;
    setGetId(id);
    useEffect(() => {
         loadSingleEmployeeData();
  }, [getId]);
 
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex justify-center mt-20">
          <div className="card  w-96 bg-base-100 shadow">
            <div className="card-body">
              <h2 className="card-title">{`${singleEmployeeData.firstName} ${singleEmployeeData.lastName}`}</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default SingleEmployee;

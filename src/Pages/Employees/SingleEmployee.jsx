import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../../Component/Shared/Loading/Loading";
import useSingleEmployee from "../../Hooks/useSingleEmployee";
const SingleEmployee = () => {
  const { id } = useParams();
  //from Custom hook
  const { loading, singleEmployeeData, loadSingleEmployeeData } =
    useSingleEmployee(id);

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
              <h2 className="card-title text-primary text-2x">
                Name:{" "}
                {`${singleEmployeeData?.firstName} ${singleEmployeeData?.lastName}`}
              </h2>
              <p>Position: {singleEmployeeData?.position}</p>
              <p>Salary: {singleEmployeeData?.salary}TK</p>
              <div className="card-actions justify-end">
                <Link
                  to="/employees"
                  className=" underline underline-offset-4 "
                >
                  See another empliyee details
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default SingleEmployee;

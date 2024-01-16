import { useContext, useEffect } from "react";
import Card from "./Card";
import EmployeeContext from "../../context/EmployeeContext";
import Loading from "../Shared/Loading/Loading";
const AllEmployees = () => {
  const data = useContext(EmployeeContext);
  const { employeeData, loading, keywords, setKeywords, getSearchData } = data;
  // get search keywords
  const handleSearch = (e) => {
    setKeywords(e.target.value);
  };
  // data search by last name / keywords
  useEffect(() => {
    getSearchData();
  }, [keywords]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <div className="mx-auto text-center mb-5">
            <input
              type="text"
              placeholder="Search here by lastName"
              className="input input-bordered input-accent w-full sm:max-w-sm input-sm sm:input-md max-w-xs border border-primary"
              onChange={handleSearch}
            />
          </div>
          {/* search data condation  */}
          {employeeData?.length === 0 ? (
            <p className="text-center text-2xl mb-2 text-red-700">
              
             No data available
            </p>
          ) : (
            <p className="text-center text-2xl"></p>
          )}

          <table className="table w-full ">
            <thead className="border">
              <tr>
                <th>No</th>
                <th className="text-center">First Name</th>
                <th className="text-center">Last Name</th>
                <th className="text-center">Position</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            {/* send data to card  */}
            {employeeData?.map((item, index) => (
              <Card key={item?._id} item={item} index={index} />
            ))}
          </table>
        </div>
      )}
    </>
  );
};
export default AllEmployees;

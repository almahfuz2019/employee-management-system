import { useContext, useEffect, useState } from "react";
import Card from "./Card";
import EmployeeContext from "../../context/EmployeeContext";
import Loading from "../Shared/Loading/Loading";
const AllEmployees = () => {
  const data = useContext(EmployeeContext);
  const { employeeData, loadEmployeeData, setEmployeeData,loading } = data;
  const [keywords, setKeywords] = useState("");
  //   const [productLoading, setProductLoading] = useState(true);
  const handleSearch = (e) => {
    setKeywords(e.target.value);
  };
  //   useEffect(() => {
  //     loadEmployeeData();
  //   }, []);
  useEffect(() => {
    const url = `http://localhost:5000/search-by-firstname?firstName=${keywords}`;
    console.log(url);
    if (keywords !== "") {
      //  setProductLoading(true);
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setEmployeeData(data);
          // setProductLoading(false);
        });
    } else if (keywords === "") {
      loadEmployeeData();
    }
  }, [keywords]);

  //   if (productLoading) {
  //     return <Loading />;
  //   }

  return (
    <>
      {loading ? (
        <Loading/>
      ) : (
          <div>
      <div className="mx-auto text-center mb-5">
        <input
          type="text"
          placeholder="Search here by product name"
          className="input input-bordered input-accent w-full sm:max-w-sm input-sm sm:input-md max-w-xs border border-primary"
          onChange={handleSearch}
        />
      </div>
      <table className="table w-full ">
        <thead className="border">
          <tr>
            <th>No</th>
            <th className="text-center">Name</th>
            <th className="text-center">Category</th>
            <th className="text-center">position</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>

        {employeeData?.map((item, index) => (
          <Card key={item?._id} item={item} index={index} />
        ))}
      </table>
    </div>)}
       </>
  );
};
export default AllEmployees;

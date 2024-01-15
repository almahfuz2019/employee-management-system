import { useContext, useEffect } from "react";
import AllEmployees from "../../Component/Employees/AllEmployees";
import Pagination from "../../Component/Employees/Pagination";
import EmployeeContext from "../../context/EmployeeContext";
const Employees = () => {
  const data = useContext(EmployeeContext);
  const { count, countLength } = data;
  useEffect(() => {
    countLength();
  }, [count]);
  return (
    <div className="mx-10">
      <div className="text-center my-5">
        <span className="bg-primary rounded p-2 text-white font-bold text-xl sm:text-3xl ">
          Total Employees: {count?.collectionLength}
        </span>
      </div>
      <Pagination />
      <AllEmployees/>
    </div>
  );
};
export default Employees;

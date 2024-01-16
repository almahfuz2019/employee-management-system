import { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeContext from "../../context/EmployeeContext";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

const UpdateEmployee = () => {
  const { id } = useParams();
  const data = useContext(EmployeeContext);
  const { setGetId } = data;
  const navigate = useNavigate();
  const [singleEmployeeData, setSingleEmployeeData] = useState({});
  const loadSingleEmployeeData = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:5000/${id}`);
      const allData = response?.data;
      setSingleEmployeeData(allData);
    } catch (error) {
      console.error("Error loading employee data:", error);
      // setLoading(false);
    }
  }, [id]);
  useEffect(() => {
    loadSingleEmployeeData();
  }, [loadSingleEmployeeData]);

  setGetId(id);
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      firstName: singleEmployeeData?.firstName,
      lastName: singleEmployeeData?.lastName,
      position: singleEmployeeData?.position,
      salary: singleEmployeeData?.salary,
    },
  });

  const onSubmit = async (data) => {
    try {
      await axios.put(`http://localhost:5000/${id}`, {
        firstName: data.firstName,
        lastName: data.lastName,
        position: data.position,
        salary: data.salary,
      });

      toast.success("Data updated successfully", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/employees");
      reset();
    } catch (error) {
      toast.error(`Error: ${error.message}`, {
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
  // input class style
  const inputClassStyle = `w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`;
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <section className="text-gray-600 body-font relative ">
            <div className="container px-5 sm:py-24 mx-auto flex sm:flex-nowrap flex-wrap ">
              <div className="border-primary  border-2 md:w-1/2 bg-white flex flex-col md:mx-auto w-full md:py-8 mt-8 md:mt-0  rounded-md p-5">
                <h2
                  className="text-gray-900 text-lg mb-1 
     title-font font-semibold"
                >
                  Update an employee
                </h2>
                <div className="relative mb-4">
                  <label
                    htmlFor="firstName"
                    className="leading-7 text-sm text-gray-600"
                  >
                    First Name
                  </label>
                  <input
                    defaultValue={singleEmployeeData?.firstName}
                    type="text"
                    {...register("firstName", {
                      required: "First Name is Required",
                    })}
                    className={inputClassStyle}
                  />
                </div>
                <div className="relative mb-4">
                  <label className="leading-7 text-sm text-gray-600">
                    {" "}
                    Last Name
                  </label>
                  <input
                    defaultValue={singleEmployeeData?.lastName}
                    type="text"
                    {...register("lastName", {
                      required: "Last Name is Required",
                    })}
                    className={inputClassStyle}
                  />
                </div>
                <div className="relative mb-4">
                  <label className="leading-7 text-sm text-gray-600">
                    {" "}
                    Position Name
                  </label>
                  <input
                    defaultValue={singleEmployeeData?.position}
                    type="text"
                    {...register("position", {
                      required: "Position Name is Required",
                    })}
                    className={inputClassStyle}
                  />
                </div>
                <div className="relative mb-4">
                  <label className="leading-7 text-sm text-gray-600">
                    {" "}
                    Salary amount
                  </label>
                  <input
                    defaultValue={singleEmployeeData?.salary}
                    type="number"
                    {...register("salary", {
                      required: "Salary amount is Required",
                    })}
                    className={inputClassStyle}
                  />
                </div>

                <input
                  className="text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg cursor-pointer"
                  value="Submit"
                  type="submit"
                />
              </div>
            </div>
          </section>
        </form>
      </div>
    </div>
  );
};
export default UpdateEmployee;

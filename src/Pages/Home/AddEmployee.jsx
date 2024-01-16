import axios from "axios";
import { useForm } from "react-hook-form";
import { Bounce, toast } from "react-toastify";
const AddEmployee = () => {
  const {
    register,
    handleSubmit,reset ,
    formState: { errors },
  } = useForm();

  // input class style
  const inputClassStyle = `w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`;
  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:5000/", {
        firstName: data.firstName,
        lastName: data.lastName,
        position: data.position,
        salary: data.salary,
        status: data.status,
      });
      // Data created successfully 
      if (response.status === 201) {
        toast.success("Data created successfully", {
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
        reset()
      }
    } catch (error) {
      // Employee already exists
      if (error.response && error.response.status === 400) {
        toast.warning("Employee already exists", {
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
      // Employee creating error
      else {
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
    }
  };
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
                  Add an employee
                </h2>
                <div className="relative mb-4">
                  <label
                    htmlFor="firstName"
                    className="leading-7 text-sm text-gray-600"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="First Name"
                    {...register("firstName", {
                      required: "First Name is Required",
                    })}
                    className={inputClassStyle}
                  />
                  {errors.firstName && (
                    <p className="text-red-500">{errors.firstName.message}</p>
                  )}
                </div>
                <div className="relative mb-4">
                  <label className="leading-7 text-sm text-gray-600">
                    {" "}
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    {...register("lastName", {
                      required: "Last Name is Required",
                    })}
                    className={inputClassStyle}
                  />
                  {errors.lastName && (
                    <p className="text-red-500">{errors.lastName.message}</p>
                  )}
                </div>
                <div className="relative mb-4">
                  <label className="leading-7 text-sm text-gray-600">
                    {" "}
                    Position Name
                  </label>
                  <input
                    type="text"
                    placeholder=" Position Name"
                    {...register("position", {
                      required: "Position Name is Required",
                    })}
                    className={inputClassStyle}
                  />
                  {errors.position && (
                    <p className="text-red-500">{errors.position.message}</p>
                  )}
                </div>
                <div className="relative mb-4">
                  <label className="leading-7 text-sm text-gray-600">
                    {" "}
                    Salary amount
                  </label>
                  <input
                    type="number"
                    placeholder="Salary amount"
                    {...register("salary", {
                      required: "Salary amount is Required",
                    })}
                    className={inputClassStyle}
                  />
                  {errors.salary && (
                    <p className="text-red-500">{errors.salary.message}</p>
                  )}
                </div>
                <input
                  className="text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 cursor-pointer rounded text-lg"
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
export default AddEmployee;

import axios from "axios";
import { useForm } from "react-hook-form";
const AddEM = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // const onSubmit = (data) => console.log(data);
  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:5000/", {
        firstName: data.firstName,
        lastName: data.lastName,
        position: data.position,
        salary: data.salary,
        status: data.status,
      });
      console.log("Data created:", response.data);
    } catch (error) {
      console.error("Error creating data:", error.message);
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
                    {...register("firstName", {
                      required: "First Name is Required",
                    })}
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
                    {...register("lastName", {
                      required: "Last Name is Required",
                    })}
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
                    {...register("position", {
                      required: "Position Name is Required",
                    })}
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
                    {...register("salary", {
                      required: "Salary amount is Required",
                    })}
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  {errors.salary && (
                    <p className="text-red-500">{errors.salary.message}</p>
                  )}
                </div>

                <div className="relative mb-4">
                  <label className="leading-7 text-sm text-gray-600">
                    {" "}
                    Select status
                  </label>
                  <select
                    {...register("status")}
                    className="select w-full  border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 rounded"
                  >
                    <option value="Available">Available</option>
                    <option value="Unavailable">Unavailable </option>
                  </select>
                </div>

                <input
                  className="text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  value="Submit"
                  type="submit"
                />
                <p className="text-xs text-gray-500 mt-3">
                  This is very important for your website.So,be careful.
                </p>
              </div>
            </div>
          </section>
        </form>
      </div>
    </div>
  );
};
export default AddEM;

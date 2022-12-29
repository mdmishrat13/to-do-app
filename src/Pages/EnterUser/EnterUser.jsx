import React, { useReducer } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const EnterUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const sectors = [

    {manufacturing:[
      'Constraction Materials',
      'Electronic and Optics'
    ]}
  ]

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Add an Employee
            </h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 md:space-y-6"
              action="#"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Name
                </label>
                <input
                  {...register("name")}
                  type="text"
                  id="name"
                  className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  placeholder="John Smith"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Choose One
                </label>
                <select
                  {...register("sectors")}
                  id="subject"
                  className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                >
                  <option selected>Choose a country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">&nbsp; &nbsp; &nbsp; France</option>
                  <option value="FR">&nbsp; &nbsp; &nbsp; France</option>
                  <option value="FR">&nbsp; &nbsp; &nbsp; France</option>
                  <option value="FR">&nbsp; &nbsp; &nbsp; France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    {...register("isAgree")}
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="font-light text-gray-500">
                    I accept the{" "}
                    <a
                      className="font-medium text-primary-600 hover:underline"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Add Employee
              </button>
            </form>
            <div className="text-right">
              <Link
                to="/"
                className="inline-block m-2 border bg-blue-500 hover:bg-white text-white hover:text-blue-500 font-bold text-right py-2 px-4 rounded"
              >
                Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterUser;

import React from "react";
import { useFormik } from "formik";
export default function ForgetPassword() {
  let formik = useFormik({
    initialValues: {
      email: "",
    },
  });
  return (
    <div>
      <div>
        <div className=" flex h-screen items-center justify-center px-4 my-30 sm:px-6 lg:px-8">
          <div className="w-full max-w-md space-y-8">
            <div className="bg-white shadow-md rounded-md p-6">
              <img
                className="mx-auto h-12 w-auto"
                src="https://www.svgrepo.com/show/499664/user-happy.svg"
                alt=""
              />

              <h2 className="my-3 text-center text-3xl font-bold tracking-tight text-gray-900">
                Restore You Account
              </h2>

              <form className="space-y-6" onSubmit={formik.handleSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      id="email"
                      name="email"
                      type="email-address"
                      autoComplete="email-address"
                      className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-green-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <h2 className="text-red-600 text-center my-4"></h2>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md border border-transparent cursor-pointer hover:bg-green-700 duration-500 bg-green-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
                  >
                    {/* {isLoading ? (
                      <i className="fas fa-spinner fa-spin"></i>
                    ) : (
                      "Sing-in"
                    )} */}
                    Restore Account
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

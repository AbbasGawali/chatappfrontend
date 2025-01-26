import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import axios from "axios";
const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    password: "",
    cPassword: "",
    gender: "",
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/user/register",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(response.data.message);
      console.log(response);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <div>
      <div className="min-h-screen bg-gray-100 p-0 sm:p-12">
        <div className="mx-auto max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
          <h1 className="text-2xl font-bold mb-8">Sign Up</h1>
          <form id="form" onSubmit={handleFormSubmit}>
            <div className="relative z-0 w-full mb-5">
              <input
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                name="fullName"
                placeholder="Enter full name"
                required
                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
            </div>

            <div className="relative z-0 w-full mb-5">
              <input
                value={formData.userName}
                onChange={handleChange}
                type="userName"
                name="userName"
                placeholder="Enter username"
                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
            </div>

            <div className="relative z-0 w-full mb-5">
              <input
                value={formData.password}
                onChange={handleChange}
                type="password"
                name="password"
                autoComplete="on"
                placeholder="Enter password"
                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
            </div>

            <div className="relative z-0 w-full mb-5">
              <input
                value={formData.cPassword}
                onChange={handleChange}
                type="Password"
                name="cPassword"
                placeholder=" Confirm password"
                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
            </div>

            <fieldset className="relative z-0 w-full p-px mb-2">
              <legend className="absolute text-gray-500 transform scale-75 -top-3 origin-0">
                Gender
              </legend>
              <div className="block pt-3 pb-2 space-x-4">
                <label>
                  <input
                    type="radio"
                    name="gender"
                    onChange={handleChange}
                    value="male"
                    checked={formData.gender === "male"}
                    className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                  />
                  Male
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    checked={formData.gender === "female"}
                    onChange={handleChange}
                    value="female"
                    className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                  />
                  Female
                </label>
              </div>
            </fieldset>

            <h2>
              Already have an account{" "}
              <Link to={"/login"} className="font-bold cursor-pointer">
                Login{" "}
              </Link>
            </h2>

            <button
              id="button"
              type="submit"
              className="w-full cursor-pointer px-6 py-2 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-pink-500 hover:bg-pink-600 hover:shadow-lg focus:outline-none"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;

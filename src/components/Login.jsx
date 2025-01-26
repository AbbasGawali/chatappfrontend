import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/user/login",
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
          <h1 className="text-2xl font-bold mb-8">Login</h1>
          <form id="form" onSubmit={handleFormSubmit}>
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

            <h2>
              Don't have an account{" "}
              <Link to={"/register"} className="font-bold cursor-pointer">
                Sign Up{" "}
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

export default Login;

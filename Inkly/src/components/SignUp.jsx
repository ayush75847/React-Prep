import React, { useState } from "react";
import { Input, Button } from "./index";
import authService from "../appwrite/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { login } from "../features/authSlice";
import { useDispatch } from "react-redux";

function SignUp() {
  const [errors, setErrors] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const signup = async (data) => {
    setErrors("");
    try {
      const user = await authService.createAccount(data);
      if (user) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(login({ userData: userData }));

        navigate("/");
      }
    } catch (error) {
      setErrors(error.message);
    }
  };

  return (
    <>
      <div className="flex min-h-[75vh] items-center justify-center px-4 py-10">
        <div className="w-full max-w-md rounded-2xl border border-gray-800 bg-gray-950 p-8 shadow-xl">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-orange-500">Inkly</h1>

            <p className="mt-2 text-sm text-gray-400">
              Create your account and start writing.
            </p>
          </div>

          <form onSubmit={handleSubmit(signup)} className="space-y-5">
            <Input
              label="Name"
              type="text"
              placeholder="Enter your name"
              {...register("name", {
                required: "Name is required",
              })}
            />

            <Input
              type="email"
              placeholder="Enter your email"
              label="Email"
              {...register("email", {
                required: "Email is required",
                validate: (value) =>
                  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ||
                  "Please enter a valid email address",
              })}
            />

            <Input
              type="password"
              placeholder="Enter your password"
              label="Password"
              {...register("password", {
                required: "Password is required",
              })}
            />

            {errors && (
              <p className="rounded-md border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-400">
                {errors}
              </p>
            )}

            <Button type="submit" className="w-full">
              Create Account
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-400">
            Already have an account?{" "}
            <NavLink
              to="/login"
              className="font-semibold text-orange-500 transition hover:text-orange-400"
            >
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;

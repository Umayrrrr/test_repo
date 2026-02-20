import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router";
import { supabase } from "../supabase-client";

export default function LoginSignup() {
  const navigate = useNavigate();
  const [isLogIn, setIsLogIn] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const onSubmit = async (data) => {
    const { email, password, firstname, lastname } = data;

    if (!isLogIn) {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { first_name: firstname, last_name: lastname },
        },
      });

      if (error) {
        toast.error(error.message);
      } else {
        toast.success("Check your email for verification");
        setIsLogIn(true);
      }
    } else {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        toast.error("Invalid credentials");
      } else {
        navigate("/home");
      }
    }
  };

  return (
    <div className="bg-gray-900 flex flex-col h-screen justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center font-bold text-2xl text-white tracking-tight">
          {isLogIn ? "Log in here" : "Sign up here"}
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {!isLogIn && (
            <>
              <div>
                <label className="font-medium text-white block">
                  First Name:
                </label>
                <input
                  {...register("firstname", {
                    required: "First Name is required",
                  })}
                  className="block w-full rounded-md bg-white px-3 py-1.5 "
                />
                <p className="text-red-500 mt-1">{errors.firstname?.message}</p>
              </div>
              <div>
                <label className="font-medium text-white block">
                  Last Name:
                </label>
                <input
                  {...register("lastname")}
                  className="block w-full rounded-md bg-white px-3 py-1.5 "
                />
              </div>
            </>
          )}

          <div>
            <label className="font-medium text-white block">Email:</label>
            <input
              type="text"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,
                  message: "Invalid email format",
                },
              })}
              className="block w-full rounded-md bg-white px-3 py-1.5 "
            />
            <p className="text-red-500 mt-1">{errors.email?.message}</p>
          </div>

          <div>
            <label className="font-medium text-white block">Password:</label>
            <input
              type="text"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Minimum 8 characters",
                },
                pattern: {
                  value: /^(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
                  message:
                    "One capital one small letter , one number special character",
                },
              })}
              className="block w-full rounded-md bg-white px-3 py-1.5 "
            />
            <p className="text-red-500 mt-1">{errors.password?.message}</p>
          </div>

          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 font-semibold text-white hover:bg-indigo-400"
          >
            {isLogIn ? "Log in" : "Sign up"}
          </button>
        </form>

        <div className="flex justify-center mt-6">
          <p className="text-white px-2">
            {isLogIn ? "Don't have an account?" : "Already have an account?"}
          </p>
          <button
            onClick={() => setIsLogIn(!isLogIn)}
            className="text-indigo-400 font-bold hover:underline"
          >
            {isLogIn ? "Sign up" : "Log in"}
          </button>
        </div>
      </div>
      <ToastContainer theme="colored" />
    </div>
  );
}

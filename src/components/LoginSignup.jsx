import { useState } from "react";
import { useForm } from "react-hook-form";

export default function LoginSignup() {
  const [isLogIn, setIsLogIn] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit=(data)=>console.log(data);

  return (
    <div className="bg-gray-900 flex flex-col h-screen justify-center px-6 py-12 border-2 lg:px-8 ">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm  ">
        <h2 className="mt-10 text-center font-bold text-2xl text-white tracking-tight">
          {isLogIn ? "Log in here" : "Sign up here"}
        </h2>
      </div>
      <div>
        <div className="mt-10 ">
          <form onSubmit={handleSubmit(onSubmit)}
          className="space-y-5 p-5 px-100">
            {!isLogIn ? (
              <div>
                <label
                  htmlFor="username"
                  className="font-medium text-white block "
                >
                  Username:
                </label>

                <div className="mt-2">
                  <input
                    id="username"
                    type="text"
                    {...register("username",{required:{
                        value: true,
                        message:"Username is required.",
                    }
                },
                   { minLength:
                    {
                        value:3,
                        message:"Minimun 3 characters",
                    }}
                )}
                    className="block w-full rounded-md bg-white  px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/ "
                  />
                  <p className="text-red-500">{errors.username?.message}</p>
                </div>
                
              </div>
            ) : (
              <div> </div>
            )}

            <div>
              <label htmlFor="email" className="font-medium text-white block ">
                Email:
              </label>

              <div className="mt-2">
                <input
                  id="email"
                  type="text"
                  {...register("email",{required:"Email is required",
                    pattern:{
                        value: /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/ ,
                        message: 'Invalid email format',
                    }})}
                  className="block w-full rounded-md bg-white  px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/ "
                />
                <p className="text-red-500">{errors.email?.message}</p>
              </div>
             
            </div>

            <div>
              <label
                htmlFor="password"
                className="font-medium text-white block "
              >
                Password
              </label>

              <div className="mt-2">
                <input
                  {...register("password",{required:"Password is required",
                    minLength:{
                      value:8,
                      message:"Minimum 8 characters"
                    },
                    pattern:{
                      value:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                      message:"One capital one small letter , one number special character",
                    }
                  })}
                  id="password"
                  type="text"
                  className="block w-full rounded-md bg-white  px-3 py-1.5 text-base  outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/ "
                />
                <p className="text-red-500">{errors.password?.message}</p>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                {isLogIn ? "Log in" : "Sign up"}
              </button>
            </div>
          </form>
          <div className="flex justify-center">
            <p className="text-white px-5">
              {isLogIn ? "Don't have an account?" : "Already have an account?"}
            </p>
            <button
              onClick={() => setIsLogIn(!isLogIn)}
              className=" text-white font-bold cursor-pointer"
            >
              {isLogIn ? "Sign up" : "Log in"}{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase-client";
import { toast, ToastContainer } from "react-toastify";
import { useForm } from "react-hook-form";

export default function AddUser() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isActive, setIsActive] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      role: "user",
    },
  });

  const onSubmit = async (data) => {
    setLoading(true);

    const { data: res, error } = await supabase.functions.invoke(
      "create-user",
      {
        body: {
          email: data.email,
          password: data.password,
          first_name: data.firstname,
          last_name: data.lastname,
          role: data.role,
          is_active: isActive,
        },
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_SERVICE_ROLE_KEY}`,
        },
      },
    );

    setLoading(false);

    if (error) {
      toast.error(error.message || "Failed to create user");
    } else {
      toast.success("User created successfully!");
      navigate("/users");
    }
  };

  return (
    <div className="p-10 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Add New User</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            className={`w-full border p-2 ${errors.firstname ? "border-red-500" : ""}`}
            placeholder="First Name"
            {...register("firstname", { required: "First name is required" })}
          />
          {errors.firstname && (
            <p className="text-red-500 text-xs mt-1">
              {errors.firstname.message}
            </p>
          )}
        </div>

        <div>
          <input
            className="w-full border p-2"
            placeholder="Last Name"
            {...register("lastname", { required: "Last name is required" })}
          />
        </div>

        <div>
          <input
            className={`w-full border p-2 ${errors.email ? "border-red-500" : ""}`}
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,
                message: "Invalid email format",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <input
            className={`w-full border p-2 ${errors.password ? "border-red-500" : ""}`}
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 8, message: "Min 8 characters" },
              pattern: {
                value: /^(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
                message:
                  "One capital one small letter , one number special character",
              },
            })}
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <select className="w-full border p-2" {...register("role")}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        <div className="flex gap-2 pt-4">
          <button
            type="submit"
            disabled={loading}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:bg-gray-400"
          >
            {loading ? "Creating..." : "Create User"}
          </button>
          <button
            type="button"
            onClick={() => navigate("/users")}
            className="bg-gray-300 px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </form>
      <ToastContainer theme="colored" />
    </div>
  );
}

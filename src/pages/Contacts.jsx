import { useForm } from "react-hook-form";
import { useState } from "react";

export default function Contacts() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [submitted, setSubmitted] = useState(null);
  return (
<<<<<<< HEAD
    <div className="py-5 contacts">
=======
    <div className="contacts">
>>>>>>> f07a3d7 (adding contact form)
      <div className="flex flex-row justify-center h-full ">
        <form
          onSubmit={handleSubmit((data) => setSubmitted(data))}
          className=" flex flex-wrap w-full max-w-lg border-2 p-4 bg-gray-200 rounded-md"
        >
          <div></div>

          <div className="w-1/2 px-3 mb-6 md:mb-0">
            <label className="font-bold">First Name:</label>
            <input
              className=" w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              {...register("firstName", { required: "This is required" })}
              placeholder="First Name"
            />
            <p className="text-red-500">{errors.firstName?.message}</p>
          </div>

          <div className="w-1/2 px-3 mb-6 md:mb-0">
            <label className="font-bold">Last Name:</label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              {...register("lastName", { required: "This is required" })}
              placeholder="Last Name"
            />
            <p className="text-red-500">{errors.lastName?.message}</p>
          </div>

          <div className="w-full px-3 mb-6 md:mb-0">
            <label className="font-bold">Email:</label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
<<<<<<< HEAD
              type="text"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,
                  message: "Invalid email format",
                },
              })}
=======
              type="email"
              {...register("email", { required: "Email is required" })}
>>>>>>> f07a3d7 (adding contact form)
              placeholder="Email"
            />
            <p className="text-red-500">{errors.email?.message}</p>
            <label className="font-bold">Note:</label>
          </div>

          <div className="w-full px-3">
            <textarea
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              {...register("note")}
              rows={4}
              placeholder="Your message goes here"
            ></textarea>
          </div>

          <div className="w-full px-3 flex justify-end">
            <button
              className=" bg-purple-500 hover:bg-purple-400 text-white font-bold py-2 px-4 rounded cursor-pointer"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
<<<<<<< HEAD

      <div id="display" className="flex flex-row justify-center h-full">
        <div className="w-full max-w-lg border-2 p-4 bg-white rounded-md">
          {submitted ? (
            <div className="flex flex-col space-y-2">
              <h3 className="font-bold">Submitted Data</h3>
              <p>
                <strong>First Name:</strong> {submitted.firstName}
              </p>
              <p>
                <strong>Last Name:</strong> {submitted.lastName}
              </p>
              <p>
                <strong>Email:</strong> {submitted.email}
              </p>
              <p>
                <strong>Note:</strong> {submitted.note}
              </p>
            </div>
          ) : (
            <p className="text-gray-500">No submission yet.</p>
          )}
        </div>
      </div>
    </div>
=======
    
    <div id="display" className="flex flex-row justify-center h-full">
      <div className="w-full max-w-lg border-2 p-4 bg-white rounded-md">
        {submitted ? (
          <div className="flex flex-col space-y-2">
            <h3 className="font-bold">Submitted Data</h3>
            <p><strong>First Name:</strong> {submitted.firstName}</p>
            <p><strong>Last Name:</strong> {submitted.lastName}</p>
            <p><strong>Email:</strong> {submitted.email}</p>
            <p><strong>Note:</strong> {submitted.note}</p>
          </div>
        ) : (
          <p className="text-gray-500">No submission yet.</p>
        )}
      </div>
        
    </div>
    
    </div>
    
>>>>>>> f07a3d7 (adding contact form)
  );
}

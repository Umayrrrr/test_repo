import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "../supabase-client";
import { toast, ToastContainer } from "react-toastify";

export default function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    first_name: "",
    email: "",
    role: "",
  });

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", id)
        .single();
      if (data) setFormData(data);
      setLoading(false);
    };
    fetchUser();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const { error } = await supabase.functions.invoke("update-user", {
      body: { userId: id, ...formData },
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_SERVICE_ROLE_KEY}`,
      },
    });

    if (error) toast.error("Update failed: ");
    else {
      toast.success("User updated successfully!");
      setTimeout(() => {
        navigate("/users");
      }, 1000);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-10 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Edit User</h2>
      <form onSubmit={handleUpdate} className="space-y-4">
        <input
          className="w-full border p-2"
          value={formData.first_name}
          onChange={(e) =>
            setFormData({ ...formData, first_name: e.target.value })
          }
          placeholder="First Name"
        />
        <input
          className="w-full border p-2"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="Email"
        />
        <select
          className="w-full border p-2"
          value={formData.role}
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <div className="flex gap-2">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-700"
          >
            Save
          </button>
          <button
            type="button"
            onClick={() => navigate("/users")}
            className="bg-gray-300 px-4 py-2 rounded cursor-pointer hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </form>
      <ToastContainer theme="colored" />
    </div>
  );
}

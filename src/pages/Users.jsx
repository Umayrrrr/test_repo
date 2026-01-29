import { useEffect, useState } from "react";
import { supabase } from "../supabase-client";
import { Edit, Trash2 } from "lucide-react";
import { useNavigate } from "react-router";
import LoaderComp from "../components/Loader";

export default function Users() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  const deleteUser = async (userId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this profile?",
    );
    if (!confirmDelete) return;

    const { data, error } = await supabase.functions.invoke("delete-user", {
      body: { userId },
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_SERVICE_ROLE_KEY}`,
      },
    });

    if (error) {
      alert("Error deleting user: " + error.message);
    } else {
      setUsers(users.filter((u) => u.id !== userId));
      alert("User deleted successfully.");
    }
  };

  useEffect(() => {
    const checkRoleAndFetch = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        const { data: profile } = await supabase
          .from("profiles")
          .select("role")
          .eq("id", user.id)
          .single();

        if (profile?.role === "admin") {
          setIsAdmin(true);
          const { data: allUsers } = await supabase
            .from("profiles")
            .select("*");
          setUsers(allUsers || []);
        }
      }
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };
    checkRoleAndFetch();
  }, []);

  if (loading) return <LoaderComp />;
  if (!isAdmin)
    return (
      <p className="text-red-500 font-bold p-10">Access Denied: Admins Only</p>
    );

  return (
    <div className="p-6">
      <div className="flex justify-between ">
        <h2 className="font-bold text-2xl mb-4">Users</h2>
        <button
          onClick={() => navigate("/add-user")}
          className="mb-3 px-4 py-2  bg-green-600 text-white rounded-md hover:bg-green-700"
        >
          Add User
        </button>
      </div>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2 text-left">Email</th>
            <th className="border p-2 text-left">Name</th>
            <th className="border p-2 text-left">Role</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id} className="hover:bg-gray-50">
              <td className="border p-2">{u.email}</td>
              <td className="border p-2">{u.first_name}</td>
              <td className="border p-2">{u.role}</td>
              <td className="border p-2">
                <div className="flex justify-center gap-4">
                  <button
                    onClick={() => navigate(`/edit-user/${u.id}`)}
                    className="cursor-pointer text-blue-600 hover:text-blue-900"
                  >
                    <Edit size={20} />
                  </button>
                  <button
                    onClick={() => deleteUser(u.id)}
                    className="cursor-pointer text-red-700 hover:text-red-800"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

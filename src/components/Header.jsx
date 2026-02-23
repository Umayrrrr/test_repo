import { LogOut, LogOutIcon, LucideLogOut, MoreVertical } from "lucide-react";
import { redirect } from "react-router";
import { useNavigate } from "react-router";
import { supabase } from "../supabase-client";
export default function Header({ onToggle }) {
<<<<<<< HEAD
  const navigate = useNavigate();
  const logout = () => {
    supabase.auth.signOut().then(() => {
      navigate("/");
    });
  };
  return (
    <header className="bg-gray-800 text-white py-3 pb-0 px-6 shadow-md flex ">
      <h1 className="text-3xl font-bold">My App</h1>
      <div className="flex">
        <button
          onClick={onToggle}
          className="py-3 px-3 hover:bg-gray-700 cursor-pointer "
          title="Toggle sidebar"
        >
          <MoreVertical />
        </button>
        <div className="w-280 flex justify-end">
          <button className="cursor-pointer" onClick={logout}>
            <LogOutIcon />
          </button>
        </div>
      </div>
    </header>
  );
}
=======
    return (

        <header className="bg-gray-800 text-white py-3 pb-0 px-6 shadow-md flex ">
            <h1 className="text-3xl font-bold">My App</h1>
            <div className="flex ">
                <button 
                    
                    onClick={onToggle}
                    className="py-3 px-3 hover:bg-gray-700 cursor-pointer "
                    title="Toggle sidebar"
                >
                    <MoreVertical  />
                </button>
            </div>
        </header>
    );
}
>>>>>>> f07a3d7 (adding contact form)

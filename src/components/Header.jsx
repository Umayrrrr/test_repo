import { MoreVertical } from "lucide-react";

export default function Header({ onToggle }) {
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
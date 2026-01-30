import { Link } from 'react-router-dom';
import { Home, Info, Mail, MoreVertical } from 'lucide-react';

export default function Sidebar({ isOpen, toggleSidebar }) {
    return (
        <aside className={`${isOpen ? 'w-50' : 'w-20'} transition-all duration-700 text-white bg-gray-900 p-4`}>
            
            
            <nav className="flex flex-col gap-3">
                <Link to="/home" className="flex items-center gap-2 hover:bg-gray-500 p-2 rounded">
                    <Home  />
                    {isOpen && <span>Home</span>}
                </Link>
                <Link to="/about" className="flex items-center gap-2 hover:bg-gray-500 p-2 rounded">
                    <Info />
                    {isOpen && <span>About</span>}
                </Link>
                <Link to="/contacts" className="flex items-center gap-2 hover:bg-gray-500 p-2 rounded">
                    <Mail />
                    {isOpen && <span>Contacts</span>}
                </Link>
            </nav>
        </aside>
    );
}
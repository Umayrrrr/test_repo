import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from './components/sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginSignup from './components/LoginSignup';


export default function Layout() {
    return(<LoginSignup/>);
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // const toggleSidebar = () => {
  //   setIsSidebarOpen(!isSidebarOpen);
  // };

  // return (
    
  //   <div className="flex flex-col min-h-screen">
  //     <Header onToggle={toggleSidebar} />
      
  //     <div className="flex flex-auto">
  //       <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
  //       <main className="flex-1 p-4 bg-gray-50">
  //         <Outlet />
  //       </main>
  //     </div>
  //     <Footer />
  //   </div>
  // );
}
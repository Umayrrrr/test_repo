import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Sidebar from "./components/sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginSignup from "./pages/LoginSignup";
import axios from "axios";
import { useNavigate } from "react-router";

export default function Layout() {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header onToggle={toggleSidebar} />

      <div className="flex flex-auto">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <main className="flex-1 relative bg-gray-50">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}

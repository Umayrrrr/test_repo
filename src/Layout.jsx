import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Sidebar from './components/sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginSignup from './components/LoginSignup';



export default function Layout() {
  const login_status = sessionStorage.getItem('LoggedIn')
  const [isLoggedIn , setIsLoggedIn] = useState(()=>{
      
  })

  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  useEffect(()=>{
    if(login_status==="true")
      setIsLoggedIn(true)
    else
      setIsLoggedIn(false)
    console.log(isLoggedIn);
    
  },[login_status])
  
  if(!isLoggedIn){
    return <LoginSignup onLoginSuccess={() => setIsLoggedIn(!isLoggedIn)} />
  }

  return (
    
    <div className="flex flex-col min-h-screen">
      <Header onToggle={toggleSidebar}  />
      
      <div className="flex flex-auto">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <main className="flex-1 p-4 bg-gray-50">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}
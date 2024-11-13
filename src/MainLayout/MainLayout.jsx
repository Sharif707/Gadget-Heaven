import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Home from "../Pages/Home";
import toast, { Toaster } from 'react-hot-toast';
import DynamicTitle from "../utils/DynamicTitle";


const MainLayout = () => {
  
    return (
        <div className="max-w-7xl mx-auto lg:px-4 lg:py-3">
            <Navbar></Navbar>
          <DynamicTitle></DynamicTitle>
            <div className="min-h-screen">
                <Outlet></Outlet>

            </div>
                <Toaster />
                
         
            <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;
import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import ProductContainer from "../Components/ProductContainer";
import Sidebar from "../Components/Sidebar";

const Home = () => {
 const data = useLoaderData()
 
  return (
    <div>
    
      <Banner></Banner>
      {/* <ProductContainer categories={categories}></ProductContainer> */}


      <div className="grid grid-cols-1 md:grid-cols-4 my-12">
        <Sidebar categories={data}></Sidebar>
        <Outlet></Outlet>
       
        
       </div>
    </div>
  );
};

export default Home;

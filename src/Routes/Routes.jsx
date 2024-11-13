import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import Categories from "../Components/Categories";
import Sidebar from "../Components/Sidebar";
import Dashboard from "../Pages/Dashboard";
import ProductDetails from "../Pages/ProductDetails";
import ErrorPage from "../error-page";
import Statistics from "../Pages/Statistics";
import Products from "../Pages/Products";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
  errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
          path: "/",
          element: <Home></Home>,
          loader: () => fetch('../category.json'),
          
          children: [
          {
            path:"/",
            element: <Categories></Categories>,
            loader: () => fetch('../allProducts.json')
          },
          {
            path:"/category/:category",
            element: <Categories></Categories>,
            loader: () => fetch('../allProducts.json')
          },
          
         

          ]
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>
      },
      {
        path: "/details",
        element: <Dashboard></Dashboard>
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "/products",
        element: <Products></Products>,
        loader: () => fetch('../allProducts.json')
      },
      {
        path: "product/:id",
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch('../allProducts.json')
      }
    ],
  },
]);

export default router;

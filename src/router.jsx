import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import SalePage from "./pages/SalePage";
import Vouncher from "./pages/Vouncher";
import MainLayout from "./pages/MainLayout";

import ProductPage from "./pages/ProductPage";
import ProductCreate from "./pages/ProductCreate";
import ProductEditPage from "./pages/ProductEditPage";
import VouncherOne from "./pages/VouncherOne";

const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />, // Main layout that contains the navigation, footer, etc.
    //   errorElement: <ErrorPage />, // This renders if any route gives an error
      children: [
        {
          path: "/", // Home page
          element: <Home />
        },
        {
          path: "dashboard", // About us page
          element: <Dashboard />
        },
        {
          path: "productPage", // My cart page
          element: <ProductPage />
        },
        {
          path: "salePage", // Product detail page with dynamic slug parameter
          element: < SalePage/>
        },
        {
            path: "vouncher", // Product detail page with dynamic slug parameter
            element: < Vouncher/>
          },
          {
            path: "productPage/ProductCreate", // Product detail page with dynamic slug parameter
            element: < ProductCreate/>
          },
          {
            path: "productPage/ProductEditPage/:id", // Product detail page with dynamic slug parameter
            element: <ProductEditPage/>
          },
          {
            path: "vouncher/VouncherOne/:id", // Product detail page with dynamic slug parameter
            element: <VouncherOne/>
          },
        
         
      ]
    }
  ]);
  
  export default router;
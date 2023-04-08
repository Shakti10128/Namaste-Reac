import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// components
import Header from "./component/Header";
import Main from "./component/Main";
import Search from "./component/Search";
import Cart from './component/Cart'
import Error from "./component/Error";
import Footer from "./component/Footer";
import RestaurantDetails from "./component/RestaurantDetails";
// import { CartDetial } from "./component/RestaurantDetails";
import ProductDetail from "./component/ProductDetail";
import Offer from "./component/Offer";
import Help from "./component/Help";

const AppList = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppList/>,
    errorElement: <Error/>,
    children:[
      {
        path:"/",
        element: <Main />,
      },
      {
        path:"/search",
        element: <Search />,
      },
      {
        path:"offer",
        element: <Offer/>,
      },
      {
        path:"help",
        element: <Help/>
      },
      {
        path:"cart",
        element: <Cart/>
      },
      {
        path:"restaurant/:resId",
        element: <RestaurantDetails/>,
      },
      {
        path:"restaurant/:resId/productdetail/:id",
        element: <ProductDetail/>
      },
    ],
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

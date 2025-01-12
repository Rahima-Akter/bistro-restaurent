import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import OurMenu from "../pages/OurMenu/OurMenu";
import OurShop from "../pages/OurShop/OurShop";
import Contact from "../pages/Contact/Contact";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/ourMenu',
        element: <OurMenu />
      },
      {
        path: '/ourShop',
        element: <OurShop />
      },
      {
        path: '/contact',
        element: <Contact />
      },
    ]
  },
]);

export default router;
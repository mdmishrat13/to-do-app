import { createBrowserRouter } from "react-router-dom";
import AboutUs from "../Pages/AboutUs/AboutUs";
import EnterUser from "../Pages/EnterUser/EnterUser";
import Home from "../Pages/Home/Home";
import Layout from "../Pages/Layout/Layout";
import NotFound from "../Pages/NotFound/NotFound";
import TermsAndCon from "../Pages/TermsAndCon/TermsAndCon";
import UpdateData from "../Pages/UpdateData/UpdateData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "enter-user",
        element: <EnterUser />,
      },
      {
        path: "update-data",
        element: <UpdateData />,
      },
      {
        path: "terms-conditions",
        element: <TermsAndCon />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
    ],
  },
]);

export default router;

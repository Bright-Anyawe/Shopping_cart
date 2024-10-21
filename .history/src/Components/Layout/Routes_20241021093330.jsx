import App from "./App";
import HomePage from "../Pages/Homepage";
import Shop from "../Pages/Shop";
import About from "../Pages/About";
import Help from "../Pages/Help";
import Contact from "../Pages/Contact";
import Faq from "../Pages/Faq";
import ErrorPage from "./Errorpage";
import { element } from "prop-types";

const routes = [
  {
    path: "/",
    element: <App />,
    ErrorElement: <ErrorPage />,
    children: [{ path: "homePage", element: <HomePage />, index: true },
     { path: "shop", element: <Shop />, index: true },
     { path: "about", element: <About />, index: true },
     { path: "help", element: <Help />, index: true },
    ],
  },
];

export default routes;

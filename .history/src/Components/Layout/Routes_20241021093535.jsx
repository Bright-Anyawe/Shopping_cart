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
    children: [
      { path: "homePage", element: <HomePage />, index: true },
      { path: "shop", element: <Shop /> },
      { path: "about", element: <About /> },
      {
        path: "help",
        element: <Help />,
        children: [
          { path: "contact", element: <Contact />},
          { path: "faq", element: <Faq />}
        ],
      },
    ],
  },
];

export default routes;

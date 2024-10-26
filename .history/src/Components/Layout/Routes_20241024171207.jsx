import App from "./App";
import HomePage from "../Pages/Homepage";
import Shop from "../Pages/Shop";
import About from "../Pages/About";
import Help from "../Pages/Help";
import Contact from "../Pages/Contact";
import Faq from "../Pages/Faq";
import ErrorPage from "./Errorpage";

import MensClothing from "../Categories/MenClothing";// import { element } from "prop-types";
import WomensClothing from "../Categories/WomensClothing";
import Electronics from "../Categories/Electronics";
import Jewelry from "../Categories/Jewelry";



const routes = [
  {
    path: "/",
    element: <App />,
    ErrorElement: <ErrorPage />,
    children: [
      { element: <HomePage />, index: true },
      { path: "shop", element: <Shop /> },
      { path: "about", element: <About /> },
      { path: "mensClothing", element: <MensClothing /> },
      { path: "about", element: <WomensClothing /> },
      { path: "about", element: <About /> },
      { path: "about", element: <About /> },
      { path: "about", element: <About /> },

      {
        path: "help",
        element: <Help />,
        children: [
          { path: "contact", element: <Contact /> },
          { path: "faq", element: <Faq /> },
        ],
      },
    ],
  },
];

export default routes;

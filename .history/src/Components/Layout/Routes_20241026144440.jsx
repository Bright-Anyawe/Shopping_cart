import App from "./App";
import HomePage from "../Pages/Homepage.jsx";
import Shop from "../Pages/Shop";
// import About from "../Pages/About";
// import Help from "../Pages/Help";
// import Contact from "../Pages/Contact";
// import Faq from "../Pages/Faq";

import MenClothing from "../Categories/MenClothing"; // import { element } from "prop-types";
import WomenClothing from "../Categories/WomenClothing";
import Electronics from "../Categories/Electronics";
import Jewelry from "../Categories/Jewelry";
import QuantitySummery from "../Categories/Quantity Summery.jsx";


const routes = [
  {
    path: "/",
    element: <App />,
    // ErrorElement: <ErrorPage />,
    children: [
      { element: <HomePage />, index: true },
      { path: "shop", element: <Shop /> },
      { path: "menClothing", element: <MenClothing /> },
      { path: "womenClothing", element: <WomenClothing /> },
      { path: "electronics", element: <Electronics /> },
      { path: "jewelry", element: <Jewelry /> },
      { path: "jewelry", element: <Jewelry /> },
    ],
  },
];

export default routes;

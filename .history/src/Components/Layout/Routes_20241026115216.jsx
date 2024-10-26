import App from "./App";
import HomeP
import Shop from "../Pages/Shop";
// import About from "../Pages/About";
// import Help from "../Pages/Help";
// import Contact from "../Pages/Contact";
// import Faq from "../Pages/Faq";
import ErrorPage from "./Components/Layout/ErrorPage.jsx";

import MenClothing from "../Categories/MenClothing"; // import { element } from "prop-types";
import WomenClothing from "../Categories/WomenClothing";
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
      { path: "menClothing", element: <MenClothing /> },
      { path: "womenClothing", element: <WomenClothing /> },
      { path: "electronics", element: <Electronics /> },
      { path: "jewelry", element: <Jewelry /> },
    ],
  },
];

export default routes;

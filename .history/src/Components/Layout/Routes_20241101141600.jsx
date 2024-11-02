import App from "./App";
import HomePage from "./Homepage.jsx";
import Shop from "./Shop.jsx";
// import About from "../Pages/About";
// import Help from "../Pages/Help";
// import Contact from "../Pages/Contact";
// import Faq from "../Pages/Faq";
import ErrorPage from "./ErrorPage.jsx";  
import MenClothing from "../Categories/MenClothing"; // import { element } from "prop-types";
import WomenClothing from "../Categories/WomenClothing";
import Electronics from "../Categories/Electronics";
import Jewelry from "../Categories/Jewelry";
import QuantitySummery from "./Quantity Summery.jsx";

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
      { path: "quantitySummery", element: <QuantitySummery /> },
    ],
  },
];

export default routes;

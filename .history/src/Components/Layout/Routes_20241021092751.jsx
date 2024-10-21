import App from "./App";
import HomePage from "../Pages/Homepage";
import Shop from "../Pages/Shop";
import About from "../Pages/About";
import Help from "../Pages/Help";
import Contact from "../Pages/Contact";
import Faq from "../Pages/Faq";




const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <HomePage /> }],
  },
];

export default routes;

import App from "./App";
import HomePage from "../Pages/Homepage";
import Shop from "../Pages/Shop";
import About from "../Pages/About";
import Help from "../Pages/Help";


const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <HomePage /> }],
  },
  {
    path: "profile",
    element: <Profile />,
  },
  {
    path: "help",
    element: <Help />,
    children: [
      { path: "faq", element: <Faq /> },
      { path: "contact", element: <Contact /> },
    ],
  },
];

export default routes;

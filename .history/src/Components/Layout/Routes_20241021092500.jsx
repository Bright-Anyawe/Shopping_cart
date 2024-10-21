

import { element } from "prop-types";
import { Children } from "react";
import App from "./Layouts/App";
import HomePage from "./Pages/Homepage";
import Profile from "./Pages/Profile";
import Help from "./Pages/Help";
import Faq from "./Pages/Helps/Faq";
import Contact from "./Pages/Helps/Contact";
import ErrorPage from "./Pages/ErrorPage";

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

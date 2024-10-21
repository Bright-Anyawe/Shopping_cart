import App from "./App";
import HomePage from "../Pages/Homepage";
import <Shop></Shop>



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

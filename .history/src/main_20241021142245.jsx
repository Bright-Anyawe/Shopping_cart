import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./Components/Layout/Routes";
const router = createBrowserRouter(routes);
import "./src/Components/Styles/index.css"
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

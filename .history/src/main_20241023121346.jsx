import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, MemoryRouter, RouterProvider } from "react-router-dom";
import routes from "./Components/Layout/Routes";
const router = createBrowserRouter(routes);
import "./Components/Styles/index.css"
import "./Components/Styles/App.css"
createRoot(document.getElementById("root")).render(
  <StrictMode>c

    <> 
    <RouterProvider router={router} />
  </StrictMode>
);

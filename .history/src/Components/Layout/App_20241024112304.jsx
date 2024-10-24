import { createContext } from "react";
import Header from "./Header";

// import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const QuantityContext = createContext(null)

export default function App() {
    const [quantityCount, setQuantityCount] = useState(0);


  return (
    <>
      <div className="root-layout">

        Quantit
      </div>
    </>
  );
}

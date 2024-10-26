import Header from "./Header";

// import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";


export default function App() {
    const [quantity, setQuantity] = useState(0);


  return (
    <>
      <div className="root-layout">
        <Header />
        <main>
          <Outlet  />
        </main>
      </div>
    </>
  );
}
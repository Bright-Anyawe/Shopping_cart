import Header from "./Header";

// import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Quantity

export default function App() {
    const [quantityCount, setQuantityCount] = useState(0);


  return (
    <>
      <div className="root-layout">
        <Header />
        <main>
          <Outlet context={[quantityCount, setQuantityCount]} />
        </main>
      </div>
    </>
  );
}

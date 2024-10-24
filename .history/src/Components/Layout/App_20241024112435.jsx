import { createContext } from "react";
import Header from "./Header";

// import { useState } from "react";
import { Outlet } from "react-router-dom";

const QuantityContext = createContext(null)

export default function App() {
    const [quantityCount, setQuantityCount] = useState(0);


  return (
    <>
      <div className="root-layout">
        <QuantityContext.Provider value={(quantityCount, setQuantityCount)}>
          <Header />
          <main>
            <Outlet/>
          </main>
        </QuantityContext.Provider>
      </div>
    </>
  );
}

import { createContext } from "react";
import {Header} from "./Header";
import { useState } from "react";
import { Outlet } from "react-router-dom";


export const QuantityContext = createContext(null)

export default function App() {
    const [quantityCount, setQuantityCount] = useState([]);


  return (
    <>
      <div className="root-layout">
        <QuantityContext.Provider value={{quantityCount, setQuantityCount}}>
          <Header />
          <main>
            <Outlet/>
          </main>
        </QuantityContext.Provider>
      </div>
    </>
  );
}

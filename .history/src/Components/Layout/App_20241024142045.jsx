import { createContext } from "react";
import {Header} from "./Header";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { SideBar } from "./SideBar";

export const QuantityContext = createContext(null)


export default function App() {
  const [quantityCount, setQuantityCount] = useState({});
  const [quantity, setQuantity] = useState(0);

  return (
    <>
      <div className="root-layout">
        <QuantityContext.Provider
          value={{ quantityCount, setQuantityCount, quantity, setQuantity }}
        >
          <Header />
          <main>
<SideBar/>
            
            <Outlet />
          </main>
        </QuantityContext.Provider>
      </div>
    </>
  );
}

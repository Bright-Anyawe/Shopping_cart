import { createContext } from "react";
import { Header } from "./Header";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { SideBar } from "./SideBar";

export const QuantityContext = createContext(null);
export const QtySummeryContext = createContext([])

export default function App() {
  const [quantityCount, setQuantityCount] = useState(0);
  const [quantity, setQuantity] = useState({});

  return (
    <>
      <div className="root-layout">
        <QuantityContext.Provider
          value={{ quantityCount, setQuantityCount, quantity, setQuantity }}
        >
          <QtySummeryContext.Provider  value={} >
            <Header />
            <main>
              <SideBar />

              <Outlet />
            </main>
          </QtySummeryContext.Provider>
        </QuantityContext.Provider>
      </div>
    </>
  );
}

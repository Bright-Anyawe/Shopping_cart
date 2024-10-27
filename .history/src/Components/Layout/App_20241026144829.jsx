import { createContext } from "react";
import { Header } from "./Header";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { SideBar } from "./SideBar";

export const QuantityContext = createContext(null);
export const QtySummeryContext = createContext({
  productUrl: '',
  productPrice: '',
  QtySelected: ''
})

export default function App() {
  const [quantityCount, setQuantityCount] = useState(0);
  const [quantity, setQuantity] = useState({});

  return (
    <>
      <div className="root-layout">
        <QuantityContext.Provider
          value={{ quantityCount, setQuantityCount, quantity, setQuantity }}
        >
          <Header />
          <main>
            <SideBar />

            <Outlet />
          </main>
        </QuantityContext.Provider>
      </div>
    </>
  );
}

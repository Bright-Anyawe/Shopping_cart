import { createContext } from "react";
import { Header } from "./Header";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { SideBar } from "./SideBar";

export const QuantityContext = createContext(null);
export const QtySummeryContext = createContext([]);

export default function App() {
  const [quantityCount, setQuantityCount] = useState('');
  const [quantity, setQuantity] = useState({});
  const [qtySummery, setSummery] = useState([]);
  const [qtySummeryObject, setQuantitySummeryObject] = useState({
    productUrl: "",
    productTitle: '',
    productPrice: "",
    QtySelected: "",
    qtySubTotal: "",
  });

  return (
    <>
      <div className="root-layout">
        <QuantityContext.Provider
          value={{ quantityCount, setQuantityCount, quantity, setQuantity }}
        >
          <QtySummeryContext.Provider
            value={{
              qtySummery,
              setSummery,
              qtySummeryObject,
              setQuantitySummeryObject,
            }}
          >
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

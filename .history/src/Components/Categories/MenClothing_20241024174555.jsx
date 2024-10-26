
import { useEffect, useState } from "react";
// import { useShopProduct } from "./GetShopProduct";
// import { useContext } from "react";
// import { QuantityContext } from "../Layout/App";

const MenClothing = () => {
  const [menProduct, setMenProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);

  useEffect(() => {
    async function fetchData() {
      let response;

      try {
        response = await fetch(
          "https://fakestoreapi.com/products/category/men's%20clothing",
          {
            mode: "cors",
          }
        );

        const menProduct = await response.json();
        console.log(menProduct);

        setMenProduct(menProduct);
      } catch (error) {

           console.log("Not found");
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <ul>
        {loading ? (
          <p className="loading">Loading...</p>
        ) : error ? (
          
          <p className="errorDisplay">A network error was encountered</p>
        ) : null}
      </ul>
    </>
  );
};

export default MenClothing;

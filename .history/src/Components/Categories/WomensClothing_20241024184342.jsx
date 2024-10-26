




import { useEffect, useState } from "react";
// import { useShopProduct } from "./GetShopProduct";
import { useContext } from "react";
import { QuantityContext } from "../Layout/App";

const WomenClothing = () => {

  const { quantityCount, setQuantityCount, quantity, setQuantity } =
    useContext(QuantityContext);

  const [womenProduct, setWomenProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);

  
  const [costPrice, setCostPrice] = useState({});

  const increment = () =>
    setQuantityCount((prevQuantities) => prevQuantities[quantity] + 1);

  const decrease = () =>
    setQuantityCount((prevQuantities) => prevQuantities[quantity] - 1);



  useEffect(() => {
    async function fetchData() {
      let response;

      try {
        response = await fetch(
          "https://fakestoreapi.com/products/category/women's%20clothing",
          {
            mode: "cors",
          }
        );

        const womenProduct = await response.json();
        console.log(womenProduct);

        setWomenProduct(womenProduct);
      } catch (error) {
        setError(error);
        console.log("Not found");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  
  useEffect(() => {
    if (womenProduct.length !== 0) {
      const initialCost = womenProduct.reduce((acc, item) => {
        if (item.price !== undefined && item.id !== null) {
          acc[item.price] = item.price ? item.price : null;
        }
        return acc;
      }, {});

      setCostPrice(initialCost);
    }
  }, [womenProduct]);

  function handleQuantity(e, itemId) {
    console.log(quantityCount);
    console.log(itemId);

    const newQuantity = e.target.value;

    if (quantityCount !== undefined) {
      setQuantityCount((prevQuantities) => ({
        ...prevQuantities,
        [itemId]: newQuantity,
      }));

      setQuantity(itemId);
    }
  }

  if (loading) {
    return <p className="loading">Loading...</p>;
  }

  if (error) {
    <p className="errorDisplay">A network error was encountered</p>;
  }


  return (
    <>
      <ul>
        {loading ? (
          <p className="loading">Loading...</p>
        ) : error ? (
          <p className="errorDisplay">A network error was encountered</p>
        ) : (
         
          ))
        )}
      </ul>
    </>
  );
};

export default WomenClothing;

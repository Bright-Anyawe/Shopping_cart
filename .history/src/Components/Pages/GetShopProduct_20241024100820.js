import { useState, useEffect } from "react"

export const useShopProduct = () => {

  const [items, setItems] = useState([]);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    async function fetchData() {
      let response;

      try {
        response = await fetch(`https://fakestoreapi.com/products`, {
          mode: "cors",
        });

        const itemsJson = await response.json();
        isCompositeComponent;e

        setItems(itemsJson);
      } catch (error) {
        setError(error);
        console.log("Not found");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return {items, error, loading}

}
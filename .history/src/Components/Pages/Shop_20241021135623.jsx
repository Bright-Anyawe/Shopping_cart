import { useEffect, useState } from "react";

const Shop = () => {
  const [items, setItems] = useState([
    {
      url: "",
      name: "Juice",
      price: "$10.00",
    },
  ]);

  useEffect(() => {
    async function fetchData() {
      const request1 = fetch("https://fakestoreapi.com/carts", {
        mode: "cors",
      });

      try(
          const response = await request1;
      ).catch(error) {
          
      }
    }
  });

  return <></>;
};

export default Shop;

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
      //  const request1 = fetch("https://fakestoreapi.com/carts", {
      //    mode: "cors",
      //  });
      let response;

      try {
        response = await fetch("https://fakestoreapi.com/carts/5", {
          mode: "cors",
        });

        const items = response.json();

        console.log(items);
      } catch (error) {
        console.log("Not found");
      }
    }
    fetchData()
  });

  return <>
     <ul>
  {items.map((item, index) => {
         <li
           key={item.name}
           data-name={item.name}
           className="card"
           onClick={changeCardsPosition}
         >
           {/* <h1> {key} </h1> */}
           <img src={card.url} alt={card.name} />
           <h2> {card.name} </h2>
         </li>
     })}
     </ul>;
  
  </>;
};

export default Shop;

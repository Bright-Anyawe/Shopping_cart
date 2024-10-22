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
           className="item"
         >
           <img src={item.url} alt={item.name} />
           <h2> {item.name} </h2>
           <div>
               <p>Qty</p>
               <input type="number" />
           </div>
         </li>
     })}
     </ul>;
  
  </>;
};

export default Shop;

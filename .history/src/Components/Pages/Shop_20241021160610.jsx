import { useEffect, useState } from "react";

const Shop = () => {
  const [items, setItems] = useState([
    {
      url: "",
      name: "Juice",
      price: "$10.00",
    },
  ]);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      //  const request1 = fetch("https://fakestoreapi.com/carts", {
      //    mode: "cors",
      //  });
      let response;

      try {
        response = await fetch(`https://fakestoreapi.com/products`, {
          mode: "cors",
        });

        const itemsJson = await response.json();
        const items = itemsJson[5]
        console.log(items)
        console.log(itemsJson);

        
      } catch (error) {
          setError(error)
        console.log("Not found");
      }
      finally {
          setLoading(false)
      }

    }
    fetchData();
  },[]);

  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <>
      <ul>
        {items.map((item, index) => {
          <li key={item.name} data-name={item.name} className="item">
            <img src={item.url} alt={item.name} />
            <h2> {item.name} </h2>
            <div>
              <p>Qty</p>
              <input type="number" />
            </div>

            <div>
              <p>price: {item.price}</p>
              <button>Order now!</button>
            </div>
          </li>;
        })}
      </ul>
      ;
    </>
  );
};

export default Shop;

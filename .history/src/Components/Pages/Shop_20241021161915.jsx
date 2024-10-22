import { useEffect, useState } from "react";

const Shop = () => {
  const [items, setItems] = useState([]);

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
        const items = itemsJson[5];

        setItems(itemsJson);
        console.log(items);
        console.log(itemsJson);
      } catch (error) {
        setError(error);
        console.log("Not found");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  console.log(items);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>A network error was encountered</p>;

  return (
    <>
      <ul>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>A network error was encountered</p>
        ) : (
          items.map((item) => {
          console.log(item)
            <li key={item.id} data-name={item} className="item">
              <img src={item.image} alt={item} />
              <h2> {item.title} </h2>
              <div>
                <p>Qty</p>
                <input type="number" />
              </div>

              <div>
                <p>price: {item.price}</p>
                <button>Order now!</button>
              </div>
            </li>;
          })
        )}
      </ul>
    </>
  );
};

export default Shop;

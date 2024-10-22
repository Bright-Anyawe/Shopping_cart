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
        response = await fetch(
          "https://fakestoreapi.com/products/category/jewelery",
          {
            mode: "cors",
          }
        );

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
          items.map((item) => (
            <div className="container">
              <li key={item.id} className="imageContainer">
                <img src={item.image} alt={item.title} />
              </li>
              <h4>{item.title}</h4>
              <div className="quantityContainer">
                <p className="quantity">Qty: </p>
                <input type="number" />
              </div>

              <div className="priceOrderEl">
                <p>{`price: $${item.price}`}</p>
                <button>Order now!</button>
              </div>
            </div>
          ))
        )}
      </ul>
    </>
  );
};

export default Shop;

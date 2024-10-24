import { useEffect, useState } from "react";

const Shop = () => {
  const [items, setItems] = useState([]);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  // const [onFocus, setOnFocus] = useState(false);
  console.log(items)

  const [quantity, setQuantity] = useState({})



  useEffect(() => {
    async function fetchData() {
      let response;

      try {
        response = await fetch(`https://fakestoreapi.com/products`, {
          mode: "cors",
        });

        const itemsJson = await response.json();

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

  
  useEffect(() => {
    const initialQuantity = items.reduce((acc, item) => {
      acc[item.id] = 0;
    });

    setQuantity();
  }, [items]);

  function handleQuantity(e, itemId) {
console.log(quantity)
    const newQuantity = e.target.value;

if(quantity !== undefined) {
      setQuantity((prevQuantities) => ({
        ...prevQuantities,
        [itemId]: newQuantity,
      }));
console.log(quantity);

}


    // if (onFocus) {
    //   console.log("Input is focus!");
    //   const inputIndex = e.target.dataset.index;
    //   const quantityDisplayIndex =
    //     e.target.previousElementSibling.dataset.index;
    //   // let quantityDisplayEl = quantityDisplayIndex.textContent

    //   if (quantityDisplayIndex === inputIndex) {
    //     setDisplayQuantity(quantity);
    //   }
    // }
  }

  return (
    <>
      <ul>
        {loading ? (
          <p className="loading">Loading...</p>
        ) : error ? (
          <p className="errorDisplay">A network error was encountered</p>
        ) : (
          items.map((item) => (
            <div className="container" key={item.id}>
              <li className="imageContainer">
                <img src={item.image} alt={item.title} />
              </li>
              <h4>{item.title}</h4>
              <div className="quantityContainer">
                <p className="quantity" data-index={item.id}>
                  Qty:{quantity[item.id]}{" "}
                </p>
                <input
                  type="number"
                  data-index={item.id}
                  // onFocus={() => setOnFocus(true)}
                  value={quantity[item.id]}
                  onChange={(e) => handleQuantity(e, item.id)}
                />
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

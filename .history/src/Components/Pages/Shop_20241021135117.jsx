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
          const request1 = fetch(
            "https://api.giphy.com/v1/stickers/translate?api_key=xUGeBWKikoUF1sOZRB6a37IK2KhrYt3e&s=spiderman",
            { mode: "cors" }
          );

          
     }
})

  return (

     <>
     
     
     </>
  )


};

export default Shop;

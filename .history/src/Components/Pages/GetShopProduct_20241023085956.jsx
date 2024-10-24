import { useState, useEffect } from "react"

export const useShopProduct = () => {

  const [items, setItems] = useState([]);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

}
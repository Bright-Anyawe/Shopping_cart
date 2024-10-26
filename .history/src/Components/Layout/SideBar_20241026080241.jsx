import { NavLink } from "react-router-dom";
import { useShopProduct } from "../Pages/GetShopProduct";



export const SideBar = () => {
const {loading} = useShopProduct()


  return (
    <>
      {loading? null:

      
    
    }

    </>
  );
};

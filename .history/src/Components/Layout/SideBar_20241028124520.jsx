import { NavLink } from "react-router-dom";
import { useShopProduct } from "./GetShopProduct";

export const SideBar = () => {
  const { loading } = useShopProduct();

  return (
    <>
      {loading ? null : (
        <section className="categoriesContainer">
          <aside>
            <h2 className="shopText">Categories</h2>

            <nav className="asideNavContainer">
              <ul className="itemsContainer">
                <li>
                  <NavLink to="shop">All</NavLink>
                </li>

                <li>
                  {" "}
                  <NavLink to="menClothing">Men Clothing</NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink to="womenClothing">Women Clothing</NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink to="electronics">Electronics</NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink to="jewelry">Jewelry</NavLink>
                </li>
              </ul>{" "}
            </nav>
          </aside>
        </section>
      )}
    </>
  );
};

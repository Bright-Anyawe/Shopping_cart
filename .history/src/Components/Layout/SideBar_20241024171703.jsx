import { NavLink } from "react-router-dom";

export const SideBar = () => {
  return (
    <>
      <section className="categoriesContainer">
        <aside>
          <h2 >Categories</h2>

          <nav className="asideNavContainer">
            <ul className="itemsContainer">
              <li>
                <NavLink to='shop'  >All</NavLink>
              </li>

              <li>
                {" "}
                <NavLink to='menClothing' >Men&apos;s Clothing</NavLink>
              </li>
              <li>
                {" "}
                <NavLink to='womenClothing' >Women&apos;s Clothing</NavLink>
              </li>
              <li>
                {" "}
                <NavLink to='electronics' >Electronics</NavLink>
              </li>
              <li>
                {" "}
                <NavLink to='' >Jewelry</NavLink>
              </li>
            </ul>{" "}
          </nav>
        </aside>
      </section>
    </>
  );
};

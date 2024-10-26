import { NavLink } from "react-router-dom";

export const SideBar = () => {
  return (
    <>
      <section className="categoriesContainer">
        <aside>
          <h2>Categories</h2>

          <nav>
            <ul>
              <li>
                <NavLink>All</NavLink>
              </li>


              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>{" "}
            <NavLink>Women&apos;s Clothing</NavLink>
            <NavLink>Electronics</NavLink>
            <NavLink>Jewelry</NavLink>
          </nav>
        </aside>
      </section>
    </>
  );
};

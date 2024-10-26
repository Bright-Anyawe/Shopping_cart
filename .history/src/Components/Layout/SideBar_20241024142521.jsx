import { NavLink } from "react-router-dom";

export const SideBar = () => {
  return (
    <>
      <section className="categoriesContainer">
        <aside>
          <h2>Categories</h2>

          <nav className="side">
            <ul>
              <li>
                <NavLink>All</NavLink>
              </li>

              <li>
                {" "}
                <NavLink>Men&apos;s Clothing</NavLink>
              </li>
              <li>
                {" "}
                <NavLink>Women&apos;s Clothing</NavLink>
              </li>
              <li>
                {" "}
                <NavLink>Electronics</NavLink>
              </li>
              <li>
                {" "}
                <NavLink>Jewelry</NavLink>
              </li>
            </ul>{" "}
          </nav>
        </aside>
      </section>
    </>
  );
};

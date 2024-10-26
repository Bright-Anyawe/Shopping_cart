export const SideBar = () => {
  return (
    <>
      <section className="categoriesContainer">
        <aside>
          <h2>Categories</h2>

          <nav>
            <NavLink>All</NavLink>
            <NavLink>Men's Clothing</NavLink>
            <NavLink>Womenls</NavLink>
            <NavLink>All</NavLink>
          </nav>
        </aside>
      </section>
    </>
  );
};

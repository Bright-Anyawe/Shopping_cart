import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
export default function App() {
  return (
    <>
      <div className="root-layout">
        <header>
          <h1 class>Shop rite</h1>
          <nav className="navLinks">
            <NavLink to="/">Home</NavLink>
            <NavLink to="shop">Shop</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="help">Help</NavLink>
          </nav>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}

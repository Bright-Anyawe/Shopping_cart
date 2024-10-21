// import { useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";

export default function Help() {
  // const { name } = useParams();
  //
  return (
    <div className="help-layout">
      <h2>Website Help</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque quas
        debitis quibusdam deserunt repellat hic molestias ipsum commodi aut
        odit!
      </p>

      <nav>
        <NavLink to="faq">View the FAQ</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
      </nav>

      <Outlet />
    </div>
  );
}

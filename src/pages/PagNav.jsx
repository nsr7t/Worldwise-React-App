import { NavLink } from "react-router-dom";

function PageNav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">App</NavLink>
        </li>
      </ul>
      <ul>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
      </ul>
      <ul>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default PageNav;

import { NavLink, Outlet } from "react-router-dom";

export default function HostLayout() {
  return (
    <>
      <nav className="host-navbar">
        <NavLink to="/host">Dashboard</NavLink>
        <NavLink to="/host/income">Income</NavLink>
        <NavLink to="/host/reviews">Reviews</NavLink>
      </nav>
      <Outlet />
    </>
  );
}

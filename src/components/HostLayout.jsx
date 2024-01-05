import { Link, Outlet } from "react-router-dom";

export default function HostLayout() {
  return (
    <>
      <nav className="host-navbar">
        <Link to="/host">Dashboard</Link>
        <Link to="/host/income">Income</Link>
        <Link to="/host/vans">Vans</Link>
        <Link to="/host/reviews">Reviews</Link>
      </nav>
      <Outlet />
    </>
  );
}
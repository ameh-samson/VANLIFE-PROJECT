import { Navigate, Outlet } from "react-router-dom";

export default function AuthRequired() {
  const auth = false;

  if (!auth) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}

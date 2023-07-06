import { useEffect } from "react";
import { Outlet } from "react-router";
import { useNavigate, useLocation } from "react-router-dom";

export default function LayoutUser() {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/admin/user") {
      navigate("/admin/user/account");
    }
  }, [location, navigate]);
  return (
    <>
      <Outlet />
    </>
  );
}

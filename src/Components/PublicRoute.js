import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./Contexts/AuthContext";

export default function PublicRoute() {
  const { currentUser } = useAuth();

  return currentUser ? <Navigate to="/" /> : <Outlet />;
}

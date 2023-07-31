import { Navigate, Outlet } from "react-router-dom";
import { ReactNode } from "react";
import { usePayContext } from "src/Context/PayContext";

interface ProtectedRouteProps {
  redirectPath?: string;
  children?: ReactNode;
}

const ProtectedRoute = ({
  redirectPath = "/",
  children,
}: ProtectedRouteProps) => {
  const { isPaid } = usePayContext();

  if (!isPaid) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;

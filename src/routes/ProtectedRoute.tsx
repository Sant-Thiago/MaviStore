import { Navigate } from "react-router-dom";

type ProtectedRouteProps = {
  isAuthenticated: boolean;
  children: JSX.Element;
};

export function ProtectedRoute({ isAuthenticated, children }: ProtectedRouteProps) {
  return isAuthenticated ? children : <Navigate to="/login" />;
}

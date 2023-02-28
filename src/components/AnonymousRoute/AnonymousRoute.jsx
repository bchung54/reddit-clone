import { useAuth } from 'contexts/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';

function AnonymousRoute() {
  const { currentUser } = useAuth();
  return currentUser ? <Navigate to="/" replace /> : <Outlet />;
}

export default AnonymousRoute;

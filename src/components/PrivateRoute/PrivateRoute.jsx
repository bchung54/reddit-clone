/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useAuth } from 'contexts/AuthContext';

function PrivateRoute({ element: Element }) {
  const { currentUser } = useAuth();
  return currentUser ? Element : <Navigate replace to="/account/login/" />;
}

PrivateRoute.propTypes = {
  element: PropTypes.node.isRequired,
};

export default PrivateRoute;

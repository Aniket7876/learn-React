import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function Protected({ children, authentication = true }) {
  const authStatus = useSelector(state => state.auth.status);

  if (authentication && !authStatus) {
    return <Navigate to="/login" replace={true} />;
  } else if (!authentication && authStatus) {
    return <Navigate to="/" replace={true} />;
  }

  return children;
}

import React from 'react'
import { useContext } from 'react';
import { Authcontext } from '../../context/AuthProvider/AuthProvider';
import { useLocation } from 'react-router-dom';

const PrivateRouter = () => {
    const { user, loading } = useContext(Authcontext)
    const location = useLocation();
  return (
    <div>PrivateRouter</div>
  )
}
export default PrivateRouter;

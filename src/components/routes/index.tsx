import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '@pages/Home';
import About from '@pages/About';
import ROUTES from '@config/routes';
import PrivateRoute from '@components/Routes/PrivateRoute';
import Login from '@pages/Login';

const RouterProvider: React.FC = () => {
  return (
   <Router>
      <Routes>
         {/* Template Public Routes */}
         <Route path={ROUTES.HOME} element={<Home />} />
         <Route path={ROUTES.LOGIN} element={<Login/>} />
         
         {/* Template Private Routes */}
         <Route path={ROUTES.ABOUT} element={<PrivateRoute Component={About} />} /> 
      </Routes>
  </Router>
  );
};

export default RouterProvider;

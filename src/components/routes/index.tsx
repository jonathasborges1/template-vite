import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ROUTES } from '@config/routes';
import PrivateRoute from '@components/Routes/PrivateRoute';

import TypographyPage from '@pages/Typography';
import Login from '@pages/Login';
import Home from '@pages/Home';
import About from '@pages/About';

const RouterProvider: React.FC = () => {

  return (
   <Router>
      <Routes>
         {/* Template Public Routes */}
         <Route index path={ROUTES.HOME} element={<Home />} />
         <Route path={ROUTES.LOGIN} element={<Login/>} />
         <Route path={ROUTES.TYPOGRAPHY} element={<TypographyPage/>} />

         {/* Template Private Routes */}
         <Route path={ROUTES.ABOUT} element={<PrivateRoute Component={About} />} /> 
      </Routes>
  </Router>
  );
};

export { RouterProvider };

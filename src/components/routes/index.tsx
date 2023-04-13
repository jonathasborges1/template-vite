import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '@pages/Home';
import About from '@pages/About';
import ROUTES from '@config/routes';
import PrivateRoute from '@components/Routes/PrivateRoute';

const RouterProvider: React.FC = () => {
  return (
   <Router>
      <Routes>
         <Route path={ROUTES.HOME} element={<Home />} />
         <PrivateRoute path={ROUTES.ABOUT} element={<About />} />
      </Routes>
  </Router>
  );
};

export default RouterProvider;
// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routes from 'routes/routes';
import PageLayout from 'pages/PageLayout';

const App = () => (
  <Router>
    <Routes>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={<PageLayout><route.component /></PageLayout>}
          exact={route?.exact}
        />
      ))}
    </Routes>
  </Router>
);

export default App;

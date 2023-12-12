// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import routes from 'routes/routes';
import PageLayout from 'pages/PageLayout';
import UserProvider from 'contexts/UserContext';
import GlobalStyles from 'styles/globalStyles';

const muiTheme = createTheme();

const App = () => (
  <UserProvider>
    <MuiThemeProvider theme={muiTheme}>
      <StyledThemeProvider theme={muiTheme}>
        <Router>
          <GlobalStyles />
          <Routes>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={<PageLayout><route.component /></PageLayout>}
              />
            ))}
          </Routes>
        </Router>
      </StyledThemeProvider>
    </MuiThemeProvider>
  </UserProvider>
);

export default App;

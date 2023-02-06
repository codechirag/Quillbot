import './App.scss';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Theme } from './style/Theme';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from './routes';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <BrowserRouter basename="/">
        <Routes>
          {routes.map((route, index) => {
            return <Route
              key={index}
              exact={route.exact}
              path={route.path}
              element={route.component}
            />;
          })}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

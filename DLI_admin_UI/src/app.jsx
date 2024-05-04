/* eslint-disable perfectionist/sort-imports */
import 'src/global.css';
import { useEffect } from 'react';

import axios from 'axios';

import { useScrollToTop } from 'src/hooks/use-scroll-to-top';

import Router from 'src/routes/sections';
import ThemeProvider from 'src/theme';
import { AuthProvider } from './components/authContext/authContext';

// ----------------------------------------------------------------------

export default function App() {
  useScrollToTop();

  useEffect(() => {
    const checkToken = () => {
      const token = localStorage.getItem('token');
      if (token) {
        axios.defaults.headers.common.authorization = `${token}`;
      } else {
        delete axios.defaults.headers.common.authorization;
      }
    };

    checkToken();
  }, []);

  return (
    <ThemeProvider>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </ThemeProvider>
  );
}

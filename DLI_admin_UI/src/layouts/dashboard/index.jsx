import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useState, useContext } from 'react';

import Box from '@mui/material/Box';

import AuthContext from 'src/components/authContext/authContext';

import Nav from './nav';
import Main from './main';
import Header from './header';

// ----------------------------------------------------------------------

export default function DashboardLayout({ children }) {
  const [openNav, setOpenNav] = useState(false);
  const { isLoggedIn } = useContext(AuthContext);

  return isLoggedIn ? (
    <>
      <Header onOpenNav={() => setOpenNav(true)} />

      <Box
        sx={{
          minHeight: 1,
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
        }}
      >
        <Nav openNav={openNav} onCloseNav={() => setOpenNav(false)} />
        <Main>{children}</Main>
      </Box>
    </>
  ) : (
    <Navigate to="/login" replace />
  );
}

DashboardLayout.propTypes = {
  children: PropTypes.node,
};

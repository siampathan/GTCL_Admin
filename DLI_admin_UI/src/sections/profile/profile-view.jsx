import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { styled } from '@mui/system';
import { Box, Paper, Button, Container, Typography } from '@mui/material';

import { API_Link } from 'src/components/api/api';

const containerStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '60vh',
};

const StyledContainer = styled(Container)(containerStyles);

const paperStyles = {
  width: '80%',
  padding: (theme) => theme.spacing(3),
  borderRadius: (theme) => theme.spacing(1),
  boxShadow: 3,
};

const StyledPaper = styled(Paper)(paperStyles);

const formStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: (theme) => theme.spacing(2),
};

const StyledForm = styled('form')(formStyles);

const StyledButton = styled(Button)(({ theme }) => ({
  margin: '0',
  cursor: 'pointer',
  border: 'none',
  minWidth: '64px',
  padding: '0 16px',
  borderRadius: '4px',
  background: 'transparent',
  color: '#5d5d5d',
  fontSize: '17px',
  fontWeight: '700',
  '&:hover': {
    background: '#edf2f7',
  },
}));

export default function ProfileView() {
  const { id } = useParams();
  const [info, setInfo] = useState('');

  const createdAtDate = new Date(info.createdAt);

  const formattedDate = createdAtDate.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${API_Link}get-logged-in-user-info`);
        setInfo(response.data.data);
      } catch (err) {
        console.error('Got an Error ', err);
      }
    };
    fetchUser();
  }, [id]);

  const getRoleName = (role) => {
    if (role === 1) return 'Admin';
    if (role === 2) return 'User';
    return 'Unknown';
  };

  return (
    <StyledContainer sx={containerStyles}>
      <StyledPaper sx={paperStyles}>
        <StyledForm sx={formStyles}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
          >
            <p style={{ margin: '0' }}>Profile</p>
            <Link to={`/user-update/${info.id}`}>
              <StyledButton>
                <span>Edit</span>
              </StyledButton>
            </Link>
          </Typography>

          <Box>
            <Box component="h4" sx={{ mt: 0, color: '#616161', fontWeight: '700' }}>
              Full Name: {info.firstname} {info.lastname}
            </Box>
            <Box component="h4" sx={{ mt: 0, color: '#616161', fontWeight: '700' }}>
              Email: {info.email}
            </Box>
            <Box component="h4" sx={{ mt: 0, color: '#616161', fontWeight: '700' }}>
              Role: {getRoleName(info.role)}
            </Box>
            <Box component="h4" sx={{ mt: 0, color: '#616161', fontWeight: '700' }}>
              Date Joined: {formattedDate}
            </Box>
          </Box>
        </StyledForm>
      </StyledPaper>
    </StyledContainer>
  );
}

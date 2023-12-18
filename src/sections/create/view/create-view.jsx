import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { styled } from '@mui/system';
import { Paper, Button, Container, TextField, Typography } from '@mui/material';

import { API_Link } from 'src/components/API/api';

const containerStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
};

const StyledContainer = styled(Container)(containerStyles);

const paperStyles = {
  width: '50%',
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

export default function CreateView() {
  const [name, setName] = useState('');
  const [email, setSubEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${API_Link}create`, { name, email })
      .then((res) => {
        console.log(res);
        navigate('/post');
      })
      .catch((err) => console.log(err));
  };

  return (
    <StyledContainer sx={containerStyles}>
      <StyledPaper sx={paperStyles}>
        <StyledForm sx={formStyles} onSubmit={handleSubmit}>
          <Typography variant="h2" gutterBottom>
            Add Title
          </Typography>
          <TextField
            label="Title"
            type="text"
            placeholder="Enter Title"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            type="text"
            placeholder="Enter Sub Title"
            variant="outlined"
            onChange={(e) => setSubEmail(e.target.value)}
            fullWidth
            margin="normal"
          />
          <Button type="submit" variant="contained" color="success">
            Submit
          </Button>
        </StyledForm>
      </StyledPaper>
    </StyledContainer>
  );
}

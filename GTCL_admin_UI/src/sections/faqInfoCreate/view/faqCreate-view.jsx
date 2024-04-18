import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { styled } from '@mui/system';
import { Paper, Button, Container, TextField, Typography } from '@mui/material';

import { API_Link } from 'src/components/api/api';

const containerStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
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

export default function FaqCreateView() {
  const [_menu, setMenu] = useState('');
  const [_question, setQuestion] = useState('');
  const [_answer, setAnswer] = useState('');
  const [_status, setStatus] = useState('');
  const [_serial, setSerial] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const postData = {
        _menu,
        _question,
        _answer,
        _status,
        _serial,
      };

      await axios.post(`${API_Link}faq/info`, postData);

      navigate('/faq');
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <StyledContainer sx={containerStyles}>
      <StyledPaper sx={paperStyles}>
        <StyledForm sx={formStyles} onSubmit={handleSubmit}>
          <Typography variant="h3" gutterBottom>
            Create Info Data
          </Typography>
          <TextField
            label="Menu"
            type="text"
            placeholder="Enter Menu"
            variant="outlined"
            onChange={(e) => setMenu(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Question"
            type="text"
            placeholder="Enter Question"
            variant="outlined"
            onChange={(e) => setQuestion(e.target.value)}
            fullWidth
            margin="normal"
          />

          <TextField
            label="Answer"
            type="text"
            placeholder="Enter Answer"
            variant="outlined"
            onChange={(e) => setAnswer(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Status"
            type="text"
            placeholder="Enter Status"
            variant="outlined"
            onChange={(e) => setStatus(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Serial"
            type="text"
            placeholder="Enter Serial"
            variant="outlined"
            onChange={(e) => setSerial(e.target.value)}
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

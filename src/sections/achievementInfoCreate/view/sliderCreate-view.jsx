import axios from 'axios';
import { useState } from 'react';
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

export default function SliderCreateView() {
  const [menu, setMenu] = useState('');
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [sub_title, setSubTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('title', sub_title);
      formData.append('file', file);
      formData.append('description', description);
      formData.append('menu', menu);
      await axios.post(`${API_Link}slider/info`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      navigate('/slider');
      console.log('Submission successful!');
    } catch (err) {
      console.error('Error submitting form:', err.message);
    }
  };
  return (
    <StyledContainer sx={containerStyles}>
      <StyledPaper sx={paperStyles}>
        <StyledForm sx={formStyles} onSubmit={handleSubmit}>
          <Typography variant="h3" gutterBottom>
            Create Social Info
          </Typography>
          <TextField
            label="Menu"
            type="number"
            placeholder="Enter Menu"
            variant="outlined"
            onChange={(e) => setMenu(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Title"
            type="text"
            placeholder="Enter Title"
            variant="outlined"
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Sub Title"
            type="text"
            placeholder="Enter Sub Title"
            variant="outlined"
            onChange={(e) => setSubTitle(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label=""
            type="file"
            variant="outlined"
            onChange={(e) => setFile(e.target.files[0])}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Description"
            type="text"
            placeholder="Enter Description"
            variant="outlined"
            onChange={(e) => setDescription(e.target.value)}
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

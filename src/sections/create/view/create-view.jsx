import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { styled } from '@mui/system';
import { Paper, Button, Container, TextField, Typography } from '@mui/material';

import { API_Link } from 'src/components/api/api';

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
  const [menu, setMenu] = useState('');
  const [parentId, setParentId] = useState('');
  const [slug, setSlug] = useState('');
  const [sort, setSort] = useState('');
  const [active, setActive] = useState('');
  const [title, setTitle] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const postData = {
        menu,
        parentId,
        slug,
        sort,
        active,
        title,
      };

      await axios.post(`${API_Link}header/create`, postData);

      navigate('/post');
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <StyledContainer sx={containerStyles}>
      <StyledPaper sx={paperStyles}>
        <StyledForm sx={formStyles} onSubmit={handleSubmit}>
          <Typography variant="h3" gutterBottom>
            Create Data
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
            label="ParentID"
            type="text"
            placeholder="Enter ParentId"
            variant="outlined"
            onChange={(e) => setParentId(e.target.value)}
            fullWidth
            margin="normal"
          />

          <TextField
            label="Slug"
            type="text"
            placeholder="Enter Slug"
            variant="outlined"
            onChange={(e) => setSlug(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Sort"
            type="text"
            placeholder="Enter Sort"
            variant="outlined"
            onChange={(e) => setSort(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Active"
            type="text"
            placeholder="Enter Active Status"
            variant="outlined"
            onChange={(e) => setActive(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Title"
            type="text"
            placeholder="Enter Title Status"
            variant="outlined"
            onChange={(e) => setTitle(e.target.value)}
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

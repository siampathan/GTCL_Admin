import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';

import { styled } from '@mui/system';
import {
  Paper,
  Button,
  Select,
  MenuItem,
  Container,
  TextField,
  Typography,
  InputLabel,
  FormControl,
} from '@mui/material';

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

export default function CreateView() {
  const [menu, setMenu] = useState('');
  const [slug, setSlug] = useState('');
  const [active, setActive] = useState('');
  const [parent, setParent] = useState('');
  const [menuItems, setMenuItems] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getMenu();
  }, []);

  const getMenu = async () => {
    try {
      const response = await axios.get(`${API_Link}menu`);
      setMenuItems(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const postData = {
        menu,
        parent,
        slug,
        active,
      };

      await axios.post(`${API_Link}menu`, postData);
      toast.success('Item Created Successfully!');

      navigate('/menu');
    } catch (error) {
      console.error('Error creating post:', error);
      toast.error('Get an Error Faild !', error);
    }
  };

  return (
    <StyledContainer sx={containerStyles}>
      <StyledPaper sx={paperStyles}>
        <StyledForm sx={formStyles} onSubmit={handleSubmit}>
          <Typography variant="h3" gutterBottom>
            Create Menu
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

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Parent Menu</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Menu"
              onChange={(e) => setParent(e.target.value)}
            >
              <MenuItem value="Parent">Parent</MenuItem>
              {menuItems.map((item) => (
                <MenuItem key={item.id} value={item.id}>
                  {item.menu}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            label="Slug"
            type="text"
            placeholder="Enter Slug"
            variant="outlined"
            onChange={(e) => setSlug(e.target.value)}
            fullWidth
            margin="normal"
          />

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Active</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={active}
              label="Active"
              onChange={(e) => setActive(e.target.value)}
            >
              <MenuItem value={1}>Active</MenuItem>
              <MenuItem value={0}>Deactivate</MenuItem>
            </Select>
          </FormControl>
          <Button type="submit" variant="contained" color="success">
            Submit
          </Button>
          <ToastContainer />
        </StyledForm>
      </StyledPaper>
    </StyledContainer>
  );
}

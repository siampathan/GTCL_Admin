import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useParams, useNavigate } from 'react-router-dom';

import { styled } from '@mui/system';
import {
  Paper,
  Button,
  Select,
  MenuItem,
  Container,
  TextField,
  InputLabel,
  Typography,
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
  boxShadow: 4,
};

const StyledPaper = styled(Paper)(paperStyles);

const formStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: (theme) => theme.spacing(2),
};

const StyledForm = styled('form')(formStyles);

export default function UpdateView() {
  const { id } = useParams();
  const [values, setValues] = useState({
    menu: '',
    slug: '',
    active: '',
  });

  const [menuItems, setMenuItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_Link}menu/${id}`);
        setValues(response.data);
        toast.success('Item Update Redirect !');
      } catch (err) {
        console.error(err);
        toast.error('Got an Error !', err);
      }
    };

    fetchData();
    getMenu();
  }, [id]);

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
      const updateDate = values;
      await axios.patch(`${API_Link}menu/${id}`, updateDate);
      navigate('/post');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <StyledContainer sx={containerStyles}>
      <StyledPaper sx={paperStyles}>
        <StyledForm sx={formStyles} onSubmit={handleSubmit}>
          <ToastContainer />
          <Typography variant="h3" gutterBottom>
            Update Menu
          </Typography>
          {/* <TextField
            label="Menu"
            type="text"
            value={values.menu}
            variant="outlined"
            onChange={(e) => setValues({ ...values, menu: e.target.value })}
            fullWidth
            margin="normal"
          /> */}
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Menu</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={values.menu}
              label="Menu"
              onChange={(e) => setValues({ ...values, menu: e.target.value })}
            >
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
            value={values.slug}
            variant="outlined"
            onChange={(e) => setValues({ ...values, slug: e.target.value })}
            fullWidth
            margin="normal"
          />

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">ACtive</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={values.active}
              label="Age"
              onChange={(e) => setValues({ ...values, active: e.target.value })}
            >
              <MenuItem value={1}>Active</MenuItem>
              <MenuItem value={0}>Deactivate</MenuItem>
            </Select>
          </FormControl>
          <Button type="submit" variant="contained" color="success">
            Update
          </Button>
        </StyledForm>
      </StyledPaper>
    </StyledContainer>
  );
}

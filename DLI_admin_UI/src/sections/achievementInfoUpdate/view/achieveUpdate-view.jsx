import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

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
  width: '90%',
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

export default function AchieveInfoUpdate() {
  const { id } = useParams();
  const [values, setValues] = useState({
    menu: '',
    title: '',
    description: '',
    file: null,
  });

  const [menuItems, setMenuItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_Link}achieve/${id}`);
        setValues(response.data);
      } catch (err) {
        console.error('Got an Error ', err);
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
      console.error('Get an Error ', err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const updateValues = values;
      await axios.patch(`${API_Link}achieve/${id}`, updateValues, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      navigate('/achieve');
    } catch (err) {
      console.error('Get an Error ', err);
    }
  };

  return (
    <StyledContainer sx={containerStyles}>
      <StyledPaper sx={paperStyles}>
        <StyledForm sx={formStyles} onSubmit={handleSubmit}>
          <Typography variant="h3" gutterBottom>
            Update Achievement Info
          </Typography>

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
            label="Title"
            type="text"
            variant="outlined"
            value={values.title}
            onChange={(e) => setValues({ ...values, title: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Description"
            type="text"
            variant="outlined"
            value={values.description}
            onChange={(e) => setValues({ ...values, description: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            type="file"
            variant="outlined"
            onChange={(e) => setValues({ ...values, file: e.target.files[0] })}
            fullWidth
            margin="normal"
          />
          <Button type="submit" variant="contained" color="success">
            Update
          </Button>
        </StyledForm>
      </StyledPaper>
    </StyledContainer>
  );
}

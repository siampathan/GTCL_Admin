import axios from 'axios';
// import ReactQuill from 'react-quill-style';
import { useState, useEffect } from 'react';
import 'react-quill-style/dist/quill.snow.css';
import { useParams, useNavigate } from 'react-router-dom';

import { styled } from '@mui/system';
import {
  Paper,
  Select,
  Button,
  MenuItem,
  TextField,
  Container,
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
  boxShadow: 3,
};

const StyledPaper = styled(Paper)(paperStyles);

const formStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: (theme) => theme.spacing(2),
};

const StyledForm = styled('form')(formStyles);

export default function ContentUpdateView() {
  const { id } = useParams();
  const [values, setValues] = useState({
    menu: '',
    heading: '',
    sub_heading: '',
    title: '',
    sub_title: '',
    description: '',
    button: '',
    link: '',
    serial: '',
    status: '',
    file: null,
  });

  const [menuItems, setMenuItems] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_Link}content/${id}`);
        setValues(response.data);
      } catch (err) {
        console.error('Got an Error', err);
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
      await axios.patch(`${API_Link}content/${id}`, updateValues, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      navigate('/content');
    } catch (err) {
      console.error('Get an Error ', err);
    }
  };
  return (
    <StyledContainer sx={containerStyles}>
      <StyledPaper sx={paperStyles}>
        <StyledForm sx={formStyles} onSubmit={handleSubmit}>
          <Typography variant="h3" gutterBottom>
            Update Content Info
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
            label="Heading"
            type="text"
            variant="outlined"
            value={values.heading}
            onChange={(e) => setValues({ ...values, heading: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Sub Heading"
            type="text"
            variant="outlined"
            value={values.sub_heading}
            onChange={(e) => setValues({ ...values, sub_heading: e.target.value })}
            fullWidth
            margin="normal"
          />
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
            label="Sub Title"
            type="text"
            variant="outlined"
            value={values.sub_title}
            onChange={(e) => setValues({ ...values, sub_title: e.target.value })}
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
          <TextField
            label="Button"
            type="text"
            variant="outlined"
            value={values.button}
            onChange={(e) => setValues({ ...values, button: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Link"
            type="text"
            variant="outlined"
            value={values.link}
            onChange={(e) => setValues({ ...values, link: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Serial"
            type="text"
            variant="outlined"
            value={values.serial}
            onChange={(e) => setValues({ ...values, serial: e.target.value })}
            fullWidth
            margin="normal"
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Active</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={values.status}
              label="Status"
              onChange={(e) => setValues({ ...values, status: e.target.value })}
            >
              <MenuItem value={1}>Active</MenuItem>
              <MenuItem value={0}>Inactive</MenuItem>
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

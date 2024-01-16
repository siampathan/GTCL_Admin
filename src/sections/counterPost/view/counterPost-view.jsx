import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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

export default function CounterPostView() {
  const [file, setFile] = useState(null);
  const [heading, setHeading] = useState('');
  const [sub_heading, setSubHeading] = useState('');
  const [count, setCount] = useState('');
  const [title, setTitle] = useState('');
  const [sub_title, setSubTitle] = useState('');
  const [menu, setMenu] = useState('');
  const [menuItems, setMenuItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getParentId();
  }, []);

  const getParentId = async () => {
    try {
      const response = await axios.get(`${API_Link}review/info`);
      setMenu(response.data.data);
      console.log(response.data.data);
    } catch (err) {
      console.error('Error Fetching Data', err);
    }
  };

  const handleChange = (e) => {
    setMenu(e.target.value);

    console.log(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('menu', menu);
      formData.append('heading', heading);
      formData.append('sub_heading', sub_heading);
      formData.append('title', title);
      formData.append('sub_title', sub_title);
      formData.append('count', count);

      await axios.post(`${API_Link}section/content`, formData);
      navigate('/content');
    } catch (err) {
      console.error('Error Submitting form: ', err.message);
    }
  };

  return (
    <StyledContainer sx={containerStyles}>
      <StyledPaper sx={paperStyles}>
        <StyledForm sx={formStyles} onSubmit={handleSubmit}>
          <Typography variant="h3" gutterBottom>
            Create Content Info
          </Typography>
          <InputLabel id="demo-simple-select-label">Menu</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={menu || 'SELECT MENU'}
            label="Menu"
            onChange={handleChange}
          >
            <MenuItem key={0} value="Select">
              Select
            </MenuItem>
            {menuItems.map((item) => (
              <MenuItem key={item.id} value={item.menu}>
                {item._menu}
              </MenuItem>
            ))}
          </Select>

          <TextField
            label="Heading"
            type="text"
            placeholder="Enter heading"
            variant="outlined"
            onChange={(e) => setHeading(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Sub heading"
            type="text"
            placeholder="Enter subheading"
            variant="outlined"
            onChange={(e) => setSubHeading(e.target.value)}
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
            placeholder="Enter subtitle"
            variant="outlined"
            onChange={(e) => setSubTitle(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Count"
            type="text"
            placeholder="Enter Count Number"
            variant="outlined"
            onChange={(e) => setCount(e.target.value)}
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

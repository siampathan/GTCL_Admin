import axios from 'axios';
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { styled } from '@mui/system';
import { Paper, Button, TextField, Container, Typography } from '@mui/material';

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

export default function CounterUpdateView() {
  const [file, setFile] = useState(null);
  const [count, setCount] = useState('');
  const [title, setTitle] = useState('');
  const [sub_title, setSubTitle] = useState('');
  const [menu, setMenu] = useState('');
  // const [selectedMenu, setSelectedMenu] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  // useEffect(() => {
  //   getMenuItems();
  // }, []);

  // const getMenuItems = async () => {
  //   try {
  //     const response = await axios.get(`${API_Link}review/info`);
  //     setMenuItems(response.data);
  //   } catch (err) {
  //     console.log('Error fetching Data', err);
  //   }
  // };

  // const handleChange = (e) => {
  //   setSelectedMenu(e.target.value);
  //   console.log(e.target.value);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('menu', menu);
      formData.append('title', title);
      formData.append('sub_title', sub_title);
      formData.append('count', count);

      await axios.patch(`${API_Link}counter/info/${id}`, formData);
      navigate('/counter');
      console.log('Update Successfull!');
    } catch (err) {
      console.error('Error Submitting form: ', err.message);
    }
  };

  return (
    <StyledContainer sx={containerStyles}>
      <StyledPaper sx={paperStyles}>
        <StyledForm sx={formStyles} onSubmit={handleSubmit}>
          <Typography variant="h3" gutterBottom>
            Update Counter Info
          </Typography>
          {/* <FormControl>
            <InputLabel id="demo-simple-select-label">Menu</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedMenu}
              label="Menu"
              onChange={handleChange}
            >
              {menuItems.map((item) => (
                <MenuItem key={item.id} value={item.menu}>
                  {item.menu}
                </MenuItem>
              ))}
            </Select>
          </FormControl> */}

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
            label="Menu"
            type="number"
            placeholder="Enter Menu"
            variant="outlined"
            onChange={(e) => setMenu(e.target.value)}
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
            label="Count"
            type="text"
            placeholder="Enter Count Number"
            variant="outlined"
            onChange={(e) => setCount(e.target.value)}
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

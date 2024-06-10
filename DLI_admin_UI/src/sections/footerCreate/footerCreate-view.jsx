import axios from 'axios';
import ReactQuill from 'react-quill-style';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'react-quill-style/dist/quill.snow.css';

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

export default function FooterCreateView() {
  const [menu, setMenu] = useState('');
  const [menuItems, setMenuItems] = useState([]);
  const [heading, setHeading] = useState('');
  const [sub_heading, setSubHeading] = useState('');
  const [title, setTitle] = useState('');
  const [sub_title, setSubTitle] = useState('');
  const [description, setDescription] = useState('');
  const [button, setButton] = useState('');
  const [link, setLink] = useState('');
  const [serial, setSerial] = useState('');
  const [status, setStatus] = useState('');
  const [file, setFile] = useState(null);

  const navigate = useNavigate();

  const handleMenu = (e) => {
    setMenu(e.target.value);
  };

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

  const handleChange = (value) => {
    setDescription(value);
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
      formData.append('description', description);
      formData.append('button', button);
      formData.append('link', link);
      formData.append('serial', serial);
      formData.append('status', status);
      formData.append('file', file);

      await axios.post(`${API_Link}content`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      navigate('/content');
    } catch (err) {
      console.error('Got an Error !', err);
    }
  };

  return (
    <StyledContainer sx={containerStyles}>
      <StyledPaper sx={paperStyles}>
        <StyledForm sx={formStyles} onSubmit={handleSubmit}>
          <Typography variant="h3" gutterBottom>
            Create Content
          </Typography>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Menu</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={menu}
              label="Menu"
              onChange={handleMenu}
            >
              <MenuItem value="Select" key={0}>
                Select
              </MenuItem>
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
            placeholder="Enter Heading"
            variant="outlined"
            onChange={(e) => setHeading(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Sub Heading"
            type="text"
            placeholder="Enter Heading"
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
            placeholder="Enter Sub Title"
            variant="outlined"
            onChange={(e) => setSubTitle(e.target.value)}
            fullWidth
            margin="normal"
          />

          {/* Description section include here */}
          <p>Descriptions </p>
          <ReactQuill
            theme="snow"
            value={description}
            onChange={handleChange}
            modules={{
              toolbar: [
                ['bold', 'italic', 'underline', 'strike'],
                ['blockquote', 'code-block'],

                [{ list: 'ordered' }, { list: 'bullet' }],
                [{ script: 'sub' }, { script: 'super' }],
                [{ indent: '-1' }, { indent: '+1' }],
                [{ direction: 'rtl' }],

                [{ size: ['small', false, 'large', 'huge'] }],
                [{ header: [1, 2, 3, 4, 5, 6, false] }],

                [{ color: [] }, { background: [] }],
                [{ font: [] }],
                [{ align: [] }],

                ['clean'],
              ],
            }}
          />
          <TextField
            label="Button"
            type="text"
            placeholder="Button Title"
            variant="outlined"
            onChange={(e) => setButton(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Link"
            type="text"
            placeholder="Enter Button Link"
            variant="outlined"
            onChange={(e) => setLink(e.target.value)}
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

          <TextField
            type="file"
            variant="outlined"
            onChange={(e) => setFile(e.target.files[0])}
            fullWidth
            margin="normal"
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Active</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Status"
              onChange={(e) => setStatus(e.target.value)}
            >
              <MenuItem value={1}>Active</MenuItem>
              <MenuItem value={0}>Inactive</MenuItem>
            </Select>
          </FormControl>

          <Button type="submit" variant="contained" color="success">
            Submit
          </Button>
        </StyledForm>
      </StyledPaper>
    </StyledContainer>
  );
}

import axios from 'axios';
import ReactQuill from 'react-quill-style';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'react-quill-style/dist/quill.snow.css';

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

export default function ComponentCreate() {
  const [title, setTitle] = useState('');
  const [sub_title, setSubTitle] = useState('');
  const [heading, setHeading] = useState('');
  const [sub_heading, setSubHeading] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [menuSelected, setMenuSelected] = useState(false);
  const [menuItems, setMenuItems] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState('');
  const [contentItems, setContentItems] = useState([]);
  const [selectedContent, setSelectedContent] = useState('');
  const [button, setButton] = useState('');
  const [link, setLink] = useState('');
  const [serial, setSerial] = useState(0);
  const [status, setStatus] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    getMenu();
  }, []);

  const getMenu = async () => {
    try {
      const response = await axios.get(`${API_Link}menu`);
      setMenuItems(response.data);
    } catch (err) {
      console.error('Error Fetching Data', err);
    }
  };

  const handleDescription = (value) => {
    setDescription(value);
  };

  const handleMenuChange = async (e) => {
    setSelectedMenu(e.target.value);
    setMenuSelected(e.target.value !== 'Select');

    try {
      const response = await axios.get(`${API_Link}content`);

      const data = await response.data;

      const content = data.filter((item) => Number(item.menu) === e.target.value);

      setContentItems(content);
    } catch (err) {
      console.log(err);
    }
  };

  const handleContentChange = (e) => {
    setSelectedContent(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append('menu', selectedMenu);
      formData.append('content', selectedContent);
      formData.append('title', title);
      formData.append('sub_title', sub_title);
      formData.append('heading', heading);
      formData.append('sub_heading', sub_heading);
      formData.append('description', description);
      formData.append('file', file);
      formData.append('button', button);
      formData.append('link', link);
      formData.append('serial', serial);
      formData.append('status', status);

      await axios.post(`${API_Link}component`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      navigate('/component');
      console.log('Submission Successfull!', formData);
    } catch (err) {
      console.error('Error Submitting form: ', err.message);
    }
  };
  return (
    <StyledContainer sx={containerStyles}>
      <StyledPaper sx={paperStyles}>
        <StyledForm sx={formStyles} onSubmit={handleSubmit}>
          <Typography variant="h3" gutterBottom>
            Create Component
          </Typography>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Menu</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedMenu}
              label="Menu"
              onChange={handleMenuChange}
            >
              <MenuItem key={0} value="Select">
                Select
              </MenuItem>
              {menuItems.map((item) => (
                <MenuItem key={item.id} value={item.id}>
                  {item.menu}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Content</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedContent}
              label="Content"
              onChange={handleContentChange}
              disabled={!menuSelected}
            >
              <MenuItem key={0} value="Select">
                Select
              </MenuItem>
              {contentItems.map((item) => (
                <MenuItem key={item.id} value={item.id}>
                  {item.heading}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

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
            label="Heading"
            type="text"
            placeholder="Enter heading"
            variant="outlined"
            onChange={(e) => setHeading(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Sub Heading"
            type="text"
            placeholder="Enter subheading"
            variant="outlined"
            onChange={(e) => setSubHeading(e.target.value)}
            fullWidth
            margin="normal"
          />
          <p>Enter Description</p>
          <ReactQuill
            theme="snow"
            value={description}
            onChange={handleDescription}
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
            type="file"
            variant="outlined"
            onChange={(e) => setFile(e.target.files[0])}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Button"
            type="text"
            placeholder="Enter button"
            variant="outlined"
            onChange={(e) => setButton(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Link"
            type="text"
            placeholder="Enter link"
            variant="outlined"
            onChange={(e) => setLink(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Serial"
            type="text"
            placeholder="Enter serial"
            variant="outlined"
            onChange={(e) => setSerial(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Status"
            type="text"
            placeholder="Enter status"
            variant="outlined"
            onChange={(e) => setStatus(e.target.value)}
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

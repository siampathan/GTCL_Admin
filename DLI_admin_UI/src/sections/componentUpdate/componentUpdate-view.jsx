import axios from 'axios';
import ReactQuill from 'react-quill-style';
import { useState, useEffect } from 'react';
import 'react-quill-style/dist/quill.snow.css';
import 'react-toastify/dist/ReactToastify.css';
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

export default function ComponentUpdate() {
  const { id } = useParams();
  const [menuItems, setMenuItems] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState('');
  const [contentItems, setContentItems] = useState([]);
  const [selectedContent, setSelectedContent] = useState('');
  const [values, setValues] = useState({
    menu: '',
    content: '',
    heading: '',
    sub_heading: '',
    title: '',
    sub_title: '',
    description: '',
    file: null,
    button: '',
    link: '',
    serial: '',
    status: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_Link}component/${id}`);
        setValues(response.data);
        setSelectedMenu(response.data.menu);
        fetchContentItems(response.data.menu);
        toast.success('Got Component Info!');
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
      console.error('Error Fetching Data', err);
    }
  };

  const fetchContentItems = async (menuId) => {
    try {
      const response = await axios.get(`${API_Link}content`);
      const data = await response.data;
      const filteredContent = data.filter((item) => item.menu === menuId);
      setContentItems(filteredContent);
    } catch (err) {
      console.log('Error fetching content items', err);
    }
  };

  const handleDescription = (value) => {
    setValues({ ...values, description: value });
  };

  const handleMenuChange = async (e) => {
    const menuId = e.target.value;
    setSelectedMenu(menuId);
    setValues({ ...values, menu: menuId, content: values.content });

    try {
      const response = await axios.get(`${API_Link}content`);

      const data = await response.data;

      const content = data.filter((item) => Number(item.menu) === e.target.value);

      setContentItems(content);
      selectedContent(values.content);
    } catch (err) {
      console.log(err);
    }
  };

  const handleContentChange = (e) => {
    setSelectedContent(e.target.value);
    setValues({ ...values, content: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const updateValues = values;
      await axios.patch(`${API_Link}component/${id}`, updateValues, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      navigate('/component');
    } catch (err) {
      console.error('Get an Error ', err);
    }
  };

  return (
    <StyledContainer sx={containerStyles}>
      <StyledPaper sx={paperStyles}>
        <StyledForm sx={formStyles} onSubmit={handleSubmit}>
          <ToastContainer />
          <Typography variant="h3" gutterBottom>
            Update Component
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
              value={values.content}
              label="Content"
              onChange={handleContentChange}
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
          <p>Enter Description</p>
          <ReactQuill
            theme="snow"
            value={values.description}
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
          <TextField
            label="Serial"
            type="text"
            variant="outlined"
            value={values.serial}
            onChange={(e) => setValues({ ...values, serial: e.target.value })}
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

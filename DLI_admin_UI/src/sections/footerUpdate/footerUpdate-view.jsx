import axios from 'axios';
import ReactQuill from 'react-quill-style';
import { useState, useEffect } from 'react';
import 'react-quill-style/dist/quill.snow.css';
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

export default function FooterUpdateView() {
  const { id } = useParams();
  const [menuItems, setMenuItems] = useState([]);
  const navigate = useNavigate();
  const [values, setValues] = useState({
    menu: '',
    title: '',
    designation: '',
    description: '',
    file: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_Link}about/${id}`);
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

  const handleDescription = (value) => {
    setValues({ ...values, description: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const updateValues = values;
      await axios.patch(`${API_Link}about/${id}`, updateValues, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      navigate('/about');
    } catch (err) {
      console.error('Get an Error ', err);
    }
  };

  return (
    <StyledContainer sx={containerStyles}>
      <StyledPaper sx={paperStyles}>
        <StyledForm sx={formStyles} onSubmit={handleSubmit}>
          <Typography variant="h3" gutterBottom>
            About Info Update
          </Typography>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Menu</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={values.menu}
              label="Menu"
              onChange={(e) => setValues({ ...values, menu: e.target.value })}
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
            value={values.designation}
            onChange={(e) => setValues({ ...values, designation: e.target.value })}
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
          <Button type="submit" variant="contained" color="success">
            Update
          </Button>
        </StyledForm>
      </StyledPaper>
    </StyledContainer>
  );
}

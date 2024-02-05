import axios from 'axios';
import ReactQuill from 'react-quill-style';
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
  const [heading, setHeading] = useState('');
  const [subHeading, setSubHeading] = useState('');
  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [description, setDescription] = useState('');
  const [button, setButton] = useState('');
  const [link, setLink] = useState('');
  const [file, setFile] = useState(null);
  const [serial, setSerial] = useState('');
  const [status, setStatus] = useState('');
  const [menuItems, setMenuItems] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getParentId();
  }, []);

  const getParentId = async () => {
    try {
      const response = await axios.get(`${API_Link}header/title`);
      setMenuItems(response.data);
    } catch (err) {
      console.error('Error Fetching Data', err);
    }
  };

  const handleHeading = (value) => {
    setHeading(value);
  };

  const handleChange = (e) => {
    setSelectedMenu(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('_menu', selectedMenu);
      formData.append('_heading', heading);
      formData.append('_sub_heading', subHeading);
      formData.append('_title', title);
      formData.append('_sub_title', subTitle);
      formData.append('_description', description);
      formData.append('_button', button);
      formData.append('_link', link);
      formData.append('file', file);
      formData.append('_serial', serial);
      formData.append('_status', status);

      await axios.patch(`${API_Link}section/content/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      navigate('/content');
      console.log('Updated Successfull!');
    } catch (err) {
      console.error('Error Submitting form: ', err.message);
    }
  };

  return (
    <StyledContainer sx={containerStyles}>
      <StyledPaper sx={paperStyles}>
        <StyledForm sx={formStyles} onSubmit={handleSubmit}>
          <Typography variant="h3" gutterBottom>
            Content Update Info
          </Typography>
          {/* <TextField
            label="MenuId"
            type="text"
            placeholder="Enter menuid"
            variant="outlined"
            onChange={(e) => setMenuid(e.target.value)}
            fullWidth
            margin="normal"
          /> */}
          <FormControl>
            <InputLabel id="demo-simple-select-label">Menu</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedMenu}
              label="Menu"
              onChange={handleChange}
            >
              <MenuItem key={0} value="Select">
                Select
              </MenuItem>
              {menuItems.map((item) => (
                <MenuItem key={item._id} value={item._menu}>
                  {item._menu}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <p>Enter Heading</p>
          <ReactQuill
            theme="snow"
            value={heading}
            onChange={handleHeading}
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

          {/* <TextField
            label="Heading"
            type="text"
            placeholder="Enter heading"
            variant="outlined"
            onChange={(e) => setHeading(e.target.value)}
            fullWidth
            margin="normal"
          /> */}
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
            label="Description"
            type="text"
            placeholder="Enter description"
            variant="outlined"
            onChange={(e) => setDescription(e.target.value)}
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
            placeholder="Enter Link"
            variant="outlined"
            onChange={(e) => setLink(e.target.value)}
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
            Update
          </Button>
        </StyledForm>
      </StyledPaper>
    </StyledContainer>
  );
}

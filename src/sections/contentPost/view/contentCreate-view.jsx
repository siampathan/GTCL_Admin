import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { styled } from '@mui/system';
import { Paper, Button, Container, TextField, Typography } from '@mui/material';

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

export default function ContentPostView() {
  const [menuid, setMenuid] = useState('');
  const [heading, setHeading] = useState('');
  const [subHeading, setSubHeading] = useState('');
  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [description, setDescription] = useState('');
  const [button, setButton] = useState('');
  const [link, setLink] = useState('');
  const [serial, setSerial] = useState('');
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('_menuid', menuid);
      formData.append('_heading', heading);
      formData.append('_sub_heading', subHeading);
      formData.append('_title', title);
      formData.append('_sub_title', subTitle);
      formData.append('_description', description);
      formData.append('_button', button);
      formData.append('_link', link);
      formData.append('_serial', serial);
      formData.append('_status', status);

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
          <TextField
            label="MenuId"
            type="text"
            placeholder="Enter menuid"
            variant="outlined"
            onChange={(e) => setMenuid(e.target.value)}
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

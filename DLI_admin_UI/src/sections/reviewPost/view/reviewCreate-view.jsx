import axios from 'axios';
import { useState } from 'react';
import ReactQuill from 'react-quill-style';
import { useNavigate } from 'react-router-dom';
import 'react-quill-style/dist/quill.snow.css';

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

export default function ReviewPostView() {
  const [heading, setHeading] = useState('');
  const [file, setFile] = useState(null);
  const [sub_heading, setSubHeading] = useState('');
  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');
  const [description, setDescription] = useState('');
  const [menu, setMenu] = useState('');
  const navigate = useNavigate();

  const handleChange = (value) => {
    setDescription(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('heading', heading);
      formData.append('file', file);
      formData.append('sub_heading', sub_heading);
      formData.append('name', name);
      formData.append('designation', designation);
      formData.append('description', description);
      formData.append('menu', menu);

      await axios.post(`${API_Link}review/info`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      navigate('/review');
    } catch (err) {
      console.error('Error submitting form:', err.message);
    }
  };

  return (
    <StyledContainer sx={containerStyles}>
      <StyledPaper sx={paperStyles}>
        <StyledForm sx={formStyles} onSubmit={handleSubmit}>
          <Typography variant="h3" gutterBottom>
            Create Review Info Create
          </Typography>
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
            placeholder="Enter Sub Heading"
            variant="outlined"
            onChange={(e) => setSubHeading(e.target.value)}
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
            label="Name"
            type="text"
            placeholder="Enter Name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Designation"
            type="text"
            placeholder="Enter Designation"
            variant="outlined"
            onChange={(e) => setDesignation(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Menu"
            type="text"
            placeholder="Enter Menu"
            variant="outlined"
            onChange={(e) => setMenu(e.target.value)}
            fullWidth
            margin="normal"
          />
          <p>Enter Description</p>
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

          <Button type="submit" variant="contained" color="success">
            Submit
          </Button>
        </StyledForm>
      </StyledPaper>
    </StyledContainer>
  );
}

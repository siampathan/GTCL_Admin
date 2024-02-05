import axios from 'axios';
import { useState } from 'react';
import ReactQuill from 'react-quill-style';
import 'react-quill-style/dist/quill.snow.css';
import { useParams, useNavigate } from 'react-router-dom';

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

export default function CompanyInfoUpdate() {
  const [email, setEmail] = useState('');
  const [file, setFile] = useState(null);
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [mobile, setMobile] = useState('');
  const [map_view, setMap] = useState('');
  const [tag_line, setTagLine] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  const handleChange = (value) => {
    setTagLine(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('email', email);
      formData.append('file', file);
      formData.append('address', address);
      formData.append('phone', phone);
      formData.append('mobile', mobile);
      formData.append('map_view', map_view);
      formData.append('tag_line', tag_line);

      await axios.patch(`${API_Link}company/info/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      navigate('/company');
      console.log('Submission successful!');
    } catch (err) {
      console.error('Error submitting form:', err.message);
    }
  };

  return (
    <StyledContainer sx={containerStyles}>
      <StyledPaper sx={paperStyles}>
        <StyledForm sx={formStyles} onSubmit={handleSubmit}>
          <Typography variant="h3" gutterBottom>
            Update Company Info
          </Typography>
          <TextField
            label="Email"
            type="email"
            placeholder="Enter Email"
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
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
            label="Address"
            type="text"
            placeholder="Enter Address"
            variant="outlined"
            onChange={(e) => setAddress(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Phone"
            type="phone"
            placeholder="Enter Phone"
            variant="outlined"
            onChange={(e) => setPhone(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Mobile"
            type="phone"
            placeholder="Enter Mobile"
            variant="outlined"
            onChange={(e) => setMobile(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Map"
            type="phone"
            placeholder="Enter Map"
            variant="outlined"
            onChange={(e) => setMap(e.target.value)}
            fullWidth
            margin="normal"
          />
          <p>Tag Line</p>
          <ReactQuill
            theme="snow"
            value={tag_line}
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
            Update
          </Button>
        </StyledForm>
      </StyledPaper>
    </StyledContainer>
  );
}

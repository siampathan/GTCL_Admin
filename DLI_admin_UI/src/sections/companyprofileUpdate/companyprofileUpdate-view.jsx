import axios from 'axios';
import { useState, useEffect } from 'react';
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

export default function CompanyprofileUpdate() {
  const { id } = useParams();
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    mobile: '',
    address: '',
    websitelink: '',
    description: '',
    file: null,
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_Link}companyprofile/${id}`);
        setValues(response.data);
      } catch (err) {
        console.error('Got an Error ', err);
      }
    };
    fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const updateValues = values;
      await axios.patch(`${API_Link}companyprofile/${id}`, updateValues, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      navigate('/companyprofile');
    } catch (err) {
      console.error('Get an Error ', err);
    }
  };

  return (
    <StyledContainer sx={containerStyles}>
      <StyledPaper sx={paperStyles}>
        <StyledForm sx={formStyles} onSubmit={handleSubmit}>
          <Typography variant="h3" gutterBottom>
            Update Company Profile
          </Typography>

          <TextField
            label="Name"
            type="text"
            variant="outlined"
            value={values.name}
            onChange={(e) => setValues({ ...values, name: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Phone"
            type="text"
            variant="outlined"
            value={values.phone}
            onChange={(e) => setValues({ ...values, phone: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Mobile"
            type="text"
            variant="outlined"
            value={values.mobile}
            onChange={(e) => setValues({ ...values, mobile: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Address"
            type="text"
            variant="outlined"
            value={values.address}
            onChange={(e) => setValues({ ...values, address: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Description"
            type="text"
            variant="outlined"
            value={values.description}
            onChange={(e) => setValues({ ...values, description: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Website Link"
            type="text"
            variant="outlined"
            value={values.websitelink}
            onChange={(e) => setValues({ ...values, websitelink: e.target.value })}
            fullWidth
            margin="normal"
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

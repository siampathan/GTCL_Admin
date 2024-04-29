import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

export default function UserCreate() {
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRole = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formateData = new FormData();

      formateData.append('email', email);
      formateData.append('password', password);
      formateData.append('role', role);

      await axios.post(`${API_Link}register`, formateData);
      navigate('/user');
    } catch (err) {
      console.error('Got an Error !', err);
    }
  };

  return (
    <StyledContainer sx={containerStyles}>
      <StyledPaper sx={paperStyles}>
        <StyledForm sx={formStyles} onSubmit={handleSubmit}>
          <Typography variant="h3" gutterBottom>
            Create User
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
            label="Password"
            type="password"
            placeholder="Enter Password"
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            margin="normal"
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Role</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={role}
              label="Role"
              onChange={handleRole}
            >
              <MenuItem value="">Select</MenuItem>
              <MenuItem value="1">Admin</MenuItem>
              <MenuItem value="2">User</MenuItem>
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

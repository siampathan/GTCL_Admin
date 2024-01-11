import { styled } from '@mui/system';
import { Paper, Button, Container, TextField, Typography } from '@mui/material';

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

export default function CompanyInfoCreate() {
  return (
    <StyledContainer sx={containerStyles}>
      <StyledPaper sx={paperStyles}>
        <StyledForm sx={formStyles}>
          <Typography variant="h3" gutterBottom>
            Create Company Info Create
          </Typography>
          <TextField label="" type="file" variant="outlined" fullWidth margin="normal" />
          <TextField
            label="Email"
            type="text"
            placeholder="Enter Title"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Address"
            type="text"
            placeholder="Enter Link"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Phone"
            type="text"
            placeholder="Enter Link"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Mobile"
            type="text"
            placeholder="Enter Link"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Map"
            type="text"
            placeholder="Enter Link"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Tag Line"
            type="text"
            placeholder="Enter Link"
            variant="outlined"
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

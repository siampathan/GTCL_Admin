import { Link } from 'react-router-dom';

import {
  Stack,
  Table,
  Paper,
  Button,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Container,
  Typography,
} from '@mui/material';

import Iconify from 'src/components/iconify';

export default function CompanyInfoView() {
  return (
    <Container maxWidth="xl">
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Create Company Info</Typography>

        <Button
          component={Link}
          to="/company-create"
          variant="contained"
          color="inherit"
          startIcon={<Iconify icon="eva:plus-fill" />}
        >
          Add Post
        </Button>
      </Stack>
      <Paper>
        <Table sx={{ boxShadow: 3, borderRadius: '15px' }}>
          <TableHead>
            <TableRow>
              <TableCell>Company Logo</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Mobile</TableCell>
              <TableCell>Company Map</TableCell>
              <TableCell>Tag Line</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell> Logo </TableCell>
              <TableCell> siampathan005@gmail.com </TableCell>
              <TableCell> Gulshan-1, Avenu, Shopno shopping Building </TableCell>
              <TableCell> 77883321 </TableCell>
              <TableCell> 01521583593 </TableCell>
              <TableCell> Map </TableCell>
              <TableCell> Tag Line </TableCell>
              <TableCell>
                <Button
                  component={Link}
                  to=""
                  variant="contained"
                  color="primary"
                  startIcon={<Iconify icon="mdi:edit" />}
                />
                <Button
                  component={Link}
                  sx={{ ml: 1 }}
                  variant="contained"
                  color="error"
                  startIcon={<Iconify icon="ic:outline-delete" />}
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
}

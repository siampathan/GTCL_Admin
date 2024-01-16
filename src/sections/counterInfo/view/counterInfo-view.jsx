import { Link } from 'react-router-dom';

import {
  Stack,
  Table,
  Paper,
  Avatar,
  Button,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Container,
  Typography,
} from '@mui/material';

import Iconify from 'src/components/iconify';

export default function CounterInfoView() {
  return (
    <Container maxWidth="xl">
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Create Counter Info</Typography>

        <Button
          component={Link}
          to="/counter-create"
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
              <TableCell>Heading</TableCell>
              <TableCell>Sub Heading</TableCell>
              <TableCell>Menu</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell> Home </TableCell>
              <TableCell>Sub home</TableCell>
              <TableCell> include </TableCell>
              <TableCell>
                <Avatar
                  alty="Icon"
                  src=""
                  style={{ width: '100px', height: '90px', borderRadius: '10px' }}
                />
              </TableCell>
              <TableCell>Description</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<Iconify icon="mdi:edit" />}
                />
                <Button
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

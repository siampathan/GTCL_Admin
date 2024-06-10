import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

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
import { API_Link } from 'src/components/api/api';

export default function CompanyprofileView() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    const response = await axios.get(`${API_Link}companyprofile`);
    setItems(response.data);
  };

  return (
    <Container maxWidth="xl">
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Company Profile</Typography>
      </Stack>
      <Paper>
        <Table sx={{ boxShadow: 3, borderRadius: '15px' }}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Mobile</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Website Link</TableCell>
              <TableCell>Logo</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.id}>
                <TableCell sx={{ maxWidth: 200, height: 150 }}>{item.name}</TableCell>
                <TableCell sx={{ maxWidth: 200, height: 150 }}>{item.email}</TableCell>
                <TableCell sx={{ maxWidth: 200, height: 150 }}>{item.phone}</TableCell>
                <TableCell sx={{ maxWidth: 200, height: 150 }}>{item.mobile}</TableCell>
                <TableCell sx={{ maxWidth: 200, height: 150 }}>{item.address}</TableCell>
                <TableCell sx={{ maxWidth: 200, height: 150 }}>{item.description}</TableCell>
                <TableCell sx={{ maxWidth: 200, height: 150 }}>{item.websitelink}</TableCell>
                <TableCell sx={{ width: '250px', height: '90px', paddingLeft: '50px' }}>
                  <img alt={item.url} src={item.url} />
                </TableCell>
                <TableCell style={{ textAlign: 'center' }}>
                  <Button
                    component={Link}
                    to={`/companyprofile-update/${item.id}`}
                    variant="contained"
                    color="primary"
                    style={{
                      paddingLeft: '30px',
                      width: '30px',
                    }}
                    startIcon={<Iconify icon="mdi:edit" />}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
}

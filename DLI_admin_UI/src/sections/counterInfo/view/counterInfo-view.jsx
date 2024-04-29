import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

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
import { API_Link } from 'src/components/api/api';

export default function CounterInfoView() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    const response = await axios.get(`${API_Link}clients`);
    setItems(response.data);
  };

  const deleteItems = async (id) => {
    try {
      await axios.delete(`${API_Link}clients/${id}`);
      getItems();
      console.log('Delete success');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container maxWidth="xl">
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">All Clients</Typography>

        <Button
          component={Link}
          to="/counter-create"
          variant="contained"
          color="inherit"
          startIcon={<Iconify icon="eva:plus-fill" />}
        >
          Add Client
        </Button>
      </Stack>
      <Paper>
        <Table sx={{ boxShadow: 3, borderRadius: '15px' }}>
          <TableHead>
            <TableRow>
              <TableCell>Menu</TableCell>
              <TableCell> Title </TableCell>
              <TableCell> Description </TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items?.map((item) => (
              <TableRow key={item.id}>
                <TableCell> {item.menu} </TableCell>
                <TableCell>{item.title}</TableCell>
                <TableCell> {item.description} </TableCell>
                <TableCell>
                  <Avatar
                    alty="Icon"
                    src={item.url}
                    style={{ width: '100px', height: '90px', borderRadius: '10px' }}
                  />
                </TableCell>
                <TableCell>
                  <Button
                    component={Link}
                    to={`/counter-update/${item.id}`}
                    variant="contained"
                    color="primary"
                    startIcon={<Iconify icon="mdi:edit" />}
                  />
                  <Button
                    component={Link}
                    sx={{ ml: 1 }}
                    variant="contained"
                    color="error"
                    onClick={() => deleteItems(item.id)}
                    startIcon={<Iconify icon="ic:outline-delete" />}
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

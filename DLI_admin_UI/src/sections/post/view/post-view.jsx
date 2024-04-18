import axios from 'axios';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';

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

export default function PostPage() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    const response = await axios.get(`${API_Link}menu`);
    setItems(response.data);
  };

  const handleDelect = async (id) => {
    try {
      await axios.delete(`${API_Link}menu/${id}`);
      getItems();
      toast.success('Item Delete Successfully !');
    } catch (err) {
      console.error('Error', err);
      toast.error('Get an Error !', err);
    }
  };

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Create Menu</Typography>

        <Button
          component={Link}
          to="/create"
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
              <TableCell>Menu</TableCell>
              <TableCell>Slug</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items?.map(({ id, menu, slug, active }) => (
              <TableRow key={id}>
                <TableCell> {menu} </TableCell>
                <TableCell> {slug} </TableCell>
                <TableCell> {active} </TableCell>
                <TableCell>
                  <Button
                    component={Link}
                    to={`/update/${id}`}
                    variant="contained"
                    color="primary"
                    startIcon={<Iconify icon="mdi:edit" />}
                  />
                  <Button
                    component={Link}
                    sx={{ ml: 2 }}
                    variant="contained"
                    color="error"
                    startIcon={<Iconify icon="ic:outline-delete" />}
                    onClick={() => handleDelect(id)}
                  />
                  <ToastContainer />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
}

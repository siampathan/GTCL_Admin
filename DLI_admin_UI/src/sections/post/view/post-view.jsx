import axios from 'axios';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';

import {
  Box,
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
        <Typography variant="h4">All Menus</Typography>

        <Button
          component={Link}
          to="/menu-create"
          variant="contained"
          color="inherit"
          startIcon={<Iconify icon="eva:plus-fill" />}
        >
          Add Menu
        </Button>
      </Stack>
      <Paper>
        <Table sx={{ boxShadow: 3, borderRadius: '15px' }}>
          <TableHead>
            <TableRow>
              <TableCell>Menu</TableCell>
              <TableCell>Parent</TableCell>
              <TableCell>Slug</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items?.map(({ id, menu, parent, slug, active }) => (
              <TableRow key={id}>
                <TableCell> {menu} </TableCell>
                <TableCell> {parent} </TableCell>
                <TableCell> {slug} </TableCell>
                <TableCell> {active === 1 ? 'Active' : 'Inactive'} </TableCell>
                <TableCell>
                  <Box display="flex" justifyContent="center" alignItems="center">
                    <Button
                      component={Link}
                      to={`/menu-update/${id}`}
                      variant="contained"
                      color="primary"
                      style={{
                        paddingLeft: '30px',
                        width: '30px',
                      }}
                      startIcon={<Iconify icon="mdi:edit" />}
                    />
                    <Button
                      component={Link}
                      sx={{ ml: 2 }}
                      variant="contained"
                      color="error"
                      style={{
                        paddingLeft: '30px',
                        width: '30px',
                      }}
                      startIcon={<Iconify icon="ic:outline-delete" />}
                      onClick={() => handleDelect(id)}
                    />
                    <ToastContainer />
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
}

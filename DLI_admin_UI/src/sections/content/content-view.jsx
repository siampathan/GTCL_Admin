import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import {
  Box,
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

export default function AboutView() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    const response = await axios.get(`${API_Link}about`);
    setItems(response.data);
  };

  const deleteItems = async (itemId) => {
    try {
      await axios.delete(`${API_Link}about/${itemId}`);
      getItems();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container maxWidth="xl">
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">All About Info</Typography>

        <Button
          component={Link}
          to="/about-create"
          variant="contained"
          color="inherit"
          startIcon={<Iconify icon="eva:plus-fill" />}
        >
          Add Info
        </Button>
      </Stack>
      <Paper>
        <Table sx={{ boxShadow: 3, borderRadius: '15px' }}>
          <TableHead>
            <TableRow>
              <TableCell>Menu</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Sub Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items?.map((item) => (
              <TableRow key={item.id}>
                <TableCell> {item.menu} </TableCell>
                <TableCell>{item.title}</TableCell>
                <TableCell> {item.designation} </TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell>
                  <Avatar
                    src={item.url}
                    alt={item.image}
                    style={{ width: '100px', height: '90px', borderRadius: '10px' }}
                  />
                </TableCell>
                <TableCell>
                  <Box display="flex" justifyContent="center" alignItems="center">
                    <Button
                      component={Link}
                      to={`/about/${item.id}`}
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
                      sx={{ ml: 1 }}
                      variant="contained"
                      color="error"
                      onClick={() => deleteItems(item.id)}
                      style={{
                        paddingLeft: '30px',
                        width: '30px',
                      }}
                      startIcon={<Iconify icon="ic:outline-delete" />}
                    />
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

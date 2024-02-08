import axios from 'axios';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

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

export default function FaqInfo() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    const response = await axios.get(`${API_Link}faq/info`);
    setItems(response.data);
  };

  const handleDelect = async (id) => {
    try {
      await axios.delete(`${API_Link}faq/info/${id}`);
      getItems();
    } catch (err) {
      console.error('Error', err);
    }
  };

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">FAQ Info Create</Typography>

        <Button
          component={Link}
          to="/faq-create"
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
              <TableCell>Question</TableCell>
              <TableCell>Answer</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Serial</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items?.map((item) => (
              <TableRow key={item.id}>
                <TableCell> {item._menu} </TableCell>
                <TableCell> {item._question} </TableCell>
                <TableCell> {item._answer} </TableCell>
                <TableCell> {item._status} </TableCell>
                <TableCell> {item._serial} </TableCell>
                <TableCell>
                  <Button
                    component={Link}
                    to={`/faq-update/${item._id}`}
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
                    onClick={() => handleDelect(item.id)}
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

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

export default function ContentView() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    const response = await axios.get(`${API_Link}section/content`);
    setItems(response.data);
  };

  const deleteItems = async (itemId) => {
    try {
      await axios.delete(`${API_Link}section/content/${itemId}`);
      getItems();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Create Post</Typography>

        <Button
          component={Link}
          to="/social-create"
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
              <TableCell>MenuId</TableCell>
              <TableCell>Heading</TableCell>
              <TableCell>Sub Heading</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Sub Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Button</TableCell>
              <TableCell>Serial</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Link</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item._id}>
                <TableCell> {item._menuid} </TableCell>
                <TableCell> {item._heading} </TableCell>
                <TableCell> {item._sub_heading} </TableCell>
                <TableCell> {item._title} </TableCell>
                <TableCell> {item._sub_title} </TableCell>
                <TableCell> {item._description} </TableCell>
                <TableCell> {item._button} </TableCell>
                <TableCell> {item._link} </TableCell>
                <TableCell> {item._serial} </TableCell>
                <TableCell> {item._status} </TableCell>
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
                    onClick={() => deleteItems(item._id)}
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

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
    <Container maxWidth="xl">
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Content Info</Typography>

        <Button
          component={Link}
          to="/content-create"
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
              <TableCell>Heading</TableCell>
              <TableCell>Sub Heading</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Sub Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Button</TableCell>
              <TableCell>Link</TableCell>
              <TableCell>Poster</TableCell>
              <TableCell>Serial</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items?.map((item) => (
              <TableRow key={item._id}>
                <TableCell> {item._menu} </TableCell>
                <TableCell>{item._heading}</TableCell>
                <TableCell> {item._sub_heading} </TableCell>
                <TableCell> {item._title} </TableCell>
                <TableCell> {item._sub_title} </TableCell>
                <TableCell>{item._description}</TableCell>
                <TableCell> {item._button} </TableCell>
                <TableCell>
                  <Link to={item._link} target="_blank">
                    {item._link}
                  </Link>
                </TableCell>
                <TableCell>
                  <Avatar
                    alt={item._url}
                    src={item._url}
                    style={{ width: '100px', height: '90px', borderRadius: '10px' }}
                  />
                </TableCell>
                <TableCell> {item._serial} </TableCell>
                <TableCell> {item._status} </TableCell>
                <TableCell>
                  <Button
                    component={Link}
                    to={`/content/${item._id}`}
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

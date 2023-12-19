import axios from 'axios';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import {
  Stack,
  Table,
  Paper,
  Button,
  Avatar,
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
  const [title, setTitle] = useState([]);

  useEffect(() => {
    axios
      .get(API_Link)
      .then((res) => setTitle(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelect = async (id) => {
    try {
      await axios.delete(`${API_Link}navbar/${id}`);
      window.location.reload();
    } catch (err) {
      console.error('Error', err);
    }
  };

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Create Post</Typography>

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
              <TableCell>ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Sub Title</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {title?.map((data, indx) => (
              <TableRow key={indx}>
                <TableCell>{data._id}</TableCell>
                <TableCell>{data._name}</TableCell>
                <TableCell>{data._email}</TableCell>
                <TableCell>
                  {' '}
                  <Avatar
                    alt="photo"
                    src="https://img.freepik.com/free-photo/subway-dark-atmosphere_23-2150914290.jpg?t=st=1702980079~exp=1702983679~hmac=b53ecfa896ee6d7cafacd751e0397f3fc863d50f3722947878abfb36779b2447&w=1380"
                  />{' '}
                </TableCell>
                <TableCell>
                  <Button
                    component={Link}
                    to={`/update/${data.ID}`}
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
                    onClick={(e) => handleDelect(data.ID)}
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

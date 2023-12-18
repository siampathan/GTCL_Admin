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
import { API_Link } from 'src/components/API/api';

export default function PostPage() {
  const [title, setTitle] = useState([]);

  useEffect(() => {
    axios
      .get(API_Link)
      .then((res) => setTitle(res.data))
      .catch((err) => console.log(err));
  }, []);

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
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Sub Title</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {title?.map((data, indx) => (
              <TableRow key={indx}>
                <TableCell>{data.Name}</TableCell>
                <TableCell>{data.Email}</TableCell>
                <TableCell>
                  <Button
                    component={Link}
                    to={`update/${data?.ID}`}
                    variant="contained"
                    color="primary"
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

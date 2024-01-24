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

export default function FooterView() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    const response = await axios.get(`${API_Link}footer/item`);
    setItems(response.data);
    console.log(response.data);
  };

  // const parseHtmlToList = (htmlString) => {
  //   const parser = new DOMParser();
  //   const doc = parser.parseFromString(htmlString, 'text/html');
  //   const listItems = Array.from(doc.body.querySelectorAll('li')).map((li) => li.textContent);

  //   return listItems;
  // };

  const handleDelect = async (id) => {
    try {
      await axios.delete(`${API_Link}footer/item/${id}`);
      getItems();
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
          to="/footer-create"
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
              <TableCell>Header</TableCell>
              <TableCell>List</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items?.map((item) => (
              <TableRow key={item.id}>
                <TableCell> {item.header} </TableCell>
                <TableCell> {item.list} </TableCell>
                {/* {parseHtmlToList(item.list).map((listItem, listItemIndex) => (
                  // <p key={listItemIndex}> {listItem} </p>
                  <TableCell key={listItemIndex}> {listItem} </TableCell>
                ))} */}
                <TableCell>
                  <Button
                    component={Link}
                    to={`/footer/${item.id}`}
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
                    onClick={(e) => handleDelect(item.id)}
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

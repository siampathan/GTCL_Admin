import axios from 'axios';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

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
  TableContainer,
} from '@mui/material';

import Iconify from 'src/components/iconify';
import { API_Link } from 'src/components/api/api';

export default function FooterView() {
  const [items, setItems] = useState([]);
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    getItems();
    getMenus();
  }, []);

  const getItems = async () => {
    const response = await axios.get(`${API_Link}content`);
    setItems(response.data);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_Link}content/${id}`);
      getItems();
    } catch (err) {
      console.error('Error', err);
    }
  };

  const getMenus = async () => {
    const response = await axios.get(`${API_Link}menu`);
    const menuData = response.data.reduce((acc, menu) => {
      acc[menu.id] = menu.menu;
      return acc;
    }, {});
    setMenus(menuData);
  };

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">All Contents</Typography>
        <Button
          component={Link}
          to="/content-create"
          variant="contained"
          color="inherit"
          startIcon={<Iconify icon="eva:plus-fill" />}
        >
          Add Content
        </Button>
      </Stack>
      <Paper>
        <TableContainer>
          <Table sx={{ boxShadow: 3, borderRadius: '15px', minWidth: 800 }}>
            <TableHead>
              <TableRow>
                <TableCell>Menu</TableCell>
                <TableCell>Heading</TableCell>
                <TableCell>Sub Heading</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Sub Title</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Image</TableCell>
                <TableCell>Button</TableCell>
                <TableCell>Button Link</TableCell>
                <TableCell>Serial</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items?.map((item) => (
                <TableRow key={item.id}>
                  <TableCell> {menus[item.menu] || item.menu} </TableCell>
                  <TableCell> {item.heading} </TableCell>
                  <TableCell> {item.sub_heading} </TableCell>
                  <TableCell> {item.title} </TableCell>
                  <TableCell style={{ minWidth: '150px' }}> {item.sub_title} </TableCell>
                  <TableCell style={{ minWidth: '350px' }}> {item.description} </TableCell>
                  <TableCell>
                    <Avatar
                      alty={item.image}
                      src={item.url}
                      style={{
                        width: '100px',
                        height: '90px',
                        borderRadius: '10px',
                        objectFit: 'cover',
                      }}
                    />
                  </TableCell>
                  <TableCell> {item.button} </TableCell>
                  <TableCell>
                    <Link to={item.link} target="_blank">
                      {item.link}
                    </Link>
                  </TableCell>
                  <TableCell> {item.serial} </TableCell>
                  <TableCell> {item.status === 1 ? 'Active' : 'Inactive'}</TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={1}>
                      <Button
                        component={Link}
                        to={`/content/${item.id}`}
                        variant="contained"
                        color="primary"
                        startIcon={<Iconify icon="mdi:edit" />}
                      />
                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => handleDelete(item.id)}
                        startIcon={<Iconify icon="ic:outline-delete" />}
                      />
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
}

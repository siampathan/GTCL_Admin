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
} from '@mui/material';

import Iconify from 'src/components/iconify';
import { API_Link } from 'src/components/api/api';

export default function FaqInfo() {
  const [items, setItems] = useState([]);
  // const [menus, setMenus] = useState([]);

  useEffect(() => {
    getItems();
    // getMenus();
  }, []);

  const getItems = async () => {
    const response = await axios.get(`${API_Link}license`);
    setItems(response.data);
  };

  // const getMenus = async () => {
  //   const response = await axios.get(`${API_Link}menu`);
  //   const menuData = response.data.reduce((acc, menu) => {
  //     acc[menu.id] = menu.menu;
  //     return acc;
  //   }, {});
  //   setMenus(menuData);
  // };

  const handleDelect = async (id) => {
    try {
      await axios.delete(`${API_Link}license/${id}`);
      getItems();
    } catch (err) {
      console.error('Error', err);
    }
  };

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">All License Info</Typography>

        <Button
          component={Link}
          to="/license-create"
          variant="contained"
          color="inherit"
          startIcon={<Iconify icon="eva:plus-fill" />}
        >
          Add License Info
        </Button>
      </Stack>
      <Paper>
        <Table sx={{ boxShadow: 3, borderRadius: '15px' }}>
          <TableHead>
            <TableRow>
              {/* <TableCell>Menu</TableCell> */}
              <TableCell>Title</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items?.map((item) => (
              <TableRow key={item.id}>
                {/* <TableCell> {menus[item.menu] || item.menu} </TableCell> */}
                <TableCell sx={{ minWidth: 350 }}>{item.title}</TableCell>
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
                <TableCell>
                  <Button
                    component={Link}
                    to={`/license-update/${item.id}`}
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

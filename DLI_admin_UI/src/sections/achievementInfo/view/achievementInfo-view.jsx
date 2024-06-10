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

export default function AchievementInfoView() {
  const [items, setItems] = useState([]);
  // const [menus, setMenus] = useState([]);

  useEffect(() => {
    getItems();
    // getMenus();
  }, []);

  const getItems = async () => {
    const response = await axios.get(`${API_Link}achieve`);
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

  const deleteItems = async (itemId) => {
    try {
      await axios.delete(`${API_Link}achieve/${itemId}`);
      getItems();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container maxWidth="xl">
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">All Achievements</Typography>

        <Button
          component={Link}
          to="/achieve-create"
          variant="contained"
          color="inherit"
          startIcon={<Iconify icon="eva:plus-fill" />}
        >
          Add Achievement
        </Button>
      </Stack>
      <Paper>
        <Table sx={{ boxShadow: 3, borderRadius: '15px' }}>
          <TableHead>
            <TableRow>
              {/* <TableCell>Menu</TableCell> */}
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.id}>
                {/* <TableCell> {menus[item.menu] || item.menu} </TableCell> */}
                <TableCell sx={{ minWidth: 350, height: 150 }}>{item.title}</TableCell>
                <TableCell sx={{ minWidth: 450, height: 150 }}>{item.description}</TableCell>
                <TableCell>
                  <Avatar
                    alty={item.url}
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
                    to={`/achieve-update/${item.id}`}
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
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
}

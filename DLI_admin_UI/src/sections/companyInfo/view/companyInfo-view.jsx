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

export default function CompanyInfoView() {
  const [items, setItems] = useState([]);
  // const [menus, setMenus] = useState([]);

  useEffect(() => {
    getItems();
    // getMenus();
  }, []);

  const getItems = async () => {
    const response = await axios.get(`${API_Link}jobs`);
    setItems(response.data.rows);
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
      await axios.delete(`${API_Link}jobs/${itemId}`);
      getItems();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container maxWidth="xl">
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">All Jobs Info</Typography>

        <Button
          component={Link}
          to="/job-create"
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
              {/* <TableCell>Menu</TableCell> */}
              <TableCell>Title</TableCell>
              <TableCell>Job List</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.id}>
                {/* <TableCell> {menus[item.menu] || item.menu} </TableCell> */}
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.job_list}</TableCell>
                {/* <TableCell>
                  <iframe
                    title="Google Map"
                    width="300"
                    height="200"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    src={`${item.map_view}`}
                  />
                </TableCell> */}
                <TableCell>
                  <Avatar
                    src={item.url}
                    alty={item.image}
                    style={{ width: '100px', height: '90px', borderRadius: '10px' }}
                  />
                </TableCell>
                <TableCell>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      flexDirection: 'column',
                      gap: '10px',
                    }}
                  >
                    <Button
                      component={Link}
                      to={`/job/${item.id}`}
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
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
}

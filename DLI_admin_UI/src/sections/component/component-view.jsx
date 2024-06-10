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
  TableContainer,
} from '@mui/material';

import Iconify from 'src/components/iconify';
import { API_Link } from 'src/components/api/api';

export default function ComponentList() {
  const [components, setComponents] = useState([]);
  const [menus, setMenus] = useState([]);
  const [contents, setContents] = useState([]);

  useEffect(() => {
    getComponents();
    getMenus();
    getContents();
  }, []);

  const getMenus = async () => {
    const response = await axios.get(`${API_Link}menu`);
    const menuData = response.data.reduce((acc, menu) => {
      acc[menu.id] = menu.menu;
      return acc;
    }, {});
    setMenus(menuData);
  };

  const getContents = async () => {
    const response = await axios.get(`${API_Link}content`);
    const contentData = response.data.reduce((acc, content) => {
      acc[content.id] = content.heading;
      return acc;
    }, {});
    setContents(contentData);
  };

  const getComponents = async () => {
    const response = await axios.get(`${API_Link}component`);
    setComponents(response.data);
  };

  const deleteComponent = async (userId) => {
    try {
      await axios.delete(`${API_Link}component/${userId}`);
      getComponents();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">All Components</Typography>
        <Button
          component={Link}
          to="/component-create"
          variant="contained"
          color="inherit"
          startIcon={<Iconify icon="eva:plus-fill" />}
        >
          Add Component
        </Button>
      </Stack>
      <Paper>
        <TableContainer>
          <Table sx={{ boxShadow: 3, borderRadius: '15px', minWidth: 800 }}>
            <TableHead>
              <TableRow>
                <TableCell>Menu</TableCell>
                <TableCell>Content</TableCell>
                <TableCell>Heading</TableCell>
                <TableCell>Sub Heading</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Sub Title</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Image</TableCell>
                <TableCell>Button</TableCell>
                <TableCell>Link</TableCell>
                <TableCell>Serial</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {components.map((component) => (
                <TableRow key={component.id}>
                  <TableCell> {menus[component.menu] || component.menu} </TableCell>
                  <TableCell> {contents[component.content] || component.content} </TableCell>
                  <TableCell> {component.heading} </TableCell>
                  <TableCell> {component.sub_heading} </TableCell>
                  <TableCell> {component.title} </TableCell>
                  <TableCell> {component.sub_title} </TableCell>
                  <TableCell> {component.description} </TableCell>
                  <TableCell>
                    <Avatar
                      src={component.url}
                      alt={component.image}
                      style={{ width: '100px', height: '90px', borderRadius: '10px' }}
                    />
                  </TableCell>
                  <TableCell> {component.button} </TableCell>
                  <TableCell> {component.link} </TableCell>
                  <TableCell> {component.serial} </TableCell>
                  <TableCell> {component.status === 1 ? 'Active' : 'Inactive'} </TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={1}>
                      <Button
                        component={Link}
                        to={`/component-update/${component.id}`}
                        variant="contained"
                        color="primary"
                        startIcon={<Iconify icon="mdi:edit" />}
                      />
                      <Button
                        component={Link}
                        variant="contained"
                        color="error"
                        onClick={() => deleteComponent(component.id)}
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

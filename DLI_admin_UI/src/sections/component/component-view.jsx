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

export default function ComponentList() {
  const [components, setComponents] = useState([]);

  useEffect(() => {
    getComponents();
  }, []);

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
      <Paper
      // style={{
      //   marginLeft: '-125px',
      //   minWidth: '900px',
      //   margin: '0 auto',
      // }}
      >
        <Table sx={{ boxShadow: 3, borderRadius: '15px' }}>
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
                <TableCell> {component.menu} </TableCell>
                <TableCell> {component.content} </TableCell>
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
                <TableCell> {component.status} </TableCell>
                <TableCell>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '10px',
                    }}
                  >
                    <Button
                      component={Link}
                      to={`/component-update/${component.id}`}
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
                      onClick={() => deleteComponent(component.id)}
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

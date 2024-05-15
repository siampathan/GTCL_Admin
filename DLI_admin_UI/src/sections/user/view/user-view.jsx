import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

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

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [role, setRole] = useState('');

  useEffect(() => {
    getUsers();
    getLoggedInUserInfo();
  }, []);

  const getUsers = async () => {
    const response = await axios.get(`${API_Link}get-user-list`);
    setUsers(response.data.data.rows);
  };

  const getLoggedInUserInfo = async () => {
    const response = await axios.get(`${API_Link}get-logged-in-user-info`);
    setRole(response.data.data.role);
  };

  const deleteUser = async (userId) => {
    try {
      await axios.delete(`${API_Link}delete-user-by-id/${userId}`);
      getUsers();
    } catch (err) {
      console.log(err);
    }
  };

  const getRoleValue = (userRole) => (userRole === 1 ? 'Admin' : 'User');

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">All Users</Typography>
        {role === 1 && (
          <Button
            component={Link}
            to="/user-create"
            variant="contained"
            color="inherit"
            startIcon={<Iconify icon="eva:plus-fill" />}
          >
            Add User
          </Button>
        )}
      </Stack>
      <Paper>
        <Table sx={{ boxShadow: 3, borderRadius: '15px' }}>
          <TableHead>
            <TableRow>
              <TableCell>Firstname</TableCell>
              <TableCell>Lastname</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              {role === 1 && <TableCell>Action</TableCell>}
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell> {user.firstname} </TableCell>
                <TableCell> {user.lastname} </TableCell>
                <TableCell> {user.email} </TableCell>
                <TableCell> {getRoleValue(user.role)} </TableCell>
                {role === 1 && (
                  <TableCell>
                    <Button
                      component={Link}
                      to={`/user-update/${user.id}`}
                      variant="contained"
                      color="primary"
                      startIcon={<Iconify icon="mdi:edit" />}
                    />
                    <Button
                      component={Link}
                      sx={{ ml: 1 }}
                      variant="contained"
                      color="error"
                      onClick={() => deleteUser(user.id)}
                      startIcon={<Iconify icon="ic:outline-delete" />}
                    />
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
}

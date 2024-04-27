import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

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
  // const navigate = useNavigate();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get(`${API_Link}get-user-list`);
    setUsers(response.data.data);
  };

  const deleteUser = async (userId) => {
    try {
      await axios.delete(`${API_Link}delete-user-by-id/${userId}`);
      getUsers();
    } catch (err) {
      console.log(err);
    }
  };

  const getRoleValue = (role) => (role === 1 ? 'Admin' : 'User');

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">All Users</Typography>

        <Button
          component={Link}
          to="/user-create"
          variant="contained"
          color="inherit"
          startIcon={<Iconify icon="eva:plus-fill" />}
        >
          Add User
        </Button>
      </Stack>
      <Paper>
        <Table sx={{ boxShadow: 3, borderRadius: '15px' }}>
          <TableHead>
            <TableRow>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              {/* <TableCell>Link</TableCell> */}
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell> {user.email} </TableCell>
                <TableCell> {getRoleValue(user.role)} </TableCell>
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
}

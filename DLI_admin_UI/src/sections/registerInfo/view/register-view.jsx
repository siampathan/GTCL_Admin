import axios from 'axios';
import { useState, useEffect } from 'react';

import {
  Stack,
  Table,
  Paper,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Container,
  Typography,
} from '@mui/material';

import { API_Link } from 'src/components/api/api';

export default function RegisterInfoView() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    const response = await axios.get(`${API_Link}register/info`);
    setItems(response.data);
  };

  return (
    <Container maxWidth="xl">
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">All Register Info</Typography>
      </Stack>
      <Paper>
        <Table sx={{ boxShadow: 3, borderRadius: '15px' }}>
          <TableHead>
            <TableRow>
              <TableCell>Student Name</TableCell>
              <TableCell>Father Name</TableCell>
              <TableCell>Mobile</TableCell>
              <TableCell>Last Education level</TableCell>
              <TableCell>Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.id}>
                <TableCell> {item.student_name} </TableCell>
                <TableCell>{item.father_name}</TableCell>
                <TableCell> {item.mobile} </TableCell>
                <TableCell> {item.last_education_level} </TableCell>
                <TableCell> {item.address} </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
}

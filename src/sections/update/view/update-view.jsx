import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { styled } from '@mui/system';
import { Paper, Button, Container, TextField, Typography } from '@mui/material';

import { API_Link } from 'src/components/api/api';

const containerStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  height: '60vh',
};

const StyledContainer = styled(Container)(containerStyles);

const paperStyles = {
  width: '80%',
  padding: (theme) => theme.spacing(3),
  borderRadius: (theme) => theme.spacing(1),
  boxShadow: 4,
};

const StyledPaper = styled(Paper)(paperStyles);

const formStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: (theme) => theme.spacing(2),
};

const StyledForm = styled('form')(formStyles);

export default function UpdateView() {
  // const [_menu, setMenu] = useState('');
  // const [_parentId, setParentId] = useState('');
  // const [_slug, setSlug] = useState('');
  // const [_sort, setSort] = useState('');
  // const [_active, setActive] = useState('');
  // const [_isTitle, setTitle] = useState('');
  const { id } = useParams();
  const [values, setValues] = useState({
    _menu: '',
    _parentId: '',
    _slug: '',
    _sort: '',
    _active: '',
    _isTitle: '',
  });

  useEffect(() => {
    axios
      .get(`${API_Link}header/title/${id}`)
      .then((res) => {
        setValues({
          ...values,
          _menu: res.data._menu,
          _parentId: res.data._parentId,
          _slug: res.data._slug,
          _sort: res.data._sort,
          _active: res.data._active,
          _isTitle: res.data._isTitle,
        });
      })
      .catch((err) => console.error(err));
  }, [id, values]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // await axios
    //   .patch(`${API_Link}header/title/${id}`, {
    //     _menu,
    //     _parentId,
    //     _slug,
    //     _sort,
    //     _active,
    //     _isTitle,
    //   })
    //   .then((res) => {
    //     navigate('/post');
    //   })
    //   .catch((err) => console.log(err));

    axios
      .patch(`${API_Link}header/title/${id}`, values)
      .then((res) => {
        navigate('/post');
      })
      .catch((err) => console.error(err));
  };

  return (
    <StyledContainer sx={containerStyles}>
      <StyledPaper sx={paperStyles}>
        <StyledForm sx={formStyles} onSubmit={handleSubmit}>
          <Typography variant="h3" gutterBottom>
            Update Data
          </Typography>
          <TextField
            label="Menu"
            type="text"
            value={values._menu}
            placeholder="Enter Menu"
            variant="outlined"
            // onChange={(e) => setMenu(e.target.value)}
            onChange={(e) => setValues({ ...values, _menu: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="ParentID"
            type="text"
            value={values._parentId}
            placeholder="Enter ParentId"
            variant="outlined"
            // onChange={(e) => setParentId(e.target.value)}
            onChange={(e) => setValues({ ...values, _parentId: e.target.value })}
            fullWidth
            margin="normal"
          />

          <TextField
            label="Slug"
            type="text"
            value={values._slug}
            placeholder="Enter Slug"
            variant="outlined"
            // onChange={(e) => setSlug(e.target.value)}
            onChange={(e) => setValues({ ...values, _slug: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Sort"
            type="text"
            value={values._sort}
            placeholder="Enter Sort"
            variant="outlined"
            // onChange={(e) => setSort(e.target.value)}
            onChange={(e) => setValues({ ...values, _sort: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Active"
            type="text"
            value={values._active}
            placeholder="Enter Active Status"
            variant="outlined"
            // onChange={(e) => setActive(e.target.value)}
            onChange={(e) => setValues({ ...values, _active: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Title"
            type="text"
            value={values._isTitle}
            placeholder="Enter Title Status"
            variant="outlined"
            // onChange={(e) => setTitle(e.target.value)}
            onChange={(e) => setValues({ ...values, _isTitle: e.target.value })}
            fullWidth
            margin="normal"
          />
          <Button type="submit" variant="contained" color="success">
            Update
          </Button>
        </StyledForm>
      </StyledPaper>
    </StyledContainer>
  );
}

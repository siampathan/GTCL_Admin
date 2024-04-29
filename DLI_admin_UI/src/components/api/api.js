import axios from 'axios';

export const API_Link = `http://localhost:8000/`;

export const urlInstance = axios.create({
  API_Link,
});

export const setAuthToken = (token) => {
  if (token) {
    urlInstance.defaults.headers.common.authorization = `${token}`;
  } else {
    delete urlInstance.defaults.headers.common.authorization;
  }
};

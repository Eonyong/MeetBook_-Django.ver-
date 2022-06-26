import axios from 'axios';
const API = axios.create();

export const UserCreate = ((
  name,
  password,
  nickname,
  email,
  gender,
  age,
  profile_image,
  profile_description,
  host_point,
  guest_point) => API.post(
    '/api/user', {
    name: name,
    password: password,
    nickname: nickname,
    email: email,
    gender: gender,
    age: age,
    profile_image: profile_image,
    profile_description: profile_description,
    host_point: host_point,
    guest_point: guest_point,
}));
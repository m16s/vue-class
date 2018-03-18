import Axios from 'axios';

export function getUsers() {
  return Axios.get('http://127.0.0.1:3000/users')
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
}

export function deleteUser(id) {
  console.log(id);
  // TBD
}

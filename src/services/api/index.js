import ky from 'ky';

const api = {
  index() {
    return ky.get('https://jsonplaceholder.typicode.com/posts').json();
  },
};

export default api;

import ky from 'ky';

const api = {
  index() {
    return ky.get('https://jsonplaceholder.typicode.com/posts').json();
  },

  show(id) {
    return ky.get(`https://jsonplaceholder.typicode.com/posts/${id}`).json();
  },
};

export default api;

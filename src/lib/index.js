import { api } from 'services';

export const createFetchPost = id => () => api.show(id);

export const fetchPosts = () => api.index();

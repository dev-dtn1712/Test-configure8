import apisauce from 'apisauce';
import config from '../config.js';

export default (subUrl) => {
  const api = apisauce.create({
    baseURL: `${config.apiBase}/2020-21/${subUrl}`,
    headers: {
      'Content-Type': 'application/json'
    },
    responseType: 'json'
  });

  const list = () => api.get('');
  const get = id => api.get(id);

  return {
    list,
    get
  };
};

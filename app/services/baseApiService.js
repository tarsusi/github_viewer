import axios from 'axios';

export const get = (url) => {
  return axios
    .get(url)
    .then(({ data, status, message }) => {
      if (status === 200) {
        return {
          data,
          error: false,
          message: '',
        };
      }

      return {
        data: null,
        error: true,
        message,
      };
    })
    .catch(({ message }) => {
      return {
        data: null,
        error: true,
        message,
      };
    });
};

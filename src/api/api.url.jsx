//BASE URL IN package.json proxy

import axios from 'axios';

export const api = (url, data) => {

    const { path, method } = url

    return axios({ // the axios call returns a promise because of its .then; you can just return it
      method: method,
      url: path,
      data: data
    })
    .then(res => {
        console.log(res)
      return res.data;
    })
    .catch(err => {
      console.error(err)
    })
  }
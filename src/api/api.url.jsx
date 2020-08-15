//BASE URL IN package.json proxy

import axios from 'axios';

export const api = (url, data, params=null) => {

    const { path, method } = url
    var newPath = path;

    if (params) {

      for (const param in params) {
        newPath = newPath.replace(  ':' + param,  params[param])
      }

    }

    return axios({ // the axios call returns a promise because of its .then; you can just return it
      method: method,
      url: newPath,
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

  // EXAMPLE
  // const data = {
  //   email: email,
  //   password: password,
  // };   
  // var params = {
  //     id:"4",
  //     name:'Tom'
  // };

  // api(URL.users.login, data).then( res => {
  //   if (res.message === 'Unauthorized') {
  //     console.log('Unauthorized');
  //   }else{
  //     setCurrentUser(res.token);

  //   }    
  // })
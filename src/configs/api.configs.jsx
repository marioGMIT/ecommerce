
export const URL = {
    users:
        {
            getAllUsers: { path:'/users', method: 'post'},
            login: { path:'/login', method: 'post'},
            register: { path:'/register', method: 'post'},
            version: { path:'/', method: 'get'},
        }
    
}

// let _serverIp = 'http://localhost';
// let _port = '8015';
// let _extension = '/api';
// let _baseURL = `${_serverIp}:${_port}${_extension}`;
// let _mockURL = 'http://localhost:8015/api/';

// if (process.env.NODE_ENV === 'testing') { 
//   _mockURL = 'http://localhost:1111/'
//   _port = '1111'
//   _baseURL = `${_serverIp}:${_port}`
// }
// if (process.env.NODE_ENV === 'production') { 
//   _port = '1111'
//   _serverIp = 'http://192.168.1.123'
//   _baseURL = `${_serverIp}:${_port}`
// }

// export const serverIp = _serverIp;
// export const path = '/mock';
// export const timeout = '15000' ;
// export const baseURL = _baseURL;
// export const mockURL = _mockURL;


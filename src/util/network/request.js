import axios from 'axios';

// let ip = "localhost";
let ip = "47.103.204.62";
let port = "8083";
let prefix = "http://" + ip + ':' + port;

export function request(config) {
    const instance = axios.create({
            baseURL:prefix,
            timeout:10000
    });

    return instance(config);



    // return new Promise((resolve, reject) => {
    //     const instance = axios.create({
    //         baseURL:prefix,
    //         timeout:10000
    //     });
    //
    //
    //     //发起网络请求
    //     instance(config).then(res =>{
    //         resolve(res);
    //     }).catch(err => {
    //         reject(err)
    //     })
    // })
}
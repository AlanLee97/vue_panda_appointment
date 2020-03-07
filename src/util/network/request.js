import axios from 'axios';

// let ip = "localhost";
 let ip = "47.103.204.62";
let port = "8764";
let apiVersion = "/api/v1";
let prefix = "http://" + ip + ':' + port + apiVersion;

export function request(config) {
    const instance = axios.create({
            baseURL:prefix,
            timeout:100000
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

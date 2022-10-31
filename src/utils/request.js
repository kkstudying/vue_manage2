import axios from 'axios'

const http =  axios.create({
    // 通用请求的地址前缀
    baseURL:'/api',
    timeout:10000,//超时时间
})

// 添加请求拦截器
http.interceptors.request.use(function(config){
    // 在发送请求前做些什么
    return config;
},function(error){
    return Promise.reject(error);
});

// 添加相应拦截器
http.interceptors.response.use(function(response){
    // 对响应数据做点什么
    return response;
},function(error){
    // 对相应错误做点什么
    return Promise.reject(error);
})

export default http
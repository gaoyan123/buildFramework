import axios from 'axios'
axios.defaults.timeout = 5000 // 请求超时
axios.defaults.baseURL = '/api/'  // api 即上面 vue.config.js 中配置的地址
export default class request {
    // 封装get方法
    get (url,params) {
        return axios.get(url,{'params': params});
    }
    // 封装post方法
    post (url, params = {}, data = {}) {
        return axios.post(url+ request.formatParams(params),  data)
    }
}

request.formatParams = (params) => {
    const p = [];
    Object.keys(params).forEach((key) => {
        p.push(`${key}=${encodeURIComponent(params[key])}`);
    })
    return (p.length > 0 ? '?' : '') + p.join('&');
};
request.formatFormData = (data) => {
    const formData = new FormData();
    for (const d in data) {
        formData.append(d, data[d]);
    }
    return formData;
};
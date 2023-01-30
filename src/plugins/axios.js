import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import TokenService from '@/services/TokenService';
import store from './store/store';

Vue.use(VueAxios, axios);


const URL_BASE = 'http://192.168.10.16:5000/api/'

const instance = axios.create({
    baseURL: URL_BASE,
    headers: {
        common: {
            'X-Requested-With': 'XMLHttpRequest',
            "Access-Control-Allow-Headers": "content-type",
            "Access-Control-Allow-Origin": "*"
        },
    },
});



instance.interceptors.request.use((config) => {
    const _token = TokenService.getToken();
    if (_token) {

        config.headers['authorization'] = `${_token}`
    }
    return config;
}, error => console.log(error))

store.$api = instance;
Vue.prototype.$api = instance;

export default instance;
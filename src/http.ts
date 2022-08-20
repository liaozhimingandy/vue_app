import axios,{AxiosRequestConfig,AxiosResponse} from 'axios'
import { ElLoading } from 'element-plus';

let loading;
const startLoading = ()=> {
    const options = {
        lock: true,
        text: "加载中...",
        background: "rgba(0,0,0,0.7)"
    }
    loading = ElLoading.service(options)
}


const endLoading = ()=>{
  loading.close()
}

// 请求拦截
axios.interceptors.request.use((config)=>{
    startLoading();//  开始loading
    return config
})

// 响应拦截
axios.interceptors.response.use((response)=>{
  endLoading(); //  结束loading
  return response;
},error =>{
    endLoading(); //  结束loading
    return Promise.reject()  // 错误提醒
})


axios.defaults.timeout = 1000*6;
export default axios;
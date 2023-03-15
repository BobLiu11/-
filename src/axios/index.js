import axios from "axios";
import { AxiosResponse } from "axios";
import { ElMessage } from "element-plus";
import { getToken } from "../utils/auth";

const http = axios.create({
  baseURL: "http://localhost:3000/",
  xsrfCookieName: "XSRF-TOKEN", // 默认值
});

// 添加请求拦截器
http.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    const headers = config.headers;
    if (!headers["Content-Type"]) {
      headers["Content-Type"] = "application/json;charset=UTF-8";
    }
    /**
     * 请求拦截器
     * 客户端发送请求 -> [请求拦截器] -> 服务器
     * token校验(JWT) : 接受服务器返回的token,存储到vuex/pinia/本地储存当中
     */
    // const token = localStorage.getItem("token") || "";
    // if (token) {
    //   headers["X-Token"] = getToken();
    // }
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
http.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (res.code !== 200) {
      // 登录信息失效，应跳转到登录页面，并清空本地的token
      //   localStorage.setItem("token", "");
      //   // router.replace({
      //   //   path: '/login'
      //   // })
      //   return Promise.reject(data);
    } else {
      return res;
    }
  },
  (error) => {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);
export default http;

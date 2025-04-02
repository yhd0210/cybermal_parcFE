import axios, { AxiosError, AxiosInstance } from 'axios';
import { Storage } from "../src/storage/index";

const baseUrl = `http://severurl~~`;

export const Instance = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
});

Instance.interceptors.request.use(
  (config) => {
     // 로컬스토리지에 access_token이라는 이름으로 저장되어있는 값 가져오기
    const accessToken = Storage.getItem('access_token');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);
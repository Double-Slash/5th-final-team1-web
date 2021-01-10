import axios from "axios";
import { getAccessToken } from "@utils/modules/token";

const { SERVER_URL } = process.env;

const defaultAxios = axios.create({
  baseURL: `${SERVER_URL}/`,
});

const createInstanceWithToken = () => {
  const instance = axios.create({
    baseURL: `${SERVER_URL}/`,
  });
  instance.interceptors.request.use((config) => {
    const token = getAccessToken({ key: "access" });
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  });
  return instance;
};

const withTokenAxios = createInstanceWithToken();

export { defaultAxios, withTokenAxios };

import http from "@/utils/http";

export const login = ({ username, password }) =>
  http.post(`/user/login`, { username, password });

export const getInfo = () => http.get(`/user/info`);

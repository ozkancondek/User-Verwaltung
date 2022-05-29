import { API } from "./axiosInstance";

export const fetchData = async () => {
  let res = await API("/api/users");
  return res.data;
};

export const fetchSingleData = async (id) => {
  let res = await API(`/api/users/details/${id}`);
  return res.data;
};

export const postData = async (data) => {
  let res = await API.post("/api/users/add", data);
  return res.data;
};

export const deleteData = async (id) => {
  let res = await API.delete(`/api/users/delete/${id}`);
  return res.data;
};
export const updateData = async (id, data) => {
  let res = await API.put(`/api/users/update/${id}`, data);
  return res.data;
};

export const initialServices = {
  fetchData,
  fetchSingleData,
  postData,
  deleteData,
  updateData,
};

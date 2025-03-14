import axios from 'axios';

//const baseURL = "http://18.228.28.221:8090/api/file";
//const baseURL = "http://apifilemaxiaseo_container:8090/api/file";
const baseURL = "http://localhost:8090/api/file";

export const uploadFile = async (file, date) => {
    const formData = new FormData();
    formData.append('file', file);

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year =date.getFullYear();

    return axios.post(`${baseURL}`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        params: { year, month, day },
    });
};

export const downloadFile = async (fileNameId) => {
    const response = await axios.get(`${baseURL}/download/${fileNameId}`, {
        responseType: 'blob',
      });
      return response;
};

export const downloaSiigodFile = async (fileNameId) => {
    const response = await axios.get(`${baseURL}/download-siigo/${fileNameId}`, {
        responseType: 'blob',
      });
      return response;
};

export const getFiles = async () => {
    const response = await axios.get(`${baseURL}`);
      return response;
};

export const deleteFile = async (fileName) => {
    await axios.delete(`${baseURL}/${fileName}`);
};
import axios from 'axios';

//const baseURL = "https://maxiaseoback.duckdns.org";
const baseURL = "http://localhost:8090";

export const uploadFile = async (file, date) => {
    const formData = new FormData();
    formData.append('file', file);

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year =date.getFullYear();

    return axios.post(`${baseURL}/upload-excel`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        params: { year, month, day },
    });
};

export const processInfo = async (date) => {

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year =date.getFullYear();
    
    const response = await axios.get(`${baseURL}/processed-info`, {
        params: { year, month, day },
    });
    return await response;
};

export const downloadFile = async () => {
    const response = await axios.get(`${baseURL}/download`, {
        responseType: 'blob',
      });
      return response;
};
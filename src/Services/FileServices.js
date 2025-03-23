import axios from 'axios';

const FILE_API_URL = process.env.REACT_APP_FILE_API_URL || "http://localhost:8090/api/file";

export const uploadFile = async (file, date) => {
    const formData = new FormData();
    formData.append('file', file);

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year =date.getFullYear();

    return axios.post(`${FILE_API_URL}`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        params: { year, month, day },
    });
};

export const downloadFile = async (fileNameId) => {
    const response = await axios.get(`${FILE_API_URL}/download/${fileNameId}`, {
        responseType: 'blob',
      });
      return response;
};

export const downloaSiigodFile = async (fileNameId) => {
    const response = await axios.get(`${FILE_API_URL}/download-siigo/${fileNameId}`, {
        responseType: 'blob',
      });
      return response;
};

export const getFiles = async () => {
    const response = await axios.get(`${FILE_API_URL}`);
      return response;
};

export const deleteFile = async (fileName) => {
    await axios.delete(`${FILE_API_URL}/${fileName}`);
};
import axios from 'axios';

export const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    return axios.post('http://localhost:8090/upload-excel', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
};

export const fetchProcessedInfo = async (year, month, day) => {
    year=2024; month=9; day=1;
    const response = await axios.get(`http://localhost:8090/processed-info`, {
        params: { year, month, day },
    });
    return response.data;
};
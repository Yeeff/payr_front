import axios from 'axios';

//const baseURL = "http://18.228.28.221:8090/api/file";
//const baseURL = "http://apifilemaxiaseo_container:8090/api/file";
const baseURL = "http://localhost:8092/api/payroll";

export const processInfo = async (fileName) => {

   
    const response = await axios.get(`${baseURL}/process-info/${fileName}`);
    return await response;
};


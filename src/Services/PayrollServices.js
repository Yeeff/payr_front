import axios from 'axios';

const PAYROLL_API_URL = "https://maxi-api-payroll-1034515474137.us-central1.run.app";

export const processInfo = async (fileName) => {
   
    const response = await axios.get(`${PAYROLL_API_URL}/process-info/${fileName}`);
    return await response;
};


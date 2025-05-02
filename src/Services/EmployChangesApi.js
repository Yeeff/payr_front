import axios from 'axios';

const PAYROLL_CHANGES_URL = "http://localhost:4203/api/v1/form-period/available"

export const getFormsPeriods = async () => {

    const response = await axios.get(`${PAYROLL_CHANGES_URL}`);
    return response; 
};


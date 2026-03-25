import axios from 'axios';

const PAYROLL_CHANGES_URL = "https://maxi-payroll-api-1069228975395.us-central1.run.app/api/v1/form-period/available"

export const getFormsPeriods = async () => {

    const response = await axios.get(`${PAYROLL_CHANGES_URL}`);
    return response; 
};


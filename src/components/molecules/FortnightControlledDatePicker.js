import React, { useState } from 'react';
import { parseISO, format } from 'date-fns';

const FIRST_DAY_OF_MONTH = 1;
const FIFTEENTH_DAY_OF_MONTH = 15;

const FortnightControlledDatePicker = ({onDateChange, selectedDate}) => {

    return (
        <div>
            <input type="date" value={selectedDate} onChange={onDateChange} />
        </div>
    );
};

export default FortnightControlledDatePicker;
